#!/bin/bash

updateMode=("$1" -eq "--update")
useTTY=("$2" -eq "--tty")
skipNpm=("$3" -eq "--skip-npm")
containerId=$(docker ps -a | grep gg-snapshot-test  | awk '{print $1}')
tmpDirectory="/usr/src/tmp/"
projectName="webapp-boilerplate"
destinationDirectory="${tmpDirectory}${projectName}/"
if [ $useTTY ]; then
  dockerArgs="-it"
else
  dockerArgs="-i"
fi

# copy project to container (except node_modules)
touch $projectName.tar.gz
# TODO - exclude gg-webapp/node_modules too
tar -zcf $projectName.tar.gz --exclude='node_modules' --exclude='.git' --exclude="$projectName.tar.gz" ./
docker cp $projectName.tar.gz $containerId:$tmpDirectory

# cleanup existing files and expand tar
docker exec $dockerArgs $containerId mkdir -p $projectName
# TODO - exclude gg-webapp/node_modules too
docker exec $dockerArgs -w $destinationDirectory $containerId find . -maxdepth 1 ! -name node_modules -exec rm -rf {} \;
docker exec $dockerArgs $containerId tar -xzf $projectName.tar.gz --directory $projectName

# prepare project
# TODO - Skip this too if $skipNpm
docker exec $dockerArgs -w $destinationDirectory $containerId yarn gg-webapp-install
docker exec $dockerArgs -w $destinationDirectory $containerId yarn gg-webapp-transpile
docker exec $dockerArgs -w $destinationDirectory $containerId yarn add @george-gillams/webapp@file:gg-webapp/dist
if ! [ $skipNpm ]; then
  docker exec $dockerArgs -w $destinationDirectory $containerId yarn install --frozen-lockfile
fi
docker exec $dockerArgs -w $destinationDirectory $containerId yarn build:test

# run tests
if [ $updateMode ]; then
    docker exec $dockerArgs -w $destinationDirectory $containerId yarn backstopjs:test:allow-failure
else
    # should exit 1 if this fails, so if it does we set `shouldFail`
    docker exec $dockerArgs -w $destinationDirectory $containerId yarn backstopjs:test || shouldFail=true
fi

# copy any failed snapshots back to the host
docker cp $containerId:${destinationDirectory}backstop_data ./

# a previous stage of the process failed, so we'll ensure that is communicated to the host
if [ $shouldFail ]; then
  exit 1
fi

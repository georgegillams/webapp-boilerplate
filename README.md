# [https://webapp-boilerplate.georgegillams.co.uk/](https://webapp-boilerplate.georgegillams.co.uk/?utm_source=GitHub)

![Build status](https://github.com/georgegillams/webapp-boilerplate/workflows/CI/badge.svg)
![Dependencies status](https://img.shields.io/david/georgegillams/webapp-boilerplate)

This is yet another boilerplate project that you can use as the basis for your own app 😂

Features:

- [NextJS](https://nextjs.org/)
  - SSR
  - SPA
  - Link pre-fetching (LFP? Is there a TLA for that?)
- [Redux](https://redux.js.org/)
- [Reselect](https://github.com/reduxjs/reselect)
- [Redux-saga](https://redux-saga.js.org/)
- [Redux-saga-routines](https://github.com/afitiskin/redux-saga-routines)
- Custom server for an API
- Redis DB connection and helpers for reading/writing
- Security features such as rate-limiting for sensitive API routes, CORS etc
- Unit testing
- Snapshot testing (coming soon)
- Bundle size analysis
- Light and Dark mode support
- Self-hosted typeface

For more information about how the key features work, see [the documentation](https://webapp-boilerplate.georgegillams.co.uk/tree/main/docs).

## [@george-gillams/webapp](https://www.npmjs.com/package/@george-gillams/webapp)

I am in the process of migrating as much shared code as possible to a publishable [package](https://www.npmjs.com/package/@george-gillams/webapp) so that boilerplate code that must be copied is kept to a minimum. This will hopefully make it easier to adopt changes into consuming codebases without merging large PRs.

## Developing

### Prerequisites

Ensure redis is installed (`brew install redis`).

### Running locally

```
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install --frozen-lockfile
yarn dev
```

`yarn dev` will set all necessary environment variables needed to run the application.

A debugger can be attached to debug server-side code.

### Testing

If components have changed, snapshot tests may need to be updated. Backstop js visual regression tests may also need to be updated.

To update jest snapshots:

```
npx jest -u
```

To update backstopJS snapshots:

```
./scripts/docker/prepare.sh
./scripts/docker/run-tests.sh --update
./scripts/docker/clean-up.sh'
```

- The first will setup the docker image and container. If they already exist this will be super fast.
- The second will copy the project over, setup dependencies, build and run, and take screenshots. Failed screenshots will be copied back to your machine.
- The third simply stops the docker container.

Any changes resulting from these commands should be verified and checked in.

## Hosting

Both `dependencies` and `devDependencies` should be used for development, testing, CI, and building.

Only `dependencies` should be used when running the production app. To install prod dependencies only, use `yarn install --frozen-lockfile --production `.

The following environment variables should be set up

| Env var             | Reason                                 | Value                                                                     |
| ------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| GSUITE_APP_PASSWORD | To send emails from your Gmail account | The password generated to access yout G-Suite account                     |
| GSUITE_EMAIL        | To send emails from your Gmail account | Your G-Suite email address                                                |
| REDIS_URL           | To access the redis database.          | If no URL is provided, the server will connect to a local redis instance. |
| SECRET_API_KEY      | Used to make admin API requests        | Anything secret and impossible to guess                                   |

### Hosting on Heroku

To host this on Heroku, you will need to add the [Heroku-redis Add-on](https://devcenter.heroku.com/articles/heroku-redis). Doing so will create a the REDIS_URL environment variable required to connect to the DB.

## Contributing

Contributions are welcome. Please fork and submit a PR if you want to add or change a feature.

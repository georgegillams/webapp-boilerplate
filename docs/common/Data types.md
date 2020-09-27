# Common data types

## Shared

Every data type has the following properties:

| name                 | type   | source | description |
| -------------------- | ------ | ------ | ----------- |
| id                   | string | stored |             |
| timestamp            | number | stored |             |
| lastUpdatedTimestamp | number | stored |             |

Every data type can also have following properties:

| name        | type   | source | description           |
| ----------- | ------ | ------ | --------------------- |
| requestedId | string | stored |                       |
| authorId    | string | stored | the id of the creator |
| deleted     | bool   | stored |                       |

## User

| name             | type    | source | description |
| ---------------- | ------- | ------ | ----------- |
| name             | string  | stored |             |
| uname            | string  | stored |             |
| email            | string  | stored |             |
| admin            | boolean | stored |             |
| emailFingerprint | string  | stored |             |
| password         | string  | stored | unused      |

## Analytic

| name            | type   | source | description |
| --------------- | ------ | ------ | ----------- |
| url             | string | stored |             |
| browser         | string | stored |             |
| browserVersion  | string | stored |             |
| os              | string | stored |             |
| ipAddressPrefix | string | stored |             |

## Email

| name    | type   | source | description |
| ------- | ------ | ------ | ----------- |
| from    | string | stored |             |
| to      | string | stored |             |
| subject | string | stored |             |
| text    | string | stored |             |
| html    | string | stored |             |

## Session

| name                       | type   | source | description |
| -------------------------- | ------ | ------ | ----------- |
| sessionKey                 | string | stored |             |
| userId                     | string | stored |             |
| userAuthenticatedTimestamp | number | stored |             |

## Email verification

| name   | type   | source | description |
| ------ | ------ | ------ | ----------- |
| key    | string | stored |             |
| userId | string | stored |             |
| expiry | number | stored |             |

## Magic Link

| name   | type   | source | description |
| ------ | ------ | ------ | ----------- |
| key    | string | stored |             |
| userId | string | stored |             |
| expiry | number | stored |             |

## Notification

| name    | type                     | source | description |
| ------- | ------------------------ | ------ | ----------- |
| type    | 'success'/'warn'/'error' | stored |             |
| message | string                   | stored |             |

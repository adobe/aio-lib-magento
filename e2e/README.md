# E2E Tests

## Requirements

To run the e2e test you'll need these env variables set:
  1. `MagentoCoreAPI_TENANT_ID`
  2. `MagentoCoreAPI_API_KEY`
  3. `MagentoCoreAPI_ACCESS_TOKEN`

## Run

`npm run e2e`

## Test overview

The tests cover:

1. Malformed tenant id, api key or access token
2. `read` APIs

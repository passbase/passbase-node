![banner](https://passbase-sdk-banner.netlify.app/node.png)

# Passbase Node SDK ![ci](https://github.com/passbase/passbase-node/workflows/ci/badge.svg)

Welcome to the Passbase Verifications API docs. This documentation will help you understand our models and the Verification API with its endpoints. Based on this you can build your own system (i.e. verification) and hook it up to Passbase.

This package is a client meant to be used on the server-side to communicate with Passbase servers.
You can find more information here: https://docs.passbase.com/server/api

Example how to use the SDK

```js
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");

async function main() {
  const apiKey = "[redacted]";

  const config = new PassbaseConfiguration({
    apiKey,
    format: ResponseFormats.Json,
  });
  const client = new PassbaseClient(config);

  const settings = await client.getSettings();

  console.log(JSON.stringify(settings, null, 4));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.passbase.com/verification/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VerificationApi.IdentityApi* | [**getIdentityById**](docs/IdentityApi.md#getIdentityById) | **GET** /identities/{id} | Get identity
*VerificationApi.IdentityApi* | [**getIdentityResourceById**](docs/IdentityApi.md#getIdentityResourceById) | **GET** /identity/{id}/resources/{resource_id} | Get resource
*VerificationApi.IdentityApi* | [**getIdentityResourceFileById**](docs/IdentityApi.md#getIdentityResourceFileById) | **GET** /identity/{id}/resources/{resource_id}/resource_files/{resource_file_id} | Get resource file
*VerificationApi.IdentityApi* | [**listIdentities**](docs/IdentityApi.md#listIdentities) | **GET** /identities | List identities
*VerificationApi.IdentityApi* | [**listIdentityResources**](docs/IdentityApi.md#listIdentityResources) | **GET** /identity/{id}/resources | List resources
*VerificationApi.ProjectApi* | [**getSettings**](docs/ProjectApi.md#getSettings) | **GET** /settings | Get project settings


## Documentation for Models

 - [VerificationApi.Cursor](docs/Cursor.md)
 - [VerificationApi.Identity](docs/Identity.md)
 - [VerificationApi.IdentityOwner](docs/IdentityOwner.md)
 - [VerificationApi.IdentityResource](docs/IdentityResource.md)
 - [VerificationApi.PaginatedIdentities](docs/PaginatedIdentities.md)
 - [VerificationApi.PaginatedResources](docs/PaginatedResources.md)
 - [VerificationApi.ProjectSettings](docs/ProjectSettings.md)
 - [VerificationApi.ProjectSettingsCustomizations](docs/ProjectSettingsCustomizations.md)
 - [VerificationApi.ProjectSettingsVerificationSteps](docs/ProjectSettingsVerificationSteps.md)
 - [VerificationApi.Resource](docs/Resource.md)
 - [VerificationApi.ResourceFile](docs/ResourceFile.md)
 - [VerificationApi.ResourceInput](docs/ResourceInput.md)
 - [VerificationApi.User](docs/User.md)
 - [VerificationApi.WatchlistResponse](docs/WatchlistResponse.md)


## Documentation for Authorization



### IdentityAccessToken

- **Type**: Bearer authentication (JWT)



### PublishableApiKey


- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header



### SecretApiKey


- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header


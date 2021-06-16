# VerificationApi.IdentityApi

All URIs are relative to *https://api.passbase.com/verification/v2*

| Method                                                                        | HTTP request                                                                     | Description       |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------- |
| [**getIdentityById**](IdentityApi.md#getIdentityById)                         | **GET** /identities/{id}                                                         | Get identity      |
| [**getIdentityResourceById**](IdentityApi.md#getIdentityResourceById)         | **GET** /identity/{id}/resources/{resource_id}                                   | Get resource      |
| [**getIdentityResourceFileById**](IdentityApi.md#getIdentityResourceFileById) | **GET** /identity/{id}/resources/{resource_id}/resource_files/{resource_file_id} | Get resource file |
| [**listIdentities**](IdentityApi.md#listIdentities)                           | **GET** /identities                                                              | List identities   |
| [**listIdentityResources**](IdentityApi.md#listIdentityResources)             | **GET** /identity/{id}/resources                                                 | List resources    |

## getIdentityById

> Identity getIdentityById(id)

Get identity

Retrieve an identity by providing the identity ID.

### Example

```javascript
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");
const apiKey = "[redacted]";
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});
const client = new PassbaseClient(config);
let id = null; // String | Unique ID of the identity to return
client.getIdentityById(id).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  },
);
```

### Parameters

| Name   | Type              | Description                         | Notes |
| ------ | ----------------- | ----------------------------------- | ----- |
| **id** | [**String**](.md) | Unique ID of the identity to return |

### Return type

[**Identity**](Identity.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getIdentityResourceById

> Resource getIdentityResourceById(id, resourceId)

Get resource

Get a resource attached to an identity by providing the resource ID.

### Example

```javascript
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");
const apiKey = "[redacted]";
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});
const client = new PassbaseClient(config);
let id = "id_example"; // String | Identity id
let resourceId = "resourceId_example"; // String | Resource id
client.getIdentityResourceById(id, resourceId).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  },
);
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **id**         | **String** | Identity id |
| **resourceId** | **String** | Resource id |

### Return type

[**Resource**](Resource.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getIdentityResourceFileById

> Resource getIdentityResourceFileById(id, resourceId)

Get resource

Get a resource attached to an identity by providing the resource ID.

### Example

```javascript
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");
const apiKey = "[redacted]";
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});
const client = new PassbaseClient(config);
let id = "id_example"; // String | Identity id
let resourceId = "resourceId_example"; // String | Resource id
let resourceFileId = "resourceFileId_example"; // String | ResourceFile id
client.getIdentityResourceFileById(id, resourceId, resourcefileId).then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type       | Description      | Notes |
| ------------------ | ---------- | ---------------- | ----- |
| **id**             | **String** | Identity id      |
| **resourceId**     | **String** | Resource id      |
| **resourceFileId** | **String** | Resource file id |

### Return type

[**ResourceFile**](ResourceFile.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listIdentities

> PaginatedIdentities listIdentities(opts)

List identities

List all the identities retrievable by the provided API Secret Key.

### Example

```javascript
import VerificationApi from 'verification_api';
const apiKey = "[redacted]";
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});
const client = new PassbaseClient(config);
let opts = {
  'limit': 100, // Number |
  'cursor': aWQ6NDA3MQ%3D%3D // String |
};
client.listIdentities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name       | Type       | Description | Notes      |
| ---------- | ---------- | ----------- | ---------- |
| **limit**  | **Number** |             | [optional] |
| **cursor** | **String** |             | [optional] |

### Return type

[**PaginatedIdentities**](PaginatedIdentities.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listIdentityResources

> PaginatedResources listIdentityResources(id, opts)

List resources

List resources attached to an identity by providing the identity ID.

### Example

```javascript
const {
  PassbaseClient,
  PassbaseConfiguration,
  ResponseFormats,
} = require("@passbase/node");
const apiKey = "[redacted]";
const config = new PassbaseConfiguration({
  apiKey,
  format: ResponseFormats.Json,
});
const client = new PassbaseClient(config);
let id = "id_example"; // String | Identity id
let opts = {
  'limit': 100, // Number |
  'cursor': aWQ6NDA3MQ%3D%3D // String |
};
client.listIdentityResources(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name       | Type       | Description | Notes      |
| ---------- | ---------- | ----------- | ---------- |
| **id**     | **String** | Identity id |
| **limit**  | **Number** |             | [optional] |
| **cursor** | **String** |             | [optional] |

### Return type

[**PaginatedResources**](PaginatedResources.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

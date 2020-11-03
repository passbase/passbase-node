# VerificationApi.ProjectApi

All URIs are relative to *https://api.passbase.com/verification/v1*

| Method                                       | HTTP request      | Description          |
| -------------------------------------------- | ----------------- | -------------------- |
| [**getSettings**](ProjectApi.md#getSettings) | **GET** /settings | Get project settings |

## getSettings

> ProjectSettings getSettings()

Get project settings

Get project settings

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
client.getSettings().then(
  data => {
    console.log("API called successfully. Returned data: " + data);
  },
  error => {
    console.error(error);
  },
);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProjectSettings**](ProjectSettings.md)

### Authorization

[SecretApiKey](../README.md#SecretApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

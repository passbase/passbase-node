# VerificationApi.ProjectSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the project | [optional] 
**slug** | **String** | Slugs are meant to be a way to verify people just with the link | [optional] 
**environment** | **String** |  | [optional] 
**organization** | **String** | Name of the organization that owns this project | [optional] 
**customizations** | [**ProjectSettingsCustomizations**](ProjectSettingsCustomizations.md) |  | [optional] 
**verificationSteps** | [**[ProjectSettingsVerificationSteps]**](ProjectSettingsVerificationSteps.md) | List of the steps through which the user must go through to complete their verification  | [optional] 



## Enum: EnvironmentEnum


* `sandbox` (value: `"sandbox"`)

* `production` (value: `"production"`)





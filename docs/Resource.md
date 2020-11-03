# VerificationApi.Resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID representing a resource | [optional] 
**status** | **String** | Current state of the resource in Passbase&#39;s systems | [optional] 
**created** | **Number** | Unix-timestamp of when the resource was created | [optional] 
**updated** | **Number** | Unix-timestamp of when the resource was updated | [optional] 
**type** | **String** | All resource types that passbase supports | [optional] 
**resourceFiles** | **[Object]** |  | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `processing` (value: `"processing"`)

* `processed` (value: `"processed"`)





# VerificationApi.Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the identity | [optional] 
**status** | **String** | Current state of the identity in Passbase&#39;s systems | [optional] 
**owner** | [**IdentityOwner**](.md) |  | [optional] 
**score** | **Number** | Float between 0 and 1 representing our confidence that this identity is valid. 0 meaning we couldn&#39;t verify any of the information provided with accuracy, and 1 absolute confidence. | [optional] 
**created** | **Number** | Unix-timestamp of when the identity was created | [optional] 
**updated** | **Number** | Unix-timestamp of when the identity was updated | [optional] 
**resources** | [**[IdentityResource]**](IdentityResource.md) | resources attached to a verification | [optional] 
**watchlist** | [**WatchlistResponse**](.md) |  | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `processing` (value: `"processing"`)

* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `declined` (value: `"declined"`)





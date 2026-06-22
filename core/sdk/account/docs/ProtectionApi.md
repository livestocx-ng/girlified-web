# ProtectionApi

All URIs are relative to *https://infra-girlified.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountControllerUpdateSocialHandles**](#accountcontrollerupdatesocialhandles) | **PATCH** /v1/account/me/update-social-handles | |

# **accountControllerUpdateSocialHandles**
> AccountInfo accountControllerUpdateSocialHandles(updateSocialHandlesDTO)


### Example

```typescript
import {
    ProtectionApi,
    Configuration,
    UpdateSocialHandlesDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new ProtectionApi(configuration);

let updateSocialHandlesDTO: UpdateSocialHandlesDTO; //

const { status, data } = await apiInstance.accountControllerUpdateSocialHandles(
    updateSocialHandlesDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSocialHandlesDTO** | **UpdateSocialHandlesDTO**|  | |


### Return type

**AccountInfo**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


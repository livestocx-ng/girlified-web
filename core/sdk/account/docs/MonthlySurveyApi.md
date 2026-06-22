# MonthlySurveyApi

All URIs are relative to *https://infra-girlified.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountControllerFetchMonthlySurveyHistory**](#accountcontrollerfetchmonthlysurveyhistory) | **GET** /v1/account/me/history | |
|[**accountControllerRegisterMonthlySurvey**](#accountcontrollerregistermonthlysurvey) | **POST** /v1/account/me/new | |

# **accountControllerFetchMonthlySurveyHistory**
> MonthlySurveyHistoryResponse accountControllerFetchMonthlySurveyHistory()


### Example

```typescript
import {
    MonthlySurveyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MonthlySurveyApi(configuration);

let page: number; //Page (default to undefined)
let pageSize: number; //Page size (default to undefined)

const { status, data } = await apiInstance.accountControllerFetchMonthlySurveyHistory(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page | defaults to undefined|
| **pageSize** | [**number**] | Page size | defaults to undefined|


### Return type

**MonthlySurveyHistoryResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountControllerRegisterMonthlySurvey**
> MonthlySurveyInfo accountControllerRegisterMonthlySurvey(registerMonthlySurveyDTO)


### Example

```typescript
import {
    MonthlySurveyApi,
    Configuration,
    RegisterMonthlySurveyDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new MonthlySurveyApi(configuration);

let registerMonthlySurveyDTO: RegisterMonthlySurveyDTO; //

const { status, data } = await apiInstance.accountControllerRegisterMonthlySurvey(
    registerMonthlySurveyDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerMonthlySurveyDTO** | **RegisterMonthlySurveyDTO**|  | |


### Return type

**MonthlySurveyInfo**

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


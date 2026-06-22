# OrderApi

All URIs are relative to *https://infra-girlified.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**orderControllerFetchSanitaryPadOrderHistory**](#ordercontrollerfetchsanitarypadorderhistory) | **GET** /v1/account/order/sanitary-pad/history | |
|[**orderControllerOrderSanitaryPad**](#ordercontrollerordersanitarypad) | **POST** /v1/account/order/sanitary-pad/new | |

# **orderControllerFetchSanitaryPadOrderHistory**
> OrderHistoryResponse orderControllerFetchSanitaryPadOrderHistory()


### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let page: number; //Page (default to undefined)
let pageSize: number; //Page size (default to undefined)

const { status, data } = await apiInstance.orderControllerFetchSanitaryPadOrderHistory(
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

**OrderHistoryResponse**

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

# **orderControllerOrderSanitaryPad**
> OrderInfo orderControllerOrderSanitaryPad(orderSanitaryPadDTO)


### Example

```typescript
import {
    OrderApi,
    Configuration,
    OrderSanitaryPadDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderSanitaryPadDTO: OrderSanitaryPadDTO; //

const { status, data } = await apiInstance.orderControllerOrderSanitaryPad(
    orderSanitaryPadDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderSanitaryPadDTO** | **OrderSanitaryPadDTO**|  | |


### Return type

**OrderInfo**

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


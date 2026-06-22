# OrderHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**Array&lt;OrderInfo&gt;**](OrderInfo.md) | Order history. | [default to undefined]
**totalPages** | **number** | Total number of pages. | [default to undefined]
**hasNext** | **boolean** | Has next page. | [default to undefined]

## Example

```typescript
import { OrderHistoryResponse } from './api';

const instance: OrderHistoryResponse = {
    orders,
    totalPages,
    hasNext,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

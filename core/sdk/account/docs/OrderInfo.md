# OrderInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order ID (Auto generated). | [default to undefined]
**orderId** | **string** | Order ID (Custom generated). | [default to undefined]
**quantity** | **number** | Order quantity e.g 1 | [default to undefined]
**deliveryMethod** | **string** | Order delivery method e.g PickUp. | [default to undefined]
**isCompleted** | **boolean** | Order completed status e.g false. | [default to undefined]
**buildingNumber** | **string** | Order building number e.g 123. | [default to undefined]
**address** | **string** | Order address e.g 123 Main St, Anytown, USA. | [default to undefined]
**nearestLandmark** | **string** | Order nearest landmark e.g 123 Main St, Anytown, USA. | [default to undefined]

## Example

```typescript
import { OrderInfo } from './api';

const instance: OrderInfo = {
    id,
    orderId,
    quantity,
    deliveryMethod,
    isCompleted,
    buildingNumber,
    address,
    nearestLandmark,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

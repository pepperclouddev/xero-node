"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionItem = void 0;
class SubscriptionItem {
    static getAttributeTypeMap() {
        return SubscriptionItem.attributeTypeMap;
    }
}
exports.SubscriptionItem = SubscriptionItem;
SubscriptionItem.discriminator = undefined;
SubscriptionItem.attributeTypeMap = [
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Price"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "Product"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "SubscriptionItem.StatusEnum"
    },
    {
        "name": "testMode",
        "baseName": "testMode",
        "type": "boolean"
    }
];
(function (SubscriptionItem) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        StatusEnum[StatusEnum["PENDINGACTIVATION"] = 'PENDING_ACTIVATION'] = "PENDINGACTIVATION";
    })(StatusEnum = SubscriptionItem.StatusEnum || (SubscriptionItem.StatusEnum = {}));
})(SubscriptionItem || (exports.SubscriptionItem = SubscriptionItem = {}));
//# sourceMappingURL=subscriptionItem.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}
exports.Subscription = Subscription;
Subscription.discriminator = undefined;
Subscription.attributeTypeMap = [
    {
        "name": "currentPeriodEnd",
        "baseName": "currentPeriodEnd",
        "type": "Date"
    },
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
        "name": "organisationId",
        "baseName": "organisationId",
        "type": "string"
    },
    {
        "name": "plans",
        "baseName": "plans",
        "type": "Array<Plan>"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Subscription.StatusEnum"
    },
    {
        "name": "testMode",
        "baseName": "testMode",
        "type": "boolean"
    }
];
(function (Subscription) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        StatusEnum[StatusEnum["PASTDUE"] = 'PAST_DUE'] = "PASTDUE";
    })(StatusEnum = Subscription.StatusEnum || (Subscription.StatusEnum = {}));
})(Subscription || (exports.Subscription = Subscription = {}));
//# sourceMappingURL=subscription.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
class Plan {
    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }
}
exports.Plan = Plan;
Plan.discriminator = undefined;
Plan.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Plan.StatusEnum"
    },
    {
        "name": "subscriptionItems",
        "baseName": "subscriptionItems",
        "type": "Array<SubscriptionItem>"
    }
];
(function (Plan) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        StatusEnum[StatusEnum["PENDINGACTIVATION"] = 'PENDING_ACTIVATION'] = "PENDINGACTIVATION";
    })(StatusEnum = Plan.StatusEnum || (Plan.StatusEnum = {}));
})(Plan || (exports.Plan = Plan = {}));
//# sourceMappingURL=plan.js.map
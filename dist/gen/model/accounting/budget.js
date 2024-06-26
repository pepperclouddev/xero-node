"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
class Budget {
    static getAttributeTypeMap() {
        return Budget.attributeTypeMap;
    }
}
exports.Budget = Budget;
Budget.discriminator = undefined;
Budget.attributeTypeMap = [
    {
        "name": "budgetID",
        "baseName": "BudgetID",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "Type",
        "type": "Budget.TypeEnum"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "budgetLines",
        "baseName": "BudgetLines",
        "type": "Array<BudgetLine>"
    },
    {
        "name": "tracking",
        "baseName": "Tracking",
        "type": "Array<TrackingCategory>"
    }
];
(function (Budget) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["OVERALL"] = 'OVERALL'] = "OVERALL";
        TypeEnum[TypeEnum["TRACKING"] = 'TRACKING'] = "TRACKING";
    })(TypeEnum = Budget.TypeEnum || (Budget.TypeEnum = {}));
})(Budget || (exports.Budget = Budget = {}));
//# sourceMappingURL=budget.js.map
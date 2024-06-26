"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryAndWage = void 0;
class SalaryAndWage {
    static getAttributeTypeMap() {
        return SalaryAndWage.attributeTypeMap;
    }
}
exports.SalaryAndWage = SalaryAndWage;
SalaryAndWage.discriminator = undefined;
SalaryAndWage.attributeTypeMap = [
    {
        "name": "salaryAndWagesID",
        "baseName": "salaryAndWagesID",
        "type": "string"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "numberOfUnitsPerWeek",
        "baseName": "numberOfUnitsPerWeek",
        "type": "number"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnitsPerDay",
        "baseName": "numberOfUnitsPerDay",
        "type": "number"
    },
    {
        "name": "daysPerWeek",
        "baseName": "daysPerWeek",
        "type": "number"
    },
    {
        "name": "effectiveFrom",
        "baseName": "effectiveFrom",
        "type": "string"
    },
    {
        "name": "annualSalary",
        "baseName": "annualSalary",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "SalaryAndWage.StatusEnum"
    },
    {
        "name": "paymentType",
        "baseName": "paymentType",
        "type": "SalaryAndWage.PaymentTypeEnum"
    }
];
(function (SalaryAndWage) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'Active'] = "Active";
        StatusEnum[StatusEnum["Pending"] = 'Pending'] = "Pending";
        StatusEnum[StatusEnum["History"] = 'History'] = "History";
    })(StatusEnum = SalaryAndWage.StatusEnum || (SalaryAndWage.StatusEnum = {}));
    let PaymentTypeEnum;
    (function (PaymentTypeEnum) {
        PaymentTypeEnum[PaymentTypeEnum["Salary"] = 'Salary'] = "Salary";
        PaymentTypeEnum[PaymentTypeEnum["Hourly"] = 'Hourly'] = "Hourly";
    })(PaymentTypeEnum = SalaryAndWage.PaymentTypeEnum || (SalaryAndWage.PaymentTypeEnum = {}));
})(SalaryAndWage || (exports.SalaryAndWage = SalaryAndWage = {}));
//# sourceMappingURL=salaryAndWage.js.map
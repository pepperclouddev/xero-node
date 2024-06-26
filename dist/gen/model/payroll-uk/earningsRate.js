"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsRate = void 0;
class EarningsRate {
    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}
exports.EarningsRate = EarningsRate;
EarningsRate.discriminator = undefined;
EarningsRate.attributeTypeMap = [
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "earningsType",
        "baseName": "earningsType",
        "type": "EarningsRate.EarningsTypeEnum"
    },
    {
        "name": "rateType",
        "baseName": "rateType",
        "type": "EarningsRate.RateTypeEnum"
    },
    {
        "name": "typeOfUnits",
        "baseName": "typeOfUnits",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    },
    {
        "name": "expenseAccountID",
        "baseName": "expenseAccountID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "multipleOfOrdinaryEarningsRate",
        "baseName": "multipleOfOrdinaryEarningsRate",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    }
];
(function (EarningsRate) {
    let EarningsTypeEnum;
    (function (EarningsTypeEnum) {
        EarningsTypeEnum[EarningsTypeEnum["Allowance"] = 'Allowance'] = "Allowance";
        EarningsTypeEnum[EarningsTypeEnum["BackPay"] = 'BackPay'] = "BackPay";
        EarningsTypeEnum[EarningsTypeEnum["Bonus"] = 'Bonus'] = "Bonus";
        EarningsTypeEnum[EarningsTypeEnum["Commission"] = 'Commission'] = "Commission";
        EarningsTypeEnum[EarningsTypeEnum["LumpSum"] = 'LumpSum'] = "LumpSum";
        EarningsTypeEnum[EarningsTypeEnum["OtherEarnings"] = 'OtherEarnings'] = "OtherEarnings";
        EarningsTypeEnum[EarningsTypeEnum["OvertimeEarnings"] = 'OvertimeEarnings'] = "OvertimeEarnings";
        EarningsTypeEnum[EarningsTypeEnum["RegularEarnings"] = 'RegularEarnings'] = "RegularEarnings";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryAdoptionPay"] = 'StatutoryAdoptionPay'] = "StatutoryAdoptionPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryAdoptionPayNonPensionable"] = 'StatutoryAdoptionPayNonPensionable'] = "StatutoryAdoptionPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryBereavementPay"] = 'StatutoryBereavementPay'] = "StatutoryBereavementPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryMaternityPay"] = 'StatutoryMaternityPay'] = "StatutoryMaternityPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryMaternityPayNonPensionable"] = 'StatutoryMaternityPayNonPensionable'] = "StatutoryMaternityPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryPaternityPay"] = 'StatutoryPaternityPay'] = "StatutoryPaternityPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryPaternityPayNonPensionable"] = 'StatutoryPaternityPayNonPensionable'] = "StatutoryPaternityPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["StatutoryParentalBereavementPayNonPensionable"] = 'StatutoryParentalBereavementPayNonPensionable'] = "StatutoryParentalBereavementPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["StatutorySharedParentalPay"] = 'StatutorySharedParentalPay'] = "StatutorySharedParentalPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutorySharedParentalPayNonPensionable"] = 'StatutorySharedParentalPayNonPensionable'] = "StatutorySharedParentalPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["StatutorySickPay"] = 'StatutorySickPay'] = "StatutorySickPay";
        EarningsTypeEnum[EarningsTypeEnum["StatutorySickPayNonPensionable"] = 'StatutorySickPayNonPensionable'] = "StatutorySickPayNonPensionable";
        EarningsTypeEnum[EarningsTypeEnum["TipsNonDirect"] = 'TipsNonDirect'] = "TipsNonDirect";
        EarningsTypeEnum[EarningsTypeEnum["TipsDirect"] = 'TipsDirect'] = "TipsDirect";
        EarningsTypeEnum[EarningsTypeEnum["TerminationPay"] = 'TerminationPay'] = "TerminationPay";
    })(EarningsTypeEnum = EarningsRate.EarningsTypeEnum || (EarningsRate.EarningsTypeEnum = {}));
    let RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["RatePerUnit"] = 'RatePerUnit'] = "RatePerUnit";
        RateTypeEnum[RateTypeEnum["MultipleOfOrdinaryEarningsRate"] = 'MultipleOfOrdinaryEarningsRate'] = "MultipleOfOrdinaryEarningsRate";
        RateTypeEnum[RateTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
    })(RateTypeEnum = EarningsRate.RateTypeEnum || (EarningsRate.RateTypeEnum = {}));
})(EarningsRate || (exports.EarningsRate = EarningsRate = {}));
//# sourceMappingURL=earningsRate.js.map
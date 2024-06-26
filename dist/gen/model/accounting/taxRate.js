"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRate = void 0;
class TaxRate {
    static getAttributeTypeMap() {
        return TaxRate.attributeTypeMap;
    }
}
exports.TaxRate = TaxRate;
TaxRate.discriminator = undefined;
TaxRate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "taxType",
        "baseName": "TaxType",
        "type": "string"
    },
    {
        "name": "taxComponents",
        "baseName": "TaxComponents",
        "type": "Array<TaxComponent>"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "TaxRate.StatusEnum"
    },
    {
        "name": "reportTaxType",
        "baseName": "ReportTaxType",
        "type": "TaxRate.ReportTaxTypeEnum"
    },
    {
        "name": "canApplyToAssets",
        "baseName": "CanApplyToAssets",
        "type": "boolean"
    },
    {
        "name": "canApplyToEquity",
        "baseName": "CanApplyToEquity",
        "type": "boolean"
    },
    {
        "name": "canApplyToExpenses",
        "baseName": "CanApplyToExpenses",
        "type": "boolean"
    },
    {
        "name": "canApplyToLiabilities",
        "baseName": "CanApplyToLiabilities",
        "type": "boolean"
    },
    {
        "name": "canApplyToRevenue",
        "baseName": "CanApplyToRevenue",
        "type": "boolean"
    },
    {
        "name": "displayTaxRate",
        "baseName": "DisplayTaxRate",
        "type": "number"
    },
    {
        "name": "effectiveRate",
        "baseName": "EffectiveRate",
        "type": "number"
    }
];
(function (TaxRate) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["DELETED"] = 'DELETED'] = "DELETED";
        StatusEnum[StatusEnum["ARCHIVED"] = 'ARCHIVED'] = "ARCHIVED";
        StatusEnum[StatusEnum["PENDING"] = 'PENDING'] = "PENDING";
    })(StatusEnum = TaxRate.StatusEnum || (TaxRate.StatusEnum = {}));
    let ReportTaxTypeEnum;
    (function (ReportTaxTypeEnum) {
        ReportTaxTypeEnum[ReportTaxTypeEnum["AVALARA"] = 'AVALARA'] = "AVALARA";
        ReportTaxTypeEnum[ReportTaxTypeEnum["BASEXCLUDED"] = 'BASEXCLUDED'] = "BASEXCLUDED";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPITALSALESOUTPUT"] = 'CAPITALSALESOUTPUT'] = "CAPITALSALESOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPITALEXPENSESINPUT"] = 'CAPITALEXPENSESINPUT'] = "CAPITALEXPENSESINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ECOUTPUT"] = 'ECOUTPUT'] = "ECOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ECOUTPUTSERVICES"] = 'ECOUTPUTSERVICES'] = "ECOUTPUTSERVICES";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ECINPUT"] = 'ECINPUT'] = "ECINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ECACQUISITIONS"] = 'ECACQUISITIONS'] = "ECACQUISITIONS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EXEMPTEXPENSES"] = 'EXEMPTEXPENSES'] = "EXEMPTEXPENSES";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EXEMPTINPUT"] = 'EXEMPTINPUT'] = "EXEMPTINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EXEMPTOUTPUT"] = 'EXEMPTOUTPUT'] = "EXEMPTOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["GSTONIMPORTS"] = 'GSTONIMPORTS'] = "GSTONIMPORTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["INPUT"] = 'INPUT'] = "INPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["INPUTTAXED"] = 'INPUTTAXED'] = "INPUTTAXED";
        ReportTaxTypeEnum[ReportTaxTypeEnum["MOSSSALES"] = 'MOSSSALES'] = "MOSSSALES";
        ReportTaxTypeEnum[ReportTaxTypeEnum["NONE"] = 'NONE'] = "NONE";
        ReportTaxTypeEnum[ReportTaxTypeEnum["NONEOUTPUT"] = 'NONEOUTPUT'] = "NONEOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OUTPUT"] = 'OUTPUT'] = "OUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["PURCHASESINPUT"] = 'PURCHASESINPUT'] = "PURCHASESINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SALESOUTPUT"] = 'SALESOUTPUT'] = "SALESOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EXEMPTCAPITAL"] = 'EXEMPTCAPITAL'] = "EXEMPTCAPITAL";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EXEMPTEXPORT"] = 'EXEMPTEXPORT'] = "EXEMPTEXPORT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPITALEXINPUT"] = 'CAPITALEXINPUT'] = "CAPITALEXINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["GSTONCAPIMPORTS"] = 'GSTONCAPIMPORTS'] = "GSTONCAPIMPORTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["GSTONCAPITALIMPORTS"] = 'GSTONCAPITALIMPORTS'] = "GSTONCAPITALIMPORTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["REVERSECHARGES"] = 'REVERSECHARGES'] = "REVERSECHARGES";
        ReportTaxTypeEnum[ReportTaxTypeEnum["PAYMENTS"] = 'PAYMENTS'] = "PAYMENTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["INVOICE"] = 'INVOICE'] = "INVOICE";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CASH"] = 'CASH'] = "CASH";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ACCRUAL"] = 'ACCRUAL'] = "ACCRUAL";
        ReportTaxTypeEnum[ReportTaxTypeEnum["FLATRATECASH"] = 'FLATRATECASH'] = "FLATRATECASH";
        ReportTaxTypeEnum[ReportTaxTypeEnum["FLATRATEACCRUAL"] = 'FLATRATEACCRUAL'] = "FLATRATEACCRUAL";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ACCRUALS"] = 'ACCRUALS'] = "ACCRUALS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXCA"] = 'TXCA'] = "TXCA";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SRCAS"] = 'SRCAS'] = "SRCAS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["DSOUTPUT"] = 'DSOUTPUT'] = "DSOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["BLINPUT2"] = 'BLINPUT2'] = "BLINPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["EPINPUT"] = 'EPINPUT'] = "EPINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IMINPUT2"] = 'IMINPUT2'] = "IMINPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["MEINPUT"] = 'MEINPUT'] = "MEINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IGDSINPUT2"] = 'IGDSINPUT2'] = "IGDSINPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ESN33OUTPUT"] = 'ESN33OUTPUT'] = "ESN33OUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OPINPUT"] = 'OPINPUT'] = "OPINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OSOUTPUT"] = 'OSOUTPUT'] = "OSOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXN33INPUT"] = 'TXN33INPUT'] = "TXN33INPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXESSINPUT"] = 'TXESSINPUT'] = "TXESSINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXREINPUT"] = 'TXREINPUT'] = "TXREINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXPETINPUT"] = 'TXPETINPUT'] = "TXPETINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["NRINPUT"] = 'NRINPUT'] = "NRINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ES33OUTPUT"] = 'ES33OUTPUT'] = "ES33OUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZERORATEDINPUT"] = 'ZERORATEDINPUT'] = "ZERORATEDINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZERORATEDOUTPUT"] = 'ZERORATEDOUTPUT'] = "ZERORATEDOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["DRCHARGESUPPLY"] = 'DRCHARGESUPPLY'] = "DRCHARGESUPPLY";
        ReportTaxTypeEnum[ReportTaxTypeEnum["DRCHARGE"] = 'DRCHARGE'] = "DRCHARGE";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPINPUT"] = 'CAPINPUT'] = "CAPINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPIMPORTS"] = 'CAPIMPORTS'] = "CAPIMPORTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IMINPUT"] = 'IMINPUT'] = "IMINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["INPUT2"] = 'INPUT2'] = "INPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CIUINPUT"] = 'CIUINPUT'] = "CIUINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SRINPUT"] = 'SRINPUT'] = "SRINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OUTPUT2"] = 'OUTPUT2'] = "OUTPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SROUTPUT"] = 'SROUTPUT'] = "SROUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPOUTPUT"] = 'CAPOUTPUT'] = "CAPOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SROUTPUT2"] = 'SROUTPUT2'] = "SROUTPUT2";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CIUOUTPUT"] = 'CIUOUTPUT'] = "CIUOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZROUTPUT"] = 'ZROUTPUT'] = "ZROUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZREXPORT"] = 'ZREXPORT'] = "ZREXPORT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ACC28PLUS"] = 'ACC28PLUS'] = "ACC28PLUS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ACCUPTO28"] = 'ACCUPTO28'] = "ACCUPTO28";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OTHEROUTPUT"] = 'OTHEROUTPUT'] = "OTHEROUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SHOUTPUT"] = 'SHOUTPUT'] = "SHOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZRINPUT"] = 'ZRINPUT'] = "ZRINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["BADDEBT"] = 'BADDEBT'] = "BADDEBT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["OTHERINPUT"] = 'OTHERINPUT'] = "OTHERINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["BADDEBTRELIEF"] = 'BADDEBTRELIEF'] = "BADDEBTRELIEF";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IGDSINPUT3"] = 'IGDSINPUT3'] = "IGDSINPUT3";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SROVR"] = 'SROVR'] = "SROVR";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TOURISTREFUND"] = 'TOURISTREFUND'] = "TOURISTREFUND";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXRCN33"] = 'TXRCN33'] = "TXRCN33";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXRCRE"] = 'TXRCRE'] = "TXRCRE";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXRCESS"] = 'TXRCESS'] = "TXRCESS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["TXRCTS"] = 'TXRCTS'] = "TXRCTS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPEXINPUT"] = 'CAPEXINPUT'] = "CAPEXINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["UNDEFINED"] = 'UNDEFINED'] = "UNDEFINED";
        ReportTaxTypeEnum[ReportTaxTypeEnum["CAPEXOUTPUT"] = 'CAPEXOUTPUT'] = "CAPEXOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["ZEROEXPOUTPUT"] = 'ZEROEXPOUTPUT'] = "ZEROEXPOUTPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["GOODSIMPORT"] = 'GOODSIMPORT'] = "GOODSIMPORT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["NONEINPUT"] = 'NONEINPUT'] = "NONEINPUT";
        ReportTaxTypeEnum[ReportTaxTypeEnum["NOTREPORTED"] = 'NOTREPORTED'] = "NOTREPORTED";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SROVRRS"] = 'SROVRRS'] = "SROVRRS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SROVRLVG"] = 'SROVRLVG'] = "SROVRLVG";
        ReportTaxTypeEnum[ReportTaxTypeEnum["SRLVG"] = 'SRLVG'] = "SRLVG";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IM"] = 'IM'] = "IM";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IMESS"] = 'IMESS'] = "IMESS";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IMN33"] = 'IMN33'] = "IMN33";
        ReportTaxTypeEnum[ReportTaxTypeEnum["IMRE"] = 'IMRE'] = "IMRE";
        ReportTaxTypeEnum[ReportTaxTypeEnum["BADDEBTRECOVERY"] = 'BADDEBTRECOVERY'] = "BADDEBTRECOVERY";
        ReportTaxTypeEnum[ReportTaxTypeEnum["USSALESTAX"] = 'USSALESTAX'] = "USSALESTAX";
    })(ReportTaxTypeEnum = TaxRate.ReportTaxTypeEnum || (TaxRate.ReportTaxTypeEnum = {}));
})(TaxRate || (exports.TaxRate = TaxRate = {}));
//# sourceMappingURL=taxRate.js.map
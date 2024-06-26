"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPayment = void 0;
class BatchPayment {
    static getAttributeTypeMap() {
        return BatchPayment.attributeTypeMap;
    }
}
exports.BatchPayment = BatchPayment;
BatchPayment.discriminator = undefined;
BatchPayment.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "Account",
        "type": "Account"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    },
    {
        "name": "particulars",
        "baseName": "Particulars",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "details",
        "baseName": "Details",
        "type": "string"
    },
    {
        "name": "narrative",
        "baseName": "Narrative",
        "type": "string"
    },
    {
        "name": "batchPaymentID",
        "baseName": "BatchPaymentID",
        "type": "string"
    },
    {
        "name": "dateString",
        "baseName": "DateString",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "Date",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "payments",
        "baseName": "Payments",
        "type": "Array<Payment>"
    },
    {
        "name": "type",
        "baseName": "Type",
        "type": "BatchPayment.TypeEnum"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "BatchPayment.StatusEnum"
    },
    {
        "name": "totalAmount",
        "baseName": "TotalAmount",
        "type": "number"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "isReconciled",
        "baseName": "IsReconciled",
        "type": "boolean"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
(function (BatchPayment) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PAYBATCH"] = 'PAYBATCH'] = "PAYBATCH";
        TypeEnum[TypeEnum["RECBATCH"] = 'RECBATCH'] = "RECBATCH";
    })(TypeEnum = BatchPayment.TypeEnum || (BatchPayment.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["AUTHORISED"] = 'AUTHORISED'] = "AUTHORISED";
        StatusEnum[StatusEnum["DELETED"] = 'DELETED'] = "DELETED";
    })(StatusEnum = BatchPayment.StatusEnum || (BatchPayment.StatusEnum = {}));
})(BatchPayment || (exports.BatchPayment = BatchPayment = {}));
//# sourceMappingURL=batchPayment.js.map
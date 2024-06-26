"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatingInvoice = void 0;
class RepeatingInvoice {
    static getAttributeTypeMap() {
        return RepeatingInvoice.attributeTypeMap;
    }
}
exports.RepeatingInvoice = RepeatingInvoice;
RepeatingInvoice.discriminator = undefined;
RepeatingInvoice.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "Type",
        "type": "RepeatingInvoice.TypeEnum"
    },
    {
        "name": "contact",
        "baseName": "Contact",
        "type": "Contact"
    },
    {
        "name": "schedule",
        "baseName": "Schedule",
        "type": "Schedule"
    },
    {
        "name": "lineItems",
        "baseName": "LineItems",
        "type": "Array<LineItem>"
    },
    {
        "name": "lineAmountTypes",
        "baseName": "LineAmountTypes",
        "type": "LineAmountTypes"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    },
    {
        "name": "brandingThemeID",
        "baseName": "BrandingThemeID",
        "type": "string"
    },
    {
        "name": "currencyCode",
        "baseName": "CurrencyCode",
        "type": "CurrencyCode"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "RepeatingInvoice.StatusEnum"
    },
    {
        "name": "subTotal",
        "baseName": "SubTotal",
        "type": "number"
    },
    {
        "name": "totalTax",
        "baseName": "TotalTax",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "Total",
        "type": "number"
    },
    {
        "name": "repeatingInvoiceID",
        "baseName": "RepeatingInvoiceID",
        "type": "string"
    },
    {
        "name": "iD",
        "baseName": "ID",
        "type": "string"
    },
    {
        "name": "hasAttachments",
        "baseName": "HasAttachments",
        "type": "boolean"
    },
    {
        "name": "attachments",
        "baseName": "Attachments",
        "type": "Array<Attachment>"
    },
    {
        "name": "approvedForSending",
        "baseName": "ApprovedForSending",
        "type": "boolean"
    },
    {
        "name": "sendCopy",
        "baseName": "SendCopy",
        "type": "boolean"
    },
    {
        "name": "markAsSent",
        "baseName": "MarkAsSent",
        "type": "boolean"
    },
    {
        "name": "includePDF",
        "baseName": "IncludePDF",
        "type": "boolean"
    }
];
(function (RepeatingInvoice) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ACCPAY"] = 'ACCPAY'] = "ACCPAY";
        TypeEnum[TypeEnum["ACCREC"] = 'ACCREC'] = "ACCREC";
    })(TypeEnum = RepeatingInvoice.TypeEnum || (RepeatingInvoice.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["DRAFT"] = 'DRAFT'] = "DRAFT";
        StatusEnum[StatusEnum["AUTHORISED"] = 'AUTHORISED'] = "AUTHORISED";
        StatusEnum[StatusEnum["DELETED"] = 'DELETED'] = "DELETED";
    })(StatusEnum = RepeatingInvoice.StatusEnum || (RepeatingInvoice.StatusEnum = {}));
})(RepeatingInvoice || (exports.RepeatingInvoice = RepeatingInvoice = {}));
//# sourceMappingURL=repeatingInvoice.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }
}
exports.Payment = Payment;
Payment.discriminator = undefined;
Payment.attributeTypeMap = [
    {
        "name": "invoice",
        "baseName": "Invoice",
        "type": "Invoice"
    },
    {
        "name": "creditNote",
        "baseName": "CreditNote",
        "type": "CreditNote"
    },
    {
        "name": "prepayment",
        "baseName": "Prepayment",
        "type": "Prepayment"
    },
    {
        "name": "overpayment",
        "baseName": "Overpayment",
        "type": "Overpayment"
    },
    {
        "name": "invoiceNumber",
        "baseName": "InvoiceNumber",
        "type": "string"
    },
    {
        "name": "creditNoteNumber",
        "baseName": "CreditNoteNumber",
        "type": "string"
    },
    {
        "name": "batchPayment",
        "baseName": "BatchPayment",
        "type": "BatchPayment"
    },
    {
        "name": "account",
        "baseName": "Account",
        "type": "Account"
    },
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "Date",
        "type": "string"
    },
    {
        "name": "currencyRate",
        "baseName": "CurrencyRate",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "bankAmount",
        "baseName": "BankAmount",
        "type": "number"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    },
    {
        "name": "isReconciled",
        "baseName": "IsReconciled",
        "type": "boolean"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "Payment.StatusEnum"
    },
    {
        "name": "paymentType",
        "baseName": "PaymentType",
        "type": "Payment.PaymentTypeEnum"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "paymentID",
        "baseName": "PaymentID",
        "type": "string"
    },
    {
        "name": "batchPaymentID",
        "baseName": "BatchPaymentID",
        "type": "string"
    },
    {
        "name": "bankAccountNumber",
        "baseName": "BankAccountNumber",
        "type": "string"
    },
    {
        "name": "particulars",
        "baseName": "Particulars",
        "type": "string"
    },
    {
        "name": "details",
        "baseName": "Details",
        "type": "string"
    },
    {
        "name": "hasAccount",
        "baseName": "HasAccount",
        "type": "boolean"
    },
    {
        "name": "hasValidationErrors",
        "baseName": "HasValidationErrors",
        "type": "boolean"
    },
    {
        "name": "statusAttributeString",
        "baseName": "StatusAttributeString",
        "type": "string"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    },
    {
        "name": "warnings",
        "baseName": "Warnings",
        "type": "Array<ValidationError>"
    }
];
(function (Payment) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["AUTHORISED"] = 'AUTHORISED'] = "AUTHORISED";
        StatusEnum[StatusEnum["DELETED"] = 'DELETED'] = "DELETED";
    })(StatusEnum = Payment.StatusEnum || (Payment.StatusEnum = {}));
    let PaymentTypeEnum;
    (function (PaymentTypeEnum) {
        PaymentTypeEnum[PaymentTypeEnum["ACCRECPAYMENT"] = 'ACCRECPAYMENT'] = "ACCRECPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["ACCPAYPAYMENT"] = 'ACCPAYPAYMENT'] = "ACCPAYPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["ARCREDITPAYMENT"] = 'ARCREDITPAYMENT'] = "ARCREDITPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["APCREDITPAYMENT"] = 'APCREDITPAYMENT'] = "APCREDITPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["AROVERPAYMENTPAYMENT"] = 'AROVERPAYMENTPAYMENT'] = "AROVERPAYMENTPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["ARPREPAYMENTPAYMENT"] = 'ARPREPAYMENTPAYMENT'] = "ARPREPAYMENTPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["APPREPAYMENTPAYMENT"] = 'APPREPAYMENTPAYMENT'] = "APPREPAYMENTPAYMENT";
        PaymentTypeEnum[PaymentTypeEnum["APOVERPAYMENTPAYMENT"] = 'APOVERPAYMENTPAYMENT'] = "APOVERPAYMENTPAYMENT";
    })(PaymentTypeEnum = Payment.PaymentTypeEnum || (Payment.PaymentTypeEnum = {}));
})(Payment || (exports.Payment = Payment = {}));
//# sourceMappingURL=payment.js.map
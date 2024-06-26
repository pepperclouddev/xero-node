"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("././accountUsage"), exports);
__exportStar(require("././accountUsageResponse"), exports);
__exportStar(require("././balanceSheetAccountDetail"), exports);
__exportStar(require("././balanceSheetAccountGroup"), exports);
__exportStar(require("././balanceSheetAccountType"), exports);
__exportStar(require("././balanceSheetResponse"), exports);
__exportStar(require("././bankStatementAccountingResponse"), exports);
__exportStar(require("././bankStatementResponse"), exports);
__exportStar(require("././bankTransactionResponse"), exports);
__exportStar(require("././cashAccountResponse"), exports);
__exportStar(require("././cashBalance"), exports);
__exportStar(require("././cashValidationResponse"), exports);
__exportStar(require("././cashflowAccount"), exports);
__exportStar(require("././cashflowActivity"), exports);
__exportStar(require("././cashflowResponse"), exports);
__exportStar(require("././cashflowType"), exports);
__exportStar(require("././contactDetail"), exports);
__exportStar(require("././contactResponse"), exports);
__exportStar(require("././contactTotalDetail"), exports);
__exportStar(require("././contactTotalOther"), exports);
__exportStar(require("././creditNoteResponse"), exports);
__exportStar(require("././currentStatementResponse"), exports);
__exportStar(require("././dataSourceResponse"), exports);
__exportStar(require("././historyRecordResponse"), exports);
__exportStar(require("././incomeByContactResponse"), exports);
__exportStar(require("././invoiceResponse"), exports);
__exportStar(require("././lineItemResponse"), exports);
__exportStar(require("././lockHistoryModel"), exports);
__exportStar(require("././lockHistoryResponse"), exports);
__exportStar(require("././manualJournalTotal"), exports);
__exportStar(require("././overpaymentResponse"), exports);
__exportStar(require("././paymentResponse"), exports);
__exportStar(require("././pnlAccount"), exports);
__exportStar(require("././pnlAccountClass"), exports);
__exportStar(require("././pnlAccountType"), exports);
__exportStar(require("././practiceResponse"), exports);
__exportStar(require("././prepaymentResponse"), exports);
__exportStar(require("././problem"), exports);
__exportStar(require("././problemType"), exports);
__exportStar(require("././profitAndLossResponse"), exports);
__exportStar(require("././reportHistoryModel"), exports);
__exportStar(require("././reportHistoryResponse"), exports);
__exportStar(require("././statementBalanceResponse"), exports);
__exportStar(require("././statementLineResponse"), exports);
__exportStar(require("././statementLinesResponse"), exports);
__exportStar(require("././statementResponse"), exports);
__exportStar(require("././totalDetail"), exports);
__exportStar(require("././totalOther"), exports);
__exportStar(require("././trialBalanceAccount"), exports);
__exportStar(require("././trialBalanceEntry"), exports);
__exportStar(require("././trialBalanceMovement"), exports);
__exportStar(require("././trialBalanceResponse"), exports);
__exportStar(require("././userActivitiesResponse"), exports);
__exportStar(require("././userResponse"), exports);
const accountUsage_1 = require("././accountUsage");
const accountUsageResponse_1 = require("././accountUsageResponse");
const balanceSheetAccountDetail_1 = require("././balanceSheetAccountDetail");
const balanceSheetAccountGroup_1 = require("././balanceSheetAccountGroup");
const balanceSheetAccountType_1 = require("././balanceSheetAccountType");
const balanceSheetResponse_1 = require("././balanceSheetResponse");
const bankStatementAccountingResponse_1 = require("././bankStatementAccountingResponse");
const bankStatementResponse_1 = require("././bankStatementResponse");
const bankTransactionResponse_1 = require("././bankTransactionResponse");
const cashAccountResponse_1 = require("././cashAccountResponse");
const cashBalance_1 = require("././cashBalance");
const cashValidationResponse_1 = require("././cashValidationResponse");
const cashflowAccount_1 = require("././cashflowAccount");
const cashflowActivity_1 = require("././cashflowActivity");
const cashflowResponse_1 = require("././cashflowResponse");
const cashflowType_1 = require("././cashflowType");
const contactDetail_1 = require("././contactDetail");
const contactResponse_1 = require("././contactResponse");
const contactTotalDetail_1 = require("././contactTotalDetail");
const contactTotalOther_1 = require("././contactTotalOther");
const creditNoteResponse_1 = require("././creditNoteResponse");
const currentStatementResponse_1 = require("././currentStatementResponse");
const dataSourceResponse_1 = require("././dataSourceResponse");
const historyRecordResponse_1 = require("././historyRecordResponse");
const incomeByContactResponse_1 = require("././incomeByContactResponse");
const invoiceResponse_1 = require("././invoiceResponse");
const lineItemResponse_1 = require("././lineItemResponse");
const lockHistoryModel_1 = require("././lockHistoryModel");
const lockHistoryResponse_1 = require("././lockHistoryResponse");
const manualJournalTotal_1 = require("././manualJournalTotal");
const overpaymentResponse_1 = require("././overpaymentResponse");
const paymentResponse_1 = require("././paymentResponse");
const pnlAccount_1 = require("././pnlAccount");
const pnlAccountClass_1 = require("././pnlAccountClass");
const pnlAccountType_1 = require("././pnlAccountType");
const practiceResponse_1 = require("././practiceResponse");
const prepaymentResponse_1 = require("././prepaymentResponse");
const problem_1 = require("././problem");
const problemType_1 = require("././problemType");
const profitAndLossResponse_1 = require("././profitAndLossResponse");
const reportHistoryModel_1 = require("././reportHistoryModel");
const reportHistoryResponse_1 = require("././reportHistoryResponse");
const statementBalanceResponse_1 = require("././statementBalanceResponse");
const statementLineResponse_1 = require("././statementLineResponse");
const statementLinesResponse_1 = require("././statementLinesResponse");
const statementResponse_1 = require("././statementResponse");
const totalDetail_1 = require("././totalDetail");
const totalOther_1 = require("././totalOther");
const trialBalanceAccount_1 = require("././trialBalanceAccount");
const trialBalanceEntry_1 = require("././trialBalanceEntry");
const trialBalanceMovement_1 = require("././trialBalanceMovement");
const trialBalanceResponse_1 = require("././trialBalanceResponse");
const userActivitiesResponse_1 = require("././userActivitiesResponse");
const userResponse_1 = require("././userResponse");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "ProblemType": problemType_1.ProblemType,
};
let typeMap = {
    "AccountUsage": accountUsage_1.AccountUsage,
    "AccountUsageResponse": accountUsageResponse_1.AccountUsageResponse,
    "BalanceSheetAccountDetail": balanceSheetAccountDetail_1.BalanceSheetAccountDetail,
    "BalanceSheetAccountGroup": balanceSheetAccountGroup_1.BalanceSheetAccountGroup,
    "BalanceSheetAccountType": balanceSheetAccountType_1.BalanceSheetAccountType,
    "BalanceSheetResponse": balanceSheetResponse_1.BalanceSheetResponse,
    "BankStatementAccountingResponse": bankStatementAccountingResponse_1.BankStatementAccountingResponse,
    "BankStatementResponse": bankStatementResponse_1.BankStatementResponse,
    "BankTransactionResponse": bankTransactionResponse_1.BankTransactionResponse,
    "CashAccountResponse": cashAccountResponse_1.CashAccountResponse,
    "CashBalance": cashBalance_1.CashBalance,
    "CashValidationResponse": cashValidationResponse_1.CashValidationResponse,
    "CashflowAccount": cashflowAccount_1.CashflowAccount,
    "CashflowActivity": cashflowActivity_1.CashflowActivity,
    "CashflowResponse": cashflowResponse_1.CashflowResponse,
    "CashflowType": cashflowType_1.CashflowType,
    "ContactDetail": contactDetail_1.ContactDetail,
    "ContactResponse": contactResponse_1.ContactResponse,
    "ContactTotalDetail": contactTotalDetail_1.ContactTotalDetail,
    "ContactTotalOther": contactTotalOther_1.ContactTotalOther,
    "CreditNoteResponse": creditNoteResponse_1.CreditNoteResponse,
    "CurrentStatementResponse": currentStatementResponse_1.CurrentStatementResponse,
    "DataSourceResponse": dataSourceResponse_1.DataSourceResponse,
    "HistoryRecordResponse": historyRecordResponse_1.HistoryRecordResponse,
    "IncomeByContactResponse": incomeByContactResponse_1.IncomeByContactResponse,
    "InvoiceResponse": invoiceResponse_1.InvoiceResponse,
    "LineItemResponse": lineItemResponse_1.LineItemResponse,
    "LockHistoryModel": lockHistoryModel_1.LockHistoryModel,
    "LockHistoryResponse": lockHistoryResponse_1.LockHistoryResponse,
    "ManualJournalTotal": manualJournalTotal_1.ManualJournalTotal,
    "OverpaymentResponse": overpaymentResponse_1.OverpaymentResponse,
    "PaymentResponse": paymentResponse_1.PaymentResponse,
    "PnlAccount": pnlAccount_1.PnlAccount,
    "PnlAccountClass": pnlAccountClass_1.PnlAccountClass,
    "PnlAccountType": pnlAccountType_1.PnlAccountType,
    "PracticeResponse": practiceResponse_1.PracticeResponse,
    "PrepaymentResponse": prepaymentResponse_1.PrepaymentResponse,
    "Problem": problem_1.Problem,
    "ProfitAndLossResponse": profitAndLossResponse_1.ProfitAndLossResponse,
    "ReportHistoryModel": reportHistoryModel_1.ReportHistoryModel,
    "ReportHistoryResponse": reportHistoryResponse_1.ReportHistoryResponse,
    "StatementBalanceResponse": statementBalanceResponse_1.StatementBalanceResponse,
    "StatementLineResponse": statementLineResponse_1.StatementLineResponse,
    "StatementLinesResponse": statementLinesResponse_1.StatementLinesResponse,
    "StatementResponse": statementResponse_1.StatementResponse,
    "TotalDetail": totalDetail_1.TotalDetail,
    "TotalOther": totalOther_1.TotalOther,
    "TrialBalanceAccount": trialBalanceAccount_1.TrialBalanceAccount,
    "TrialBalanceEntry": trialBalanceEntry_1.TrialBalanceEntry,
    "TrialBalanceMovement": trialBalanceMovement_1.TrialBalanceMovement,
    "TrialBalanceResponse": trialBalanceResponse_1.TrialBalanceResponse,
    "UserActivitiesResponse": userActivitiesResponse_1.UserActivitiesResponse,
    "UserResponse": userResponse_1.UserResponse,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let [index, date] of Object.entries(data)) {
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            if (subType === 'string') {
                return transformedData.join(',');
            }
            else {
                return transformedData;
            }
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let [index, attributeType] of Object.entries(attributeTypes)) {
                instance[attributeType['baseName']] = ObjectSerializer.serialize(data[attributeType['name']], attributeType['type']);
            }
            return instance;
        }
    }
    static deserializeDateFormats(type, data) {
        const isDate = new Date(data);
        if (isNaN(isDate.getTime())) {
            const re = /-?\d+/;
            const m = re.exec(data);
            return new Date(parseInt(m[0], 10));
        }
        else {
            return isDate;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            if (type === "string" && data.toString().substring(0, 6) === "/Date(") {
                return this.deserializeDateFormats(type, data); // For MS dates that are of type 'string'
            }
            else {
                return data;
            }
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            // Asset API returns string even for Array<Model>
            const dataFormatted = typeof data == 'string' ? JSON.parse(data) : data;
            for (let [index, currentData] of Object.entries(dataFormatted)) {
                transformedData.push(ObjectSerializer.deserialize(currentData, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return this.deserializeDateFormats(type, data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let [index, attributeType] of Object.entries(attributeTypes)) {
                instance[attributeType['name']] = ObjectSerializer.deserialize(data[attributeType['baseName']], attributeType['type']);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.params[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map
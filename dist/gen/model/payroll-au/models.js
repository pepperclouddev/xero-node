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
__exportStar(require("././aPIException"), exports);
__exportStar(require("././account"), exports);
__exportStar(require("././accountType"), exports);
__exportStar(require("././allowanceCategory"), exports);
__exportStar(require("././allowanceType"), exports);
__exportStar(require("././bankAccount"), exports);
__exportStar(require("././calendarType"), exports);
__exportStar(require("././countryOfResidence"), exports);
__exportStar(require("././deductionLine"), exports);
__exportStar(require("././deductionType"), exports);
__exportStar(require("././deductionTypeCalculationType"), exports);
__exportStar(require("././earningsLine"), exports);
__exportStar(require("././earningsRate"), exports);
__exportStar(require("././earningsRateCalculationType"), exports);
__exportStar(require("././earningsType"), exports);
__exportStar(require("././employee"), exports);
__exportStar(require("././employeeStatus"), exports);
__exportStar(require("././employees"), exports);
__exportStar(require("././employmentBasis"), exports);
__exportStar(require("././employmentTerminationPaymentType"), exports);
__exportStar(require("././employmentType"), exports);
__exportStar(require("././entitlementFinalPayPayoutType"), exports);
__exportStar(require("././homeAddress"), exports);
__exportStar(require("././incomeType"), exports);
__exportStar(require("././leaveAccrualLine"), exports);
__exportStar(require("././leaveApplication"), exports);
__exportStar(require("././leaveApplications"), exports);
__exportStar(require("././leaveBalance"), exports);
__exportStar(require("././leaveCategoryCode"), exports);
__exportStar(require("././leaveEarningsLine"), exports);
__exportStar(require("././leaveLine"), exports);
__exportStar(require("././leaveLineCalculationType"), exports);
__exportStar(require("././leaveLines"), exports);
__exportStar(require("././leavePeriod"), exports);
__exportStar(require("././leavePeriodStatus"), exports);
__exportStar(require("././leaveType"), exports);
__exportStar(require("././leaveTypeContributionType"), exports);
__exportStar(require("././manualTaxType"), exports);
__exportStar(require("././openingBalances"), exports);
__exportStar(require("././paidLeaveEarningsLine"), exports);
__exportStar(require("././payItem"), exports);
__exportStar(require("././payItems"), exports);
__exportStar(require("././payOutType"), exports);
__exportStar(require("././payRun"), exports);
__exportStar(require("././payRunStatus"), exports);
__exportStar(require("././payRuns"), exports);
__exportStar(require("././payTemplate"), exports);
__exportStar(require("././paymentFrequencyType"), exports);
__exportStar(require("././payrollCalendar"), exports);
__exportStar(require("././payrollCalendars"), exports);
__exportStar(require("././payslip"), exports);
__exportStar(require("././payslipLines"), exports);
__exportStar(require("././payslipObject"), exports);
__exportStar(require("././payslipSummary"), exports);
__exportStar(require("././payslips"), exports);
__exportStar(require("././rateType"), exports);
__exportStar(require("././reimbursementLine"), exports);
__exportStar(require("././reimbursementLines"), exports);
__exportStar(require("././reimbursementType"), exports);
__exportStar(require("././residencyStatus"), exports);
__exportStar(require("././seniorMaritalStatus"), exports);
__exportStar(require("././settings"), exports);
__exportStar(require("././settingsObject"), exports);
__exportStar(require("././settingsTrackingCategories"), exports);
__exportStar(require("././settingsTrackingCategoriesEmployeeGroups"), exports);
__exportStar(require("././settingsTrackingCategoriesTimesheetCategories"), exports);
__exportStar(require("././state"), exports);
__exportStar(require("././superFund"), exports);
__exportStar(require("././superFundProduct"), exports);
__exportStar(require("././superFundProducts"), exports);
__exportStar(require("././superFundType"), exports);
__exportStar(require("././superFunds"), exports);
__exportStar(require("././superLine"), exports);
__exportStar(require("././superMembership"), exports);
__exportStar(require("././superannuationCalculationType"), exports);
__exportStar(require("././superannuationContributionType"), exports);
__exportStar(require("././superannuationLine"), exports);
__exportStar(require("././tFNExemptionType"), exports);
__exportStar(require("././taxDeclaration"), exports);
__exportStar(require("././taxLine"), exports);
__exportStar(require("././taxScaleType"), exports);
__exportStar(require("././timesheet"), exports);
__exportStar(require("././timesheetLine"), exports);
__exportStar(require("././timesheetObject"), exports);
__exportStar(require("././timesheetStatus"), exports);
__exportStar(require("././timesheets"), exports);
__exportStar(require("././validationError"), exports);
__exportStar(require("././workCondition"), exports);
const aPIException_1 = require("././aPIException");
const account_1 = require("././account");
const accountType_1 = require("././accountType");
const allowanceCategory_1 = require("././allowanceCategory");
const allowanceType_1 = require("././allowanceType");
const bankAccount_1 = require("././bankAccount");
const calendarType_1 = require("././calendarType");
const countryOfResidence_1 = require("././countryOfResidence");
const deductionLine_1 = require("././deductionLine");
const deductionType_1 = require("././deductionType");
const deductionTypeCalculationType_1 = require("././deductionTypeCalculationType");
const earningsLine_1 = require("././earningsLine");
const earningsRate_1 = require("././earningsRate");
const earningsRateCalculationType_1 = require("././earningsRateCalculationType");
const earningsType_1 = require("././earningsType");
const employee_1 = require("././employee");
const employeeStatus_1 = require("././employeeStatus");
const employees_1 = require("././employees");
const employmentBasis_1 = require("././employmentBasis");
const employmentTerminationPaymentType_1 = require("././employmentTerminationPaymentType");
const employmentType_1 = require("././employmentType");
const entitlementFinalPayPayoutType_1 = require("././entitlementFinalPayPayoutType");
const homeAddress_1 = require("././homeAddress");
const incomeType_1 = require("././incomeType");
const leaveAccrualLine_1 = require("././leaveAccrualLine");
const leaveApplication_1 = require("././leaveApplication");
const leaveApplications_1 = require("././leaveApplications");
const leaveBalance_1 = require("././leaveBalance");
const leaveCategoryCode_1 = require("././leaveCategoryCode");
const leaveEarningsLine_1 = require("././leaveEarningsLine");
const leaveLine_1 = require("././leaveLine");
const leaveLineCalculationType_1 = require("././leaveLineCalculationType");
const leaveLines_1 = require("././leaveLines");
const leavePeriod_1 = require("././leavePeriod");
const leavePeriodStatus_1 = require("././leavePeriodStatus");
const leaveType_1 = require("././leaveType");
const leaveTypeContributionType_1 = require("././leaveTypeContributionType");
const manualTaxType_1 = require("././manualTaxType");
const openingBalances_1 = require("././openingBalances");
const paidLeaveEarningsLine_1 = require("././paidLeaveEarningsLine");
const payItem_1 = require("././payItem");
const payItems_1 = require("././payItems");
const payOutType_1 = require("././payOutType");
const payRun_1 = require("././payRun");
const payRunStatus_1 = require("././payRunStatus");
const payRuns_1 = require("././payRuns");
const payTemplate_1 = require("././payTemplate");
const paymentFrequencyType_1 = require("././paymentFrequencyType");
const payrollCalendar_1 = require("././payrollCalendar");
const payrollCalendars_1 = require("././payrollCalendars");
const payslip_1 = require("././payslip");
const payslipLines_1 = require("././payslipLines");
const payslipObject_1 = require("././payslipObject");
const payslipSummary_1 = require("././payslipSummary");
const payslips_1 = require("././payslips");
const rateType_1 = require("././rateType");
const reimbursementLine_1 = require("././reimbursementLine");
const reimbursementLines_1 = require("././reimbursementLines");
const reimbursementType_1 = require("././reimbursementType");
const residencyStatus_1 = require("././residencyStatus");
const seniorMaritalStatus_1 = require("././seniorMaritalStatus");
const settings_1 = require("././settings");
const settingsObject_1 = require("././settingsObject");
const settingsTrackingCategories_1 = require("././settingsTrackingCategories");
const settingsTrackingCategoriesEmployeeGroups_1 = require("././settingsTrackingCategoriesEmployeeGroups");
const settingsTrackingCategoriesTimesheetCategories_1 = require("././settingsTrackingCategoriesTimesheetCategories");
const state_1 = require("././state");
const superFund_1 = require("././superFund");
const superFundProduct_1 = require("././superFundProduct");
const superFundProducts_1 = require("././superFundProducts");
const superFundType_1 = require("././superFundType");
const superFunds_1 = require("././superFunds");
const superLine_1 = require("././superLine");
const superMembership_1 = require("././superMembership");
const superannuationCalculationType_1 = require("././superannuationCalculationType");
const superannuationContributionType_1 = require("././superannuationContributionType");
const superannuationLine_1 = require("././superannuationLine");
const tFNExemptionType_1 = require("././tFNExemptionType");
const taxDeclaration_1 = require("././taxDeclaration");
const taxLine_1 = require("././taxLine");
const taxScaleType_1 = require("././taxScaleType");
const timesheet_1 = require("././timesheet");
const timesheetLine_1 = require("././timesheetLine");
const timesheetObject_1 = require("././timesheetObject");
const timesheetStatus_1 = require("././timesheetStatus");
const timesheets_1 = require("././timesheets");
const validationError_1 = require("././validationError");
const workCondition_1 = require("././workCondition");
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
    "AccountType": accountType_1.AccountType,
    "AllowanceCategory": allowanceCategory_1.AllowanceCategory,
    "AllowanceType": allowanceType_1.AllowanceType,
    "CalendarType": calendarType_1.CalendarType,
    "CountryOfResidence": countryOfResidence_1.CountryOfResidence,
    "DeductionType.DeductionCategoryEnum": deductionType_1.DeductionType.DeductionCategoryEnum,
    "DeductionTypeCalculationType": deductionTypeCalculationType_1.DeductionTypeCalculationType,
    "EarningsRateCalculationType": earningsRateCalculationType_1.EarningsRateCalculationType,
    "EarningsType": earningsType_1.EarningsType,
    "Employee.GenderEnum": employee_1.Employee.GenderEnum,
    "Employee.TerminationReasonEnum": employee_1.Employee.TerminationReasonEnum,
    "EmployeeStatus": employeeStatus_1.EmployeeStatus,
    "EmploymentBasis": employmentBasis_1.EmploymentBasis,
    "EmploymentTerminationPaymentType": employmentTerminationPaymentType_1.EmploymentTerminationPaymentType,
    "EmploymentType": employmentType_1.EmploymentType,
    "EntitlementFinalPayPayoutType": entitlementFinalPayPayoutType_1.EntitlementFinalPayPayoutType,
    "IncomeType": incomeType_1.IncomeType,
    "LeaveCategoryCode": leaveCategoryCode_1.LeaveCategoryCode,
    "LeaveLineCalculationType": leaveLineCalculationType_1.LeaveLineCalculationType,
    "LeavePeriodStatus": leavePeriodStatus_1.LeavePeriodStatus,
    "LeaveTypeContributionType": leaveTypeContributionType_1.LeaveTypeContributionType,
    "ManualTaxType": manualTaxType_1.ManualTaxType,
    "PayOutType": payOutType_1.PayOutType,
    "PayRunStatus": payRunStatus_1.PayRunStatus,
    "PaymentFrequencyType": paymentFrequencyType_1.PaymentFrequencyType,
    "RateType": rateType_1.RateType,
    "ResidencyStatus": residencyStatus_1.ResidencyStatus,
    "SeniorMaritalStatus": seniorMaritalStatus_1.SeniorMaritalStatus,
    "State": state_1.State,
    "SuperFundType": superFundType_1.SuperFundType,
    "SuperannuationCalculationType": superannuationCalculationType_1.SuperannuationCalculationType,
    "SuperannuationContributionType": superannuationContributionType_1.SuperannuationContributionType,
    "TFNExemptionType": tFNExemptionType_1.TFNExemptionType,
    "TaxScaleType": taxScaleType_1.TaxScaleType,
    "TimesheetStatus": timesheetStatus_1.TimesheetStatus,
    "WorkCondition": workCondition_1.WorkCondition,
};
let typeMap = {
    "APIException": aPIException_1.APIException,
    "Account": account_1.Account,
    "BankAccount": bankAccount_1.BankAccount,
    "DeductionLine": deductionLine_1.DeductionLine,
    "DeductionType": deductionType_1.DeductionType,
    "EarningsLine": earningsLine_1.EarningsLine,
    "EarningsRate": earningsRate_1.EarningsRate,
    "Employee": employee_1.Employee,
    "Employees": employees_1.Employees,
    "HomeAddress": homeAddress_1.HomeAddress,
    "LeaveAccrualLine": leaveAccrualLine_1.LeaveAccrualLine,
    "LeaveApplication": leaveApplication_1.LeaveApplication,
    "LeaveApplications": leaveApplications_1.LeaveApplications,
    "LeaveBalance": leaveBalance_1.LeaveBalance,
    "LeaveEarningsLine": leaveEarningsLine_1.LeaveEarningsLine,
    "LeaveLine": leaveLine_1.LeaveLine,
    "LeaveLines": leaveLines_1.LeaveLines,
    "LeavePeriod": leavePeriod_1.LeavePeriod,
    "LeaveType": leaveType_1.LeaveType,
    "OpeningBalances": openingBalances_1.OpeningBalances,
    "PaidLeaveEarningsLine": paidLeaveEarningsLine_1.PaidLeaveEarningsLine,
    "PayItem": payItem_1.PayItem,
    "PayItems": payItems_1.PayItems,
    "PayRun": payRun_1.PayRun,
    "PayRuns": payRuns_1.PayRuns,
    "PayTemplate": payTemplate_1.PayTemplate,
    "PayrollCalendar": payrollCalendar_1.PayrollCalendar,
    "PayrollCalendars": payrollCalendars_1.PayrollCalendars,
    "Payslip": payslip_1.Payslip,
    "PayslipLines": payslipLines_1.PayslipLines,
    "PayslipObject": payslipObject_1.PayslipObject,
    "PayslipSummary": payslipSummary_1.PayslipSummary,
    "Payslips": payslips_1.Payslips,
    "ReimbursementLine": reimbursementLine_1.ReimbursementLine,
    "ReimbursementLines": reimbursementLines_1.ReimbursementLines,
    "ReimbursementType": reimbursementType_1.ReimbursementType,
    "Settings": settings_1.Settings,
    "SettingsObject": settingsObject_1.SettingsObject,
    "SettingsTrackingCategories": settingsTrackingCategories_1.SettingsTrackingCategories,
    "SettingsTrackingCategoriesEmployeeGroups": settingsTrackingCategoriesEmployeeGroups_1.SettingsTrackingCategoriesEmployeeGroups,
    "SettingsTrackingCategoriesTimesheetCategories": settingsTrackingCategoriesTimesheetCategories_1.SettingsTrackingCategoriesTimesheetCategories,
    "SuperFund": superFund_1.SuperFund,
    "SuperFundProduct": superFundProduct_1.SuperFundProduct,
    "SuperFundProducts": superFundProducts_1.SuperFundProducts,
    "SuperFunds": superFunds_1.SuperFunds,
    "SuperLine": superLine_1.SuperLine,
    "SuperMembership": superMembership_1.SuperMembership,
    "SuperannuationLine": superannuationLine_1.SuperannuationLine,
    "TaxDeclaration": taxDeclaration_1.TaxDeclaration,
    "TaxLine": taxLine_1.TaxLine,
    "Timesheet": timesheet_1.Timesheet,
    "TimesheetLine": timesheetLine_1.TimesheetLine,
    "TimesheetObject": timesheetObject_1.TimesheetObject,
    "Timesheets": timesheets_1.Timesheets,
    "ValidationError": validationError_1.ValidationError,
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
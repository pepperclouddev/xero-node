/**
 * Xero Finance API
 * The Finance API is a collection of endpoints which customers can use in the course of a loan application, which may assist lenders to gain the confidence they need to provide capital.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountUsageResponse } from '../model/finance/accountUsageResponse';
import { BalanceSheetResponse } from '../model/finance/balanceSheetResponse';
import { BankStatementAccountingResponse } from '../model/finance/bankStatementAccountingResponse';
import { CashValidationResponse } from '../model/finance/cashValidationResponse';
import { CashflowResponse } from '../model/finance/cashflowResponse';
import { IncomeByContactResponse } from '../model/finance/incomeByContactResponse';
import { LockHistoryResponse } from '../model/finance/lockHistoryResponse';
import { ProfitAndLossResponse } from '../model/finance/profitAndLossResponse';
import { ReportHistoryResponse } from '../model/finance/reportHistoryResponse';
import { TrialBalanceResponse } from '../model/finance/trialBalanceResponse';
import { UserActivitiesResponse } from '../model/finance/userActivitiesResponse';
import { Authentication } from '../model/finance/models';
import { AxiosResponse } from 'axios';
import { OAuth } from '../model/finance/models';
export declare enum FinanceApiApiKeys {
}
export declare class FinanceApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected binaryHeaders: any;
    protected authentications: {
        default: Authentication;
        OAuth2: OAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: FinanceApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     * A summary of how each account is being transacted on exposing the level of detail and amounts attributable to manual adjustments.
     * @summary Get account usage
     * @param xeroTenantId Xero identifier for Tenant
     * @param startMonth date, yyyy-MM                 If no parameter is provided, the month 12 months prior to the end month will be used.                Account usage for up to 12 months from this date will be returned.
     * @param endMonth date, yyyy-MM                 If no parameter is provided, the current month will be used.                Account usage for up to 12 months prior to this date will be returned.
     */
    getAccountingActivityAccountUsage(xeroTenantId: string, startMonth?: string, endMonth?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: AccountUsageResponse;
    }>;
    /**
     * Provides a history of locking of accounting books. Locking may be an indicator of good accounting practices that could reduce the risk of changes to accounting records in prior periods.
     * @summary Get lock history
     * @param xeroTenantId Xero identifier for Tenant
     * @param endDate date, yyyy-MM-dd                 If no parameter is provided, the current date will be used.                Any changes to hard or soft lock dates that were made within the period up to 12 months before this date will be returned.                Please be aware that there may be a delay of up to 3 days before a change is visible from this API.
     */
    getAccountingActivityLockHistory(xeroTenantId: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: LockHistoryResponse;
    }>;
    /**
     * For a specified organisation, provides a summary of all the reports published within a given period, which may be an indicator for good business management and oversight.
     * @summary Get report history
     * @param xeroTenantId Xero identifier for Tenant
     * @param endDate date, yyyy-MM-dd                 If no parameter is provided, the current date will be used.                Any reports that were published within the period up to 12 months before this date will be returned.                Please be aware that there may be a delay of up to 3 days before a published report is visible from this API.
     */
    getAccountingActivityReportHistory(xeroTenantId: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: ReportHistoryResponse;
    }>;
    /**
     * For a specified organisation, provides a list of all the users registered, and a history of their accounting transactions. Also identifies the existence of an external accounting advisor and the level of interaction.
     * @summary Get user activities
     * @param xeroTenantId Xero identifier for Tenant
     * @param dataMonth date, yyyy-MM                 The specified month must be complete (in the past); The current month cannot be specified since it is not complete.                If no parameter is provided, the month immediately previous to the current month will be used.                Any user activities occurring within the specified month will be returned.                Please be aware that there may be a delay of up to 3 days before a user activity is visible from this API.
     */
    getAccountingActivityUserActivities(xeroTenantId: string, dataMonth?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: UserActivitiesResponse;
    }>;
    /**
     * For lenders that prefer using bank statement data as the source of truth.  We provide a data point that will allow access to customer bank statements, plus for reconciled bank transactions the matching accounting, invoice and billing data as well.  As customers reconcile bank statements to invoices and bills, this transaction detail will provide valuable insight for lender\'s assessment measures.
     * @summary Get Bank Statement Accounting
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankAccountID string, GUID    Bank account Id
     * @param fromDate date, yyyy-MM-dd     Specifies the start date of the query period.   The maximum range of the query period is 12 months. If the specified query period is more than 12 months the request will be rejected.
     * @param toDate date, yyyy-MM-dd     Specifies the end date of the query period.   If the end date is a future date, the request will be rejected.
     * @param summaryOnly boolean, true/false    The default value is true if no parameter is provided.    In summary mode, the response will exclude the computation-heavy LineItems fields from bank transaction, invoice, credit note, prepayment and overpayment data, making the API calls quicker and more efficient.
     */
    getBankStatementAccounting(xeroTenantId: string, bankAccountID: string, fromDate: string, toDate: string, summaryOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: BankStatementAccountingResponse;
    }>;
    /**
     * Summarizes the total cash position for each account for an org
     * @summary Get cash validation
     * @param xeroTenantId Xero identifier for Tenant
     * @param balanceDate date, yyyy-MM-dd     If no parameter is provided, the current date will be used.    The ‘balance date’ will return transactions based on the accounting date entered by the user.  Transactions before the balanceDate will be included.  The user has discretion as to which accounting period the transaction relates to.    The ‘balance date’  will control the latest maximum date of transactions included in the aggregate numbers.  Balance date does not affect the CurrentStatement object, as this will always return the most recent statement before asAtSystemDate (if specified)
     * @param asAtSystemDate date, yyyy-MM-dd     If no parameter is provided, the current date will be used.    The ‘as at’ date will return transactions based on the  creation date.  It reflects the date the transactions were entered into Xero, not the accounting date.  The ‘as at’ date can not be overridden by the user.  This can be used to estimate a ‘historical frequency of reconciliation’.    The ‘as at’ date will affect the current statement in the response, as any candidate statements created after this date will be filtered out.  Thus the current statement returned will be the most recent statement prior to the specified ‘as at’ date.  Be aware that neither the begin date, nor the balance date, will affect the current statement.    Note;  information is only presented when system architecture allows, meaning historical cash validation information will be an estimate. In addition, delete events are not aware of the ‘as at’ functionality in this endpoint, meaning that transactions deleted at the time the API is accessed will be considered to always have been deleted.
     * @param beginDate date, yyyy-MM-dd     If no parameter is provided, the aggregate results will be drawn from the user’s total history.    The ‘begin date’ will return transactions based on the accounting date entered by the user. Transactions after the beginDate will be included.  The user has discretion as to which accounting period the transaction relates to.
     */
    getCashValidation(xeroTenantId: string, balanceDate?: string, asAtSystemDate?: string, beginDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: Array<CashValidationResponse>;
    }>;
    /**
     * The balance sheet report is a standard financial report which describes the financial position of an organisation at a point in time.
     * @summary Get Balance Sheet report
     * @param xeroTenantId Xero identifier for Tenant
     * @param balanceDate Specifies the date for balance sheet report.    Format yyyy-MM-dd. If no parameter is provided, the current date will be used.
     */
    getFinancialStatementBalanceSheet(xeroTenantId: string, balanceDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: BalanceSheetResponse;
    }>;
    /**
     * The statement of cash flows - direct method, provides the year to date changes in operating, financing and investing cash flow activities for an organisation. Cashflow statement is not available in US region at this stage.
     * @summary Get Cash flow report
     * @param xeroTenantId Xero identifier for Tenant
     * @param startDate Date e.g. yyyy-MM-dd    Specifies the start date for cash flow report.    If no parameter is provided, the date of 12 months before the end date will be used.
     * @param endDate Date e.g. yyyy-MM-dd    Specifies the end date for cash flow report.    If no parameter is provided, the current date will be used.
     */
    getFinancialStatementCashflow(xeroTenantId: string, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: CashflowResponse;
    }>;
    /**
     * The expense by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.
     * @summary Get expense by contacts report
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactIds Specifies the customer contacts to be included in the report.    If no parameter is provided, all customer contacts will be included
     * @param includeManualJournals Specifies whether to include the manual journals in the report.                If no parameter is provided, manual journals will not be included.
     * @param startDate Date yyyy-MM-dd    Specifies the start date for the report.                If no parameter is provided, the date of 12 months before the end date will be used.                It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.
     * @param endDate Date yyyy-MM-dd    Specifies the end date for the report.    If no parameter is provided, the current date will be used.                It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.
     */
    getFinancialStatementContactsExpense(xeroTenantId: string, contactIds?: Array<string>, includeManualJournals?: boolean, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: IncomeByContactResponse;
    }>;
    /**
     * The revenue by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.
     * @summary Get revenue by contacts report
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactIds Specifies the customer contacts to be included in the report.    If no parameter is provided, all customer contacts will be included
     * @param includeManualJournals Specifies whether to include the manual journals in the report.                If no parameter is provided, manual journals will not be included.
     * @param startDate Date yyyy-MM-dd    Specifies the start date for the report.                If no parameter is provided, the date of 12 months before the end date will be used.                It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.
     * @param endDate Date yyyy-MM-dd    Specifies the end date for the report.    If no parameter is provided, the current date will be used.                It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.
     */
    getFinancialStatementContactsRevenue(xeroTenantId: string, contactIds?: Array<string>, includeManualJournals?: boolean, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: IncomeByContactResponse;
    }>;
    /**
     * The profit and loss statement is a standard financial report providing detailed year to date income and expense detail for an organisation.
     * @summary Get Profit & Loss report
     * @param xeroTenantId Xero identifier for Tenant
     * @param startDate Date e.g. yyyy-MM-dd    Specifies the start date for profit and loss report    If no parameter is provided, the date of 12 months before the end date will be used.
     * @param endDate Date e.g. yyyy-MM-dd    Specifies the end date for profit and loss report     If no parameter is provided, the current date will be used.
     */
    getFinancialStatementProfitAndLoss(xeroTenantId: string, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: ProfitAndLossResponse;
    }>;
    /**
     * The trial balance provides a detailed list of all accounts of an organisation at a point in time, with revenue and expense items being year to date.
     * @summary Get Trial Balance report
     * @param xeroTenantId Xero identifier for Tenant
     * @param endDate Date e.g. yyyy-MM-dd     Specifies the end date for trial balance report     If no parameter is provided, the current date will be used.
     */
    getFinancialStatementTrialBalance(xeroTenantId: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: TrialBalanceResponse;
    }>;
}

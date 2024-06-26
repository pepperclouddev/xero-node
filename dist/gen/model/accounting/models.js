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
__exportStar(require("././account"), exports);
__exportStar(require("././accountType"), exports);
__exportStar(require("././accounts"), exports);
__exportStar(require("././accountsPayable"), exports);
__exportStar(require("././accountsReceivable"), exports);
__exportStar(require("././action"), exports);
__exportStar(require("././actions"), exports);
__exportStar(require("././address"), exports);
__exportStar(require("././addressForOrganisation"), exports);
__exportStar(require("././allocation"), exports);
__exportStar(require("././allocations"), exports);
__exportStar(require("././attachment"), exports);
__exportStar(require("././attachments"), exports);
__exportStar(require("././balanceDetails"), exports);
__exportStar(require("././balances"), exports);
__exportStar(require("././bankTransaction"), exports);
__exportStar(require("././bankTransactions"), exports);
__exportStar(require("././bankTransfer"), exports);
__exportStar(require("././bankTransfers"), exports);
__exportStar(require("././batchPayment"), exports);
__exportStar(require("././batchPaymentDelete"), exports);
__exportStar(require("././batchPaymentDeleteByUrlParam"), exports);
__exportStar(require("././batchPaymentDetails"), exports);
__exportStar(require("././batchPayments"), exports);
__exportStar(require("././bill"), exports);
__exportStar(require("././brandingTheme"), exports);
__exportStar(require("././brandingThemes"), exports);
__exportStar(require("././budget"), exports);
__exportStar(require("././budgetBalance"), exports);
__exportStar(require("././budgetLine"), exports);
__exportStar(require("././budgets"), exports);
__exportStar(require("././cISOrgSetting"), exports);
__exportStar(require("././cISOrgSettings"), exports);
__exportStar(require("././cISSetting"), exports);
__exportStar(require("././cISSettings"), exports);
__exportStar(require("././contact"), exports);
__exportStar(require("././contactGroup"), exports);
__exportStar(require("././contactGroups"), exports);
__exportStar(require("././contactPerson"), exports);
__exportStar(require("././contacts"), exports);
__exportStar(require("././conversionBalances"), exports);
__exportStar(require("././conversionDate"), exports);
__exportStar(require("././countryCode"), exports);
__exportStar(require("././creditNote"), exports);
__exportStar(require("././creditNotes"), exports);
__exportStar(require("././currencies"), exports);
__exportStar(require("././currency"), exports);
__exportStar(require("././currencyCode"), exports);
__exportStar(require("././element"), exports);
__exportStar(require("././employee"), exports);
__exportStar(require("././employees"), exports);
__exportStar(require("././expenseClaim"), exports);
__exportStar(require("././expenseClaims"), exports);
__exportStar(require("././externalLink"), exports);
__exportStar(require("././historyRecord"), exports);
__exportStar(require("././historyRecords"), exports);
__exportStar(require("././importSummary"), exports);
__exportStar(require("././importSummaryAccounts"), exports);
__exportStar(require("././importSummaryObject"), exports);
__exportStar(require("././importSummaryOrganisation"), exports);
__exportStar(require("././invoice"), exports);
__exportStar(require("././invoiceReminder"), exports);
__exportStar(require("././invoiceReminders"), exports);
__exportStar(require("././invoices"), exports);
__exportStar(require("././item"), exports);
__exportStar(require("././items"), exports);
__exportStar(require("././journal"), exports);
__exportStar(require("././journalLine"), exports);
__exportStar(require("././journals"), exports);
__exportStar(require("././lineAmountTypes"), exports);
__exportStar(require("././lineItem"), exports);
__exportStar(require("././lineItemItem"), exports);
__exportStar(require("././lineItemTracking"), exports);
__exportStar(require("././linkedTransaction"), exports);
__exportStar(require("././linkedTransactions"), exports);
__exportStar(require("././manualJournal"), exports);
__exportStar(require("././manualJournalLine"), exports);
__exportStar(require("././manualJournals"), exports);
__exportStar(require("././modelError"), exports);
__exportStar(require("././onlineInvoice"), exports);
__exportStar(require("././onlineInvoices"), exports);
__exportStar(require("././organisation"), exports);
__exportStar(require("././organisations"), exports);
__exportStar(require("././overpayment"), exports);
__exportStar(require("././overpayments"), exports);
__exportStar(require("././payment"), exports);
__exportStar(require("././paymentDelete"), exports);
__exportStar(require("././paymentService"), exports);
__exportStar(require("././paymentServices"), exports);
__exportStar(require("././paymentTerm"), exports);
__exportStar(require("././paymentTermType"), exports);
__exportStar(require("././payments"), exports);
__exportStar(require("././phone"), exports);
__exportStar(require("././prepayment"), exports);
__exportStar(require("././prepayments"), exports);
__exportStar(require("././purchase"), exports);
__exportStar(require("././purchaseOrder"), exports);
__exportStar(require("././purchaseOrders"), exports);
__exportStar(require("././quote"), exports);
__exportStar(require("././quoteLineAmountTypes"), exports);
__exportStar(require("././quoteStatusCodes"), exports);
__exportStar(require("././quotes"), exports);
__exportStar(require("././receipt"), exports);
__exportStar(require("././receipts"), exports);
__exportStar(require("././repeatingInvoice"), exports);
__exportStar(require("././repeatingInvoices"), exports);
__exportStar(require("././report"), exports);
__exportStar(require("././reportAttribute"), exports);
__exportStar(require("././reportCell"), exports);
__exportStar(require("././reportFields"), exports);
__exportStar(require("././reportRow"), exports);
__exportStar(require("././reportRows"), exports);
__exportStar(require("././reportWithRow"), exports);
__exportStar(require("././reportWithRows"), exports);
__exportStar(require("././reports"), exports);
__exportStar(require("././requestEmpty"), exports);
__exportStar(require("././rowType"), exports);
__exportStar(require("././salesTrackingCategory"), exports);
__exportStar(require("././schedule"), exports);
__exportStar(require("././setup"), exports);
__exportStar(require("././taxComponent"), exports);
__exportStar(require("././taxRate"), exports);
__exportStar(require("././taxRates"), exports);
__exportStar(require("././taxType"), exports);
__exportStar(require("././tenNinetyNineContact"), exports);
__exportStar(require("././timeZone"), exports);
__exportStar(require("././trackingCategories"), exports);
__exportStar(require("././trackingCategory"), exports);
__exportStar(require("././trackingOption"), exports);
__exportStar(require("././trackingOptions"), exports);
__exportStar(require("././user"), exports);
__exportStar(require("././users"), exports);
__exportStar(require("././validationError"), exports);
const account_1 = require("././account");
const accountType_1 = require("././accountType");
const accounts_1 = require("././accounts");
const accountsPayable_1 = require("././accountsPayable");
const accountsReceivable_1 = require("././accountsReceivable");
const action_1 = require("././action");
const actions_1 = require("././actions");
const address_1 = require("././address");
const addressForOrganisation_1 = require("././addressForOrganisation");
const allocation_1 = require("././allocation");
const allocations_1 = require("././allocations");
const attachment_1 = require("././attachment");
const attachments_1 = require("././attachments");
const balanceDetails_1 = require("././balanceDetails");
const balances_1 = require("././balances");
const bankTransaction_1 = require("././bankTransaction");
const bankTransactions_1 = require("././bankTransactions");
const bankTransfer_1 = require("././bankTransfer");
const bankTransfers_1 = require("././bankTransfers");
const batchPayment_1 = require("././batchPayment");
const batchPaymentDelete_1 = require("././batchPaymentDelete");
const batchPaymentDeleteByUrlParam_1 = require("././batchPaymentDeleteByUrlParam");
const batchPaymentDetails_1 = require("././batchPaymentDetails");
const batchPayments_1 = require("././batchPayments");
const bill_1 = require("././bill");
const brandingTheme_1 = require("././brandingTheme");
const brandingThemes_1 = require("././brandingThemes");
const budget_1 = require("././budget");
const budgetBalance_1 = require("././budgetBalance");
const budgetLine_1 = require("././budgetLine");
const budgets_1 = require("././budgets");
const cISOrgSetting_1 = require("././cISOrgSetting");
const cISOrgSettings_1 = require("././cISOrgSettings");
const cISSetting_1 = require("././cISSetting");
const cISSettings_1 = require("././cISSettings");
const contact_1 = require("././contact");
const contactGroup_1 = require("././contactGroup");
const contactGroups_1 = require("././contactGroups");
const contactPerson_1 = require("././contactPerson");
const contacts_1 = require("././contacts");
const conversionBalances_1 = require("././conversionBalances");
const conversionDate_1 = require("././conversionDate");
const countryCode_1 = require("././countryCode");
const creditNote_1 = require("././creditNote");
const creditNotes_1 = require("././creditNotes");
const currencies_1 = require("././currencies");
const currency_1 = require("././currency");
const currencyCode_1 = require("././currencyCode");
const element_1 = require("././element");
const employee_1 = require("././employee");
const employees_1 = require("././employees");
const expenseClaim_1 = require("././expenseClaim");
const expenseClaims_1 = require("././expenseClaims");
const externalLink_1 = require("././externalLink");
const historyRecord_1 = require("././historyRecord");
const historyRecords_1 = require("././historyRecords");
const importSummary_1 = require("././importSummary");
const importSummaryAccounts_1 = require("././importSummaryAccounts");
const importSummaryObject_1 = require("././importSummaryObject");
const importSummaryOrganisation_1 = require("././importSummaryOrganisation");
const invoice_1 = require("././invoice");
const invoiceReminder_1 = require("././invoiceReminder");
const invoiceReminders_1 = require("././invoiceReminders");
const invoices_1 = require("././invoices");
const item_1 = require("././item");
const items_1 = require("././items");
const journal_1 = require("././journal");
const journalLine_1 = require("././journalLine");
const journals_1 = require("././journals");
const lineAmountTypes_1 = require("././lineAmountTypes");
const lineItem_1 = require("././lineItem");
const lineItemItem_1 = require("././lineItemItem");
const lineItemTracking_1 = require("././lineItemTracking");
const linkedTransaction_1 = require("././linkedTransaction");
const linkedTransactions_1 = require("././linkedTransactions");
const manualJournal_1 = require("././manualJournal");
const manualJournalLine_1 = require("././manualJournalLine");
const manualJournals_1 = require("././manualJournals");
const modelError_1 = require("././modelError");
const onlineInvoice_1 = require("././onlineInvoice");
const onlineInvoices_1 = require("././onlineInvoices");
const organisation_1 = require("././organisation");
const organisations_1 = require("././organisations");
const overpayment_1 = require("././overpayment");
const overpayments_1 = require("././overpayments");
const payment_1 = require("././payment");
const paymentDelete_1 = require("././paymentDelete");
const paymentService_1 = require("././paymentService");
const paymentServices_1 = require("././paymentServices");
const paymentTerm_1 = require("././paymentTerm");
const paymentTermType_1 = require("././paymentTermType");
const payments_1 = require("././payments");
const phone_1 = require("././phone");
const prepayment_1 = require("././prepayment");
const prepayments_1 = require("././prepayments");
const purchase_1 = require("././purchase");
const purchaseOrder_1 = require("././purchaseOrder");
const purchaseOrders_1 = require("././purchaseOrders");
const quote_1 = require("././quote");
const quoteLineAmountTypes_1 = require("././quoteLineAmountTypes");
const quoteStatusCodes_1 = require("././quoteStatusCodes");
const quotes_1 = require("././quotes");
const receipt_1 = require("././receipt");
const receipts_1 = require("././receipts");
const repeatingInvoice_1 = require("././repeatingInvoice");
const repeatingInvoices_1 = require("././repeatingInvoices");
const report_1 = require("././report");
const reportAttribute_1 = require("././reportAttribute");
const reportCell_1 = require("././reportCell");
const reportFields_1 = require("././reportFields");
const reportRow_1 = require("././reportRow");
const reportRows_1 = require("././reportRows");
const reportWithRow_1 = require("././reportWithRow");
const reportWithRows_1 = require("././reportWithRows");
const reports_1 = require("././reports");
const requestEmpty_1 = require("././requestEmpty");
const rowType_1 = require("././rowType");
const salesTrackingCategory_1 = require("././salesTrackingCategory");
const schedule_1 = require("././schedule");
const setup_1 = require("././setup");
const taxComponent_1 = require("././taxComponent");
const taxRate_1 = require("././taxRate");
const taxRates_1 = require("././taxRates");
const taxType_1 = require("././taxType");
const tenNinetyNineContact_1 = require("././tenNinetyNineContact");
const timeZone_1 = require("././timeZone");
const trackingCategories_1 = require("././trackingCategories");
const trackingCategory_1 = require("././trackingCategory");
const trackingOption_1 = require("././trackingOption");
const trackingOptions_1 = require("././trackingOptions");
const user_1 = require("././user");
const users_1 = require("././users");
const validationError_1 = require("././validationError");
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
    "Account.StatusEnum": account_1.Account.StatusEnum,
    "Account.BankAccountTypeEnum": account_1.Account.BankAccountTypeEnum,
    "Account.ClassEnum": account_1.Account.ClassEnum,
    "Account.SystemAccountEnum": account_1.Account.SystemAccountEnum,
    "AccountType": accountType_1.AccountType,
    "Action.StatusEnum": action_1.Action.StatusEnum,
    "Address.AddressTypeEnum": address_1.Address.AddressTypeEnum,
    "AddressForOrganisation.AddressTypeEnum": addressForOrganisation_1.AddressForOrganisation.AddressTypeEnum,
    "BankTransaction.TypeEnum": bankTransaction_1.BankTransaction.TypeEnum,
    "BankTransaction.StatusEnum": bankTransaction_1.BankTransaction.StatusEnum,
    "BatchPayment.TypeEnum": batchPayment_1.BatchPayment.TypeEnum,
    "BatchPayment.StatusEnum": batchPayment_1.BatchPayment.StatusEnum,
    "BrandingTheme.TypeEnum": brandingTheme_1.BrandingTheme.TypeEnum,
    "Budget.TypeEnum": budget_1.Budget.TypeEnum,
    "Contact.ContactStatusEnum": contact_1.Contact.ContactStatusEnum,
    "Contact.SalesDefaultLineAmountTypeEnum": contact_1.Contact.SalesDefaultLineAmountTypeEnum,
    "Contact.PurchasesDefaultLineAmountTypeEnum": contact_1.Contact.PurchasesDefaultLineAmountTypeEnum,
    "ContactGroup.StatusEnum": contactGroup_1.ContactGroup.StatusEnum,
    "CountryCode": countryCode_1.CountryCode,
    "CreditNote.TypeEnum": creditNote_1.CreditNote.TypeEnum,
    "CreditNote.StatusEnum": creditNote_1.CreditNote.StatusEnum,
    "CurrencyCode": currencyCode_1.CurrencyCode,
    "Employee.StatusEnum": employee_1.Employee.StatusEnum,
    "ExpenseClaim.StatusEnum": expenseClaim_1.ExpenseClaim.StatusEnum,
    "ExternalLink.LinkTypeEnum": externalLink_1.ExternalLink.LinkTypeEnum,
    "Invoice.TypeEnum": invoice_1.Invoice.TypeEnum,
    "Invoice.StatusEnum": invoice_1.Invoice.StatusEnum,
    "Journal.SourceTypeEnum": journal_1.Journal.SourceTypeEnum,
    "LineAmountTypes": lineAmountTypes_1.LineAmountTypes,
    "LinkedTransaction.StatusEnum": linkedTransaction_1.LinkedTransaction.StatusEnum,
    "LinkedTransaction.TypeEnum": linkedTransaction_1.LinkedTransaction.TypeEnum,
    "LinkedTransaction.SourceTransactionTypeCodeEnum": linkedTransaction_1.LinkedTransaction.SourceTransactionTypeCodeEnum,
    "ManualJournal.StatusEnum": manualJournal_1.ManualJournal.StatusEnum,
    "Organisation.VersionEnum": organisation_1.Organisation.VersionEnum,
    "Organisation.OrganisationTypeEnum": organisation_1.Organisation.OrganisationTypeEnum,
    "Organisation.SalesTaxBasisEnum": organisation_1.Organisation.SalesTaxBasisEnum,
    "Organisation.SalesTaxPeriodEnum": organisation_1.Organisation.SalesTaxPeriodEnum,
    "Organisation.OrganisationEntityTypeEnum": organisation_1.Organisation.OrganisationEntityTypeEnum,
    "Organisation.ClassEnum": organisation_1.Organisation.ClassEnum,
    "Organisation.EditionEnum": organisation_1.Organisation.EditionEnum,
    "Overpayment.TypeEnum": overpayment_1.Overpayment.TypeEnum,
    "Overpayment.StatusEnum": overpayment_1.Overpayment.StatusEnum,
    "Payment.StatusEnum": payment_1.Payment.StatusEnum,
    "Payment.PaymentTypeEnum": payment_1.Payment.PaymentTypeEnum,
    "PaymentTermType": paymentTermType_1.PaymentTermType,
    "Phone.PhoneTypeEnum": phone_1.Phone.PhoneTypeEnum,
    "Prepayment.TypeEnum": prepayment_1.Prepayment.TypeEnum,
    "Prepayment.StatusEnum": prepayment_1.Prepayment.StatusEnum,
    "PurchaseOrder.StatusEnum": purchaseOrder_1.PurchaseOrder.StatusEnum,
    "QuoteLineAmountTypes": quoteLineAmountTypes_1.QuoteLineAmountTypes,
    "QuoteStatusCodes": quoteStatusCodes_1.QuoteStatusCodes,
    "Receipt.StatusEnum": receipt_1.Receipt.StatusEnum,
    "RepeatingInvoice.TypeEnum": repeatingInvoice_1.RepeatingInvoice.TypeEnum,
    "RepeatingInvoice.StatusEnum": repeatingInvoice_1.RepeatingInvoice.StatusEnum,
    "Report.ReportTypeEnum": report_1.Report.ReportTypeEnum,
    "RowType": rowType_1.RowType,
    "Schedule.UnitEnum": schedule_1.Schedule.UnitEnum,
    "Schedule.DueDateTypeEnum": schedule_1.Schedule.DueDateTypeEnum,
    "TaxRate.StatusEnum": taxRate_1.TaxRate.StatusEnum,
    "TaxRate.ReportTaxTypeEnum": taxRate_1.TaxRate.ReportTaxTypeEnum,
    "TaxType": taxType_1.TaxType,
    "TenNinetyNineContact.FederalTaxClassificationEnum": tenNinetyNineContact_1.TenNinetyNineContact.FederalTaxClassificationEnum,
    "TimeZone": timeZone_1.TimeZone,
    "TrackingCategory.StatusEnum": trackingCategory_1.TrackingCategory.StatusEnum,
    "TrackingOption.StatusEnum": trackingOption_1.TrackingOption.StatusEnum,
    "User.OrganisationRoleEnum": user_1.User.OrganisationRoleEnum,
};
let typeMap = {
    "Account": account_1.Account,
    "Accounts": accounts_1.Accounts,
    "AccountsPayable": accountsPayable_1.AccountsPayable,
    "AccountsReceivable": accountsReceivable_1.AccountsReceivable,
    "Action": action_1.Action,
    "Actions": actions_1.Actions,
    "Address": address_1.Address,
    "AddressForOrganisation": addressForOrganisation_1.AddressForOrganisation,
    "Allocation": allocation_1.Allocation,
    "Allocations": allocations_1.Allocations,
    "Attachment": attachment_1.Attachment,
    "Attachments": attachments_1.Attachments,
    "BalanceDetails": balanceDetails_1.BalanceDetails,
    "Balances": balances_1.Balances,
    "BankTransaction": bankTransaction_1.BankTransaction,
    "BankTransactions": bankTransactions_1.BankTransactions,
    "BankTransfer": bankTransfer_1.BankTransfer,
    "BankTransfers": bankTransfers_1.BankTransfers,
    "BatchPayment": batchPayment_1.BatchPayment,
    "BatchPaymentDelete": batchPaymentDelete_1.BatchPaymentDelete,
    "BatchPaymentDeleteByUrlParam": batchPaymentDeleteByUrlParam_1.BatchPaymentDeleteByUrlParam,
    "BatchPaymentDetails": batchPaymentDetails_1.BatchPaymentDetails,
    "BatchPayments": batchPayments_1.BatchPayments,
    "Bill": bill_1.Bill,
    "BrandingTheme": brandingTheme_1.BrandingTheme,
    "BrandingThemes": brandingThemes_1.BrandingThemes,
    "Budget": budget_1.Budget,
    "BudgetBalance": budgetBalance_1.BudgetBalance,
    "BudgetLine": budgetLine_1.BudgetLine,
    "Budgets": budgets_1.Budgets,
    "CISOrgSetting": cISOrgSetting_1.CISOrgSetting,
    "CISOrgSettings": cISOrgSettings_1.CISOrgSettings,
    "CISSetting": cISSetting_1.CISSetting,
    "CISSettings": cISSettings_1.CISSettings,
    "Contact": contact_1.Contact,
    "ContactGroup": contactGroup_1.ContactGroup,
    "ContactGroups": contactGroups_1.ContactGroups,
    "ContactPerson": contactPerson_1.ContactPerson,
    "Contacts": contacts_1.Contacts,
    "ConversionBalances": conversionBalances_1.ConversionBalances,
    "ConversionDate": conversionDate_1.ConversionDate,
    "CreditNote": creditNote_1.CreditNote,
    "CreditNotes": creditNotes_1.CreditNotes,
    "Currencies": currencies_1.Currencies,
    "Currency": currency_1.Currency,
    "Element": element_1.Element,
    "Employee": employee_1.Employee,
    "Employees": employees_1.Employees,
    "ExpenseClaim": expenseClaim_1.ExpenseClaim,
    "ExpenseClaims": expenseClaims_1.ExpenseClaims,
    "ExternalLink": externalLink_1.ExternalLink,
    "HistoryRecord": historyRecord_1.HistoryRecord,
    "HistoryRecords": historyRecords_1.HistoryRecords,
    "ImportSummary": importSummary_1.ImportSummary,
    "ImportSummaryAccounts": importSummaryAccounts_1.ImportSummaryAccounts,
    "ImportSummaryObject": importSummaryObject_1.ImportSummaryObject,
    "ImportSummaryOrganisation": importSummaryOrganisation_1.ImportSummaryOrganisation,
    "Invoice": invoice_1.Invoice,
    "InvoiceReminder": invoiceReminder_1.InvoiceReminder,
    "InvoiceReminders": invoiceReminders_1.InvoiceReminders,
    "Invoices": invoices_1.Invoices,
    "Item": item_1.Item,
    "Items": items_1.Items,
    "Journal": journal_1.Journal,
    "JournalLine": journalLine_1.JournalLine,
    "Journals": journals_1.Journals,
    "LineItem": lineItem_1.LineItem,
    "LineItemItem": lineItemItem_1.LineItemItem,
    "LineItemTracking": lineItemTracking_1.LineItemTracking,
    "LinkedTransaction": linkedTransaction_1.LinkedTransaction,
    "LinkedTransactions": linkedTransactions_1.LinkedTransactions,
    "ManualJournal": manualJournal_1.ManualJournal,
    "ManualJournalLine": manualJournalLine_1.ManualJournalLine,
    "ManualJournals": manualJournals_1.ManualJournals,
    "ModelError": modelError_1.ModelError,
    "OnlineInvoice": onlineInvoice_1.OnlineInvoice,
    "OnlineInvoices": onlineInvoices_1.OnlineInvoices,
    "Organisation": organisation_1.Organisation,
    "Organisations": organisations_1.Organisations,
    "Overpayment": overpayment_1.Overpayment,
    "Overpayments": overpayments_1.Overpayments,
    "Payment": payment_1.Payment,
    "PaymentDelete": paymentDelete_1.PaymentDelete,
    "PaymentService": paymentService_1.PaymentService,
    "PaymentServices": paymentServices_1.PaymentServices,
    "PaymentTerm": paymentTerm_1.PaymentTerm,
    "Payments": payments_1.Payments,
    "Phone": phone_1.Phone,
    "Prepayment": prepayment_1.Prepayment,
    "Prepayments": prepayments_1.Prepayments,
    "Purchase": purchase_1.Purchase,
    "PurchaseOrder": purchaseOrder_1.PurchaseOrder,
    "PurchaseOrders": purchaseOrders_1.PurchaseOrders,
    "Quote": quote_1.Quote,
    "Quotes": quotes_1.Quotes,
    "Receipt": receipt_1.Receipt,
    "Receipts": receipts_1.Receipts,
    "RepeatingInvoice": repeatingInvoice_1.RepeatingInvoice,
    "RepeatingInvoices": repeatingInvoices_1.RepeatingInvoices,
    "Report": report_1.Report,
    "ReportAttribute": reportAttribute_1.ReportAttribute,
    "ReportCell": reportCell_1.ReportCell,
    "ReportFields": reportFields_1.ReportFields,
    "ReportRow": reportRow_1.ReportRow,
    "ReportRows": reportRows_1.ReportRows,
    "ReportWithRow": reportWithRow_1.ReportWithRow,
    "ReportWithRows": reportWithRows_1.ReportWithRows,
    "Reports": reports_1.Reports,
    "RequestEmpty": requestEmpty_1.RequestEmpty,
    "SalesTrackingCategory": salesTrackingCategory_1.SalesTrackingCategory,
    "Schedule": schedule_1.Schedule,
    "Setup": setup_1.Setup,
    "TaxComponent": taxComponent_1.TaxComponent,
    "TaxRate": taxRate_1.TaxRate,
    "TaxRates": taxRates_1.TaxRates,
    "TenNinetyNineContact": tenNinetyNineContact_1.TenNinetyNineContact,
    "TrackingCategories": trackingCategories_1.TrackingCategories,
    "TrackingCategory": trackingCategory_1.TrackingCategory,
    "TrackingOption": trackingOption_1.TrackingOption,
    "TrackingOptions": trackingOptions_1.TrackingOptions,
    "User": user_1.User,
    "Users": users_1.Users,
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
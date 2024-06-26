export * from '././accountUsage';
export * from '././accountUsageResponse';
export * from '././balanceSheetAccountDetail';
export * from '././balanceSheetAccountGroup';
export * from '././balanceSheetAccountType';
export * from '././balanceSheetResponse';
export * from '././bankStatementAccountingResponse';
export * from '././bankStatementResponse';
export * from '././bankTransactionResponse';
export * from '././cashAccountResponse';
export * from '././cashBalance';
export * from '././cashValidationResponse';
export * from '././cashflowAccount';
export * from '././cashflowActivity';
export * from '././cashflowResponse';
export * from '././cashflowType';
export * from '././contactDetail';
export * from '././contactResponse';
export * from '././contactTotalDetail';
export * from '././contactTotalOther';
export * from '././creditNoteResponse';
export * from '././currentStatementResponse';
export * from '././dataSourceResponse';
export * from '././historyRecordResponse';
export * from '././incomeByContactResponse';
export * from '././invoiceResponse';
export * from '././lineItemResponse';
export * from '././lockHistoryModel';
export * from '././lockHistoryResponse';
export * from '././manualJournalTotal';
export * from '././overpaymentResponse';
export * from '././paymentResponse';
export * from '././pnlAccount';
export * from '././pnlAccountClass';
export * from '././pnlAccountType';
export * from '././practiceResponse';
export * from '././prepaymentResponse';
export * from '././problem';
export * from '././problemType';
export * from '././profitAndLossResponse';
export * from '././reportHistoryModel';
export * from '././reportHistoryResponse';
export * from '././statementBalanceResponse';
export * from '././statementLineResponse';
export * from '././statementLinesResponse';
export * from '././statementResponse';
export * from '././totalDetail';
export * from '././totalOther';
export * from '././trialBalanceAccount';
export * from '././trialBalanceEntry';
export * from '././trialBalanceMovement';
export * from '././trialBalanceResponse';
export * from '././userActivitiesResponse';
export * from '././userResponse';
import { AxiosRequestConfig } from 'axios';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserializeDateFormats(type: string, data: any): Date;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: AxiosRequestConfig): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: any): void;
}

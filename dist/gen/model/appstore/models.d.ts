export * from '././createUsageRecord';
export * from '././plan';
export * from '././price';
export * from '././problemDetails';
export * from '././product';
export * from '././subscription';
export * from '././subscriptionItem';
export * from '././updateUsageRecord';
export * from '././usageRecord';
export * from '././usageRecordsList';
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

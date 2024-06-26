/**
 * Xero AppStore API
 * These endpoints are for Xero Partners to interact with the App Store Billing platform
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateUsageRecord } from '../model/appstore/createUsageRecord';
import { Subscription } from '../model/appstore/subscription';
import { UpdateUsageRecord } from '../model/appstore/updateUsageRecord';
import { UsageRecord } from '../model/appstore/usageRecord';
import { UsageRecordsList } from '../model/appstore/usageRecordsList';
import { Authentication } from '../model/appstore/models';
import { AxiosResponse } from 'axios';
import { OAuth } from '../model/appstore/models';
export declare enum AppStoreApiApiKeys {
}
export declare class AppStoreApi {
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
    setApiKey(key: AppStoreApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Retrieves a subscription for a given subscriptionId
     * @param subscriptionId Unique identifier for Subscription object
     */
    getSubscription(subscriptionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: Subscription;
    }>;
    /**
     *
     * @summary Gets all usage records related to the subscription
     * @param subscriptionId Unique identifier for Subscription object
     */
    getUsageRecords(subscriptionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: UsageRecordsList;
    }>;
    /**
     *
     * @summary Send metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param createUsageRecord Contains the quantity for the usage record to create
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    postUsageRecords(subscriptionId: string, subscriptionItemId: string, createUsageRecord: CreateUsageRecord, idempotencyKey?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: UsageRecord;
    }>;
    /**
     *
     * @summary Update and existing metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param usageRecordId The unique identifier of the usage record
     * @param updateUsageRecord Contains the quantity for the usage record to update
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    putUsageRecords(subscriptionId: string, subscriptionItemId: string, usageRecordId: string, updateUsageRecord: UpdateUsageRecord, idempotencyKey?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: AxiosResponse;
        body: UsageRecord;
    }>;
}

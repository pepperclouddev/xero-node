"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStoreApi = exports.AppStoreApiApiKeys = void 0;
const models_1 = require("../model/appstore/models");
const ApiError_1 = require("../../model/ApiError");
const axios_1 = __importDefault(require("axios"));
const models_2 = require("../model/appstore/models");
let defaultBasePath = 'https://api.xero.com/appstore/2.0';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AppStoreApiApiKeys;
(function (AppStoreApiApiKeys) {
})(AppStoreApiApiKeys || (exports.AppStoreApiApiKeys = AppStoreApiApiKeys = {}));
class AppStoreApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = { 'user-agent': 'xero-node-5.1.0' };
        this._useQuerystring = false;
        this.binaryHeaders = {};
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'OAuth2': new models_2.OAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[AppStoreApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.OAuth2.accessToken = token;
    }
    /**
     *
     * @summary Retrieves a subscription for a given subscriptionId
     * @param subscriptionId Unique identifier for Subscription object
     */
    getSubscription(subscriptionId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/subscriptions/{subscriptionId}'
                .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling getSubscription.');
            }
            localVarHeaderParams['Accept'] = acceptHeadersFromSpec.join();
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                params: localVarQueryParameters,
                headers: localVarHeaderParams,
                url: localVarPath,
                responseType: responseTypeOption,
                data: {},
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'Content-Type': 'multipart/form-data' });
                    }
                    else {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'content-type': 'application/x-www-form-urlencoded' });
                    }
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let body = null;
                    try {
                        const response = yield (0, axios_1.default)(localVarRequestOptions);
                        body = models_1.ObjectSerializer.deserialize(response.data, "Subscription");
                        if (response.status && response.status >= 200 && response.status <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                    catch (error) {
                        const errorResponse = new ApiError_1.ApiError(error);
                        reject(JSON.stringify(errorResponse.generateError()));
                    }
                }));
            });
        });
    }
    /**
     *
     * @summary Gets all usage records related to the subscription
     * @param subscriptionId Unique identifier for Subscription object
     */
    getUsageRecords(subscriptionId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/usage-records'
                .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling getUsageRecords.');
            }
            localVarHeaderParams['Accept'] = acceptHeadersFromSpec.join();
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                params: localVarQueryParameters,
                headers: localVarHeaderParams,
                url: localVarPath,
                responseType: responseTypeOption,
                data: {},
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'Content-Type': 'multipart/form-data' });
                    }
                    else {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'content-type': 'application/x-www-form-urlencoded' });
                    }
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let body = null;
                    try {
                        const response = yield (0, axios_1.default)(localVarRequestOptions);
                        body = models_1.ObjectSerializer.deserialize(response.data, "UsageRecordsList");
                        if (response.status && response.status >= 200 && response.status <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                    catch (error) {
                        const errorResponse = new ApiError_1.ApiError(error);
                        reject(JSON.stringify(errorResponse.generateError()));
                    }
                }));
            });
        });
    }
    /**
     *
     * @summary Send metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param createUsageRecord Contains the quantity for the usage record to create
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    postUsageRecords(subscriptionId, subscriptionItemId, createUsageRecord, idempotencyKey, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records'
                .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
                .replace('{' + 'subscriptionItemId' + '}', encodeURIComponent(String(subscriptionItemId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling postUsageRecords.');
            }
            // verify required parameter 'subscriptionItemId' is not null or undefined
            if (subscriptionItemId === null || subscriptionItemId === undefined) {
                throw new Error('Required parameter subscriptionItemId was null or undefined when calling postUsageRecords.');
            }
            // verify required parameter 'createUsageRecord' is not null or undefined
            if (createUsageRecord === null || createUsageRecord === undefined) {
                throw new Error('Required parameter createUsageRecord was null or undefined when calling postUsageRecords.');
            }
            localVarHeaderParams['Idempotency-Key'] = models_1.ObjectSerializer.serialize(idempotencyKey, "string");
            localVarHeaderParams['Accept'] = acceptHeadersFromSpec.join();
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                params: localVarQueryParameters,
                headers: localVarHeaderParams,
                url: localVarPath,
                responseType: responseTypeOption,
                data: models_1.ObjectSerializer.serialize(createUsageRecord, "CreateUsageRecord"),
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'Content-Type': 'multipart/form-data' });
                    }
                    else {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'content-type': 'application/x-www-form-urlencoded' });
                    }
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let body = null;
                    try {
                        const response = yield (0, axios_1.default)(localVarRequestOptions);
                        body = models_1.ObjectSerializer.deserialize(response.data, "UsageRecord");
                        if (response.status && response.status >= 200 && response.status <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                    catch (error) {
                        const errorResponse = new ApiError_1.ApiError(error);
                        reject(JSON.stringify(errorResponse.generateError()));
                    }
                }));
            });
        });
    }
    /**
     *
     * @summary Update and existing metered usage belonging to this subscription and subscription item
     * @param subscriptionId Unique identifier for Subscription object
     * @param subscriptionItemId The unique identifier of the subscriptionItem
     * @param usageRecordId The unique identifier of the usage record
     * @param updateUsageRecord Contains the quantity for the usage record to update
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    putUsageRecords(subscriptionId, subscriptionItemId, usageRecordId, updateUsageRecord, idempotencyKey, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records/{usageRecordId}'
                .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
                .replace('{' + 'subscriptionItemId' + '}', encodeURIComponent(String(subscriptionItemId)))
                .replace('{' + 'usageRecordId' + '}', encodeURIComponent(String(usageRecordId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new Error('Required parameter subscriptionId was null or undefined when calling putUsageRecords.');
            }
            // verify required parameter 'subscriptionItemId' is not null or undefined
            if (subscriptionItemId === null || subscriptionItemId === undefined) {
                throw new Error('Required parameter subscriptionItemId was null or undefined when calling putUsageRecords.');
            }
            // verify required parameter 'usageRecordId' is not null or undefined
            if (usageRecordId === null || usageRecordId === undefined) {
                throw new Error('Required parameter usageRecordId was null or undefined when calling putUsageRecords.');
            }
            // verify required parameter 'updateUsageRecord' is not null or undefined
            if (updateUsageRecord === null || updateUsageRecord === undefined) {
                throw new Error('Required parameter updateUsageRecord was null or undefined when calling putUsageRecords.');
            }
            localVarHeaderParams['Idempotency-Key'] = models_1.ObjectSerializer.serialize(idempotencyKey, "string");
            localVarHeaderParams['Accept'] = acceptHeadersFromSpec.join();
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                params: localVarQueryParameters,
                headers: localVarHeaderParams,
                url: localVarPath,
                responseType: responseTypeOption,
                data: models_1.ObjectSerializer.serialize(updateUsageRecord, "UpdateUsageRecord"),
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'Content-Type': 'multipart/form-data' });
                    }
                    else {
                        localVarRequestOptions.data = localVarFormParams;
                        localVarRequestOptions.headers = Object.assign(Object.assign({}, localVarRequestOptions.headers), { 'content-type': 'application/x-www-form-urlencoded' });
                    }
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let body = null;
                    try {
                        const response = yield (0, axios_1.default)(localVarRequestOptions);
                        body = models_1.ObjectSerializer.deserialize(response.data, "UsageRecord");
                        if (response.status && response.status >= 200 && response.status <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                    catch (error) {
                        const errorResponse = new ApiError_1.ApiError(error);
                        reject(JSON.stringify(errorResponse.generateError()));
                    }
                }));
            });
        });
    }
}
exports.AppStoreApi = AppStoreApi;
//# sourceMappingURL=appStoreApi.js.map
"use strict";
/**
 * Xero Bank Feeds API
 * The Bank Feeds API is a closed API that is only available to financial institutions that have an established financial services partnership with Xero. If you\'re an existing financial services partner that wants access, contact your local Partner Manager. If you\'re a financial institution who wants to provide bank feeds to your business customers, contact us to become a financial services partner.
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
exports.BankFeedsApi = exports.BankFeedsApiApiKeys = void 0;
const models_1 = require("../model/bankfeeds/models");
const ApiError_1 = require("../../model/ApiError");
const axios_1 = __importDefault(require("axios"));
const models_2 = require("../model/bankfeeds/models");
let defaultBasePath = 'https://api.xero.com/bankfeeds.xro/1.0';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var BankFeedsApiApiKeys;
(function (BankFeedsApiApiKeys) {
})(BankFeedsApiApiKeys || (exports.BankFeedsApiApiKeys = BankFeedsApiApiKeys = {}));
class BankFeedsApi {
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
        this.authentications[BankFeedsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(token) {
        this.authentications.OAuth2.accessToken = token;
    }
    /**
     * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
     * @summary Create one or more new feed connection
     * @param xeroTenantId Xero identifier for Tenant
     * @param feedConnections Feed Connection(s) array object in the body
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    createFeedConnections(xeroTenantId, feedConnections, idempotencyKey, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/FeedConnections';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling createFeedConnections.');
            }
            // verify required parameter 'feedConnections' is not null or undefined
            if (feedConnections === null || feedConnections === undefined) {
                throw new Error('Required parameter feedConnections was null or undefined when calling createFeedConnections.');
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                data: models_1.ObjectSerializer.serialize(feedConnections, "FeedConnections"),
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "FeedConnections");
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
     * @summary Creates one or more new statements
     * @param xeroTenantId Xero identifier for Tenant
     * @param statements Statements array of objects in the body
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    createStatements(xeroTenantId, statements, idempotencyKey, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/Statements';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json",
                "application/problem+json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling createStatements.');
            }
            // verify required parameter 'statements' is not null or undefined
            if (statements === null || statements === undefined) {
                throw new Error('Required parameter statements was null or undefined when calling createStatements.');
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                data: models_1.ObjectSerializer.serialize(statements, "Statements"),
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "Statements");
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
     * By passing in FeedConnections array object in the body, you can delete a feed connection.
     * @summary Delete an existing feed connection
     * @param xeroTenantId Xero identifier for Tenant
     * @param feedConnections Feed Connections array object in the body
     * @param idempotencyKey This allows you to safely retry requests without the risk of duplicate processing. 128 character max.
     */
    deleteFeedConnections(xeroTenantId, feedConnections, idempotencyKey, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/FeedConnections/DeleteRequests';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling deleteFeedConnections.');
            }
            // verify required parameter 'feedConnections' is not null or undefined
            if (feedConnections === null || feedConnections === undefined) {
                throw new Error('Required parameter feedConnections was null or undefined when calling deleteFeedConnections.');
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                data: models_1.ObjectSerializer.serialize(feedConnections, "FeedConnections"),
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "FeedConnections");
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
     * By passing in a FeedConnection Id options, you can search for matching feed connections
     * @summary Retrieve single feed connection based on a unique id provided
     * @param xeroTenantId Xero identifier for Tenant
     * @param id Unique identifier for retrieving single object
     */
    getFeedConnection(xeroTenantId, id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/FeedConnections/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling getFeedConnection.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFeedConnection.');
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "FeedConnection");
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
     * By passing in the appropriate options, you can search for available feed connections in the system.
     * @summary Searches for feed connections
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page&#x3D;1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
     * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize&#x3D;100 to specify page size of 100.
     */
    getFeedConnections(xeroTenantId, page, pageSize, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/FeedConnections';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling getFeedConnections.');
            }
            if (page !== undefined) {
                localVarQueryParameters['page'] = models_1.ObjectSerializer.serialize(page, "number");
            }
            if (pageSize !== undefined) {
                localVarQueryParameters['pageSize'] = models_1.ObjectSerializer.serialize(pageSize, "number");
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "FeedConnections");
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
     * By passing in a statement id, you can search for matching statements
     * @summary Retrieve single statement based on unique id provided
     * @param xeroTenantId Xero identifier for Tenant
     * @param statementId statement id for single object
     */
    getStatement(xeroTenantId, statementId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/Statements/{statementId}'
                .replace('{' + 'statementId' + '}', encodeURIComponent(String(statementId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling getStatement.');
            }
            // verify required parameter 'statementId' is not null or undefined
            if (statementId === null || statementId === undefined) {
                throw new Error('Required parameter statementId was null or undefined when calling getStatement.');
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "Statement");
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
     * By passing in parameters, you can search for matching statements
     * @summary Retrieve all statements
     * @param xeroTenantId Xero identifier for Tenant
     * @param page unique id for single object
     * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize&#x3D;100 to specify page size of 100.
     * @param xeroApplicationId
     * @param xeroUserId
     */
    getStatements(xeroTenantId, page, pageSize, xeroApplicationId, xeroUserId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/Statements';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            let acceptHeadersFromSpec = [
                "application/json",
                "application/problem+json"
            ];
            const isBufferType = acceptHeadersFromSpec.includes("application/pdf") || acceptHeadersFromSpec.includes("application/octet-stream") || acceptHeadersFromSpec.includes("application/jpg");
            const responseTypeOption = isBufferType ? "arraybuffer" : "json";
            // verify required parameter 'xeroTenantId' is not null or undefined
            if (xeroTenantId === null || xeroTenantId === undefined) {
                throw new Error('Required parameter xeroTenantId was null or undefined when calling getStatements.');
            }
            if (page !== undefined) {
                localVarQueryParameters['page'] = models_1.ObjectSerializer.serialize(page, "number");
            }
            if (pageSize !== undefined) {
                localVarQueryParameters['pageSize'] = models_1.ObjectSerializer.serialize(pageSize, "number");
            }
            localVarHeaderParams['Xero-Tenant-Id'] = models_1.ObjectSerializer.serialize(xeroTenantId, "string");
            localVarHeaderParams['Xero-Application-Id'] = models_1.ObjectSerializer.serialize(xeroApplicationId, "string");
            localVarHeaderParams['Xero-User-Id'] = models_1.ObjectSerializer.serialize(xeroUserId, "string");
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
                        body = models_1.ObjectSerializer.deserialize(response.data, "Statements");
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
exports.BankFeedsApi = BankFeedsApi;
//# sourceMappingURL=bankfeedsApi.js.map
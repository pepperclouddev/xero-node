"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelError = void 0;
/**
* On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
*/
class ModelError {
    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}
exports.ModelError = ModelError;
ModelError.discriminator = undefined;
ModelError.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ModelError.TypeEnum"
    }
];
(function (ModelError) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["InvalidRequest"] = 'invalid-request'] = "InvalidRequest";
        TypeEnum[TypeEnum["InvalidApplication"] = 'invalid-application'] = "InvalidApplication";
        TypeEnum[TypeEnum["InvalidFeedConnection"] = 'invalid-feed-connection'] = "InvalidFeedConnection";
        TypeEnum[TypeEnum["DuplicateStatement"] = 'duplicate-statement'] = "DuplicateStatement";
        TypeEnum[TypeEnum["InvalidEndBalance"] = 'invalid-end-balance'] = "InvalidEndBalance";
        TypeEnum[TypeEnum["InvalidStartAndEndDate"] = 'invalid-start-and-end-date'] = "InvalidStartAndEndDate";
        TypeEnum[TypeEnum["InvalidStartDate"] = 'invalid-start-date'] = "InvalidStartDate";
        TypeEnum[TypeEnum["InternalError"] = 'internal-error'] = "InternalError";
        TypeEnum[TypeEnum["FeedAlreadyConnectedInCurrentOrganisation"] = 'feed-already-connected-in-current-organisation'] = "FeedAlreadyConnectedInCurrentOrganisation";
        TypeEnum[TypeEnum["InvalidEndDate"] = 'invalid-end-date'] = "InvalidEndDate";
        TypeEnum[TypeEnum["StatementNotFound"] = 'statement-not-found'] = "StatementNotFound";
        TypeEnum[TypeEnum["FeedConnectedInDifferentOrganisation"] = 'feed-connected-in-different-organisation'] = "FeedConnectedInDifferentOrganisation";
        TypeEnum[TypeEnum["FeedAlreadyConnectedInDifferentOrganisation"] = 'feed-already-connected-in-different-organisation'] = "FeedAlreadyConnectedInDifferentOrganisation";
        TypeEnum[TypeEnum["BankFeedNotFound"] = 'bank-feed-not-found'] = "BankFeedNotFound";
        TypeEnum[TypeEnum["InvalidCountrySpecified"] = 'invalid-country-specified'] = "InvalidCountrySpecified";
        TypeEnum[TypeEnum["InvalidOrganisationBankFeeds"] = 'invalid-organisation-bank-feeds'] = "InvalidOrganisationBankFeeds";
        TypeEnum[TypeEnum["InvalidOrganisationMultiCurrency"] = 'invalid-organisation-multi-currency'] = "InvalidOrganisationMultiCurrency";
        TypeEnum[TypeEnum["InvalidFeedConnectionForOrganisation"] = 'invalid-feed-connection-for-organisation'] = "InvalidFeedConnectionForOrganisation";
        TypeEnum[TypeEnum["InvalidUserRole"] = 'invalid-user-role'] = "InvalidUserRole";
        TypeEnum[TypeEnum["AccountNotValid"] = 'account-not-valid'] = "AccountNotValid";
        TypeEnum[TypeEnum["FeedNotFoundOrAlreadyDeleted"] = 'feed-not-found-or-already-deleted'] = "FeedNotFoundOrAlreadyDeleted";
    })(TypeEnum = ModelError.TypeEnum || (ModelError.TypeEnum = {}));
})(ModelError || (exports.ModelError = ModelError = {}));
//# sourceMappingURL=modelError.js.map
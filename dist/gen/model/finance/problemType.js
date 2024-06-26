"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemType = void 0;
var ProblemType;
(function (ProblemType) {
    ProblemType[ProblemType["NotSet"] = 'NotSet'] = "NotSet";
    ProblemType[ProblemType["BankAccountNotFound"] = 'bank-account-not-found'] = "BankAccountNotFound";
    ProblemType[ProblemType["InternalError"] = 'internal-error'] = "InternalError";
    ProblemType[ProblemType["InvalidApplication"] = 'invalid-application'] = "InvalidApplication";
    ProblemType[ProblemType["InvalidRequest"] = 'invalid-request'] = "InvalidRequest";
    ProblemType[ProblemType["OrganisationNotFound"] = 'organisation-not-found'] = "OrganisationNotFound";
    ProblemType[ProblemType["OrganisationOffline"] = 'organisation-offline'] = "OrganisationOffline";
    ProblemType[ProblemType["RequestTimeout"] = 'request-timeout'] = "RequestTimeout";
    ProblemType[ProblemType["ServiceUnavailable"] = 'service-unavailable'] = "ServiceUnavailable";
    ProblemType[ProblemType["Unauthorized"] = 'unauthorized'] = "Unauthorized";
    ProblemType[ProblemType["RateLimitError"] = 'rate-limit-error'] = "RateLimitError";
})(ProblemType || (exports.ProblemType = ProblemType = {}));
//# sourceMappingURL=problemType.js.map
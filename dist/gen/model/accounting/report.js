"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
class Report {
    static getAttributeTypeMap() {
        return Report.attributeTypeMap;
    }
}
exports.Report = Report;
Report.discriminator = undefined;
Report.attributeTypeMap = [
    {
        "name": "reportName",
        "baseName": "ReportName",
        "type": "string"
    },
    {
        "name": "reportType",
        "baseName": "ReportType",
        "type": "Report.ReportTypeEnum"
    },
    {
        "name": "reportTitle",
        "baseName": "ReportTitle",
        "type": "string"
    },
    {
        "name": "reportDate",
        "baseName": "ReportDate",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "contacts",
        "baseName": "Contacts",
        "type": "Array<TenNinetyNineContact>"
    }
];
(function (Report) {
    let ReportTypeEnum;
    (function (ReportTypeEnum) {
        ReportTypeEnum[ReportTypeEnum["AgedPayablesByContact"] = 'AgedPayablesByContact'] = "AgedPayablesByContact";
    })(ReportTypeEnum = Report.ReportTypeEnum || (Report.ReportTypeEnum = {}));
})(Report || (exports.Report = Report = {}));
//# sourceMappingURL=report.js.map
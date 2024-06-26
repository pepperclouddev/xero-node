"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEntry = void 0;
class TimeEntry {
    static getAttributeTypeMap() {
        return TimeEntry.attributeTypeMap;
    }
}
exports.TimeEntry = TimeEntry;
TimeEntry.discriminator = undefined;
TimeEntry.attributeTypeMap = [
    {
        "name": "timeEntryId",
        "baseName": "timeEntryId",
        "type": "string"
    },
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "projectId",
        "baseName": "projectId",
        "type": "string"
    },
    {
        "name": "taskId",
        "baseName": "taskId",
        "type": "string"
    },
    {
        "name": "dateUtc",
        "baseName": "dateUtc",
        "type": "Date"
    },
    {
        "name": "dateEnteredUtc",
        "baseName": "dateEnteredUtc",
        "type": "Date"
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "TimeEntry.StatusEnum"
    }
];
(function (TimeEntry) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["LOCKED"] = 'LOCKED'] = "LOCKED";
        StatusEnum[StatusEnum["INVOICED"] = 'INVOICED'] = "INVOICED";
    })(StatusEnum = TimeEntry.StatusEnum || (TimeEntry.StatusEnum = {}));
})(TimeEntry || (exports.TimeEntry = TimeEntry = {}));
//# sourceMappingURL=timeEntry.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectGroup = void 0;
/**
* The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.
*/
var ObjectGroup;
(function (ObjectGroup) {
    ObjectGroup[ObjectGroup["Account"] = 'Account'] = "Account";
    ObjectGroup[ObjectGroup["BankTransaction"] = 'BankTransaction'] = "BankTransaction";
    ObjectGroup[ObjectGroup["Contact"] = 'Contact'] = "Contact";
    ObjectGroup[ObjectGroup["CreditNote"] = 'CreditNote'] = "CreditNote";
    ObjectGroup[ObjectGroup["Invoice"] = 'Invoice'] = "Invoice";
    ObjectGroup[ObjectGroup["Item"] = 'Item'] = "Item";
    ObjectGroup[ObjectGroup["ManualJournal"] = 'ManualJournal'] = "ManualJournal";
    ObjectGroup[ObjectGroup["Overpayment"] = 'Overpayment'] = "Overpayment";
    ObjectGroup[ObjectGroup["Payment"] = 'Payment'] = "Payment";
    ObjectGroup[ObjectGroup["Prepayment"] = 'Prepayment'] = "Prepayment";
    ObjectGroup[ObjectGroup["Quote"] = 'Quote'] = "Quote";
    ObjectGroup[ObjectGroup["Receipt"] = 'Receipt'] = "Receipt";
})(ObjectGroup || (exports.ObjectGroup = ObjectGroup = {}));
//# sourceMappingURL=objectGroup.js.map
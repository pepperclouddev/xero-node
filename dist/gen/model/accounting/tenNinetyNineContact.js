"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenNinetyNineContact = void 0;
class TenNinetyNineContact {
    static getAttributeTypeMap() {
        return TenNinetyNineContact.attributeTypeMap;
    }
}
exports.TenNinetyNineContact = TenNinetyNineContact;
TenNinetyNineContact.discriminator = undefined;
TenNinetyNineContact.attributeTypeMap = [
    {
        "name": "box1",
        "baseName": "Box1",
        "type": "number"
    },
    {
        "name": "box2",
        "baseName": "Box2",
        "type": "number"
    },
    {
        "name": "box3",
        "baseName": "Box3",
        "type": "number"
    },
    {
        "name": "box4",
        "baseName": "Box4",
        "type": "number"
    },
    {
        "name": "box5",
        "baseName": "Box5",
        "type": "number"
    },
    {
        "name": "box6",
        "baseName": "Box6",
        "type": "number"
    },
    {
        "name": "box7",
        "baseName": "Box7",
        "type": "number"
    },
    {
        "name": "box8",
        "baseName": "Box8",
        "type": "number"
    },
    {
        "name": "box9",
        "baseName": "Box9",
        "type": "number"
    },
    {
        "name": "box10",
        "baseName": "Box10",
        "type": "number"
    },
    {
        "name": "box11",
        "baseName": "Box11",
        "type": "number"
    },
    {
        "name": "box13",
        "baseName": "Box13",
        "type": "number"
    },
    {
        "name": "box14",
        "baseName": "Box14",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "federalTaxIDType",
        "baseName": "FederalTaxIDType",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "City",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "Zip",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "State",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "Email",
        "type": "string"
    },
    {
        "name": "streetAddress",
        "baseName": "StreetAddress",
        "type": "string"
    },
    {
        "name": "taxID",
        "baseName": "TaxID",
        "type": "string"
    },
    {
        "name": "contactId",
        "baseName": "ContactId",
        "type": "string"
    },
    {
        "name": "legalName",
        "baseName": "LegalName",
        "type": "string"
    },
    {
        "name": "businessName",
        "baseName": "BusinessName",
        "type": "string"
    },
    {
        "name": "federalTaxClassification",
        "baseName": "FederalTaxClassification",
        "type": "TenNinetyNineContact.FederalTaxClassificationEnum"
    }
];
(function (TenNinetyNineContact) {
    let FederalTaxClassificationEnum;
    (function (FederalTaxClassificationEnum) {
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["SOLEPROPRIETOR"] = 'SOLE_PROPRIETOR'] = "SOLEPROPRIETOR";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["PARTNERSHIP"] = 'PARTNERSHIP'] = "PARTNERSHIP";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["TRUSTORESTATE"] = 'TRUST_OR_ESTATE'] = "TRUSTORESTATE";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["NONPROFIT"] = 'NONPROFIT'] = "NONPROFIT";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["CCORP"] = 'C_CORP'] = "CCORP";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["SCORP"] = 'S_CORP'] = "SCORP";
        FederalTaxClassificationEnum[FederalTaxClassificationEnum["OTHER"] = 'OTHER'] = "OTHER";
    })(FederalTaxClassificationEnum = TenNinetyNineContact.FederalTaxClassificationEnum || (TenNinetyNineContact.FederalTaxClassificationEnum = {}));
})(TenNinetyNineContact || (exports.TenNinetyNineContact = TenNinetyNineContact = {}));
//# sourceMappingURL=tenNinetyNineContact.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    static getAttributeTypeMap() {
        return Product.attributeTypeMap;
    }
}
exports.Product = Product;
Product.discriminator = undefined;
Product.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "seatUnit",
        "baseName": "seatUnit",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "Product.TypeEnum"
    },
    {
        "name": "usageUnit",
        "baseName": "usageUnit",
        "type": "string"
    }
];
(function (Product) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["FIXED"] = 'FIXED'] = "FIXED";
        TypeEnum[TypeEnum["PERSEAT"] = 'PER_SEAT'] = "PERSEAT";
        TypeEnum[TypeEnum["METERED"] = 'METERED'] = "METERED";
    })(TypeEnum = Product.TypeEnum || (Product.TypeEnum = {}));
})(Product || (exports.Product = Product = {}));
//# sourceMappingURL=product.js.map
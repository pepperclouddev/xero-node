/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
<<<<<<< HEAD
 * The version of the OpenAPI document: 2.1.3
=======
 * The version of the OpenAPI document: 2.1.2
>>>>>>> master
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class OnlineInvoice {
    /**
    * the URL to an online invoice
    */
    'onlineInvoiceUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "onlineInvoiceUrl",
            "baseName": "OnlineInvoiceUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OnlineInvoice.attributeTypeMap;
    }
}


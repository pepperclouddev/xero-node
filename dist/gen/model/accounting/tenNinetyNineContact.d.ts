export declare class TenNinetyNineContact {
    /**
    * Box 1 on 1099 Form
    */
    'box1'?: number;
    /**
    * Box 2 on 1099 Form
    */
    'box2'?: number;
    /**
    * Box 3 on 1099 Form
    */
    'box3'?: number;
    /**
    * Box 4 on 1099 Form
    */
    'box4'?: number;
    /**
    * Box 5 on 1099 Form
    */
    'box5'?: number;
    /**
    * Box 6 on 1099 Form
    */
    'box6'?: number;
    /**
    * Box 7 on 1099 Form
    */
    'box7'?: number;
    /**
    * Box 8 on 1099 Form
    */
    'box8'?: number;
    /**
    * Box 9 on 1099 Form
    */
    'box9'?: number;
    /**
    * Box 10 on 1099 Form
    */
    'box10'?: number;
    /**
    * Box 11 on 1099 Form
    */
    'box11'?: number;
    /**
    * Box 13 on 1099 Form
    */
    'box13'?: number;
    /**
    * Box 14 on 1099 Form
    */
    'box14'?: number;
    /**
    * Contact name on 1099 Form
    */
    'name'?: string;
    /**
    * Contact Fed Tax ID type
    */
    'federalTaxIDType'?: string;
    /**
    * Contact city on 1099 Form
    */
    'city'?: string;
    /**
    * Contact zip on 1099 Form
    */
    'zip'?: string;
    /**
    * Contact State on 1099 Form
    */
    'state'?: string;
    /**
    * Contact email on 1099 Form
    */
    'email'?: string;
    /**
    * Contact address on 1099 Form
    */
    'streetAddress'?: string;
    /**
    * Contact tax id on 1099 Form
    */
    'taxID'?: string;
    /**
    * Contact contact id
    */
    'contactId'?: string;
    /**
    * Contact legal name
    */
    'legalName'?: string;
    /**
    * Contact business name
    */
    'businessName'?: string;
    /**
    * Contact federal tax classification
    */
    'federalTaxClassification'?: TenNinetyNineContact.FederalTaxClassificationEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace TenNinetyNineContact {
    enum FederalTaxClassificationEnum {
        SOLEPROPRIETOR,
        PARTNERSHIP,
        TRUSTORESTATE,
        NONPROFIT,
        CCORP,
        SCORP,
        OTHER
    }
}

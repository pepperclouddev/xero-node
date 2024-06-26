import { TaxComponent } from '././taxComponent';
export declare class TaxRate {
    /**
    * Name of tax rate
    */
    'name'?: string;
    /**
    * The tax type
    */
    'taxType'?: string;
    /**
    * See TaxComponents
    */
    'taxComponents'?: Array<TaxComponent>;
    /**
    * See Status Codes
    */
    'status'?: TaxRate.StatusEnum;
    /**
    * See ReportTaxTypes
    */
    'reportTaxType'?: TaxRate.ReportTaxTypeEnum;
    /**
    * Boolean to describe if tax rate can be used for asset accounts i.e.  true,false
    */
    'canApplyToAssets'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for equity accounts i.e true,false
    */
    'canApplyToEquity'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for expense accounts  i.e. true,false
    */
    'canApplyToExpenses'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for liability accounts  i.e. true,false
    */
    'canApplyToLiabilities'?: boolean;
    /**
    * Boolean to describe if tax rate can be used for revenue accounts i.e. true,false
    */
    'canApplyToRevenue'?: boolean;
    /**
    * Tax Rate (decimal to 4dp) e.g 12.5000
    */
    'displayTaxRate'?: number;
    /**
    * Effective Tax Rate (decimal to 4dp) e.g 12.5000
    */
    'effectiveRate'?: number;
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
export declare namespace TaxRate {
    enum StatusEnum {
        ACTIVE,
        DELETED,
        ARCHIVED,
        PENDING
    }
    enum ReportTaxTypeEnum {
        AVALARA,
        BASEXCLUDED,
        CAPITALSALESOUTPUT,
        CAPITALEXPENSESINPUT,
        ECOUTPUT,
        ECOUTPUTSERVICES,
        ECINPUT,
        ECACQUISITIONS,
        EXEMPTEXPENSES,
        EXEMPTINPUT,
        EXEMPTOUTPUT,
        GSTONIMPORTS,
        INPUT,
        INPUTTAXED,
        MOSSSALES,
        NONE,
        NONEOUTPUT,
        OUTPUT,
        PURCHASESINPUT,
        SALESOUTPUT,
        EXEMPTCAPITAL,
        EXEMPTEXPORT,
        CAPITALEXINPUT,
        GSTONCAPIMPORTS,
        GSTONCAPITALIMPORTS,
        REVERSECHARGES,
        PAYMENTS,
        INVOICE,
        CASH,
        ACCRUAL,
        FLATRATECASH,
        FLATRATEACCRUAL,
        ACCRUALS,
        TXCA,
        SRCAS,
        DSOUTPUT,
        BLINPUT2,
        EPINPUT,
        IMINPUT2,
        MEINPUT,
        IGDSINPUT2,
        ESN33OUTPUT,
        OPINPUT,
        OSOUTPUT,
        TXN33INPUT,
        TXESSINPUT,
        TXREINPUT,
        TXPETINPUT,
        NRINPUT,
        ES33OUTPUT,
        ZERORATEDINPUT,
        ZERORATEDOUTPUT,
        DRCHARGESUPPLY,
        DRCHARGE,
        CAPINPUT,
        CAPIMPORTS,
        IMINPUT,
        INPUT2,
        CIUINPUT,
        SRINPUT,
        OUTPUT2,
        SROUTPUT,
        CAPOUTPUT,
        SROUTPUT2,
        CIUOUTPUT,
        ZROUTPUT,
        ZREXPORT,
        ACC28PLUS,
        ACCUPTO28,
        OTHEROUTPUT,
        SHOUTPUT,
        ZRINPUT,
        BADDEBT,
        OTHERINPUT,
        BADDEBTRELIEF,
        IGDSINPUT3,
        SROVR,
        TOURISTREFUND,
        TXRCN33,
        TXRCRE,
        TXRCESS,
        TXRCTS,
        CAPEXINPUT,
        UNDEFINED,
        CAPEXOUTPUT,
        ZEROEXPOUTPUT,
        GOODSIMPORT,
        NONEINPUT,
        NOTREPORTED,
        SROVRRS,
        SROVRLVG,
        SRLVG,
        IM,
        IMESS,
        IMN33,
        IMRE,
        BADDEBTRECOVERY,
        USSALESTAX
    }
}

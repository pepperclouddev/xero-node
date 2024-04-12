import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { SalaryAndWage } from '././salaryAndWage';
export declare class SalaryAndWageObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'salaryAndWages'?: SalaryAndWage;
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

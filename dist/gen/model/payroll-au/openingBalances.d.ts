import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveLine } from '././leaveLine';
import { PaidLeaveEarningsLine } from '././paidLeaveEarningsLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperLine } from '././superLine';
export declare class OpeningBalances {
    /**
    * Opening Balance Date. (YYYY-MM-DD)
    */
    'openingBalanceDate'?: string;
    /**
    * Opening Balance tax
    */
    'tax'?: string;
    'earningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'superLines'?: Array<SuperLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'leaveLines'?: Array<LeaveLine>;
    'paidLeaveEarningsLines'?: Array<PaidLeaveEarningsLine>;
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

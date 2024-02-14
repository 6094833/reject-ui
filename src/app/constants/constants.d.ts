export interface Summary {
    row: number;
    scanDate: string;
    locationId: string;
    fedexId: string;
    orgCd: string;
    rejectReason: string;
    rejectCount: number;
    totalCount: number;
}

export interface Breakdown {
    row: number;
    scanType: string;
    exceprionCd: string;
    rejectCount: number;
    status: string;
}
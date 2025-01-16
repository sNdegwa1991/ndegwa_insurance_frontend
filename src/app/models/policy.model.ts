export interface Policy {
    id: number;
    policyHolderName: string;
    policyNumber: string;
    policyType: string;
    startDate: Date;
    endDate: Date;
    premium: number;
    isActive: boolean;
    createdAt: string;
  }

export interface ApplicationDoc extends Document {
    surName: string;   
    givenName: string;
    nationalId: string;
    email: string;
    teacherId: string;
    phone: string;
    dateOfBirth: Date;
    gender: "Male" | "Female" | "Other";
    maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
    numberOfDependencies: number;
    workSchool: string;
    position: string;
    monthlySalary: number;
    amountToPayPerMonth: number;
    amountRequested: number;
    repaymentPeriod: number;
    bankAccountNumber: string;
    proofOfEmployment: string;
    copyOfNationalId: string;
    loanStatus: "Pending" | "Update required" | "Approved" | "Rejected";
};
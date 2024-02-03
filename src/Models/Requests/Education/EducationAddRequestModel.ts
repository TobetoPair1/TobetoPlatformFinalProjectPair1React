export interface EducationAddRequestModel {
	userId: string;
	educationLevel: string;
	university: string;
	department: string;
	startofDate: number;
	graduationYear: number;
	isContinued: boolean;
}
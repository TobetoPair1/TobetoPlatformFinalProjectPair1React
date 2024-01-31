export interface CourseUpdateRequestModel {
	id: string;
	categoryId: string;
	name: string;
	imageUrl: string;
	startOfDate: string;
	endOfDate: string;
	timeSpent: number;
	estimatedTime: number;
	contentCount: number;
	producingCompany: string;
}
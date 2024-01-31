export interface CourseAddRequestModel {
	categoryId: string;
	likeId: string;
	name: string;
	imageUrl: string;
	startOfDate: string;
	endOfDate: string;
	timeSpent: number;
	estimatedTime: number;
	contentCount: number;
	producingCompany: string;
}
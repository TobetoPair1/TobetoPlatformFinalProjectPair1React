export interface ExamAddResponseModel {
	id: string;
	title: string;
	description: string;
	startOfDate: string;
	endOfTime: string;
	time: number;
	isCompleted: boolean;
	questionCount: number;
	score: number;
	type: string;
	trueCount: number;
	falseCount: number;
	emptyCount: number;
}

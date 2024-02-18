import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Paginate } from '../../core/Models/Paginate';
import { ApplicationGetListResponseModel } from '../../Models/Responses/Application/ApplicationGetListResponseModel';
import { CourseGetListResponseModel } from '../../Models/Responses/Course/CourseGetListResponseModel';
import { AnnouncementGetListResponseModel } from '../../Models/Responses/Announcement/AnnouncementGetListResponseModel';
import { DecodedTokenModel } from '../../core/Models/DecodedTokenModel';
import { SurveyGetListResponseModel } from '../../Models/Responses/Survey/SurveyGetListResponseModel';
import ApplicationService from '../../Services/ApplicationService';
import ExamService from '../../Services/ExamService';
import { ExamGetListResponseModel } from '../../Models/Responses/Exam/ExamGetListResponseModel';
import CourseService from '../../Services/CourseService';
import AnnouncementService from '../../Services/AnnouncementService';
import { UserGetResponseModel } from '../../Models/Responses/User/UserGetResponseModel';
import tokenService from '../../core/services/tokenService';
import { TokenModel } from '../../Models/Responses/Token/TokenModel';
import { jwtDecode } from 'jwt-decode';
import { PageRequestModel } from '../../Models/Requests/PageRequestModel';
import SurveyService from '../../Services/SurveyService';

const initialState: PlatformModel = {
  token: {} as DecodedTokenModel,
  applications: {} as Paginate<ApplicationGetListResponseModel>,
  courses: {} as Paginate<CourseGetListResponseModel>,
  announcements: {} as Paginate<AnnouncementGetListResponseModel>,
  surveys: {} as Paginate<SurveyGetListResponseModel>,
  exams: {} as Paginate<ExamGetListResponseModel>,
  user: {} as UserGetResponseModel,
};
export interface PlatformModel {
  token: DecodedTokenModel;
  exams: Paginate<ExamGetListResponseModel>;
  applications: Paginate<ApplicationGetListResponseModel>;
  courses: Paginate<CourseGetListResponseModel>;
  announcements: Paginate<AnnouncementGetListResponseModel>;
  surveys: Paginate<SurveyGetListResponseModel>;
  user: UserGetResponseModel;
}
export const getApplications = createAsyncThunk(
  'platform/getApplications',
  async function GetApplications(data: {
    id: string;
    pageRequest: PageRequestModel;
  }) {
    const applications = (
      await ApplicationService.GetListByUserId(data.pageRequest, data.id)
    ).data;
    return applications;
  }
);
export const getExams = createAsyncThunk(
  'platform/getExams',
  async function GetExams(data: { id: string; pageRequest: PageRequestModel }) {
    const exams = (await ExamService.GetListByUserId(data.pageRequest, data.id))
      .data;
    return exams;
  }
);

export const getCourses = createAsyncThunk(
  'platform/getCourses',
  async function GetCourses(data: {
    id: string;
    pageRequest: PageRequestModel;
  }) {
    const courses = (
      await CourseService.GetListByUserId(data.pageRequest, data.id)
    ).data;
    return courses;
  }
);
export const getAnnouncements = createAsyncThunk(
  'platform/getAnnouncements',
  async function GetAnnouncements(pageRequest: PageRequestModel) {
    const announcements = (await AnnouncementService.getAll(pageRequest)).data;
    return announcements;
  }
);
export const getSurveys = createAsyncThunk(
  'platform/getSurveys',
  async function GetSurveys(data: {
    id: string;
    pageRequest: PageRequestModel;
  }) {
    const surveys = (
      await SurveyService.GetListByUserId(data.pageRequest, data.id)
    ).data;

    return surveys;
  }
);

const platformSlice = createSlice({
  name: 'platform',
  initialState: initialState,
  reducers: {
    decodeToken: (state) => {
      const storageToken = tokenService.getToken();
      const token: TokenModel = JSON.parse(storageToken ? storageToken : '');
      const decodedToken: DecodedTokenModel = jwtDecode(token.token);
      state.token = decodedToken;
    },
    getUser: (state) => {
      const fullName =
        state.token[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ].split(' ');
      const id =
        state.token[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      state.user = {
        id: id,
        email: state.token.email,
        firstName: fullName[0],
        lastName: fullName[1],
        isInstructor: false,
      };
    },
    removePlatform:(state)=>{
      state.announcements=initialState.announcements;
      state.applications=initialState.applications;
      state.courses=initialState.courses;
      state.exams=initialState.exams;
      state.surveys=initialState.surveys;
      state.token=initialState.token;
      state.user=initialState.user;
    }
  },
  extraReducers(builder) {
    builder.addCase(getApplications.fulfilled, (state, action) => {
      state.applications = action.payload;
    });
    builder.addCase(getExams.fulfilled, (state, action) => {
      state.exams = action.payload;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });

    builder.addCase(getAnnouncements.fulfilled, (state, action) => {
      state.announcements = action.payload;
    });
    builder.addCase(getSurveys.fulfilled, (state, action) => {
      state.surveys = action.payload;
    });
  },
});

export const platformReducer = platformSlice.reducer;
export const platformActions = platformSlice.actions;

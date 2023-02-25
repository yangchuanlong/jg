// 登录
export const GET_TOKEN = '/auth/oauth/token'; // 登录

// 问卷
export const GET_QUESTION = '/question/v1000/get-by-channel-code'; // 问卷
export const CREATE_QUESTION = '/question-submit-data/v1000/create'; // 问卷数据提交表
export const GET_QUESTION_FIRST = '/question-item/v1000/get-first'; // 问卷第一题
export const GET_NEXT_QUESTION = '/question-item/v1000/get-next-by-order'; // 问卷下一题
export const GET_QUESTION_DETAIL = '/question-item/v1000/get-detail-by-id'; // 题目详情
export const SUBMIT_QUESTION = '/question-submit-data/v1000/submit'; // 提交问卷
export const GET_QUESTION_RESULT = '/question-submit-data/v1000/get-result-by-id'; // 提交问卷

// 反馈
export const CREATE_FEEDBACK_ITEM = '/question-feedback/v1000/create'; // 题目反馈
export const CREATE_FEEDBACK = '/question-item-feedback/v1000/create'; // 问卷反馈

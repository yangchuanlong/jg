import * as api from 'constants/api';
import request from 'utils/request';

// 登录
export function getToken(openId) {
  return request({
    url: api.GET_TOKEN,
    method: 'GET',
    params: {
      grant_type: 'wx.mini_program',
      scope: 'app',
      client_id: 'yinweifuli',
      openId,
    },
  });
}

// 问卷
export function getQuestion(code) {
  return request({
    url: `${api.GET_QUESTION}/${code}`,
    method: 'GET',
  });
}

// 问卷提交数据
export function createQuestionCreate(data) {
  return request({
    url: api.CREATE_QUESTION,
    method: 'POST',
    data,
  });
}

// 问卷第一题
export function getQuestionFirst(data) {
  return request({
    url: api.GET_QUESTION_FIRST,
    method: 'POST',
    data,
  });
}

// 问卷下一题(按顺序)
export function getNextQuestion(lastId) {
  return request({
    url: `${api.GET_NEXT_QUESTION}/${lastId}`,
    method: 'GET',
  });
}

// 题目详情
export function getQuestionDetail(id) {
  return request({
    url: `${api.GET_QUESTION_DETAIL}/${id}`,
    method: 'GET',
  });
}

// 提交问卷
export function submitQuestion(data) {
  return request({
    url: api.SUBMIT_QUESTION,
    method: 'POST',
    data,
  });
}

// 问卷结果
export function getQuestionResult(id) {
  return request({
    url: `${api.GET_QUESTION_RESULT}/${id}`,
    method: 'GET',
  });
}

// 题目反馈
export function createFeedbackItem(data) {
  return request({
    url: api.CREATE_FEEDBACK_ITEM,
    method: 'POST',
    data,
  });
}

// 问卷反馈
export function createFeedback(data) {
  return request({
    url: api.CREATE_FEEDBACK,
    method: 'POST',
    data,
  });
}

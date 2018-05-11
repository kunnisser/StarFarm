/**
 * @ author kunnisser
 * @ date 2018/3/14
 * @ description: 设置mock数据接口
*/

import Axios from 'axios';
import {MOCK_PATH} from '../utils/dispatchEnv';

const TIMEOUT = 8e3;

const getMock = (url) => {
  return (params) => Axios.get(url, {
    params,
    timeout: TIMEOUT
  });
};

const postMock = (url) => {
  return (params) => Axios.post(url, params, {
    timeout: TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'token': ''
    }
  })
};

const deleteMock = (url) => {
  return (id, params) => Axios.delete(url + '/' + id, {
    params: params,
    timeout: TIMEOUT
  });
};

const putMock = (url) => {
  return params => Axios.put(url, params);
};

const patchMock = (url) => {
  return (id, params) => Axios.patch(url + '/' + id, params, {
    timeout: TIMEOUT
    });
};

const getChargeRank = getMock(MOCK_PATH + '/stubGroup/compatibleCarList');

export {
  getChargeRank
}

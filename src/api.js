import axios from 'axios';
let base = '';

// 获取messageList
export const requestMessage = params => { return axios.get(`${base}/message`).then(res => res.data)};
// 获取urserList
export const requestUser = params => { return axios.get(`${base}/user`,{ params: params }).then(res => res.data)}
// 获取pagelist
export const getPageList = params => { return axios.get(`${base}/user/pageList`,{ params: params }).then(res => res.data)}
// 删除userList中某项数据
export const delUser = params => { return axios.get(`${base}/user/delete`, { params: params }).then(res => res.data)}
// 在userList中增加一条数据
export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }).then(res => res.data)}
// 编辑userList中某条数据
export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }).then(res => res.data)}
// 批量删除
export const batchRemoveUser = params => { return axios.get(`${base}/user/deleteSome`, { params: params }).then(res => res.data)}
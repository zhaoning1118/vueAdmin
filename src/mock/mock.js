import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
 
import {Message} from "./data/message.js"
import {User} from "./data/user.js"
let _Users = User;

export default {
    init () {
      var mock = new MockAdapter(axios);

      // 获取messagelist
      mock.onGet('/message').reply(200, {
          code: 1001, msg: '请求成功', Message
      })

      // 搜索获取tableList
      mock.onGet('/user').reply(config => {
        let {name} = config.params;
        let mockUsers = _Users.filter(user => {
          if (name && (user.name.indexOf(name)) == -1) return false;
          return true;
        });
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              User: mockUsers
            }]);
          }, 1000);
        });
      });

      //获取用户列表(分页)
      mock.onGet('/user/pageList').reply(config => {
        let {page, name} = config.params;
        let mockUsers = _Users.filter(user => {
          if (name && user.name.indexOf(name) == -1) return false;
          return true;
        });
        let total = mockUsers.length;
        mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20* (page - 1));
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              total: total,
              User: mockUsers
            }]);
          }, 1000);
        });
      });

      // 删除tableList中某项数据
      mock.onGet('/user/delete').reply(config => {
        let { id } = config.params;
        // 过滤出要删除的项
        _Users = _Users.filter(User => User.id !== id);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              code: 200,
              msg: '删除成功'
            }]);
          }, 500);
        });
      });

      // 批量删除tableList中某些数据
      mock.onGet('/user/deleteSome').reply(config => {
        let { ids } = config.params;
        // 切割成数组
        ids=ids.split(',');
        // 过滤出要删除的项
        _Users = _Users.filter(User => !ids.includes(User.id));
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              code: 200,
              msg: '删除成功'
            }]);
          }, 500);
        });
      });

      // 在tableList中增加一条数据
      mock.onGet('/user/add').reply(config=>{
        let { name, address, date, PID, sex } = config.params;
        _Users.push({
          name: name,
          address: address,
          date: date,
          PID: PID,
          sex: sex
        });
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              code: 200,
              msg: '新增成功'
            }]);
          }, 500);
        });
      });

      // 编辑tableList中某条数据
      mock.onGet('/user/edit').reply(config=>{
        let {id, name, address, date, PID, sex } = config.params;
        _Users.some(User=>{
          if(User.id==id){
              User.name = name;
              User.address = address;
              User.date = date;
              User.PID = PID;
              User.sex = sex;
              return true;
          }
        });
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([200, {
              code: 200,
              msg: '编辑成功'
            }]);
          }, 500);
        });
      });
    }
}
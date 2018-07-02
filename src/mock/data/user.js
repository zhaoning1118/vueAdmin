import Mock from 'mockjs' 
const Random = Mock.Random; 
const User=[];
for (let i=0; i<100; i++){
    User.push(Mock.mock({
       id: Mock.Random.guid(),
	   name: Random.cname(),
	   date: Random.date() ,
	   PID:Random.id(),
	   sex:Random.pick(['男','女']),
	   address:Random.county(true)
    }))
}
export {User}
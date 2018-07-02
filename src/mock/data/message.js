import Mock from 'mockjs' 
const Random = Mock.Random; 

const Message = [];
for (let i=0; i<20; i++){
    Message.push(Mock.mock({
        name: Random.cname(),
	    date: Random.date()  
    }))
}
 
export {Message}
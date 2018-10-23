const fs=require('fs');

// 写文件
const obj={name:'小明',age:'23'};

// JSON.stringfy()  把对象转为字符串
// JSON.parse()  把字符串转为对象

const objstr=JSON.stringify(obj);
console.log(objstr);

fs.writeFile('write.txt',objstr,(err)=>{
  // console.log(err);
})

fs.appendFile('write.txt',objstr,(err)=>{
  // console.log(err);
})


fs.rmdir('www',(err)=>{
  console.log(err);
})

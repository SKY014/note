/**
 * @name promise对象
 * 
 * promise是异步编程的一种解决方案 
 * 比传统的解决方案 回调函数和事件
 * 
 * 简单来说就是一个容器
 * 语法上 promise是一个对象
 * 
 * 两个特点
 * 对象的状态不受外界影响
 * 一旦状态改变 就不会再变
 * 
 * 
 * 
 * */ 

/**
 * promise对象是一个构造函数
 * 
 * 
 * */ 

const promise = new Promise(function(resolve,reject){
  if(true){
    resolve(value);
  }else{
    reject(error);
  }
});

promise.then(function(value){},function(error){});

function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms,'done');
  })
}

timeout(100).then((value)=>{
  console.log(value);
})

/**
 * @name promise对象实现ajax操作的例子
 * 
 * 
 * 
 * 
 * */ 

const getJSON = function(url){
  const promise = new Promise(function(resolve,reject){
    const handler = function(){
      if(this.readyState !==4){
        return;
      }
      if(this.status===200){
        resolve(this.response);
      }else{
        reject(new Error(this.ststusText));
      }
    };

    const client = new XMLHttpRequest();
    client.open('GET',url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept','application/json');
    client.send();
  });

  return promise;
}

getJSON('/post.json').then(function(json){
  console.log('Contents:'+json);
},function(error){
  console.error('出错了',error);
})
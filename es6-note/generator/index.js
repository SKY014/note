/**
 * @name generator
 * @author sky014
 * 
 * */ 

/**
 * generator 函数式es6提供的一种异步编程解决方案
 * 
 * 行驶时 generator函数式一个普通函数
 * function关键字和函数名之间有一个星号
 * 
 * 调用generator函数的调用方法和pt函数一样 也是在函数名后面加上一对圆括号
 * 不同的是 调用generator函数后 贵啊函数并不执行 返回的也不是函数运行的结果
 * 而是一个指向内部转态的指针对象
 * 
 * 必须调用遍历器对象的next方法 
 * 
 * */ 

function* helloWorldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
// console.log(hw);
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

/**
 * next 方法的参数
 * 
 * */ 

function* f(){
  for(var i=0;true;i++){
    var reset = yield i;
    if(reset){i = -1;}
  }
}

var g =f();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function* foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

for (let v of foo()){
  console.log(v);
}






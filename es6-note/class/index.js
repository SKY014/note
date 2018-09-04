/**
 * @name class类
 * @author sky014
 * 
 * */ 

/**
 * 在js中，生成实例对象的传统方法是通过构造函数
 * es6引入了类的概念，作为对象的模板，通过class关键字，可以定义类
 * 
 * 
 * */

class Point{
  constructor(x,y){
    this.x=x;
    this.y=y
  }

  toString(){
    return '('+this.x+','+this.y+')';
  }
}

/**
 * 构造函数的prototype属性 ，在es6的类上面继续存在 事实上
 * 类的所有方法都定义在类的prototype上
 * 
 * */ 

class B{};

let b = new B();
console.log(b.constructor===B.prototype.constructor,'00');



// 由于类的方法都定义在prototype对象上面
// 所以，类的新方法可以添加在prototype对象上面Object.assign方法
// 可以很方便的一次向类添加多个方法
Object.assign(Point.prototype,{
  toValue(){}
});


/**
 * @name Object方法
 *  
 * 
 * */ 



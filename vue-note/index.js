/**
 * @name vue基础
 * @author sky014
 * 
 * */ 
console.log(Vue);


// 创建vue对象
// el：vue作用的标签
// data：使用的数据
var app = new Vue({
  el:'#app',
  data:{
    message:'hello vue!',
    html:'<a href="http://www.baidu.com">百度</a>',
    color:'red',
    
  },
  /**
   * 生命周期钩子；在vue实例的某个阶段会自动执行的方法；
   * 我们可以利用这些方法添加具体操作；
   * 比如在mounted中进行vue的一些初始化操作；在destoryed中进行一些清除操作
   * 常用的钩子函数有
   * created 创建时调用 mounted挂载时调用 
   * updata更新时操作   destoryed销毁被调用
   * 
   * */ 
  created(){
    console.log('vue实例创建好了');
  },

  mounted(){
    console.log('vue实例挂载到DOM上');
  },

  updata(){
    console.log('vue实例被更新了')
  },

  destoryed(){
    console.log('vue实例被销毁了');
  },

  /**
   * methods对象 存放自己定义的方法
   * 
   * */ 
  methods:{

  },

  /**
   * computed 对象
   * 存放计算属性
   * 
   * */ 
  computed:{},

  /**
   * watch对象 监听属性变化，可以执行对应的回调函数
   * 
   * */ 
  watch:{}


})

console.log(app,'vue对象实例');

/**
 * 架构
 * MVC:model-view-controller 模型-视图-控制器
 * MVVM:model-view-viewmodel 模型-视图-视图模型
 * 
 * */ 
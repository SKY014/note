/**
 * @author sky014
 * @version 1.0
 * @name webpack笔记
 * */ 

// 四个核心概念 入口entry 输出output loader 插件plugins

/**
 * 1 入口起点 指示webpack应该使用那个模块
 * */ 

// 2 出口 默认为 ./dist文件 需要引入node的path模块 

/**
 * 3 loader 让webpack能够去处理那些非js文件（webpack自身只理解js）
 * loader可以将所有类型的文件转换为webpack能够处理的有效模块
 * 然后你就可以利用webpack的打包能力，对他们进行处理
 * 
 * 本质上 webpack loader将所有类型的文件，转换为应用程序的
 * 依赖图 可以直接引用的模块
 * 
 * 在高层面上 webpack的配置中的loader有两个目标
 * 1.test 属性，用于标识出应该被对应的loader进行转换的某个文件或某些文件
 * 2.use 属性，表示进行转换时，应该使用那个loader
 * 
 * */ 

/**
 * 4 插件 plugins
 * 可以用于执行范围更广的任务 插件的范围包括 从打包优化和压缩，一直到重新定义
 * 环境中的变量插件接口功能极其强大，可以用来处理各种各样的任务
 * 
 * 需要require()  它 需要使用new操作符来创建它的一个实例
 * 
 * */  


/**
 *    模式   mode
 * */  



/**
 * @ 注释学习
 * 
 * @argument 论据 内容提要
 * @augments 增加
 * @author 作者
 * @borrows 借用
 * @callback 回调
 * @class 类
 * @constant 不变量
 * @constructor 构造函数
 * @constructs 构念
 * @default 默认
 * @deprecated 不赞成
 * @description 描述
 * @event 事件
 * @example 列子
 * @extends 扩充继承 
 * @field 领域
 * @fileOverview 文件信息
 * @function 方法
 * @ignore 忽略
 * @inheritDoc 继承文档
 * @inner 内部的
 * @lends 作用域
 * @link 链接
 * @memberOf 成员
 * @method 方法
 * @name 名字
 * @namespace 命名空间
 * @param 参数
 * @private 私有的 私人的
 * @prop 支持
 * @property 性能
 * @public 公用的
 * @requires 需求
 * @returns 回报
 * @see 理解
 * @since 因为由于 从...来
 * @static 静态的
 * @template 模板
 * @throws 投
 * @type 类型
 * @typedef 定义类型
 * @version 版本
 * 
 * */  

/**
 * @name 入口起点
 * entry points
 * 
 * 1.单个入口语法 （简写）
 * 用法： entry：string|Array<string>
 * 此语法在拓展配置时有失灵活性。
 * 
 * 2.对象语法
 * entry：{[entryChunkName:string]:string|Array<string>}
 * 对象语法会比较繁琐，然而，这是应用程序中定义入口的最可拓展的方式
 * 
 * 根据经验 每个html文档只使用一个入口起点
 * 
 * 
 * */ 


/**
 * @name 输出output
 * 配置output选项可以控制webpack如何向硬盘写入编译文件，
 * 即使可以存在多个入口起点，但只能指定一个输出配置
 * 
 * 值设置为一个对象 包括以下两点
 * filename 用于输出文件的文件名
 * 目标输出目录 path 的绝对路径
 * 
 * 多个入口起点
 * 如果配置创建了多个单独的chunk 应该使用占位符来确保每个文件具有唯一的名称
 * 
 * 高阶进阶
 * 使用cdn和资源hash的复杂实例
 * 
 * 
 * */  


/**
 * @name 模式mode
 * value：string
 * 
 * 只在配置中提供mode选项
 * 
 * 或者从CLI参数中传递
 * webpack --mode=production
 * 支持以下字符串   development production
 * 
 * 
 * */ 



/**
 * 
 * @name loader
 * 
 * loader用于对模块的源代码进行转换 loader可以使你在import 或“加载”模块时预处理文件
 * loader类似于其他构件工具中的任务（task），并提供了处理前端构架步骤的强大方法
 * 甚至允许你直接在js中import css文件!（必须加个感叹号）
 * 
 * 使用loader 三个方式
 * 配置（推荐）在webpack.config.js文件中指定loader
 * 内联 在每个import 语句中显式指定loader
 * CLI 在shell命令中指定他们
 * 
 * CLI 
 * webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
 * 
 * 
 * */

 
/**
 * @name 插件plugins
 * 
 * 插件是webpack的支柱功能 webpack自身也是构建于
 * 你在webpack配置中用到的相同的插件系统之上
 * 插件目的在于解决loader无法实现的其他事
 * 
 * webpack插件是一个具有apply属性的js对象
 * apply属性会被webpack compiler 调用 
 * 并且compiler对象可在整个编译生命周期访问
 * 
 * 
 * 
 * 
 * */ 

/**
 * @name 2018-9-3
 * 
 * 
 * */ 







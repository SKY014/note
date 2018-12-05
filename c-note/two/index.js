/! 数据类型与表达式 !/
// # c 的数据类型
// 计算模型
// 原始数据通过键盘输入 -- 读数 --内存数据区--处理--内存数据区-- 输出--运算结果通过显示器显示
// c的数据类型主要分为六大数据类型 
// 1.基本类型 分为数值和字符类型 char   数值类型又分为整型和浮点型 整型分为短整型short 基本整型int 和长整型long 浮点型 分为单精度float和双精度double
// 2.构造类型 数组 结构体struct 共用体union 
// 3.枚举类型 enum
// 4.指针类型 
// 5.空类型 void
// 6.定义类型 typedef

// # c的整型数据与补码
// 数值型数据存储特点 用二进制存储 用有限的数位表示 用补码表示
// 补码 正数的补码同源码 负数的补码为按位取反 末尾加1 
// 为什么要用补码？ 组成特点 只有加法器没有减法器 只能减去某数的运算研究如何用加法来完成

// # c的实型数据与运算精度的问题 
// 实型数据的存储特点 float型分配4Byte double型数据分配8
// 由于计算机中用有限的位数表示实数 所以 误差在所难免 对策 应该根据精度的需求 选择使用单精度还是双精度数据

// # 常量 整型常量与实型常量
// 整型常量 十进制 八进制 十六进制 三种形式 没有小数部分
// 实型常量 由整数部分和小数部分组成
// 定点数形式 指数形式 
// 常量 字符常量 包括字符常量和字符串常量两种形式 
// 存储方式：字符在内存中存储的是 ascii值
// 转译字符常量 

//  # 常量 符号常量
// 使用说明 习惯用大写和变量名区别 不可以再有其他变量与之重名 本质上是在编译预编译阶段进行的替换 习惯放在程序开头
// 可读性好 可维护性好 一改全改

// # 变量 
// 三个基本要素 变量名 类型 值
// 变量名命名规则 标识符只能由字母数字下划线组成 第一个字符必须是字母或者下划线 标识符不能与c系统中规定的关键字保留字相同 
// 命名变量尽量做到见名知意 区分大小写
// 变量定义方法 变量类型 变量名列表 本质 向编译系统申请内存空间
// 变量的值 变量对应的内存单元中所存储的数据值
// 变量赋值 有三种途径可以改变变量的值 1.用赋值运算符 2.用scanf() 从键盘读入数据 3.在程序执行后 执行语句动态的改变变量的值

// # c的运算符和表达式
// 算数运算符 关系运算符 逻辑运算符 位运算符 赋值运算符 条件运算符  逗号运算符 指针运算符 求字节数运算符 强制类型转换运算符 分量运算符 下标运算符 其他
// 单目 双目 三目 其他
// 运算符优先级
// 结合性

// #表达式中数据间的混合运算与类型转换
// 隐含转换 强制转换

// 赋值表达式
// = 在c的运算中称为赋值运算符 左侧为一个常量 右侧为一个表达式 
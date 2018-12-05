/! 指针 !/
// # 指针变量的定义与初始化
// 存储地址的变量的类型就是指针类型
// 能直接对内存地址操作 实现动态存储管理
// 容易产生副作用 初学者往往会出错
// 学习时应特别细心 多动脑 多对比 多上机
// 变量的地址和变量的值
// 内存地址是连续的存储空间 若对内存进行编址 内存地址也是连续的 它的基本单位是字节
// 内存分配 系统根据类型为变量分配内存单元 变量内存单元的其实地址即为变量的地址 编译后 每个变量名对应一个地址 对变量的访问就是通过这个地址进行的
// 变量引用 从变量名对应的地址开始的若干内存单元（字节数由定义类型确定）中取出数据
// 变量赋值 将数据按该变量定义的存储类型存入对应的内存单元中 内存单元的内容就是变量的值
// 内存中每个字节有一个编号--地址 编译或函数调用时为其 分配内存单元 变量是程序中数据存储空间的抽象
// 指针变量的定义 一般形式[存储类型]数据类型 *指针变量名
// 指针变量与其所指向的变量之间的关系


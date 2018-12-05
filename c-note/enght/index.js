/! 文件 !/
// # 文件的概述与文件指针
// 大批量的数据如何输入到处理程序
// 程序运行后大批量数据时如何输出的
// 文件的作用 大批量的数据输入输出 使用文件可提高效率 数据可以长期保存 反复使用 
// 文件的概念 指一组数据的有序集合 文件通常是驻留在外部介质上的 在使用时才调入内存中来

// 文件的分类 从用户的角度看 文件可以分为普通文件和设备文件 从文件的读写方式来看 文件可分为顺序读写文件和随机存取文件
// 从编码方式分为 askii码文件和二进制码文件
// 二进制存储方式所占空间较多 并且所占空间大小与数值大小相关
// 标准输入设备键盘 和标准输出设备显示器 是作为askii码文件来处理的
// 文件的操作流程 建立打开文件 2.从文件中读取数据和向文件中写数据 3.关闭文件
// 文件缓存区 文件中的一块区域 用于进行文件读写操作时数据的占存 大小一般为512字节 和磁盘读写单位一致
// 磁盘的读写速度相对于cpu很慢 为提高程序执行效率 通过设置文件缓存区 减少对磁盘的读写次数

// 文件指针 在文件读写过程中 系统需要确定文件信息 当前的读写位置 缓冲区状态等信息 才能顺利实现文件操作
// 在c语言中用一个指针变量指向一个文件 这个文件称为文件指针
// 定义文件指针的一般形式为 FILE *指针变量标识符 
// 说明 FILE应该为大写 他实际上是由系统定义的一个结构体 该结构体中含有文件名 文件状态 和当前位置等信息 

// # 文件打开关闭与顺序读写
// 文件的打开与关闭 
// 1.打开文件 实际上是建立文件的各种有关信息 并使文件指针指向该文件 以便对他进行读写操作
// 2.关闭文件 是断开指针与文件之间的联系 也就是禁止再对文件进行操作
// 在c语言中 文件操作都是由库函数来完成的
// 文件打开 文件指针名=fopen(文件名，打开文件方式)； 文件指针名 必须说明为FILE 类型的指针变量 打开文件方式 是指文件的类型和操作要求 文件名是要打开文件的文件名

// 文件打开方式 r/rb 只读 w/wb 只写
// 文件打开方式补充说明 打开文件时 如果出错 fopen函数将返回一个空指针NULL
// 把askii码文件方式写入磁盘时要更多的时间
// 系统定义了三个文件指针 stdin stdout stderr 分别用来指向终端输入 终端输出和标准出错输出
// 关闭文件 fclose(文件指针) 
// 文件的顺序读写 fgetc() 和 fputc() 
// 字符串读写函数 fgets() 和fputs() 行读写函数

// # 文件格式化读写与随机读写
// 格式化读写函数 fscanf() 和 fprintf() 

// 12.5+7.5+5+10+12.5+5+7.5+12.5

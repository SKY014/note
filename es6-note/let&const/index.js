// es6新增了let命令 声明的变量，只在代码块内有效
{
  let a=10;
  var b=1;
  console.log(a,'let声明的变量只能在代码块内有效')
}
// console.log(a);
console.log(b);
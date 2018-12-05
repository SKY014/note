# include <stdio.h> //预处理命令 

int main(){ //主函数
  float s,r; //定义两个浮点型数据s和r
  printf("请输入圆半径"); //输入数据
  scanf ("%f",&r);
  s=3.14159*r*r; //计算并输出结果
  printf("圆面积=%f",s);
  return 0;
}



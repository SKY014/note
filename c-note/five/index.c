// 求五个同学的平均成绩
# include <stdio.h>

int main(){
  int i ;
  float s[5],sum=0,ave;
  for(i=0;i<=4;i++){
    scanf("%f",&s[i]);
    sum+=s[i];
  }
  ave=sum/5;
  printf("%f\n",ave);
  if(s[i]>ave) printf("%f\n",s[i]);
}





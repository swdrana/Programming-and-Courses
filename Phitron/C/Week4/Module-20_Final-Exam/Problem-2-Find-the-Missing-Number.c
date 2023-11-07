#include<stdio.h>
int main(){
    int T;
    scanf("%d",&T);
    for(int j=0; j<T; j++)
    {
        long long int mul, a, b, c;
        scanf("%lld %lld %lld %lld", &mul, &a, &b, &c);
        long long int mulOfabc = a*b*c;
        long long int rest = mul/mulOfabc;
        if(mul == rest*mulOfabc){
            printf("%lld\n", rest);
        }else{
            printf("-1\n");
        }
    }
    
    return 0;
}
#include<stdio.h>
int main(){
    int T;
    scanf("%d",&T);
    for(int j=0; j<T; j++)
    {
        int N;
        scanf("%d",&N);
        char s[N];
        scanf("%s",s);
        int T=0, P=0;
        for (int i = 0; i < N; i++)
        {
            if(s[i]=='T'){
                T++;
            }else{
                P++;
            }
        }
        if (T>P)
        {
            printf("Tiger\n");
        }else if(T<P){
            printf("Pathaan\n");
        }else{
            printf("Draw\n");
        }
    }
    
    return 0;
}
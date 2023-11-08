#include<stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int line=6;
    if(n>1){
        int temp = n-1;
        int temp2 = temp/2;
        line = line + temp2;
    }
    int space = line-1;
    int star = 1;
    // printf("%d \n", space);
    for (int i = 0; i < line; i++)
    {
        for (int j = 0; j < space; j++)
        {
            printf(" ");
        }
        space--;
        for (int i = 0; i < star; i++)
        {
            printf("*");
        }
        star+=2;
        printf("\n");
    }
    space = line - n/2 - 1;
    for (int i = 0; i < 5; i++)
    {
       for (int j = 0; j < space; j++)
       {
        printf(" ");
       }
       for (int j = 0; j < n; j++)
       {
        printf("*");
       }
       printf("\n");
    }
    
    // printf("%d \n", space);
    return 0;
}
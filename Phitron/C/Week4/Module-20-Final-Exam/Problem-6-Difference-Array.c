#include<stdio.h>
int main(){
    int t;
    scanf("%d",&t);
    for (int n = 0; n < t; n++)
    {
        int input;
        scanf("%d",&input);
        int a[input], b[input], c[input];
        for (int i = 0; i < input; i++)
        {
            scanf("%d",&a[i]);
        }

        // copy array 
        for (int i = 0; i < input; i++)
        {
            // printf("%d",a[j]);
            b[i]=a[i];
        }

        // sort assenting b[]
        int temp;
        for (int i = 0; i < input; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                if(b[i]<b[j]){
                    temp = b[j];
                    b[j]=b[i];
                    b[i]=temp;
                }
            }
        }

        // different and absolute value 
        for (int i = 0; i < input; i++)
        {   
            if (a[i]-b[i]<0)
            {
                c[i]=(a[i]-b[i])*-1;
            }else{
                c[i]=a[i]-b[i];
            }
        }
        
        // print the diff absolute value 
        for (int i = 0; i < input; i++)
        {
            printf("%d ",c[i]);
        }
        printf("\n");
    }
    return 0;
}
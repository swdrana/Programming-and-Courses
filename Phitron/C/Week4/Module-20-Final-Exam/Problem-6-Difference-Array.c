#include<stdio.h>
int main(){
    int t;
    scanf("%d",&t);
    for (int i = 0; i < t; i++)
    {
        int n;
        scanf("%d",&n);
        int a[n], b[n], c[n];
        for (int j = 0; j < n; j++)
        {
            scanf("%d",&a[j]);
        }
        for (int j = 0; j < n; j++)
        {
            // printf("%d",a[j]);
            b[j]=a[j];
        }
        int temp;
        for (int j = 0; j < n; j++)
        {
            for (int k = 0; k < n-i; k++)
            {
                if (b[k] > b[k + 1]) {
                    temp = b[k];
                    b[k] = b[k + 1];
                    b[k + 1] = temp;
                }
            }
            
        }
        for (int j = 0; j < n; j++)
        {
            c[j]=a[j]-b[j];
        }
        for (int j = 0; j < n; j++)
        {
            printf("%d ",c[j]);
        }
        printf("\n");
    }
    
    
    
    return 0;
}
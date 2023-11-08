#include<stdio.h>
int main(){
    int r,c;
    scanf("%d %d",&r, &c);
    int a[r][c];
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            scanf("%d",&a[i][j]);
        }
        
    }
    int flug = 1;
    
    for (int row = 0, last=r-1; row < r; row++, last--)
    {
        if (flug == 0)
        {
            break;
        }
        
        int p1=row, p2=c-1-p1;
        for (int col = 0; col < c; col++)
        {
            if(row==col || col==p2){
                // printf("%d%d ",row,col);
                if (a[row][col]==1)
                {
                    flug = 1;
                }else{
                    flug = 0;
                    break;
                }
            }else if(a[row][col]!=0){
                flug = 0; 
                // printf("%d%d ",row,col);
                break;
            }
        }
        // printf("\n");
        p2--;
    }
    if (flug){
        printf("YES");
    }else{
        printf("NO");
    }
    return 0;
}
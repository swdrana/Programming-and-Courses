#include<stdio.h>
#include<string.h>
int is_palindrome(char a[], int size){
    int result = 0;
    int max = size-1;
    for (int i = 0; i < size; i++, max--)
    {
        if (a[i]!=a[max])
        {
            // printf("%c %c\n", a[i], a[max]);
            return 0;
        }else{
            result = 1;
        }
    }
    return result;
}
int main(){
    char a[1000]; 
    scanf("%s",a);

    int result = is_palindrome(a, strlen(a));
    if(result){
        printf("Palindrome");
    }else{
        printf("Not Palindrome");
    }
    return 0;
}
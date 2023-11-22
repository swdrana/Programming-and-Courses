#include<bits/stdc++.h>
#include <iostream>
using namespace std;
int main() {
    char s[100001];
    while(cin.getline(s,100001)){
        int length = strlen(s);
        sort(s,s+length);
        for(int i=0; i<length; i++){
            if(s[i]==' '){
                continue;
            }
            cout<<s[i];
        }
         cout<<endl;
        
    }

    return 0;
}
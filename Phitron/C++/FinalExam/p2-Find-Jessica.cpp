#include <bits/stdc++.h>
#include <iostream>
#include <sstream>
using namespace std;
int main(){
    string s;
    getline(cin, s);
    stringstream ss(s);
    string word;
    int flag = 0;
    while (ss>>word)
    {
        // cout<<word<<endl;
        if (word=="Jessica") flag = 1;
        
    }
    if (flag) cout<<"YES"<<endl;
    else cout<<"NO"<<endl;
    return 0;
}

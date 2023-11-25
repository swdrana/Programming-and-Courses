#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    //cout<<endl;
    int t;
    cin>>t;
    while (t)
    {
        string s, x;
        cin>>s>>x;
        while (s.find(x)<s.length())
        {
            s.replace(s.find(x), x.length(), "#");
        }
        // cout<<s.find(x);
        cout<<s<<endl;
        t--;
    }
    

    return 0;
}

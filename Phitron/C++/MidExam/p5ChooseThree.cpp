#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    int t;
    cin>>t;
    while (t)
    {
        int n, s;
        cin>>n>>s;
        int a[n];
        for (int i = 0; i < n; i++)
        {
            cin>>a[i];
        }
        int flug = 0;
        for (int i = 0; i < n; i++)
        {
            for (int j = i+1; j < n; j++)
            {
                for (int k = j+1; k < n; k++)
                {
                    int sum = a[i]+a[j]+a[k];
                    if (sum==s)
                    {
                        flug = 1;
                    }
                }
            } 
        }
        if (flug)
        {
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
        
        t--;
    }
    
    return 0;
}

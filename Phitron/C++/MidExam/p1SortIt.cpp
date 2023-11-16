#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    int N;
    cin>>N;
    int a[N];
    for (int i = 0; i < N; i++)
    {
        cin>>a[i];
    }
    
    sort(a,a+N);
    for (int i = 0; i < N; i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    sort(a,a+N, greater<int>());
    for (int i = 0; i < N; i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;
}

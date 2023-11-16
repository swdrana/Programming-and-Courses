#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int* sort_it(int n){
    int *a = new int[n];
    for (int i = 0; i < n; i++)
    {
        cin>>a[i];
    }
    sort(a,a+n, greater<int>());
    return a;
}
int main(){
    int N;
    cin>>N;
    int * a;
    a = sort_it(N);
    for (int i = 0; i < N; i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    
    return 0;
}

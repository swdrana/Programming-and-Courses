#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
        int id;
        string name;
        char s;
        int mark;
};
int main(){
    int n;
    cin>>n;
    Student stn[n];
    for (int i = 0; i < n; i++)
    {
        cin>>stn[i].name>>stn[i].id>>stn[i].s>>stn[i].mark;
    }
    for (int i = 0, j=n-1; i < j; i++, j--)
    {
        swap(stn[i].s,stn[j].s);
        // cout<<stn[i].id<<"--"<<stn[j].id<<endl;
    }

    for (int i = 0; i < n; i++)
    {
        cout<<stn[i].name<<" "<<stn[i].id<<" "<<stn[i].s<<" "<<stn[i].mark<<endl;
    }
        
    return 0;
}

#include<bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
            int ID;
            char name[100];
            char sec[1];
            int marks;

            // Student(int ID, char name[100], char sec[1], int marks){
            //         this->ID = ID;
            //         strcpy(this->name, name);
            //         strcpy(this->sec, sec);
            //         this->marks = marks;
            //     }
};
int main() {
    int t;
    cin>>t;
    while(t){
        Student a, b, c; 
        cin>>a.ID>>a.name>>a.sec>>a.marks;
        cin>>b.ID>>b.name>>b.sec>>b.marks;
        cin>>c.ID>>c.name>>c.sec>>c.marks;

        if (a.marks>b.marks && a.marks>c.marks) {
            cout<<a.ID<<" "<<a.name<<" "<<a.sec<<" "<<a.marks<<endl;
        }else if(b.marks>a.marks && b.marks>c.marks){
            cout<<b.ID<<" "<<b.name<<" "<<b.sec<<" "<<b.marks<<endl;
        }else if(c.marks>a.marks && c.marks>b.marks){
            cout<<c.ID<<" "<<c.name<<" "<<c.sec<<" "<<c.marks<<endl;
        }else if (a.marks == b.marks && a.marks == c.marks){
            if (a.ID<b.ID && a.ID<c.ID)
            {
                cout<<a.ID<<" "<<a.name<<" "<<a.sec<<" "<<a.marks<<endl;
            }else if (b.ID<a.ID && b.ID<c.ID){
                cout<<b.ID<<" "<<b.name<<" "<<b.sec<<" "<<b.marks<<endl;
            }else{
                cout<<c.ID<<" "<<c.name<<" "<<c.sec<<" "<<c.marks<<endl;
            }
        }else if (a.marks==b.marks){
            if (a.ID<b.ID)
            {
                cout<<a.ID<<" "<<a.name<<" "<<a.sec<<" "<<a.marks<<endl;
            }else{
                cout<<b.ID<<" "<<b.name<<" "<<b.sec<<" "<<b.marks<<endl;
            }
            
        }else if (a.marks==c.marks){
            if (a.ID<c.ID)
            {
                cout<<a.ID<<" "<<a.name<<" "<<a.sec<<" "<<a.marks<<endl;
            }else{
                cout<<c.ID<<" "<<c.name<<" "<<c.sec<<" "<<c.marks<<endl;
            }
        }else if (b.marks==c.marks){
            if (b.ID<c.ID)
            {
                 cout<<b.ID<<" "<<b.name<<" "<<b.sec<<" "<<b.marks<<endl;
            }else{
                cout<<c.ID<<" "<<c.name<<" "<<c.sec<<" "<<c.marks<<endl;
            }
        }
        t--;
    }

    return 0;
}
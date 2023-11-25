#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
        string name;
        int cls;
        char s;
        int id;
        int math;
        int eng;
        int total;
};
bool com(Student a, Student b){
    return a.total>b.total;
}
int main(){
    int n;
    cin>>n;
    Student st[n];
    for (int i = 0; i < n; i++){
        cin>>st[i].name>>st[i].cls>>st[i].s>>st[i].id>>st[i].math>>st[i].eng;
        st[i].total=st[i].math+st[i].eng;
    }
    sort(st, st+n,com);
    for (int i = 0; i < n; i++){
        for (int j = i+1; j < n; j++){
            if (st[i].total==st[j].total){
                if (st[i].id>st[j].id){
                    swap(st[i],st[j]);
                }
            }
        }
        cout<<st[i].name<<" "<<st[i].cls<<" "<<st[i].s<<" "<<st[i].id<<" "<<st[i].math<<" "<<st[i].eng<<endl;
    }
    
    return 0;
}

// Your task is to sort the students data according to the total marks (sum of math_marks and eng_marks) in descending order. If multiple student have the same total marks then sort them according to the id in ascending order as the id will be unique.


// 5
// Munna 8 D 25 50 30
// Shojoy 9 E 26 40 50
// Asif 10 C 27 55 60
// Joy 9 G 28 66 99
// Bijoy 7 E 29 68 99

// Bijoy 7 E 29 68 99
// Asif 10 C 27 55 60
// Joy 9 G 28 66 45
// Shojoy 9 E 26 40 50
// Munna 8 D 25 50 30
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

const int MAX_CHARS = 140;
const string INPUT_FILE = "input.txt";

int main(){
    string curr;
    int chars = 0;
    while (cin >> curr){
        chars += curr.size();
        if (chars > MAX_CHARS) {
            cout << endl << endl;
            chars = 0;
        }
        cout << curr << " ";
    }
    cout << endl;
}

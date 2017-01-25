#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main(){
    string line;
    int sum=0;
    ifstream inData ;
    inData.open("test.txt");
    while(!inData.eof()){
        getline(inData, line);
        int numofChars= line.length();
        for (unsigned int n = 0; n < line.length(); n++){
            if (line.at(n) == ' '){
                numofChars--;
            }
        }
    sum = numofChars + sum;
    }
    cout << "Number of characters: "<< sum << endl;
}

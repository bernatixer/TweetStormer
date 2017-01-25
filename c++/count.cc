#include <iostream>
#include <string>
#include <fstream>
using namespace std;

const int MAX_CHARS = 137;
const string INPUT_FILE = "input.txt";

int tweet_num(string file){
    string line;
    int sum = 0;
    ifstream inData;
    inData.open(file);
    while(!inData.eof()){
        getline(inData,line);
        int numofChars = line.length();
        for (unsigned int n = 0; n < line.length(); n++){
            if (line.at(n) == ' '){
                numofChars--;
            }
        }
        sum = numofChars + sum;
    }
    return sum/MAX_CHARS;
}

int main(){
    string curr;
    int chars = 0;
    int count = 1;
    int num_tweets = tweet_num(INPUT_FILE) + 1;
    while (cin >> curr){
        chars += curr.size();
        if (chars > MAX_CHARS) {
            cout << "(" << count << "/" << num_tweets << ")" << endl << endl;
            ++count;
            chars = 0;
        }
        cout << curr << " ";
    }
    cout << "(" << count << "/" << num_tweets << ")" << endl;
}

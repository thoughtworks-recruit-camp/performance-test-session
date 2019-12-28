#include <iostream>
#include <ctime>

long long calcSum(int maxN);

int main() {
    clock_t tBegin, tEnd;
    double tPassed;
    int seq;
    long long sum;
    for (seq = 1; seq <= 5; seq++) {
        int maxN = (double)100000000 +(double)rand()/15000;
        tBegin = clock();
        sum = calcSum(maxN);
        tEnd = clock();
        tPassed = (double) (tEnd - tBegin);
        std::cout << "Sum = " << sum << " calculated in " << tPassed << "ms\n";
    }
}

long long calcSum(int maxN) {
    long long sum = 0;
    for (int n = 0; n < maxN; n++) {
        sum += n;
    }
    return sum;
}
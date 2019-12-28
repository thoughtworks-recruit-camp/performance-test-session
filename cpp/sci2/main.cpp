#include <iostream>
#include <ctime>
#include <cmath>

double calcPi(int iterations);

int main() {
    clock_t tBegin, tEnd;
    double tPassed;
    int ITERATIONS ;
    int seq;
    double pi;
    for (seq = 1; seq <= 5; seq++) {
        tBegin = clock();
        ITERATIONS =(double)100000000 +(double)rand()/15000;
        pi = calcPi((int)ITERATIONS);
        tEnd = clock();
        tPassed = (double) (tEnd - tBegin);
        std::cout << "pi = " << pi << " calculated in " << tPassed << "ms\n" <<ITERATIONS;
    }
}

double calcPi(int iterations) {
    double result = 0;
    int n;
    for (n = 0; n < iterations; n++) {
        result += pow(-1, n) / (2 * n + 1);
    }
    return result * 4;
}
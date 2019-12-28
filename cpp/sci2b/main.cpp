#include <iostream>
#include <ctime>
#include <cmath>

double calcPi(int iterations);

int main() {
    clock_t tBegin, tEnd;
    double tPassed;
    int seq;
    double pi;
    for (seq = 1; seq <= 5; seq++) {
        int ITERATIONS = (double)100000000 +(double)rand()/15000;
        tBegin = clock();
        pi = calcPi(ITERATIONS);
        tEnd = clock();
        tPassed = (double) (tEnd - tBegin);
        std::cout << "pi = " << pi << " calculated in " << tPassed << "ms\n";
    }
}

double calcPi(int iterations) {

    double result = 0;
    int n;
    for (n = 0; n < iterations; n++) {
        if (n % 2 == 1) {
            result += (double) -1 / (2 * n + 1);
        } else {
            result += (double) 1 / (2 * n + 1);
        }
    }
    return result * 4;

}
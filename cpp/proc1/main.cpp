#include <iostream>
#include <ctime>
#include <cmath>
#include <algorithm>

int main() {
    double *arrayOriginal = new double[1000000];
    double *array = new double[1000000];
    clock_t tBegin, tEnd;
    double tPassed;
    int seq;

    for (int i = 0; i < 1000000; i++) {
        arrayOriginal[i] = (double) rand() / 32767 * 1000000;
    }

    for (seq = 1; seq <= 5; seq++) {
        for (int i = 0; i < 1000000; i++) {
            array[i] = arrayOriginal[i];
        }
        tBegin = clock();
        std::sort(array, array + 1000000);
        tEnd = clock();
        tPassed = (double) (tEnd - tBegin);
        std::cout << "med = " << array[500000] << " calculated in " << tPassed << "ms\n";
    }
}

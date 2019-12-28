package com.company;

public class I_sci_2b {

    public static void main(String[] args) {
        int ITERATIONS = 100000000;
        int seq;
        double pi;
        long beginTime, endTime, timePassed;
        for (seq = 1; seq <= 5; seq++) {
            beginTime = System.currentTimeMillis();
            pi = calcPi(ITERATIONS);
            endTime = System.currentTimeMillis();
            timePassed = endTime - beginTime;
            System.out.printf("pi = %.10f calculated in %dms\n", pi, timePassed);
        }


    }

    private static double calcPi(int iterations) {
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
}

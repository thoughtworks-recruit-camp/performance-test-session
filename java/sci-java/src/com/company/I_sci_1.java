package com.company;

public class I_sci_1 {

    public static void main(String[] args) {
        int maxN = 100000000;
        int seq;
        long sum;
        long beginTime, endTime, timePassed;
        for (seq = 1; seq <= 5; seq++) {
            beginTime = System.currentTimeMillis();
            sum = calcSum(maxN);
            endTime = System.currentTimeMillis();
            timePassed = endTime - beginTime;
            System.out.printf("Sum = %d calculated in %dms\n", sum, timePassed);
        }


    }

    private static long calcSum(int maxN) {
        int n;
        long sum = 0;
        for (n = 0; n < maxN; n++) {
            sum += n;
        }
        return sum;
    }
}

import java.util.Arrays;

public class II_proc_1 {

    public static void main(String[] args) {
        int N = 1000000;
        double[] randomArray = makeRandomArray(N);
        double[] sortedArray = new double[N];
        int seq;
        long beginTime, endTime, timePassed;
        for (seq = 1; seq <= 5; seq++) {
            sortedArray = randomArray.clone();
            beginTime = System.currentTimeMillis();
            Arrays.sort(sortedArray);
            endTime = System.currentTimeMillis();
            timePassed = endTime - beginTime;
            System.out.printf("med = %f calculated in %dms\n", sortedArray[(int) (N / 2)], timePassed);
        }


    }

    private static double[] makeRandomArray(int n) {
        double[] array = new double[n];
        for (int index = 0; index < n; index++) {
            array[index] = Math.random() * n;
        }
        return array;
    }
}

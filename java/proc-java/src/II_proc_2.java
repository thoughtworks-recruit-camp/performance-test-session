import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class II_proc_2 {

    public static void main(String[] args) {
        int N = 1000000;
        char[] lettersOriginal = getRandomLetters(N);
        char[] letters = new char[N];
        int seq;
        long beginTime, endTime, timePassed;
        for (seq = 1; seq <= 10; seq++) {
            letters = getRandomLetters(N);
            beginTime = System.currentTimeMillis();
            countLetters(letters);
            endTime = System.currentTimeMillis();
            timePassed = endTime - beginTime;
            System.out.printf("\nLetters counted in %dms\n", timePassed);
        }

    }

    private static void countLetters(char[] letters) {
        Map<String, Integer> map = new HashMap<>();
        for (char str : letters) {
            Integer num = map.get(String.valueOf(str));
            map.put(String.valueOf(str), num == null ? 1 : num + 1);
        }
        Set<Entry<String, Integer>> set = map.entrySet();
        for (Object o : set) {
            Entry<String, Integer> entry = (Entry<String, Integer>) o;
            System.out.print(entry.getKey() + ":" + entry.getValue());
        }
    }

    private static char[] getRandomLetters(int n) {
        char[] collection = new char[n];
        for (int index = 0; index < n; index++) {
            collection[index] = (char) (Math.random() * 26 + 97);
        }
        return collection;
    }
}

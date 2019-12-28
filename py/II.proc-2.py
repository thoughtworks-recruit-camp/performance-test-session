import random
import time
from collections import Counter
N = 1000000
letters_list_original = [chr(int(random.random() * 26)+97) for x in range(N)]

for seq in range(5):
    letters_list = letters_list_original
    start_time = time.time()
    print(Counter(letters_list))
    print('Letters counted in in {:.0f}ms'.format((time.time() - start_time) * 1000))





import random
import time

N = 1000000
random_list_original = [random.random() * N for x in range(N)]

for seq in range(5):
    random_list = random_list_original
    start_time = time.time()
    random_list.sort()
    print('med = {} calculated in {:.0f}ms'.format(random_list[int(N / 2)], (time.time() - start_time) * 1000))

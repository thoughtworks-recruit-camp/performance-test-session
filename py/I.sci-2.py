import time
import numba

@numba.jit
def calc_pi():
    result = 0
    for n in range(10000000):
        result += pow(-1, n) / (2 * n + 1)
    return result * 4


start_time = time.time()
print(calc_pi())
print(time.time() - start_time)

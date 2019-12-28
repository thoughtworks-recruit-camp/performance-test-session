import time
import numba


@numba.jit
def calc_sum(max_n):
    _sum = 0
    for n in range(max_n):
        _sum += n
    return _sum


start_time = time.time()
print(calc_sum(100000000))
print(time.time() - start_time)

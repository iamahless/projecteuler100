function largestPrimeFactor(number) {
  let prime_num = 2;
  let max_num = 1;

  while (prime_num <= number) {
    if (number % prime_num == 0) {
      max_num = prime_num;
      number = number / prime_num;
    } else {
      prime_num++;
    }
  }
  return max_num;
}

largestPrimeFactor(13195);

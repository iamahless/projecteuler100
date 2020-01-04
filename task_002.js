function fiboEvenSum(n) {
  let first_num = 1;
  let second_num = 2;
  let total_sum = 2;

  for (let i = 3; i <= n; i++) {
    let temp_num = first_num + second_num;
    first_num = second_num;
    second_num = temp_num;

    if (temp_num % 2 == 0) {
      total_sum += second_num;
    }
  }
  return total_sum;
}

fiboEvenSum(10);

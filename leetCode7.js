const reverse = (num) => {
	if(num < 0) return reverse(-1 * num) * -1;
	const solution = parseInt(num.toString().split("").reverse().join(""));
	if(solution > 2147483647){
	  return 0;
	} else{
	  return solution;
	}
  }
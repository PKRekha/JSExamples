/** Happy number algorithm. it means ex;
 * if number is 19, then 1 sq+ 9 sq= 82
 * then again 8sq+2 sq= 68; then again 6 sq+8 sq= 100, then 
 * again 1 sq+ 0 sq+ 0 sq is 1. finally sum is one, then return return and it is a 
 * happy number, else not a happy number.
 */

var happyNum=function(num, counter = 0) {
  result= false;
  if (counter < 5) {
    let happy = num
      .toString()
      .split('')
      .map(num => num * num);
    let happynum = happy.reduce((a, b) => a + b, 0);

    if (happynum === 1) {
         return result = true
    }
     else {
      counter++;
      happyNum(happynum, counter);
    }
}
  return result;
}

//happyNum(19);
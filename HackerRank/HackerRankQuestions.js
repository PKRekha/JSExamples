/** this is HackerRank question, for servian company test.
 * example summary:
 * take a string and then reverse each work and then 
 

var a = "This Is Rekha";
var b = a.split(" ");
var c = [];
for (var i = 0; i < b.length; i++) {
    c +=
        " " +
        b[i]
        .toString()
        .split("")
        .reverse()
        .join("");
}
console.log(c);
*/

/**extended code for the above program... */
function reverseString(){
    var a = "This Is Rekha";
    var b = a.split(" ");
    var c = [];
    for (var i = 0; i < b.length; i++) {
      c +=
        " " +
        b[i]
          .toString()
          .split("")
          .reverse()
          .join("");
    }
    console.log(`${c.trim()}`);
    var ee = c.trim().split(" ");
    var h = "";
    var bb;
    for (let f of ee) {
      var k =
        f
          .toString()
          .charAt(0)
          .toUpperCase() +
        f
          .toString()
          .slice(1)
          .toLowerCase();
      h += " " + k;
    }
    console.log(`final string is : ${h.trim()}`);

}

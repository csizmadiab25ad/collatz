function collatz() {

  // get integer, absolute value it so you dont do a recursive memleak
  var n = Math.abs(parseInt(document.getElementById("szam").value));
  let k = ""; // result writing
  
  // crash prevention
  if (isNaN(n) || n == 0) {
    document.getElementById("result").innerHTML = "Adjon meg egy nem-nulla értéket!";
    return;
  }

  // runs
  var i = 0;

  // actual func
  while (n != 1) {
    if ((n % 2) == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }

    /** not sure if toString() is necessary because
    * JS has like no typesafety but who cares, trying
    * C has given me sleep paralysis demons
    */

    if (n != 1) {
    k = k + n.toString() + ", ";
    } else {
    k = k + n.toString();
    }
  
    i++;
  }

  document.getElementById("result").innerHTML = i + " eséllyel futódott le, értékek:";
  document.getElementById("results").innerHTML = k;
}
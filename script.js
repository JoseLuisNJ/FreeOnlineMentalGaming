function execute() {
  var i, j, k, r = 0, tmp;
  var mtx1 = [],
    mtx2 = [],
    mtx3 = [],
    mtx4 = [],
    mtx5 = [],
    mtx6 = [],
    mtx7 = [],
    mtx8 = [],
    mtx9 = [];
    total = [];
  var aux;
  debugger;
  for (i = 1; i < 4; i++) {
    for (j = 1; j < 10; j++){
          if(j > 3 && j < 7){
            for (k = 4; k < 7; k++) {
            total.push(k);
//            document.getElementById("a.1").innerHTML = total; 
            }
          }
          if(j > 6){
            for (k = 7; k < 10; k++) {
            total.push(k);
            document.getElementById("a.1").innerHTML = total; 
            }
          }
          if(j < 4){
        for (k = 1; k < 4; k++) {
          console.log(j + " " + k);
//          tmp = document.getElementById(j +"." + k).value;
          total.push(k);
//          document.getElementById("a.1").innerHTML = total;
        }
          }
//      aux = eval("mtx" + i);
//      aux.push(tmp);
    }
//       document.getElementById("a.1").innerHTML = total;
  
}


}


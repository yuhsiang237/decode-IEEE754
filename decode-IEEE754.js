function decodeIEEE754ToFloat(hex){
  var binary = parseInt(hex, 16).toString(2);
  for(var i=0;i < 4 - parseInt(hex, 16).toString(2).length%4;i++){
    binary = '0' + binary;
  }
  var fraction = binary.substring(9,32);
  var sum = 0.0;  
  for(var i=0;i<fraction.length;i++){
    if(fraction[i] == '1'){
      sum += Math.pow(2,-1*(i+1));
    }
  }
  var s = binary.substring(0,1);
  var m = sum;
  var e = parseInt(binary.substring(1,9), 2).toString(10);
  return Math.pow(-1,s)*(1.0+m)*Math.pow(2,e-127);
}

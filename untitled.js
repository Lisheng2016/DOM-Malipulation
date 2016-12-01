function rot13(str) { // LBH QVQ VG!
  var list = str.split('');
  console.log(list);
  for(var i=0;i<list.length;i++){
    if(list[i] !== ' '){
      var num = list[i].charCodeAt();
      if(list[i]<='M'||((list[i]<='m')&&(list[i]>='a'))){
        num += 13;
        list[i] = String.fromCharCode(num);
      }
      else if((list[i]>'M'&&list[i]<='Z')||(list[i]>'m'&&list[i]<='z')){
        num -= 13;
        list[i] = String.fromCharCode(num);
      }
      else {
        console.log("illegal value!!");
      }
    }
  }
  return list;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");

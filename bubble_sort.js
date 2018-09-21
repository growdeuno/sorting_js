function bubble_Sort(arr)
{
  var swap;
  var n = arr.length-1;
  var x = arr;

  do{
    swap = false;
    for(var i=0; i<n; i++)
      {
        if(x[i] > x[i+1])
        {
          var temp = x[i];
          x[i] = x[i+1];
          x[i+1] = temp;
          swap = true;
        }
      }
      n--;
    }while(swap);
    return x;
}

var arr = [8,4,3,2,1,5,9,7,6];

console.log("then.. "+arr);
console.log("after.. "+bubble_Sort(arr));

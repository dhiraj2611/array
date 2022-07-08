//// Birthday Game


function Birthday_Game(arr,D ,M) {
  
    let count = 0;
    for(let i = 0;i<=arr.length - M;i++)
    {
      let sum = 0;
      for(let j = i;j<i+M;j++)
      {
        sum += arr[j];
      }
      if(sum === D)
      {
        count++;
      }
    }
    return count;
  
  }
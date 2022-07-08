/// Unique Color Shirt





function Unique_Shirts (arr,N) {
  
    let res = {};
    let count = 0;
    
    for(let i = 0;i<N;i++)
    {
      if(res[arr[i]])
      {
        res[arr[i]] += 1;
      }
      else
      {
        res[arr[i]] = 1;
      }
    }
    let resValues = Object.values(res);
    for(let j = 0;j<resValues.length;j++)
    {
      if(resValues[j] === 1)
      {
        count ++;
      }
    }
    return count;
   
  }


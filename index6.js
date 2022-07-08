/// Higher Age


const highAge = (N, Arr) => 
{
  let res = [];
  for(let i = 0;i<N;i++)
  {
    if(Arr[i] >= 18)
    {
      res.push(Arr[i]);
    }
  }
  return res;  
};

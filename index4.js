//// Even Odd


const findEvenOdd = (N, Arr) => 
{
  let res = [0,0];
  for(let i = 0;i<N;i++)
  {
    if(Arr[i] % 2 === 0)
    {
      res[0] += Arr[i]
    }
    else
    {
      res[1] += Arr[i]
    }
  }
  return res;  
};
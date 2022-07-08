//// Count Occurrences



const findCount = (N, K, Arr) => 
{
  let output = 0;
   for (let i = 0;i<N;i++) 
   {
     if (Arr[i] == K)
     {
       output++;
     }
   }
   return output;  
};
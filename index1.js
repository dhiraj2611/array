//// Find the Product.





const Find_Prod = (array, N) => 
{
 let prod = 1;
  for (let i = 0;i<N;i++)
  {
    prod = prod * array[i];
  }
  return prod;
     

};
 
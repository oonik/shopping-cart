document.getElementById('btn-case-plus').addEventListener('click', function(){

   const newCaseNumber = updateCaseNumber(true);
   udateCaseTotalPrice(newCaseNumber);

   calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){

  const minusCaseNumber = updateCaseNumber(false);
  udateCaseTotalPrice(minusCaseNumber);

  calculateSubTotal();
})
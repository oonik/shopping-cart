function updateMobileNumber (isIncrease){
    const mobileFilde = document.getElementById("mobile-filde");
    const mobileFildeString = mobileFilde.value ;
    const mobileFildeNumber = parseInt(mobileFildeString);

    let newMobileNumber ;
    if(isIncrease){
        newMobileNumber = mobileFildeNumber + 1;
    }
    else{
        newMobileNumber = mobileFildeNumber - 1;
    }
    mobileFilde.value = newMobileNumber;
    return newMobileNumber;
}
function updateMobilePrice (newMobileNumber){
  const newMobilePrice = newMobileNumber * 1219;  
  const mobileElement = document.getElementById('mobile-price');
  mobileElement.innerText = newMobilePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newMobileNumber = updateMobileNumber(true);
    updateMobilePrice(newMobileNumber);
    
    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newMobileNumber = updateMobileNumber(false);
   updateMobilePrice(newMobileNumber);
   
   calculateSubTotal();
})
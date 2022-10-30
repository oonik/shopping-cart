function updateCaseNumber(isIncrese){
    const inputFilde = document.getElementById('case-filde');
    const inputFildeString = inputFilde.value ;
    const inputFildeNumber = parseInt(inputFildeString);

    let newCaseNumber;
    if(isIncrese){
        newCaseNumber = inputFildeNumber + 1;
    }
    else{
        newCaseNumber = inputFildeNumber - 1;
    }
    inputFilde.value = newCaseNumber;
    return newCaseNumber;
}

function udateCaseTotalPrice(newCaseNumber){
    const newCasePrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-price');
   caseTotalElement.innerText = newCasePrice;
}

// sub Total 
function subTotalPrice(elementId){
    const phoneTotal = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotal.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal ;
}

// calculate sub total 

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    const phoneTotalAmount = subTotalPrice('mobile-price');
    const caseTotalPrice = subTotalPrice('case-price');
    const subTotal = phoneTotalAmount + caseTotalPrice;
    setTextElementValueById('sub-total', subTotal);

    const taxAmountString =(subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}
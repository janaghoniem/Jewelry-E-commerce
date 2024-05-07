function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const jewelryTotal = getInputvalue('jewelry') * 1219;
        const caseTotal = getInputvalue('case') * 59;
        const subTotal = jewelryTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }
document.getElementById('case-plus').addEventListener('click',function(){
   upadateCaseNumber('case', 59 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
upadateCaseNumber('case', 59, false);
});

// jewelry prcie update using add event linstner 
document.getElementById('jewelry-plus').addEventListener('click',function(){
    upadateCaseNumber('jewelry',1219, true);
});


document.getElementById('jewelry-minus').addEventListener('click',function(){
    upadateCaseNumber('jewelry',1219 , false);
});
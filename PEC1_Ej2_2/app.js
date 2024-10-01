
const currencyItemOne = document.getElementById('currency-one');
const amountItemOne = document.getElementById('amount-one');

const currencyItemTwo = document.getElementById('currency-two');
const amountItemTwo = document.getElementById('amount-two');

const rateItem = document.getElementById('rate');
const swap = document.getElementById('swap');

const spinner = document.getElementById('spinner');
spinner.display = 'none';

const errorMessage = document.getElementById('error-msg');
const errorCode = document.getElementById('error-code');

//fetch exchange rates and update the DOM
function calculate(){
    const currency_one = currencyItemOne.value;
    const currency_two = currencyItemTwo.value;

    //si hay algún cambio mostramos el estado espera
    spinner.style.display = 'block'

    

    fetch(`https://__open.er-api.com/v6/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
              
             
            //solo valores positivos
            if(amountItemOne.value < 0){
                amountItemOne.value = 0
            }


    
            const rate = data.rates[currency_two];
            console.log(rate);
            rateItem.innerText = `1 ${currency_one} = ${rate}  ${currency_two}`;
            amountItemTwo.value = (amountItemOne.value * rate).toFixed(2);
          
            const resultado = data.result;
            if (resultado =='success'){
               spinner.style.display = 'none'
               errorMessage.style.display = 'none'
               errorCode.style.display = 'none'
            }
        })
          .catch(error => {
                errorMessage.innerText = 'Error de llamada a la API!!!!!' 
                errorCode.innerText = error;
                 spinner.style.display = 'none'

          });      
}//end calculate()


//Events listeners
currencyItemOne.addEventListener('change',calculate);
amountItemOne.addEventListener('input',calculate);
currencyItemTwo.addEventListener('change', calculate);
amountItemTwo.addEventListener('change', calculate);

swap.addEventListener('click', ()=>{
    const temp = currencyItemOne.value;
    currencyItemOne.value = currencyItemTwo.value;
    currencyItemTwo.value = temp;
    calculate();
});

    calculate();
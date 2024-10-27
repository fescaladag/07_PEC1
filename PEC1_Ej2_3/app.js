const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const currency = document.querySelector('.currency-container #currency')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const value = document.getElementById('value');

//para convertir el string a entero
// poniendo un '+' delante hace el mismo efecto que ParseInt()

let priceInUSD = +movieSelect.value;
let ticketPrice = priceInUSD;


//codigo importado de la practica anterior
const spinner = document.getElementById('spinner');
spinner.display = 'none';

const errorMessage = document.getElementById('error-msg');
const errorCode = document.getElementById('error-code');




//---------------------------------------------------------------------------Funciones


let updateDropdownList = (rate)=>{
 


//creamos un objeto para modificar el dropdwon dinamicamente. 
//Entramos en la funcion con el parametro rate para actualice los precios
const listOfMovies = [
    {title:'Lo que el viento se llevo',price:10},
    {title:'Casablanca',price:12},
    {title:'Lawrence de Arabia',price:9},
    {title:'Mogambo',price:8}
]



 for(let i=0; i < movieSelect.options.length; i++){
    movieSelect.options[i].text  = `${(listOfMovies[i].title)}  (${(listOfMovies[i].price * rate).toFixed(2)} ${currency.value})`
    movieSelect.options[i].value = (listOfMovies[i].price * rate).toFixed(2)
   
 }



}

//inicialmente el precio estara en dolares
updateDropdownList(1);

//Obtenemos el precio de una entrada según la divisa seleccionada
let getTicketPrice = () =>{

    return movieSelect.options[movieSelect.selectedIndex].value
}




//Funcion para calcular el cambio de divisa
const  updateCurrency = (currency)=>{

    //si hay algún cambio mostramos el estado espera
    //spinner.style.display = 'block'


    fetch(`https://open.er-api.com/v6/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency];
            updateDropdownList(rate);
           // ticketPrice = getTicketPrice();

            const resultado = data.result;
            if (resultado =='success'){
               //spinner.style.display = 'none'
               errorMessage.style.display = 'none'
               errorCode.style.display = 'none'
            }
            
             updateSelectedCount();
        })
          .catch(error => {
                errorMessage.innerText = 'Error de llamada a la API!!!!!' 
                errorCode.innerText = error;
                 spinner.style.display = 'none'

          });      

      
        

}

//Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) =>{
    localStorage.setItem('selectedmovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

 
}

//update total and count
const updateSelectedCount = ()=> {

  
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatSeatsCount = selectedSeats.length;
    
    //para crear un array con el indice de los asientos seleccioandos
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    //Para almacenar el array en el local storage del navegador
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    //obiene el precio de la pelicula seleccionada
    ticketPrice = getTicketPrice();
    console.log(ticketPrice);
    count.innerText = seatSeatsCount;
    total.innerText = ` ${(ticketPrice * seatSeatsCount).toFixed(2)}   ${currency.value}`;

}


//---------------------------------------------------------------------------Events

//Seleccion de Divisa
currency.addEventListener('change', e=>{
    e.target.selectedIndex;
    updateCurrency(e.target.value);
   
})

//Movie select event
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
})

//Seat click event
container.addEventListener('click', (e)=>{
   if(e.target.classList.contains('seat') && 
      !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        updateSelectedCount();
   }

});
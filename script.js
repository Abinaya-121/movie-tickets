const containerE1=document.querySelector(".container");
const seatsE1=document.querySelectorAll(".row.seats:not(.booked)");
const movieE1=document.getElementById("movie");
const priceE1=document.getElementById("price");
const countE1=document.getElementById("count");

// console.log(seatsE1);
// console.log(movieE1);
 console.log(priceE1);
console.log(countE1);
// console.log(containerE1);




let ticketPrice=movieE1.Value;

//update total and counts

function updateSelectedCounts(){
    const selectedSeats=document.querySelectorAll(".row.seats.selected");
    // console.log(selectedSeats);
    const selectedSeatsCounts=selectedSeats.length;
    // console.log(selectedSeatsCounts);
    countE1.innerText=selectedSeatsCounts;
    priceE1.innerText=selectedSeatsCounts*ticketPrice;

}

//movie select event
movieE1.addEventListener('change',(e)=>{
    ticketPrice=+e.target.Value;
    updateSelectedCounts();
});

containerE1.addEventListener('click' ,(e)=>{
    if(e.target.classList.contains('seats') && !e.target.classList.contains('booked')){
        // console.log(e.target);
        e.target.classList.toggle('selected');
    }

    updateSelectedCounts();
});


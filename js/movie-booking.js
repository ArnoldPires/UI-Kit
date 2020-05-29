const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);

  //Copy selected seats into an array
  //Map through array
  //Return a new array into indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);

  //Local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    console.log(e.target);
    e.target.classList.toggle("selected"); //When the user clicks an empty seat, it turns blue
    updateSelectedCount();
  }
});

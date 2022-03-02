const inputFieldValue = () => {
    const inputfieldValue = document.getElementById("input-value");
    const inputValue = inputfieldValue.value;
  if (inputValue == "") {
    const error = document.getElementById("error-massage1");
    error.style.display="block"
  } else {
    const error = document.getElementById("error-massage1");
    error.style.display="none"
  // clear search data 
  inputfieldValue.value = "";
  // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>displaydata(data.data.slice(0,20)));
  }
}
// function for 1st data append 
const displaydata = phones => {
    if (phones == 0) {
      const error = document.getElementById("error-massage2");
      error.style.display = "block"
    } else {
      const error = document.getElementById("error-massage2");
      error.style.display = "none";
      error.style.display = "";
     const displayCard = document.getElementById("container");
     displayCard.textContent = "";
      phones.forEach(phones => {
          const div = document.createElement("div")
          div.classList.add("col");
          div.innerHTML = `
          <div class="card border border-dark rounded-3 shadow-lg">
          <img src="${phones.image}" class="card-img-top w-75 mx-auto pt-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">Name: ${phones.phone_name}</h5>
            <p class="card-text"> <h5>Brand:${phones.brand}</h5></p>
            <button onclick="datailsvalue('${phones.slug}')" type="button" class="btn btn-info">details</button>
          </div>
          
        </div>
        `;
        displayCard.appendChild(div);
      });
    }
}
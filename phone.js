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
// datails show here 
const datailsvalue = phones => {
    // lood data 
    const details = `https://openapi.programming-hero.com/api/phone/${phones}`;
    fetch(details)
      .then(res => res.json())
      .then(data => AboutDetails(data.data));
}
// functon for second data meansa details data append 
const AboutDetails = data => {
    const details = document.getElementById("details");
    // text content clear 
    details.textContent = "";
    const div = document.createElement("div")
    div.classList.add("col");
    div.style.width = "100%";
    div.style.marginLeft = "13%";
    div.innerHTML = `
    <div class="card mt-2" style="width: 75%;">
    <img class="w-50 mt-3 mx-auto" src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${data.name}</h5>
      <p class="card-text"> <h4 class="text-info">Details..</h4>
      <h5>Brand:</h5> ${data.brand} <br> 
      <h5>Display:</h5> ${data.mainFeatures.displaySize} <br>
      <h5>MainFeatures:</h5>${data.mainFeatures.memory}
       </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> <h5>Others:</h5> ${data.others.Bluetooth,data.others.GPS, data.others.USB,data.others.WLAN}</li>
      <li class="list-group-item"><h5>Slug:</h5>${data.slug}</li>
      <li class="list-group-item"><h5>Release Date:</h5>${data.releaseDate} <li>
    </ul>
    `;
    details.appendChild(div);
    
  }
  // assignment has end 
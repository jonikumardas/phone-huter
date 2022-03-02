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
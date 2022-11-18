import { UserSearch } from "./apiservice.js";

export async function display(event) {
  event.preventDefault();
  document.getElementById("conversionDisplay").innerHTML = null;
  const dollarInput = document.getElementById("dollarInput").value;
  const startingCurrency = document.getElementById("startingCurrency").value;
  const convCurrency = document.getElementById("convCurrency").value;
  const newSearch = new UserSearch(dollarInput, startingCurrency, convCurrency);
  const dataRequest = await newSearch.getData();

  if (dataRequest.result === "error") {
    document.getElementById("conversionDisplay").innerHTML = null;
  } else {
    const conversionOutput = dataRequest.conversion_result;
    let currencydisplay = document.getElementById("conversionDisplay");
    currencydisplay.setAttribute("class", "center");
    currencydisplay.innerHTML = conversionOutput;
  }
}
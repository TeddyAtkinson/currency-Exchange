import swal from 'sweetalert';
import { UserSearch } from "./apiservice.js";

export async function display(event) {
  event.preventDefault();
  document.getElementById("conversionDisplay").innerHTML = null;
  const dollarInput = document.getElementById("dollarInput").value;
  const convCurrency = document.getElementById("convCurrency").value;
  const newSearch = new UserSearch(dollarInput, convCurrency);
  const dataRequest = await newSearch.getData();

  if (dataRequest.result === "error") {
    swal({
      title: "ERROR:",
      text: "CURRENCY CONVERSION NOT SUPPORTED",
      icon: "error",
      button: "OK",
    });
  } else {
    const conversionOutput = dataRequest.conversion_result;
    let currencydisplay = document.getElementById("conversionDisplay");
    currencydisplay.setAttribute("class", "center");
    currencydisplay.innerHTML = conversionOutput;
  }
}
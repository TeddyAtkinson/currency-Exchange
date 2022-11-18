import swal from 'sweetalert';
import { UserSearch } from "./apiservice.js";

export async function display(event) {
  event.preventDefault();
  const dollarInput = document.getElementById("dollarInput").value;
  const convCurrency = document.getElementById("convCurrency").value;
  const newSearch = new UserSearch(dollarInput,convCurrency);
  const dataRequest = await newSearch.getData();
  if (dataRequest.meta.found === 0) {
    swal({
      title: "ERROR:",
      text: "INPUT CURRENCY NOT FIELDED",
      icon: "error",
      button: "OK",
    });
  } else {
    // dataRequest.data.forEach((article) => {
    //   const title = article["title"];
    //   const text = article["snippet"];
    //   const imgURL = article["image_url"];
    //   const linkURL = article["url"];
    //   appendElements(title, text, imgURL, linkURL);
    // });
  }
}
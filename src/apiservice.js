import swal from 'sweetalert';

export class UserSearch{
  constructor(dollarInput,convCurrency){
    this.dollarInput = parseInt(dollarInput);
    this.convCurrency = convCurrency;
  }

  async getData() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${this.convCurrency}/${this.dollarInput}`;
      request.addEventListener("loadend", () => {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if(request.status !== 200) {
          reject(swal({
            title: "ERROR:",
            text: `${request.status}`,
            icon: "error",
            button: "OK",
          }));
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
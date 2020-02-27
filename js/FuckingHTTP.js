class FuckingHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  //   GET METHOD
  GETMethod(url, callback) {
    this.http.open("GET", url, true);
    this.http.onload = () => {
        if(this.http.status === 200){
            callback(this.http.responseText);
        }
    };
    this.http.send();
  }
}

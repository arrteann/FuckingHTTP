class FuckingHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  //   GET METHOD
  GETMethod(url, callback) {
    this.http.open("GET", url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback(`${this.http.status}`);
      }
    };
    this.http.send();
  }
  //   POST METHOD
  POSTMethod(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.onload = () => {
      callback(this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
  }
  // PUT METHOD
  PUTMethod(url,data,callback){
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.onload = () => {
      callback(this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
  }
  // DELETE METHOD
  DELETEMethod(url,callback){
    this.http.open('DELETE',url,callback);
    this.http.onload = () =>{
      if (this.http.status === 200) {
        callback('DELETED :)');
      } else {
        callback(`${this.http.status}`);
      }
    }
    this.send();
  }
}

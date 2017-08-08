class Api{
  constructor(url) {
    this.url = url;
  }
  requestUsers() {
    return fetch(this.url).then(data => data.json());
  }
}

const url = 'https://easycode-js.herokuapp.com/evgeniy-seryi/';
const api = new Api(url + 'users');

class Contacts{
  constructor(appState) {
    this.state = appState;
  }
  
  pageHeader() {
    return `<header class="header">
              <div class="container top-radius">
                <h2>Contacts</h2>
              </div>
            </header>`;
  }
  
  createSearchForm() {
    return `<form class="form-inline search-form">
              <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id= "search" placeholder="Search">
              </div>
            </form>`;
  }
    
  tableHead() {
    return `<tr>
              <td class="name">Name</td>
              <td class="l-name">Last name</td>
              <td class="email">Email</td>
            </tr>`;
  }
  
  addContactsInTable() {
    return this.state.db.users.map(user => {
      //let phoneFormat = `(${user.phone.slice(0, 3)}) ${user.phone.slice(3, 5)}-${user.phone.slice(5, 7)}-${user.phone.slice(7)}`;
      return `<tr>
                <td>${user.fullName.split(" ")[0]}</td>
                <td>${user.fullName.split(" ")[1]}</td>
                <td>${user.email}</td>
              </tr>`;
    }).join("");
  }
  
  createMain() {
    return `<main>
              <div class="container">
                ${this.createSearchForm()}
                <table class="table table-hover contacts">
                  <thead>
                    ${this.tableHead()}
                  </thead>
                  <tbody>
                    ${this.addContactsInTable()}
                  </tbody>
                </table>
              </div>
            </main>`;
  }
  
  sortUsers(name) {
    return this.state.db.users.sort(function(a, b) {
      let prev = a[name].toUpperCase();
      let next = b[name].toUpperCase();
      if (prev > next) return 1;
      if (prev < next) return -1;
      return 0;
    })
  }
  
  events() {
    this.firstName = document.querySelector('td.name');
    this.lastName = document.querySelector('td.l-name');
    this.email = document.querySelector('td.email');
    this.tbody = document.querySelector('.table.contacts > tbody');

    this.firstName.addEventListener('click', e => {
      this.state.db.users = this.sortUsers('fullName');
      this.tbody.innerHTML = this.addContactsInTable();
    });
    
    this.email.addEventListener('click', e => {
      this.state.db.users = this.sortUsers('email');
      this.tbody.innerHTML = this.addContactsInTable();
    });
  
  }
  
  
  render() {
    this.app = document.getElementById('app');
    this.app.innerHTML = this.pageHeader() + this.createMain();
    this.events();
  }
  
  request() {
    api.requestUsers().then(data => {
      this.state.db.users = data;
      this.render();
    });
    
  }
}
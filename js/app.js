class App {
  constructor() {
    this.state = {
      db: {
        users: []
      }
    };
    this.ui = {
      contacts: new Contacts(this.state),
      keypad: new Keypad(this.state),
      addUser: new AddNewUser(this.state)
    };
  }

  router() {
    const app = document.getElementById('#app');
    const links = [...document.querySelectorAll(".footer a")];
    function updateState(state) {
      content.innerHTML = state;
    }
    links.forEach(link => {
      let href = link.getAttribute("href");

      link.addEventListener("click", e => {
        let clickedLink = e.currentTarget.href;
        e.preventDefault();
        if (clickedLink.includes("index")) {
          this.ui.contacts.render(this.state);
        }
        if (clickedLink.includes("keypad")) {
          this.ui.keypad.render(this.state);
        }
        if (clickedLink.includes("add-user")) {
          this.ui.addUser.render(this.state);
        }
      });
    });

    window.addEventListener("popstate", event => {
      updateState(event.state);
    });
  }

  render() {
    this.ui.contacts.request();
    this.router();
  }
}

const phoneApp = new App();
phoneApp.render();
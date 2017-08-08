class Keypad {
  constructor(appState) {
    this.state = appState;
  }
  
  pageHeader() {
    return `<header class="header">
              <div class="container top-radius">
                <h2>Keypad</h2>
              </div>
            </header>`;
  }
  
  createMain() {
    return `<main class="main">
              <div class="container">
                <div class="number">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <span class="numbers"></span>
                  <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>
                <div class="keypad-holder">
                  <button class="key">1</button>
                  <button class="key">2</button>
                  <button class="key">3</button>
                  <button class="key">4</button>
                  <button class="key">5</button>
                  <button class="key">6</button>
                  <button class="key">7</button>
                  <button class="key">8</button>
                  <button class="key">9</button>
                  <button class="key">*</button>
                  <button class="key">0</button>
                  <button class="key">#</button>
                  <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
                </div>
              </div>
            </main>`;
  }
  
  events() {
    
  }
  
  render() {
    this.app = document.getElementById('app');
    this.app.innerHTML = this.pageHeader() + this.createMain();
    this.events();
  }
}
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <section class="hero is-dark is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 id="main-title" class="title has-text-info"><span id="main-title" class="title">You</span>Topia</h1>
                    <p class="subtitle has-text-centered">They win or they lose. You choose!</p>
                    <div class="content ">
                        <div class="columns">
                            <div class="column has-text-right">
                                <button class="button is-red">
                                    <a href="./pages/login.html">Login</a>
                                </button>
                            </div>
                            <div class="column has-text-left">
                                <button class="button is-red">
                                    <a href="./pages/signup.html">Sign-Up</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;

const React = {
  data() {
    return {};
  },
  template: /*html*/ `
    <h1>React</h1>
    <h1>aerfgvg</h1>
  `,
  methods: {},
  mounted() {},
};
const Issues = {
  data() {
    return {};
  },
  template: /*html*/ `
  <!-- Application start -->

  <section class="document">
    <h1>Alcuni problemi riscontrati nell'usare React.</h1>

    <div class="row">
      <div class="col">
        <h3>Come puoi prevenire errori quando accedi alle proprietá degli oggetti negli stati di React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta1" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta1">
          <p>
            Per prevenire errori quando accedi alle proprietá degli oggetti negli stati di React si puo usare conditional rendering, o il chainig operator opzionale. Controllando se l'oggetto o l'array esiste prima di
            accedere alle sue proprietá si puo evitare che si verifichino errori quando le proprietá non sono ancora disponibili.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Quali sono i vantaggi dell'usare lo spread operator negli stati di React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta2" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta2">
          <p>
            Lo spread operator negli stati di React permette di aggiornare diverse proprietá senza modificare direttamente lo stato dell'oggeto originale. Spargendo le proprietá dello stato precedente e cambiando
            solamente la proprietá desiderata lo stato puo essere aggiornato in un modo piú efficente e leggibile.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Quando si dovrebbe considerare di usare useReact invece di useState in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta3" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta3">
          <p>
            Si dovrebbe usare useReact invece di useState quando si ha lo stato di un oggetto con diverse proprietá, come un array di oggetti annidati. useReducer provvede un modo piú organizzato e gestibile di
            aggiornare proprietá differenti di uno stato, in particolare quando bisogna gestire multiple azioni e cambi di stato.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Quale é l'errore comune quando si derivano stati in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta4" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta4">
          <p>
          L'errore piú comune quando si derivano stati in React é crere un nuovo oggetto invece che salvare l'id dell'oggetto da derivare. Questo puó portare a problemi quando si aggiorna lo stato derivato, siccome lo
          stato derivato potrebbe non riflettere i cambiamenti fatti allo stato originale. Per risolvere questo problema si raccomanda di salvare l'id dell'oggetto e recuperare l'oggetto usando l'id quando necessario.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Quali altri React hooks si possono imparare?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta5" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta5">
          <p>
            Oltre a useState, ci sono altri React hooks che si possono imparare, come useEffect, useMemo e useCallBack. Questi hook provvedono a diverse funzionalitá e possono essere usati per ottimizzare la performance
            e gestire side effect nelle applicazioni React.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Quali sono i potenziali benefici dell'usare useReducer invece di useState in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta6" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta6">
          <p>
            Alcuni potenziali benefici dell'uso di useReducer al posto di useState in React includono una migliore organizzazione e gestione degli aggiornamenti di stato, specialmente per state objects complessi dalle
            multiple proprietá. useReducer permette piú controllo granulare sui cambiamenti di stato e possono aiutare a prevenire problemi che potrebbero sorgere quando si usa useState per state managment piú complesso.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Come si aggiorna lo stato in React usando hooks?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta7" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta7">
          <p>
            Per aggiornare lo stato si possono usare le funzioni dello useState hook. Chiamando la funzione e passandola nel nuovo state value lo stato verrá aggiornato.E'importante notare che quando si aggiorna lo stato
            si raccomanda l'uso della functional update approach per assicurarsi che sia riferito al corretto state value.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Perché é importante inizializzare gli stati di React con il tipo che ci si aspetta?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta8" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta8">
          <p>
            Inizializzare stati di React con i tipi che ci si aspetta é importante per assicurarsi che lo stato sia propriamnete inizializzato e per prevenire potenziali erroriquando si accede alle proprietá dello stato.
            Utilizzando il tipo iniziale correto si puo evitare problemi come valori indefiniti o comportamenti inaspettati quando si usa lo stato nella applicazione.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Quale é il vantaggio dell'usare conditional rendering in React per gestire valori indefiniti?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta9" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta9">
          <p>
            Conditional rendering in React permette di renderizzare selettivamente componentio elementi in specifiche condizioni. Usando conditional rendering per gestire valori indefiniti, si puó assicurareche il
            componente o elemento é renderizzato quando il valore aspettato é disponibile, prevenendo errori e migliorando la user experience.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>What is the purpose of the optional chaining operator in React? Quale é l'obbiettivo dell'optional chaining operator in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta10" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta10">
          <p>
            The optional chaining operator in React allows you to safely access properties of an object or elements of an array without causing an error if the object or array is undefined or null. It provides a concise
            and convenient way to handle potential undefined values and prevent runtime errors. L'optinal chainig operator in React permette di accedere a proprietá di un oggetto o elemento di un orray senza causare un
            errore se l'oggeto o l'array é indefinito o nullo.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Why is it recommended to use the functional update approach when updating React states? Perché si raccomanda di usare l'approccio functional update quando si aggiornano gli stati di React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta11" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta11">
          <p>
            It is recommended to use the functional update approach when updating React states to ensure that the correct state value is referenced. By using the functional update approach, the state update is based on
            the previous state value, preventing issues that may arise when directly updating the state with a new value. E' raccomandato l'uso del approccio functional update quando si aggiornano gli stati di React per
            assicurarsi che si riferisca al valore corretto dello stato. Usando l'approccio functional update l'aggiornamento dello stato si basa sullo valore dello stato precedente, prevenendo problemi che potrebbero
            sorgere quando si aggiorna dirrettamente lo stato con un nuovo valore.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>What is the purpose of React hooks in handling states? Qualo é lo scopo dei React hooks nella gestione degli stati?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta12" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta12">
          <p>
            React hooks, specifically useState, make it easy to handle states in React by allowing the creation of a state variable, its set function, and the initial state inside the useState hook. The set function is
            then used to update the state. I React hooks, in particolare useState, rendono facile la gestione degli stati in React perché permettono la creazione di una variabile di stato, la sua set function, e lo stato
            iniziale dentro lo useState hook. La set function é poi usata per aggiornare lo stato.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>How can you update multiple properties of a React state object efficiently? Come si aggiornano efficentemente multiple proprietá di un oggetto di stato in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta13" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta13">
          <p>
            To update multiple properties of a React state object efficiently, you can use the spread operator to create a new state object that includes all the properties from the previous state, and then update only
            the desired properties. This allows for a concise and readable way to update multiple properties without directly modifying the original state object. Per aggiornare efficentemente multiple proprietá di un
            oggetto di stato in React si puó usare lo spread operator per creare un nuovo oggetto di stato che includa tutte le prioritá dello stato precedente e poi aggiornare solo le proprietá desiderate. Questo
            permette di aggiornare multiple proprietá senza modificare direttamente lo state object originale in modo leggibile e coinciso.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>What is the potential issue with directly updating a React state without returning an object? Quale é il problema potenziale dell'aggiornare direttamente uno stato in React senza ritornare un oggetto?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta14" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta14">
          <p>
            The potential issue with directly updating a React state without returning an object is that the state will be updated with the new value, but it will lose all other properties and become just the new value.
            To ensure that the state retains its other properties, it is important to return an object that includes the previous state properties along with the updated property. Il problema potenziale del aggiornare
            direttamente uno stato di React senza ritornare un oggetto é che lo stato sará aggiornato con il nuovo valore, ma perderá tutte le altre proprietá e diventerá solamete il nuovo valore. Per assicurarsi che lo
            stato mantenga le sue altre proprietá é importante ritornare un oggetto che includa le proprietá dello stato precedente assieme alle proprietá aggiornate.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>Why is it beneficial to use a single useState hook for multiple inputs in React? Perché é vantagioso usare un singolo useState hook per input multipli in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta15" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta15">
          <p>
            Using a single useState hook for multiple inputs in React reduces code duplication and improves code readability. Instead of creating separate useState hooks for each input, you can manage the state of all
            inputs using a single state object and update the desired properties based on the input values. This approach simplifies the code and makes it easier to handle multiple inputs. Usare un singolo useState hook
            per input multipli in React riduce la duplicazione del codice e migliora la leggibilitá. Invece di creare useState hooks separati per ogni input, si puó gestire lo stato di tutti gli input usando un singolo
            state object e aggiornando le proprietá desiderate sulla base dei valori di input. Questo approccio semplifica il codice e rende piú facile gestire input multipli.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>When should you consider using useReducer instead of useState in React? Quando si dovrebbe considerare l'uso di useReducer invece di useState in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta16" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta16">
          <p>
            You should consider using useReducer instead of useState in React when you have a more complex state object with multiple properties and actions. useReducer provides a more structured and organized way To
            handle state updates and actions, making it easier to manage and maintain the state in a larger application. Bisognerebbe considerare l'uso di useReducer invece di useState in React quando si ha uno state
            object piú complesso con proprietá e azioni multiple. useReducer fornisce un modo piú stritturato e organizzato per gestire aggiornamenti e azioni di stato, rendendo piú facile la gestione e il mantenimento
            dello stato in aplicazioni piú grandi.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>What is the importance of initializing states correctly in React? Quale é l'importanza di inizializzare stati correttamente in React?</h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta17" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta17">
          <p>
            Initializing states correctly is important in React to prevent issues such as blank pages or undefined values. It is recommended to initialize states with the expected type and provide default values if
            necessary. This helps ensure that the state is properly initialized and avoids potential errors when accessing state properties. Inizializzare stati correttamente in React é importante per prevenire problemi
            come pagine bianche o valori indefiniti. E' ravvomandato inizializzare stati con il tipo aspettato e fornire valori di default se necessario. Questo aiuta ad assicurarsi che lo stato é inizializzato
            correttamente e evita potenziali errori quando si accede alle proprietá dello stato.
          </p>
        </div>
      </div>
      <div class="col">
        <h3>
          What is the potential issue with storing a new object instead of the id when deriving states in React? Quale é il potenziale problema dell'immagazzinare un nuovo oggetto invece dell'id quando si derivano gli
          stati in React?
        </h3>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#risposta18" aria-expanded="false" aria-controls="risposta">Risposta</button>
        <div class="collapse" id="risposta18">
          <p>
            The potential issue with storing a new object instead of the id when deriving states in React is that the derived state may not reflect the changes made to the original state. This can lead to inconsistencies
            and unexpected behavior when updating the derived state. To ensure that the derived state accurately reflects the changes, it is recommended to store the id of the object and retrieve the object using the id
            when needed. Il potenziale problema dell'immagazzinare un nuovo oggetto invece dell'id quando si derivano stati in React é che gli stati derivati potrebbero non riflettere i cambiamneti fatti allo stato
            originale. questo puó portare a inconsistenze e comportamenti inaspettati quando si aggiorna lo stato derivato. Per assicurarsi che lo stato derivato rifletta accuratamente i cambiamenti é raccomandato di
            immagazzinare l'id dell'oggetto e recuperare l'oggetto usando l'id quuando serve.
          </p>
        </div>
      </div>
    </div>
  </section>
`,
  methods: {},
  mounted() {},
};
const Restaurants = {
  data() {
    return { menus: [] };
  },
  methods: {
    getMenus() {
      axios.get("./restaurants.json").then((response) => {
        this.menus = response.data;
      });
    },
  },
  mounted() {
    this.getMenus();
  },
  template: /*html*/ `      <section class="document">
  <div class="accordion" id="restaurants">
    <div v-for="(menu, i) in menus" :key="i" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="\`#collapse\${i}\`"
          aria-expanded="false"
          :aria-controls="\`collapse\${i}\`"
        >
          {{menu.name}}
        </button>
      </h2>
      <div
        :id="\`collapse\${i}\`"
        class="accordion-collapse collapse"
        data-bs-parent="#restaurants"
      >
        <div class="accordion-body">
          <div v-for="(item, j) in menu.entries.items" :key="j">
            <div v-for="(subMenu, k) in item.entries.items" :key="k">
              <h1>{{subMenu.name}}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(dish, f) in subMenu.entries.items" :key="f">
                    <th scope="row">{{f+1}}</th>
                    <td>{{dish.name}}</td>
                    <td>{{dish.description}}</td>
                    <td>{{dish.price}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
};
const HappyBar = {
  data() {
    return { menu: [], order: {} };
  },
  methods: {
    getMenu() {
      axios.get("./db.json").then((response) => {
        this.menu = response.data;
      });
    },
    setOrder(name) {
      if (!this.order[name]) this.order[name] = 1;
    },
    getPrice(name) {
      const dish = this.menu.find((d) => {
        return d.title === name;
      });
      return dish.price;
    },
    getTotal(name, value) {
      return this.getPrice(name) * value;
    },
    getTotalOrder() {
      if (Object.entries(this.order).length === 0) return 0;
      const total = Object.entries(this.order).reduce((acc, curr, index) => {
        return acc + curr[1] * this.getPrice(curr[0]);
      }, 0);
      return total;
    },
    addDish(name) {
      // console.log(this.order[name]);
      this.order[name]++;
    },
    removeDish(name) {
      // console.log = this.order.value;
      if (this.order[name] > 1) this.order[name]--;
    },
    deleteDish(name) {
      delete this.order[name];
    },
  },
  mounted() {
    var p = document.getElementById("cart");
    p.style.display = "block";
    this.getMenu();
  },
  unmounted() {
    var p = document.getElementById("cart");
    p.style.display = "none";
  },
  template: /*html*/ `
      <!-- Products -->
      <section class="document">
        <div class="row g-5">
          <div
            v-for="(dish, i) in menu"
            :key="i"
            class="col-lg-4 mb-3 d-flex align-items-stretch"
          >
            <div class="card">
              <img :src="dish.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">{{dish.title}}</h4>
                <p class="card-text">Ingredienti: {{dish.ingredientsIT}}</p>
                <!-- <a class="btn btn-primary" @click="setOrder(dish.title)"
                  >Ordinare</a
                > -->
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#order"
                  aria-controls="order"
                  @click="setOrder(dish.title)"
                >
                  Ordinare
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- cart -->
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="order"
        aria-labelledby="orderLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="orderLabel">Ordine</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Prezzo</th>
                <th scope="col">Quantità</th>
                <th scope="col">Totale</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key, index) in order" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{key}}</td>
                <td>{{getPrice(key)}}€</td>
                <td>{{value}}</td>
                <td>{{getTotal(key, value)}}€</td>
                <td>
                  <button
                    @click="addDish(key)"
                    type="button"
                    class="btn btn-primary btn-sm"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    @click="removeDish(key)"
                    type="button"
                    class="btn btn-secondary btn-sm"
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    @click="deleteDish(key)"
                    type="button"
                    class="btn btn-warning btn-sm"
                  >
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Totale:{{getTotalOrder()}}€</p>
        </div>
      </div>
  `,
};
const About = {
  data() {
    return {};
  },
  template: /*html*/ `
  <!-- Application start -->

  <section class="document">
    <h1>React</h1>
    <p>
      Caratteristiche principali del framework con un occhio di riguardo alle
      differenze con Vue.js
    </p>
    <h1>Problemi comuni</h1>
    <p>
      Alcuni dei problemi comuni a chi inizia ad usare React e che in qualche
      caso ho anche sperimentato
    </p>
    <h1>Lista di ristoranti e relativi menu</h1>
    <p>
      Leggendo il file json contenente una lista di ristoranti e relativi menu
      ed utilizzando bootstrap, ho visualizzato i dati utilizzando un
      accordion e tabelle per rappresentare la gerarchia delle informazioni.
    </p>
    <h1>Visualizzazione Menu e gestione ordine con carrello</h1>
    <p>
      Manipolazione dei dati presenti nel carrello delle ordinazioni mediante
      selezione dei prodotti da menu e modifica delle quantità nel carrello
      stesso.
    </p>
  </section>
`,
  methods: {},
  mounted() {},
};

const routes = [
  { path: "/", component: React },
  { path: "/issues", component: Issues },
  { path: "/restaurants", component: Restaurants },
  { path: "/happyBar", component: HappyBar },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");

const React = {
  data() {
    return {
      starting: true,
      title: "Informazioni",
      subTitle: "Applicazione realizzata da Triossi",
      backgroundImage: "img/homeBackgroundImage.jpeg",
    };
  },
  template: /*html*/ `
    <div v-if="starting" class="image-container">
      <img :src="backgroundImage" alt="">
      <div class="centered-text">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{subTitle}}</p>
            <a class="btn btn-primary" @click="starting=false">Inizia ...</a>
          </div>
        </div>
      </div>
    </div>

  <section class="document">
  <h1>L'evoluzione e l'impatto di React nel Modern Web Development.</h1>

  <div class="row">
    <div class="col">
      <p>
        Nel panorama in rapida evoluzione che é il web development, React é emerso come una tecnologia che ha rivoluzionato il modo in cui i siti web e le applicazioni sono costruiti e manutenuti. Sviluppato da
        Facebook, React ha ottenuto una popolaritá immensa fin dalla dua creazione nel 2013, e il suo approccio innovativo per costruire user interfaces ha influenzato l'intera comunitá di sviluppo web.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>
        La Nascita di React e i suoi concetti chiave: React é nato per il bisogno di semplificare il processo di sviluppo di user interfaces complesse. React intoduce il concetto dei componenti riutilizzabili,
        permettendo ai sviluppatori di dividere la user interface in pezzi piú piccoli e maneggevoli. Il Virtual DOM (Document Object Model) é stata un'altra innovazione cruciale, permettendo a React di
        aggiornare efficentemente solamente le parti necessarie di una pagina web quando i dati cambiano, cosí minimizzando il bisogno di ricare l'intera pagina.
      </p>
    </div>
    <div class="col">
      <p>
        Sviluppo dichiarativo(Declarative) e Component-Based: Uno dei principi fondamentali di React é la sua natura dichiarativo. Gli sviluppatori decrivono come l'UI dovrebbe essere in in qualunque momento,
        React si prende cura di aggiornare la UI che corrisponde allo stato desiderato. Questo approccio semplifica lo sviluppo astraendo le complessitá della monipolazione manuale del DOM.
      </p>
    </div>
    <div class="col">
      <p>
        L'architettura component-based offerta da React promuove riusabilitá e modularitá. Gli sviluppatori possono creare compomenti incapsulati che gestiscono i loro stessi stati e che possono essere facilmente
        combinati per creare interfacce complesse. Questo incoraggia una codebase piú organizzata e manutenibile.
      </p>
    </div>
    <div class="col">
      <p>
        Flux Architecture e State Management: React introduce la pattern Flux architecture , che influenza lo sviluppo delle librerie di state management come Redux. Gestire gli stati delle applicazioni puó
        diventare oneroso se le applicazioni crescono in complessitá. Il flusso di dati unidirezionale di React in combinazione con le librerie di management libraries é stato provato efficente nel mantenere uno
        stato di debug semplice e predicibile.
      </p>
    </div>
    <div class="col">
      <p>
        L'ascesa dell'ecosistema di React: La popolaritá di React a incentivato la crescita di un ricco ecosistema di strumenti e librerie. React Router per gestire la navigazione, Styled Components per
        component-oriented design e Axios per creare richieste API. La disponibilitá di questi strumenti semplifica lo sviluppo e mantiene un alto livello di consistenza nel progetto.
      </p>
    </div>
    <div class="col">
      <p>
        React Native e sviluppo Cross-Platform: L'influenza di React si espande oltre il Web con l'introduzione di React Native. Questo framework permette ai sviluppatori di costruire applicazioni native mobile
        usando lo stesso principio di sviluppo component-based. Condividendo una porzione significativa di codice tra web e piattaforme mobile React Native migliora l'efficenza e riduce il tempo di sviluppo.
      </p>
    </div>
    <div class="col">
      <p>
        Difficoltá e adattamenti: Per quanto React ha portato numerosi benefici allo sviluppo Web, non é senza le sue difficoltá. Imparare react e il suo ecosistema puó essere difficile per dei principianti per
        via del rapido cambio di marcia e della quantitá di concetti da comprendere. Oltretutto gestire lo stato di applicazioni grandi puó diventare complesso, portando a adottare soluzioni di state management
        piu' avanzate.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>
        Il viagggio di React dalla sua creazione a diventare una delle fondamenta dello sviluppo web e mobile moderno dimostra il potere dell'innovazione e della collaborazione della comunitá. L'enfasi della
        dichiarativitá, architettura component-based ha trasformato il modo in cui gli sviluppatori costruiscono le interfacce utente. con l'evoluzione dell'ecosistema di React, il suo impatto nell'industria
        rimane profondo, promettendo altri sviluppi negli anni a venire.
      </p>
    </div>
  </div>

  <h2>React JSX Structure and Example:</h2>

  <div class="row">
    <div class="col">
      <p>
        JSX (JavaScript XML) e' una estensione di sintassi usata in React che permette di scrivere codice HTML-like in JavaScript. E' una parte fondamentale dell'archittetura component-based di React, rendendo
        piu' facile descrivere la struttura dell'user interface. JSX Structure: In JSX si possono scrivere elementi HTML-like direttamnete nel codice JavaScript. Questi componenti sono trasformati in elementi
        React durante il processo di compilazione. La sintassi JSX assomiglia a HTML ma ci sono alcune differenze e regole da tenere a mente:
      </p>
    </div>
    <div class="col">
      <p>
        Elementi JSX devono avere un singolo elemento root. Non puoi avere piú elementi root nello stesso lovello. Attributi HTML sono creati usando camelCase invece di kebab-case (e.g., className invece di
        class-name). Si possono scrivere espressioni JavaScript tra parentesi graffe {}.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>Esempio: Creiamo un semplice componente React usando JSX. Creremo un componente HelloWord che faccia vedere un messaggio di saluto.</p>
    </div>
    <div class="col">
      <pre>
        <code class="language-react">
        import React from "react";

        // Defining a functional component using JSX
        function HelloWorld() {
          const name = "John";
          const greeting = "Hello,";

          return (
            &ltdiv&gt
              &lth1&gt
                {greeting} {name}!
              &lt/h1&gt
              &ltp&gtThis is a simple React JSX example.&lt/p&gt
            &lt/div&gt
          );
        }

        export default HelloWorld;
        </code>
      </pre>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>
        In questo esempio: Importiamo la libreria React perché JSX viene trasformato in chiamate React.createElement(). Il componente HelloWorld é definito come una funzione. Dentro la dichiarazione return, si
        usa JSX per creare gli elementi dell'interfaccia utente. Le parentesi graffe {} permettono di inserire del contenuto dinamico (JavaScript expressions) dentro il JSX. La sintassi JSX permette di scrivere
        la struttura HTML-like direttamente con il codice dei componenti. Quando il componente é renderizzato produrrá un HTML simile ha:
      </p>
    </div>
    <div class="col">
      <div class="code">
        <h1>Hello, John!</h1>
        <p>This is a simple React JSX example.</p>
      </div>
    </div>
    <div class="col">
      <p>
        Ricordiamo che JSX necessita di essere compilato prima che venga usato nel browser. Questa compilazione vienen normalmente gestita da strumenti come Babel, questi convertono JSX in codice JavaScript
        standard che il browser puó capire. A conti fatti, JSX semplifica il processo di creare e gestire interfacce utente in React permettendo agli sviluppatori di esprimenre elementi della UI in maniera piú
        naturale dentro il loro codice JavaScript.
      </p>
    </div>
  </div>

  <h2>Struttura dei componenti React.</h2>

  <div class="row">
    <div class="col">
      <p>
        La struttura dei componenti React comprende l'organizzazione del codice e dei files in modo da promuovere chiarezza, modularitá e manutenibilitá. Anche se non c'é una regola precisa su come strutturare un
        componente React, esistono pratiche comuni che molti sviluppatori seguono. Questa é una struttura raccomandata:
      </p>
    </div>
    <div class="col">
      <ul>
        <li>ComponentName.js # Main component code</li>
        <li>ComponentName.css # Component-specific styles (optional)</li>
        <li>ComponentName.test.js # Component tests (optional)</li>
        <li>index.js # Exports the component for easier imports</li>
        <li>README.md # Component documentation (optional)</li>
      </ul>
    </div>
    <div class="col">
      <p>
        ComponentName.js: Questo é il file principale che contiene il codice del componente. Dovrebbe definire le funzionalitá del componente, interpretazione della logica e un qualunque stato e prop associato.
      </p>
    </div>
    <div class="col">
      <p>
        ComponentName.css (optional): Se il componente necessita stili specifici, si possono creare file CSS separati per quello. Questo aiuta a mantenere stati modulari e facili da gestire. Si potrebbe anche
        considerare usare soluzioni CSS-in-JS o moduli CSS.
      </p>
    </div>
    <div class="col">
      <p>
        ComponentName.test.js (optional): Se si sta seguendo test-driven development o semplicemente ci si vuole assicurare che il componente si comporti come previsto, si puó creare file di test usando framework
        di test come Jest e React Testing Library.
      </p>
    </div>
    <div class="col">
      <p>index.js: questo file é usato per esportare componenti, rendendo piú facile importarli in altre parti dell'applicazione. Questo permette di usare named imports e semplificare l'importazione.</p>
    </div>
    <div class="col">
      <p>
        README.md (optional): Scrivere una breve descrizione dello scopo, uso e ogni nota importante del componente in un file README puó essere utile per lo sviluppatore e altri che potrebbero usare il
        componente in futuro.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>Esempio: Creiamo una semplice struttura del componente Button sequendo le convenzione precedenti:</p>
    </div>
    <div class="col">
      <ul>
        <li>Button.js</li>
        <li>Button.css</li>
        <li>Button.test.js</li>
        <li>index.js</li>
      </ul>
    </div>
    <div class="col">
      <p>Button.js:</p>
      <pre>
        <code class="language-javascript">
          import React from "react";
          import "./Button.css";

          function Button(props) {
            const { label, onClick } = props;

            return (
              &ltbutton className="button" onClick={onClick}&gt
                {label}
              &lt/button&gt
            );
          }

          export default Button;
        </code>
      </pre>
    </div>
    <div class="col">
      <p>Button.css:</p>
      <pre>
        <code class="language-css">
        .button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
        </code>
      </pre>
    </div>
    <div class="col">
      <p>index.js:</p>
      <pre>
        <code class="language-javascript">
        import Button from "./Button";

        export default Button;
        </code>
      </pre>
    </div>
    <div class="col">
      <p>Now, you can easily import the Button component using:</p>
      <pre>
        <code class="language-javascript">
        import Button from "./Button";
        </code>
      </pre>
    </div>
    <div class="col">
      <p>Aderendo a una struttura del componente , si puó assicurare che il codice rimanga organizzato, manutenibile e facile da lavorarci con il crescere dell'applicazione.</p>
    </div>
  </div>

  <h2>React, come ci compongono i componenti.</h2>

  <div class="row">
    <div class="col">
      <p>
        Comporre componente in react involve combinare componenti piccoli e riusabili insieme per creare un interfaccia grande e piú complessa. Questo é possibile eseguendo componenti figlio con componenti padre
        JSX. Questa é una guida passo a passo su come comporre componente in React:
      </p>
    </div>
    <div class="col">
      <p>
        Creare componenti riusabili: Iniziare dal creare componneti individuali che incapsulino parti specifiche della UI o una funzionalitá. Ogni componente dovrebbe idealmente avere solo una responsabilitá.
        Questo promuove riusabilitá e manutenibilitá.
      </p>
    </div>
    <div class="col">
      <p>
        Componeneti annidati in JSX: Per creare componenti, si puó rendere in componente figlio dentro il JSX di un componnete padre. Usare semplicemente il nome del componente figlio come se fosse un componente
        HTML dentro il JSX del componente padre.
      </p>
    </div>
    <div class="col">
      <p>
        Passare dati con i prop: Per rendere i componenti composti piú dinamici si possono passare dati da componente padre a figlio usando prop (properties). I prop permettono di mandare informazioni ai
        componenti figlio, permettendogli di eseguire con i dati recepiti.
      </p>
    </div>
    <div class="col">
      <p>
        Esempio di composizione di componenti: Illustriamo il processo con un semplice esempio. Supponendo di avere un componente User che visualizza informazioni sll'utente e un componente UserProfile che usa il
        componente User per visualizzare altri profili.
      </p>
    </div>
    <div class="col">
      <pre>
        <code class="language-javascript">
        // User.js
        import React from 'react';

        function User(props) {
        return (
        &ltdiv className="user"&gt
        &lth3&gt{props.name}&lt/h3&gt
        &ltp&gtEmail: {props.email}&lt/p&gt
        &lt/div&gt
        );
        }

        export default User;

        // UserProfile.js
        import React from 'react';
        import User from './User';

        function UserProfile() {
        return (
        &ltdiv className="user-profile"&gt
        &lth2&gtUser Profile&lt/h2&gt
        &ltUser name="John Doe" email="john@example.com" /&gt
        &lt/div&gt
        );
        }

        export default UserProfile;
        </code>
      </pre>
    </div>
    <div class="col">
      <p>
        In questo esempio: Il componente User visualizza le informazioni dell'utente basato sulle proprietá ricevute. Il componente UserProfile é un componente padre che compone il componente User per creare la
        pagina profile dell'utente.
      </p>
    </div>
    <div class="col">
      <p>Quando si usa il componente UserProfile nell'applicazione, renderizzerá il componente User dentro di se:</p>
    </div>
    <div class="col">
      <pre>
        <code class="language-javascript">
        // App.js
        import React from "react";
        import UserProfile from "./UserProfile";

        function App() {
          return (
            &ltdiv className="app"&gt
              &ltUserProfile /&gt
            &lt/div&gt
          );
        }

        export default App;

        </code>
      </pre>
    </div>
    <div class="col">
      Componendo e annidando componneti si possono costruire interfacce utente piú complesse mantenendo un codice piú modulare e organizzato. Questo approccio facilitá il riuso del codice, facilitá la leggibilitá
      e semplifica lo sviluppo e il mantenimento dell'applicazione React.
    </div>
  </div>

  <h2>Ciclo di vita dei componenti React.</h2>

  <div class="row">
    <div class="col">
      <p>
        In React i componenti hanno un ciclo di vita che consiste di varie fasi durante le quali il componente viene creato, aggiornato e eventualmente distrutto. Ma, con l'introduzione di React 16.3 e dopo, i
        cicli di vita tradizionali sono stati deprecati in favore dei nuovi "React Hooks" API, che provvedono a una gestione piú flessibile e coesiva della logica dei componenti. Quí si coprirá sia il ciclo di
        vitá tradizionale che i React Hooks. Cicli di vita tradizionali (React 16.2 e precedenti):
      </p>
    </div>
    <div class="col">
      <p>
        Mounting Phase: constructor(): Inizializzare il componente, settare lo stato iniziale e i vincoli. componentWillMount(): Deprecato, chiamato prima che il componente venga eseguito per la prima volta.
        render(): Eseque i componenti della UI. componentDidMount(): Invocato dopo che il componente é stato e seguito per la prima volta. Usato per effetti secondari come il recupero dei dati o interazioni con
        il DOM.
      </p>
    </div>
    <div class="col">
      <p>
        Updating Phase: componentWillReceiveProps(nextProps): Deprecato, chiamato quando il componente riceve nuove proprietá prima di aggiornarsi. shouldComponentUpdate(nextProps, nextState): Determina se il
        componete debba aggiornarsi, migliorando le prestazioni prevenendo esecuzioni inutili. componentWillUpdate(nextProps, nextState): Deprecato, chiamato prima che il componente di aggiorni. render():
        Ricarica la UI del componente con lo stato e le proprietá aggiornate. componentDidUpdate(prevProps, prevState): Invocato dopo che il componente si a aggiorna. Usato per gli effetti secondari dopo
        l'aggiornamento.
      </p>
    </div>
    <div class="col">
      <p>Unmounting Phase: componentWillUnmount(): Invocato prima che un componente sia rimosso dal DOM. Usata per i metodi di pulizia quando rimuovono event listeners.</p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>React Hooks (React 16.8 e dopo): React Hooks permettono un modo piú consistente e semplificato per gestire i cicli di vita dei componenti e lo stato logico dentro i componenti funzionali.</p>
    </div>
    <div class="col">
      <p>
        State Management: useState: Gestisce stati dei componenti senza usare stati class-based. useEffect: Esegue effetti secondari (data fetching, interazione con il DOM) nei componenti funzionali. Simili a
        componentDidMount e componentDidUpdate. useContext: Accede al contesto dentro ai componenti funzionali.
      </p>
    </div>
    <div class="col">
      <p>
        Other Hooks: useReducer: Gestisce lo stato logico usando una funzione di riduzione. useCallback and useMemo: Ottimizza l'esequzione memorizzando funzioni e valori. useRef: Prende un oggetto di riferimento
        mutabile che persiste attraverso i lettori.
      </p>
    </div>
    <div class="col">
      <p>
        Con i React Hooks, non c'é bisogno di preoccuparsi dell'esatto ciclo di vita da usare in situazioni diverse. Hooks offrono un modo piú intuitivo e unificato di gestire il comportamento dei componenti,
        rendendo il codice piú facile da capire e manutenere.
      </p>
    </div>
    <div class="col">
      <p>
        Tirando le somme, mentre i metodi del ciclo di vita tradizionale sono ancora applicabili per React 16.2 e prima, React Hooks provvedono un approccio piú moderno e flessibile per gestire la logica dei
        componenti e le interazioni tra i componenti funzionali. Sono diventati il modo proferito per lavorare con il cicli di vita dei componenti nelle versioni recenti di React.
      </p>
    </div>
  </div>

  <h2>React useState</h2>

  <div class="row">
    <div class="col">
      <p>
        useState é un React Hook che permette ai componenti funzionali di gestire lo stato senza usare componenti classe. Fá parte dei React Hooks API introdotti in React 16.8, e permette di aggiungere stateful
        behavior ai componenti mentre si sta ancora usando la semplicitá e componibilitá dei componenti funzionali.
      </p>
    </div>
    <div class="col">
      <p>
        Uso: Per usare useState hook, bisogna importarlo dalla libreria React e chiamarlo dentro il componente. Ritorna un array di due elementi: il valore dello stato corrente e una funzione per aggiornare lo
        stato del valore.
      </p>
    </div>
    <div class="col">
      <p>Questa é la sintassi di base:</p>
      <pre>
        <code class="language-javascript">
        import React, { useState } from "react";

        function Counter() {
          // Declare a state variable named 'count' with initial value 0
          const [count, setCount] = useState(0);

          return (
            &ltdiv&gt
              &ltp&gtCount: {count}&lt/p&gt
              &ltbutton onClick={()=&gt setCount(count + 1)} &gt Increment&lt/button&gt
              &ltbutton &gt&lt/button&gt
            &lt/div&gt
          );
        }

        export default Counter;
        </code>
      </pre>
    </div>
    <div class="col">
      <p>
        In questo esempio lo useState hook é usato per creare una variabile di stato chiamata count con un valore iniziale di 0. La funzione setCount ritornata da useState é usata per aggiornare lo stato di
        count. Quando il bottone é cliccato, lo stato di count é incrementato di 1.
      </p>
    </div>
    <div class="col">
      <p>Punti chiave:</p>
      <ul>
        <li>Si puó usare useState piú volte in un singolo componente per gestire pezzi di stato differenti.</li>
        <li>L'argomento passato da useState é il valore iniziale dello stato.</li>
        <li>Le variabili di stato gestite da useState sono indipendenti e non si influenzano a vicenda.</li>
        <li>L'aggiornamento allo stato fatto usando la funzione state setter (setCount) é asincrono. React raggruppa multipli aggiornamenti di stato per essere piú efficente.</li>
      </ul>
    </div>
    <div class="col">
      <p>
        useState é un hook fondamentale che permette di aggiungere la gestione dello stato ai componenti della funzione. E' essenziale per costruire interfavve utente dinamiche e interattive senza il bisogno di
        componenti class-based e i cicli di vita a loro associati.
      </p>
    </div>
  </div>

  <h2>React useEffect</h2>

  <div class="row">
    <div class="col">
      <p>
        useEffect é un React Hook che permette di eseguire effetti secondari nei componenti funzionali. E' uno dei hook piú usati e permette di gestire vari scenari come il recupero di dati, manipolazione del
        DOM, e iscrizioni. Lo useEffect hook rimpiazza le funzionalitá dei metodi dei cicli di vita come: componentDidMount, componentDidUpdate e componentWillUnmount.
      </p>
    </div>
    <div class="col">
      <p>
        Uso: Per usare useEffect hook si importa dalla libreria React e viene chiamato dentro il componente funzionale. Ha bisogno di due argomenti: una funzione che contenga il codice dell'effetto secondario e
        un array di dipendenze opzionale. La funzione verrá eseguita dopo ogni esecuzione se le dipendenze sono cambiate.
      </p>
    </div>
    <div class="col">
      <p>Questa é la sintassi di base:</p>
      <pre>
        <code class="language-javascript">
        import React, { useState, useEffect } from "react";

        function DataFetching() {
          const [data, setData] = useState(null);

          useEffect(() =&gt {
            // Fetch data or perform side effect here
            // Update the 'data' state using setData
            // This function will run after every render

            // Return a cleanup function if needed (componentWillUnmount)
            return () =&gt {
              // Cleanup logic here
            };
          }, []); // Pass an empty array for no dependencies

          return &ltdiv&gt{data ? &ltp&gtData: {data}&lt/p&gt : &ltp&gtLoading...&lt/p&gt}&lt/div&gt;
        }

        export default DataFetching;

        </code>
      </pre>
    </div>
    <div class="col">
      <p>
        In questo esempio l'useEffect hook é usato per prendere dati o eseguire un effetto secondario. Gira a ogni eseguzione, ma in questo caso, gira solo una volta perché un array vuoto [] é passato come la
        lista di dipendenze. Se si vuole che l'effetto giri ogni volta che un pezzo particolare di stato cambi si puó includere quello stato nell'array delle dipendenze. Per esempio, passare [count] farebbe
        partire l'effetto ogni volta che lo stato di count cambia.
      </p>
    </div>
    <div class="col">
      <p>
        Pulizia: Se l'effetto necessita di essere cancellato( come in componentWillUnmount), si puó ritornare un funzione di pulizia dall'effetto. Questa funzione sará eseguita quando il componente viene smontato
        o quando le dipendenze cambiano e l'effetto necessitá di essere riusato.
      </p>
    </div>
    <div class="col">
      <p>
        Nota: Se non si procura un array di dipendenze, l'effetto partirá dopo l'esecuzione, quella iniziale inclusa. Usando un array di dipendenze vuoto assicura che l'effetto parta solo una volta dopo
        l'esecuzione iniziale.
      </p>
    </div>
    <div class="col">
      <p>Casi di uso comune:</p>
      <ul>
        <li>Estrazioni di dati con APIs.</li>
        <li>Manipolazione del DOM.</li>
        <li>Iscrizioni e event listeners.</li>
        <li>Aggiornare i titoli dei documenti.</li>
        <li>Gestire animazioni e timer.</li>
      </ul>
    </div>
    <div class="col">
      <p>
        useEffect é un potente strumento per gestire effetti secondari dei componenti funzionali, rendendo il codice piú pulito e leggibile centralizzando la logica degli effetti secondari dentro i componenti.
      </p>
    </div>
  </div>
</section>
`,
  methods: {},
  mounted() {},
};
const Issues = {
  data() {
    return {
      starting: true,
      title: "Informazioni",
      subTitle: "Applicazione realizzata da Triossi",
      backgroundImage: "img/commonIssuesBackgroundImage.jpeg",
    };
  },
  template: /*html*/ `
    <div v-if="starting" class="image-container">
      <img :src="backgroundImage" alt="">
      <div class="centered-text">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{subTitle}}</p>
            <a class="btn btn-primary" @click="starting=false">Inizia ...</a>
          </div>
        </div>
      </div>
    </div>
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
    return {
      menus: [],
      starting: true,
      title: "Informazioni",
      subTitle: "Applicazione realizzata da Triossi",
      backgroundImage: "img/restaurantsBackgroundImage.jpeg",
    };
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
  template: /*html*/ `
  <div v-if="starting" class="image-container">
    <img :src="backgroundImage" alt="">
    <div class="centered-text">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">{{title}}</h1>
          <p class="card-text">{{subTitle}}</p>
          <a class="btn btn-primary" @click="starting=false">Inizia ...</a>
        </div>
      </div>
    </div>
  </div>

  <section class="document">
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
    return { menu: [], order: {}, starting: true, title: "Informazioni", subTitle: "Applicazione realizzata da Triossi", backgroundImage: "img/menuSelectionBackgroundImage.jpeg" };
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
    <div v-if="starting" class="image-container">
      <img :src="backgroundImage" alt="">
      <div class="centered-text">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{subTitle}}</p>
            <a class="btn btn-primary" @click="starting=false">Inizia ...</a>
          </div>
        </div>
      </div>
    </div>


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
    return {
      starting: true,
      title: "Informazioni",
      subTitle: "Applicazione realizzata da Triossi",
      backgroundImage: "img/aboutBackgroundImage.jpeg",
    };
  },
  template: /*html*/ `
    <div v-if="starting" class="image-container">
      <img :src="backgroundImage" alt="">
      <div class="centered-text">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">{{title}}</h1>
            <p class="card-text">{{subTitle}}</p>
            <a class="btn btn-primary" @click="starting=false">Inizia ...</a>
          </div>
        </div>
      </div>
    </div>
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

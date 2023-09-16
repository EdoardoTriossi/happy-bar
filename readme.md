# Happy Bar

Creare un progetto web che:

- realizzi una Single Page application utilizzando vue.js con CDN
- descriva il framework per applicazioni web React.js

Il progetto verrà creato a partire dalle cinque pagine realizzate separatamente e poi assemblare in una SPA.
In questo modo ho voluto ridurre la complessità di scrivere codice all'interno di un template di un componente vue.js
senza il supporto offerto dagli editor allo sviluppo web.

## React.js

Pagina principale dell'applicazione in cui descrivo il funzionamento in genrale di React.
Questo studio ha anche portato alla creazione di questa [applicazione React](https://github.com/EdoardoTriossi/progetto-web) che realizza un sistema di gestione comande lato cliente e cucina simile a quello che ora ho realizzato con Vue.js

## Issues

Seconda pagina dell'applicazione in cui vengono elencati e spiegati i problemi che sono emersi nella creazione dell'applicazione scritta con React.

## Lettura e visualizzazione file json (restaurants)

Questa pagina visualizza il finto listino dei piatti di alcuni ristoranti di New York utilizzando [accordion](https://getbootstrap.com/docs/5.0/components/accordion/) e [tabelle](https://getbootstrap.com/docs/5.0/content/tables/) Bootstrap
Alcuni di questi ristoranti non hanno dati sugli affettivi piatti e quindi è solo indicato il nome ed il fatto che non siano disponibili i dati

## Sistema per gestione comande (happy bar customer)

Questa pagina:

- visualizzerà il menu di un fastfood
- il contenuto verrà caricato da un file json
- Sarà possibile ordinare i vari piatti

- la comanda sarà caricata sul carrello che apparirà utilizzando un [offcanvas](https://getbootstrap.com/docs/5.0/components/offcanvas/) boostrap.
- all'interno del carrello il cliente potrà:

  - variare le quantità dei piatti scelti
  - cancellare il piatto
  - inviare la comanda

Quindi in questa pagina sarà possibile modificare i dati della comanda

## About

Questa pagina conterrà queste spiegazioni sul progetto.

## Piano di lavoro

- Creare l'applicazione statica con html e css.
- Utilizzare vue per rendere dinamica la pagina dei restaurant caricando le informazioni dal file json.
- Implementare la pagina di gestione comande denominata happy bar che permetta di ordinare nuovi piatti per la comanda.
- Utilizzare una offcanvas per la realizzazione del carrello per permette di cambiare le quantità dei piatti ordinati, cancellare i piatti non più richiesti e inviare la comanda.
- Completare le prime due pagine descrivendo react e i problemi che ho avuto usando html e css.
- Creare la Single page application spostando il codice in index.js.

## Appendice

Per realizzare questa SPA ho utilizzato:

- [vue.js](https://vuejs.org/)
- [CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
- [Bootstrap](https://getbootstrap.com/)
- [Router](https://router.vuejs.org/)
- [CSS](https://www.w3schools.com/Css/)
- [Microsoft creazione immagini](https://www.bing.com/images/create?toWww=1&redig=04EB1C13624D420C8E8A6467A9E63786)
- file json contenente listini di alcuni ristoranti New York
- file json contenente piatti di un fastfood immaginario

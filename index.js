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
  <h1>Issues</h1>
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
  <h1>About</h1>
  `,
  methods: {},
  mounted() {},
};

const routes = [
  { path: "/", component: React },
  { path: "/issues", component: Issues },
  { path: "/restaurants", component: Restaurants },
  { path: "/happyBar", component: HappyBar },
  { path: "/bout", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");

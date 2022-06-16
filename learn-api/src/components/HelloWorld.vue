<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else v-for="currency in info" :key="currency.id" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>
          {{ currencydecimal(currency.rate_float) }}
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  methods: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  margin-top: 20px;
  width: 300px;
  padding: 0 40px 40px;
  background: #2f242c;
  border-radius: 5px;
  color: #b3bfb8;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
</style>

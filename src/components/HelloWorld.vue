<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/UserDatabase">User Information</router-link></li>
      <li><router-link to="/ProductList">Product</router-link></li>
      <li><router-link to="/Articles">Articles</router-link></li>
      <li><router-link to="/ProductDetail">Product Detail</router-link></li>
      <li><router-link to="/ProductFullDetail">Product Full Detail</router-link></li>
    </ul>
    <h2>Calculator</h2>
    <input v-model="factor1" @change="updateFactor1" placeholder="Factor 1">
    *
    <input v-model="factor2" @change="updateFactor2" placeholder="Factor 2">
    =
    <input v-model="product" placeholder="Product" readonly="true">
    <!-- <h2>User Database</h2>
    <router-link to="/UserDatabase">Visit our User Information</router-link>
    <h2>Product Search</h2>
    <router-link to="/ProductList">Visit our Product Site</router-link>
    <h2>Articles</h2>
    <router-link to="/Articles">Visit our Articles</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Carrie\'s App!',
      factor1: '',
      factor2: '',
      product: ''
    }
  },
  methods: {
    updateFactor1 (event) {
      this.factor1 = event.target.value
      this.product = this.factor1 * this.factor2
    },
    updateFactor2 (event) {
      this.factor2 = event.target.value
      this.product = this.factor1 * this.factor2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: green;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: rgb(105, 191, 206);
  color: white;
  width: 200px;
}
</style>

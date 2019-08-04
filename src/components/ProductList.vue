<template>
  <div>
    <h1>Product Page</h1>
    <div>
    </div>
    <span>search by Name</span>
    <input v-model="searchName">
    <span>search by Id</span>
    <input v-model="searchId">
    <span>search Price</span>
    <input v-model="searchPrice">
    <button v-on:click="search">search</button>
    <h2>Products</h2>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <table style="width:100%">
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Size</th>
      </tr>
      <tr>
        <td>1</td>
        <td>T-Shirt</td>
        <td>Uniqlo</td>
        <td>$7.99</td>
        <td>XS</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jeans</td>
        <td>Levis</td>
        <td>$32.99</td>
        <td>M</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Coat</td>
      <td>Fendi</td>
      <td>$3025.99</td>
      <td>S</td>
      </tr>
      <tr>
      <td>4</td>
      <td>Dress</td>
      <td>Honey</td>
      <td>$75.99</td>
      <td>L</td>
      </tr>
      <tr>
      <td>5</td>
      <td>Handbag</td>
      <td>Louis Vuitton</td>
      <td>$1025.99</td>
      <td>One-size</td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
var axios = require("axios");
var productList;

export default {
  name: "productList",
  data() {
    return {
      searchName: "",
      searchHighPrice: "",
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "name",
          sortable: true
        },
        {
          key: "price",
          sortable: true
        },
        {
          key: "producer",
          sortable: true
        }
      ],
      items: []
    };
  },
  methods: {
    openProductDetail(row) {
      console.log(row);
      console.log(row.id);
      this.$router.push({
        path: "/productDetail",
        query: {
          id: row.id
        }
      });
    },
    openDetails(row) {
      console.log(row);
      console.log(row.name);
      alert(row.name);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    search() {
      this.$http
        .post("http://localhost:8081/product/list", { name: this.searchName, highPrice: this.searchHighPrice })
        .then(function(response) {
          console.log(response.data);
          this.items = response.data;
        });
    }
  },
  mounted: function() {
    this.$http
      .post("http://localhost:8081/product/list", {})
      .then(function(response) {
        console.log(response.data);
        this.items = response.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: rgb(8, 38, 83);
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
}
th {
  text-align: middle;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}

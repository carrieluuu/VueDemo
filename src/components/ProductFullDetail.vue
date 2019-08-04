<template>
  <div>
    <div>
      <h4>Product Detail Page</h4>
    </div>

    <div class="container">
      <b-row>
        <b-col>id:</b-col>
        <b-col cols="9" class="text-left" v-if="productId">{{productId}}</b-col>
      </b-row>

      <b-row>
        <b-col>name</b-col>
        <b-col cols="9" class="text-left" v-if="productDetail">{{productDetail.productName}}</b-col>
      </b-row>

      <b-row>
        <b-col>shareCount</b-col>
        <b-col cols="8" class="text-left" v-if="productDetail">{{productDetail.shareCount}}</b-col>
      </b-row>
    </div>
  </div>
</template>
<style>
.card-body-big {
  height: 30%;
}
.first-picture {
  width: 100%;
}
.green-back {
  background-color: green;
  height: 40%;
}
.container {
  margin-left: 10%;
}
</style>
<script>
/* eslint-disable */
export default {
  name: "productFullDetail",
  data() {
    return {
      productDetail: {},
      productId: ""
    };
  },
  methods: {
    getData() {
      this.productId = this.$route.query.id;
      this.$http
        .post("http://localhost:8081/product/fulldetail", {
          id: this.$route.query.id
        })
        .then(function(response) {
          console.log(response.data);
          const result = response.data[0];
          this.productDetail = result;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

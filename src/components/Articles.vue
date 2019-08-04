<template>
  <div class="card">
    <div>
    <b-card-group deck>
    <b-card
    overlay
    img-src="https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/274292f1-corgi.jpg?ve=1&tl=1?ve=1&tl=1"
    img-alt="Card Image"
    text-variant="white"
    title="Corgo's Pet Shop"
    sub-title="Come join us!"
    >
      <b-card-text>Dogs love us.</b-card-text>
      <b-button href="https://corgiorgy.com/" variant="primary">Visit</b-button>
    </b-card>

    <b-card title="KitKat's Pet Shop" header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">Cat Food on SALE!</h6>
      <b-card-text>Cats love us.</b-card-text>
      <b-button href="https://cat-bounce.com" variant="primary">Visit</b-button>
      <em slot="footer">DON'T MISS OUT!</em>
    </b-card>
  </b-card-group>
</div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: rgb(8, 38, 83);
}
</style>

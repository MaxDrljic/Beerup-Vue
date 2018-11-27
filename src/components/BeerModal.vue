<template>
  <b-modal
    id="beerModal"
    hide-footer
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <a class="heart-outline" href="#">&#x2661;</a>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <img class="beer-modal-img img-fluid" :src="data.image_url" alt="beer">
            </div>
            <div class="col-xl-6 col-md-6 beer-modal-container pt-4">
              <h4 class="beer-modal-header d-none d-sm-block">{{ data.name }}</h4>
              <p class="beer-modal-paragraph pt-4">
                <small class="text-muted">MALT:</small>
                {{ data.ingredients && data.ingredients.malt && data.ingredients.malt[0] && data.ingredients.malt[0].name }}
              </p>
              <p class="beer-modal-paragraph pt-0">
                <small class="text-muted">AMOUNT:</small>
                {{ data.ingredients && data.ingredients.malt && data.ingredients.malt[0] && data.ingredients.malt[0].amount && data.ingredients.malt[0].amount.value }}
              </p>
              <p class="beer-modal-paragraph pt-0">
                <small class="text-muted">UNIT:</small>
                {{ data.ingredients && data.ingredients.malt && data.ingredients.malt[0] && data.ingredients.malt[0].amount && data.ingredients.malt[0].amount.unit }}
              </p>
              <p class="beer-modal-paragraph pt-2">
                <small class="text-muted">HOPS:</small>
                {{ data.ingredients && data.ingredients.hops && data.ingredients.hops[0] && data.ingredients.malt[0].name }}
              </p>
              <p class="beer-modal-paragraph pt-0">
                <small class="text-muted">AMOUNT:</small>
                {{ data.ingredients && data.ingredients.hops && data.ingredients.hops[0] && data.ingredients.hops[0].amount && data.ingredients.hops[0].amount.value }}
              </p>
              <p class="beer-modal-paragraph pt-0">
                <small class="text-muted">UNIT:</small>
                {{ data.ingredients && data.ingredients.hops && data.ingredients.hops[0] && data.ingredients.hops[0].amount && data.ingredients.hops[0].amount.unit }}
              </p>

              <p class="beer-modal-paragraph pt-2">
                <small class="text-muted">Description:</small>
                {{ data.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "BeerModal",
  props: ['data']
}
</script>

<style scoped>
/* === BEER MODAL === */

.close {
  font-size: 2em;
  padding-right: 5% !important;
  padding-top: 5% !important;
  color: #FFC80A;
}

.heart-outline {
  position: absolute;
  top: -11vh;
  text-decoration: none;
  color: darkgray;
  font-size: 2.6em;
}

.heart-outline:hover {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.466);
}

.beer-modal-img {
  width: 160px;
  height: 60%;
}

.beer-modal-container {
  margin-left: -6%;
}

.beer-modal-header {
  text-transform: uppercase;
  margin-bottom: -3px;
  color: #212121;
  font-size: 36px;
  line-height: 36px;
}

.ibu, .abv {
  color: #9FA3A7;
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 26px;
}

.ibu-span, .abv-span {
  padding-left: 20px;
  color: #3F4750;
  font-size: 14px;
  font-weight: bold;
  line-height: 26px;
}

p.beer-modal-paragraph {
  color: #111;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 26px;
}

.add-to-crate {
  margin-top: -80%;
  margin-right: -28%;
}
</style>

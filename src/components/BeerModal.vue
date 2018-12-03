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
          <button
            id="favorite"
            class="heart-outline"
            @click="toggleFavorite(data)"
            :class="{ favorited: data.id }"
          >&#x2661;</button>

          <!-- Tooltip Favorite -->
          <b-tooltip
            click
            :favorited.sync="isFavorite"
            ref="tooltip"
            target="favorite"
            placement="bottom"
          >Added To Favorites</b-tooltip>
        </div>

        <!-- Modal Body -->
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
  data() {
    return {
      show: false
    };
  },
  props: ["data"],
  methods: {
    toggleFavorite: function(data) {
      this.$store.dispatch("toggleFavorite", data);
    }
  },
  setFavorite: function(favorite) {
    this.$store.favorites.push(favorite);
  },
  computed: {
    isFavorite: function() {
      return this.$store.getters.IS_FAVORITE;
    }
  }
};
</script>

<style scoped>
</style>

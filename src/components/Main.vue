<template>
  <div>
    <!-- Beer Modal -->
    <BeerModal :data="selectedBeer"></BeerModal>

    <!-- HERO SECTION
    =============================================-->
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-md-12 join-container">
            <h5 class="beerster">THE BEERSTER PRO 2.0</h5>
            <h1 class="heading-join">JOIN OUR FAMOUS BEERUP!</h1>
            <button type="button" class="btn beerup-button">JOIN BEERUP</button>
          </div>
          <div class="col-xl-4 col-md-12 clearfix">
            <img class="illustration float-right" src="illustration.png" alt="Beerup Illustration">
          </div>
        </div>
      </div>
    </section>

    <!-- Will show up if there is an error -->
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <!-- MAIN SECTION
    =============================================-->
    <section v-else>
      <div class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-md-6 col-xs-12 main-content">
              <h3 class="beer-heading">Beer</h3>
              <Sort></Sort>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 p-0 beer" v-for="beer in beers" :key="beer.id">
                    <b-card-group deck>
                      <b-card>
                        <div class="row no-gutters">
                          <div class="col-auto">
                            <b-link href="#" v-b-modal="'beerModal'" @click="sendInfo(beer)">
                              <img :src="beer.image_url" class="card-img-top" alt="Beer Image">
                            </b-link>
                          </div>
                          <div class="col card-text-container">
                            <div class="card-block pl-2">
                              <h5 class="card-title beer-title">{{ beer.name }}</h5>
                              <small class="text-muted ibu">
                                IBU
                                <span class="ibu-span">{{ beer.ibu }}</span>
                              </small>
                              <br class="d-none d-sm-block">
                              <small class="text-muted abv">
                                ABV
                                <span class="abv-span">{{ beer.abv }}%</span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-card-group>
                  </div>
                </div>
                <!-- Infinite Scroll Trigger -->
                <Trigger @triggerIntersected="loadMore"></Trigger>
              </div>
              <img class="img-fluid cap-bottom" style="left: 74%" src="cap.png" alt="cap">
            </div>

            <!-- Crate Section -->
            <Crate></Crate>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BeerModal from "./BeerModal";
import Crate from "./Crate";
import Sort from "./Sort";
import Trigger from "./Trigger";

export default {
  name: "Main",
  components: {
    BeerModal,
    Crate,
    Sort,
    Trigger
  },
  data() {
    return {
      loading: true,
      errored: false,
      modalShow: false,
      selectedBeer: ""
    };
  },
  methods: {
    sendInfo(beer) {
      this.selectedBeer = beer;
    },
    async loadMore() {
      this.$store
        .dispatch("loadBeers")
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.loadMore();
  },
  computed: mapState(["beers"])
};
</script>


<style scoped>
</style>

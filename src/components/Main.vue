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
              <div class="container">
                <div class="row">
                  <div class="col-md-3 p-0" v-for="beer in info" :key="beer.id">
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
              </div>

              <!-- BEER MODAL
              =============================================-->
              <!-- <b-modal
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
                          <img
                            class="beer-modal-img img-fluid"
                            src="/assets/img/beer.svg"
                            alt="beer"
                          >
                        </div>
                        <div class="col-xl-6 col-md-6 beer-modal-container pt-4">
                          <h4 class="beer-modal-header d-none d-sm-block">BEER</h4>
                          <h4 class="beer-modal-header d-none d-sm-block pb-4">NAME</h4>
                          <h4 class="beer-modal-header d-block d-sm-none">BEER NAME</h4>
                          <small class="ibu pt-4">
                            IBU
                            <span class="ibu-span">35</span>
                          </small>
                          <br class="d-none d-sm-block">
                          <small class="abv">
                            ABV
                            <span class="abv-span">5,6%</span>
                          </small>
                          <p class="beer-modal-paragraph pt-4">
                            Our scene-stealing flagship is an India Pale Ale
                            <br>that has
                            become
                            a
                            byword
                            for craft beer
                            <br>rebellion;
                            synonymous with the insurgency
                            <br>against mass-produced, lowest common
                            <br>denominator beer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer mx-auto mb-4">
                      <button type="button" class="btn beerup-button add-to-crate">ADD TO CRATE</button>
                    </div>
                  </div>
                </div>
              </b-modal>-->
            </div>

            <img class="img-fluid cap-bottom" src="cap.png" alt="cap">
            <div class="col-xl-4 col-md-6 col-xs-12 side-container">
              <img class="img-fluid cap-top" src="cap.png" alt="cap">
              <h3 class="crate-heading">Crate</h3>

              <!-- CRATE TABS -->
              <ul
                class="nav nav-tabs justify-content-center crate-tabs"
                id="crateTab"
                role="tablist"
              >
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link active"
                    id="current-crate"
                    data-toggle="tab"
                    href="#current-crate"
                    role="tab"
                    aria-controls="current-crate"
                    aria-selected="true"
                  >
                    <span class="crate-span">ONE</span>
                  </a>
                </li>
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link"
                    id="two-crate"
                    data-toggle="tab"
                    href="#two-crate"
                    role="tab"
                    aria-controls="two-crate"
                    aria-selected="false"
                  >
                    <span class="crate-span">TWO</span>
                  </a>
                </li>
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link"
                    id="three-crate"
                    data-toggle="tab"
                    href="#three-crate"
                    role="tab"
                    aria-controls="three-crate"
                    aria-selected="false"
                  >
                    <span class="crate-span">THREE</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BeerModal from "./BeerModal";

export default {
  name: "Main",
  components: {
    BeerModal
  },
  data() {
    return {
      info: "",
      loading: true,
      errored: false,
      modalShow: false,
      selectedBeer: ""
    };
  },
  methods: {
    sendInfo(beer) {
      this.selectedBeer = beer;
    }
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=15&ibu_gt=30")
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>


<style scoped>
/* === MAIN SECTION === */

.main-content {
  padding-top: 20px;
}

.beer-heading,
.crate-heading {
  margin-top: 2.5rem;
  color: #212121;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

.card-group {
  max-width: 25%;
  padding-top: 10px;
}

.card {
  width: 20%;
  height: 20%;
}

.card-img-top {
  width: 100%;
  height: 9vw;
  object-fit: cover;
}

.beer-title {
  color: #292929;
  font-size: 0.8vw;
  font-weight: bold;
  line-height: 17px;
  text-transform: uppercase;
}

.card-text-container {
  word-break: keep-all;
}

.ibu-span,
.abv-span {
  color: #292929;
}

/* CRATE SECTION */

.crate-heading {
  padding: 1rem 0 0 85px;
}

.nav-item.crate-item a,
.crate-span {
  margin: 0;
  margin: 8px;
  padding: 0;
  padding-bottom: 25px;
  color: #3f4750 !important;
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 17px;
}

.crate-tabs {
  margin-left: 30px;
}

.nav-link .crate-span,
.nav-link .crate-span:after,
.nav-link .crate-span:before {
  transition: all 0.2s;
}

.nav-link .crate-span:hover {
  padding-bottom: 5px;
  border-bottom: 4px solid #f05638;
}

.nav-link .crate-span.active {
  border-bottom: 4px solid #f05638;
}

.crate-instructions {
  font-family: "Open Sans";
  color: #3f4750;
  font-size: 12px;
  line-height: 32px;
}

.name-caption {
  color: #9fa3a7;
  font-family: "Open Sans";
  font-size: 12px;
  line-height: 32px;
}

.crate-text-container {
  padding: 0;
  margin: 0;
  margin: 20px 0 0 80px;
}

/* CAP IMAGES */
.cap-top {
  position: relative;
  top: -35px;
  left: 255px;
}

.cap-bottom {
  position: absolute;
  bottom: -25px;
  left: 566px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>

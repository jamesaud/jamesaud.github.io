<template>
  <div class="entry" :id="'entry-' + title">

    <router-link :to="{name: 'Home'}">
        <v-btn white fab transparent class="back-button">
        <v-icon dark color='light-blue'>fa-arrow-left</v-icon>
        </v-btn>
    </router-link>

    <v-container class="panel">
       <v-layout row wrap>
          <v-flex md12 xs-12>

            <v-card raised light class="card--raised--white">
              <v-card-media
                class="white--text card-image"
                height="350px"
                :src="image">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex class='title' md8 offset-md2 xs12 align-end flexbox text-md-center>
                        <h1 class="display-3 mb-1">{{title}}</h1>
                        <h2 class="display-1 mb-4">{{subtitle}}</h2>
                        <h3 class="headline grey--text text--lighten-2 ">{{date}}</h3>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card-media>

              <v-container class="content">
                 <v-layout>
                      <v-flex md12 flexbox>
                        <slot>
                        </slot>
                      </v-flex>
                    </v-layout>
              </v-container>
            </v-card>

          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>


<script>

export default {
  name: 'Entry',
  props: ['title', 'subtitle', 'image', 'date'],


}
</script>

<style lang="scss" scoped>

  .back-button{
    position: fixed;
    top: 30px;
    left: 30px;
    z-index: 3;
  }

  .panel{
    margin-top: 4em;
  }

  .entry{
        background-color: #191919;
        height: 100%;
    }

    .content{
      padding-left: 10%;
      padding-right: 10%;
    }

    .card-image{
            background-color: dodgerblue;

    }

    .title{
      margin-top: 90px;
    }

</style>

<style lang="scss">
  .project-content{
    font-size: 1.1em;
    h2{
      font-size: 2.3em;
      color: #03A9F4;
      font-weight: 400;
      margin-bottom: .3em;
      margin-top: .7em;
    }
    p{
      color: #212121;
      font-size: 1.2em;
      font-weight: 300;
    }
    h4{
      font-size: 1.3em;
      margin-top: 1.1em;
      margin-bottom: .7em;
      font-weight: 400;
    }
  }
</style>

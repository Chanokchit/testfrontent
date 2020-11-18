<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end my-n5"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="175px"
          >
            <v-card-title v-text="card.title" />
          </v-img>

          <!-- <v-card-actions>
            <v-spacer />

            <v-btn icon>
              <v-icon large>
                mdi-heart
              </v-icon>
            </v-btn>

//////      <v-btn
              icon
              large
            >
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Home', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Road', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Airline', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Random', src: 'https://picsum.photos/350/165?random', flex: 12 },
      ],
    }),
  }
</script>

<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-divider />
      <!-- ################################################################################################################ -->
      <v-list-group
        v-show="isNinja"
        :value="true"
        no-action
        color="indigo"
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title style="color:white;font-size : 15px; ">
              Manage Device
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title,method], i) in managedeviceuser"
          :key="i"
          link
          :to="{ name: method }"
          color="indigo"
        >
          <v-list-item-title v-text="title" />

          <v-list-item-icon>
            <!-- <v-icon v-text="icon" /> -->
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-divider />
      <!-- ################################################################################################################ -->
      <v-list-group
        v-show="isNinja"
        no-action
        color="indigo"
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title style="color:white;font-size : 15px; ">
              Manage User
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, method], i) in manageUseruser"
          :key="i"
          color="indigo"
          :to="{ name: method }"
          link
        >
          <v-list-item-title v-text="title" />

          <v-list-item-icon>
            <!-- <v-icon v-text="icon" /> -->
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-divider />
      <!-- ################################################################################################################ -->
      <v-list-group
        v-show="!isNinja"
        no-action
        sub-group
        color="indigo"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title style="color:white;font-size : 15px; ">
              Manage Device
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title,method], i) in managedeviceadmin"
          :key="i"
          link
          color="indigo"
          :to="{ name: method }"
        >
          <v-list-item-title v-text="title" />

          <v-list-item-icon>
            <!-- <v-icon v-text="icon" /> -->
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-divider />
      <!-- ################################################################################################################ -->
      <v-list-group
        v-show="!isNinja"
        no-action
        color="indigo"
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title style="color:white;font-size : 15px; ">
              Manage User
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, method], i) in manageUseradmin"
          :key="i"
          color="indigo"
          link
          :to="{ name: method }"
        >
          <v-list-item-title v-text="title" />

          <v-list-item-icon>
            <!-- <v-icon v-text="icon" /> -->
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-divider />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      isNinja: true,
      // ---------------------------------------------------------USER-------------------------------------------
      managedeviceuser: [
        ['Device List', 'Devices List'],
      ],

      manageUseruser: [
        ['Password reset', 'Password Reset'],
        ['Edit Profile', 'Edit Profile'],
      ],
      // ---------------------------------------------------------ADMIN-------------------------------------------
      managedeviceadmin: [
        ['Devices List', 'Devices List'],
        ['Create Device', 'Create Device'],
      ],

      manageUseradmin: [
        ['Admin Password Reset', 'Admin Password Reset'],
        ['Create User', 'Create User'],
        ['Edit Profile', 'Edit Profile'],
      ],

    }),
    method: {
      // cancel () {
      //   // :to="{ name: 'welcome' }"
      //   this.$store.commit('setError', '')
      //   this.$router.push({ name: 'welcome' })
      // },
    },

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  //
</style>

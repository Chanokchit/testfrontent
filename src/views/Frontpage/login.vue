<template>
  <v-col>
    <!-- <v-card
      class="elevation-12"
      min-width="170"
    > -->
    <!-- <v-toolbar
      src="https://papers.co/wallpaper/papers.co-vm29-poly-art-abstract-blue-green-pattern-36-3840x2400-4k-wallpaper.jpg"
    >
      <v-spacer />
      <v-toolbar-title
        :class="$style.toolbar3"
      >

      </v-toolbar-title>
      <v-spacer />
    </v-toolbar> -->
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="mt-1 mb-5">
        Login
      </h1>
    </v-row>
    <v-card-text @keyup.enter="login($event)">
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model="user.username"
          filled
          background-color="#EAFAF1"
          rounded
          color="#009688"
          label="Username"
          name="login"
          required
          :rules="[v => !!v || 'Username is required.']"
          prepend-icon="mdi-account"
          type="text"
        />
        <v-text-field
          v-model="user.password"
          color="#009688"
          filled
          background-color="#EAFAF1"
          rounded
          prepend-icon="mdi-lock"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          required
          :rules="[v => !!v || 'Password is required.']"
          :type="show2 ? 'text' : 'password'"
          name="input"
          label="Password"
          class="input-group--focused"
          @click:append="show2 = !show2"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        class="center white--text mb-3 ml-10"
        rounded
        large
        color="blue-grey darken-4"
        @click="login()"
      >
        Login
      </v-btn>
      <v-btn
        large
        text
        class="text-capitalize teal--text mt-n2"
      >
        <h3>Forget Password</h3>
      </v-btn>
      <v-spacer />
    </v-card-actions>
    <!-- </v-card> -->
  </v-col>
</template>
<script>
  export default {
    // props: {
    //   source: String,
    // },
    data () {
      return {
        user: {
          username: '',
          password: '',
        },
        valid: true,
        show2: false,
        rules: {
          requiredUser: value => !!value || 'Required Username.',
          requiredPassword: value => !!value || 'Required Password.',
        },
      }
    },
    methods: {
      login () {
        if ((this.user.username && this.user.password) === '') {
          this.$refs.form.validate()
          console.log('NO DATA')
        } else {
          console.log('login function')
          this.axios
            .post(
              'http://203.150.221.212:4005/api/license_plate/accounts/login',
              this.user,
            )
            .then(res => {
              console.log(res.data)
              // this.$store.commit('data_user', res.data.user_id)
              this.$cookies.set('data_user', res.data.user_id)
              this.$cookies.set('username', res.data.username)
              if (res.data.status === 'Admin login success') {
                // alert('login success')
                this.$router.push('/admin')
              } else if (res.data.status === 'User login success') {
                // alert('login success')
                this.$router.push('/Homepage')
              } else {
                this.$store.commit('status_snackbarlogin', true)
                this.user.username = ''
                this.user.password = ''
              }
            })
        }
      },
    },
  }
</script>
<style module>
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@700&display=swap");
.toolbar3 {
  color: rgb(255, 255, 255);
  font-family: "Exo 2", sans-serif;
  font-size: 30px;
}
</style>

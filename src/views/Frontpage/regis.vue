<template>
  <v-app>
    <!-- <div> -->
    <v-img
      max-height="700px"
      src="https://github.com/Chanokchit/workshop_docker/blob/master/AdobeStock1.jpg?raw=true"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="6">
          <v-card
            id="card"
            class="mx-auto"
            max-width="450"
            height="550"
          >
            <!-- <v-toolbar
                color="purple"
                dark
              >
                <v-toolbar-title>Title</v-toolbar-title>

                <v-divider
                  class="mx-4"
                  vertical
                />

                <span class="subheading">My Home</span>

                <v-spacer />

                <v-toolbar-items class="hidden-sm-and-down">
                  <v-btn text>
                    News
                  </v-btn>

                  <v-divider vertical />

                  <v-btn text>
                    Blog
                  </v-btn>

                  <v-divider vertical />

                  <v-btn text>
                    Music
                  </v-btn>

                  <v-divider vertical />
                </v-toolbar-items>

                <v-app-bar-nav-icon />
              </v-toolbar> -->
            <v-card-title>
              <v-spacer />
              <v-icon
                x-large
                center
              >
                mdi-tractor
              </v-icon>
              <h2>
                Agrinno
              </h2>
              <v-spacer />
            </v-card-title>
            <v-divider />
            <!-- <v-card-text>
                "xxxxxxxxxxxxxxxxxx"
              </v-card-text> -->
            <!-- <div id="app">
              <v-app id="inspire"> -->
            <v-card
              class="mx-auto"
              width="300"
            >
              <!-- <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                  :value="true"
                  prepend-icon="mdi-account-circle"
                >
                  <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                  </template>

                  <v-list-group
                    :value="true"
                    no-action
                    sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="([title, icon], i) in admins"
                      :key="i"
                      link
                    >
                      <v-list-item-title v-text="title" />

                      <v-list-item-icon>
                        <v-icon v-text="icon" />
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>

                  <v-list-group
                    no-action
                    sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Actions</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="([title, icon], i) in cruds"
                      :key="i"
                      link
                    >
                      <v-list-item-title v-text="title" />

                      <v-list-item-icon>
                        <v-icon v-text="icon" />
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-group>
                </v-list-group>
              </v-list> -->
            </v-card>
            <!-- </v-app>
            </div> -->
          </v-card>
        </v-col>
        <!-- <v-spacer /> -->
        <v-col
          cols="6"
        >
          <v-sheet
            height="660"
            class="ma-3"
            color="#FFFFFB"
          >
            <!-- value: 1 -->
            <v-bottom-navigation
              :background-color="teal"
              class="teal"
              color="teal"
              grow
            >
              <v-btn to="home">
                <span>Home</span>

                <v-icon large>
                  mdi-home-outline
                </v-icon>
              </v-btn>

              <v-btn to="login">
                <span>Login</span>

                <v-icon large>
                  mdi-login-variant
                </v-icon>
              </v-btn>

              <v-btn to="regis2">
                <span>Register</span>

                <v-icon large>
                  mdi-account-plus
                </v-icon>
              </v-btn>
            </v-bottom-navigation>
            <router-view />
          </v-sheet>
          <!-- <div height="700px"> -->
          <!-- <v-card
              height="2000px"
              outlined
            > -->
          <!-- </v-scroll> -->
        </v-col>
      </v-row>
      <!-- <v-form-item label="InputNumber"> -->
      <a-input-number
        v-decorator="['input-number', { initialValue: 3 }]"
        :min="1"
        :max="10"
      />
      <span class="ant-form-text">
        machines
      </span>
      <!-- </a-form-item> -->
    </v-img>
    <v-footer
      app
      dark
    >
      <v-card
        class="flex my-n5 mx-n1"
        tile
      >
        <v-card-title class="teal">
          <v-spacer />
          <strong class="subheading">Get connected with us on homepage</strong>

          <v-spacer />

          <!-- <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn> -->
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!-- </div> -->
    <!-- </v-col> -->
  </v-app>
</template>

<script>
  // import { FormWizard, TabContent } from 'vue-form-wizard'
  // import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  // component code

  // Vue.use(VueFormWizard)
  export default {
    // components: {
    //   FormWizard,
    //   TabContent,
    // },
    props: {
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
      nextButtonText: {
        type: String,
        default: 'ถัดไป',
      },
      backButtonText: {
        type: String,
        default: 'Back',
      },
      finishButtonText: {
        type: String,
        default: 'Finish',
      },
      stepSize: {
        type: String,
        default: 'md',
        validator: (value) => {
          const acceptedValues = ['xs', 'sm', 'md', 'lg']
          return acceptedValues.indexOf(value) !== -1
        },
      },
      /***
       *  Sets validation (on/off) for back button. By default back button ignores validation
       */
      validateOnBack: Boolean,
      /***
       * Applies to text, border and circle
       */
      color: {
        type: String,
        default: '#e74c3c', // circle, border and text color
      },
      /***
       *  Is set to current step and text when beforeChange function fails
       */
      errorColor: {
        type: String,
        default: '#8b0000',
      },
      /**
       * Can take one of the following values: 'circle|square|tab`
       */
      shape: {
        type: String,
        default: 'circle',
      },
      /**
       * name of the transition when transition between steps
       */
      transition: {
        type: String,
        default: '', // name of the transition when transition between steps
      },
      /***
       * Index of the initial tab to display
       */
      startIndex: {
        type: Number,
        default: 0,
      },
    },
    data () {
      return {
        admins: [
          ['Management', 'mdi-account-multiple-outline'],
          ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
          ['Create', 'mdi-plus-outline'],
          // ['Read', 'mdi-file-outline'],
          ['Update', 'mdi-update'],
          ['Delete', 'mdi-delete'],
        ],
        value: 3,
        formInline: {
          user: '',
          region: '',
        },
        rules: {
          requiredUser: value => !!value || 'Required Username.',
          requiredPassword: value => !!value || 'Required Password.',
          // user: [{
          //   required: true,
          //   message: 'Please input Activity name',
          //   trigger: 'blur',
          // }, {
          //   min: 3,
          //   max: 5,
          //   message: 'Length should be 3 to 5',
          //   trigger: 'blur',
          // }],
          // region: [{
          //   required: true,
          //   message: 'Please select Activity zone',
          //   trigger: 'change',
          // }],
        },
        user: {
          username: '',
          password: '',
        },
        valid: true,
        show2: false,
        // rules: {
        //   requiredUser: value => !!value || 'Required Username.',
        //   requiredPassword: value => !!value || 'Required Password.',
        // },
        emailRules: [
          v => !!v || 'E-mail is required.',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid (examplename@example.com)',
        // value => !!value || 'Required email.',
        // value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'E-mail must be valid (examplename@example.com)'
        // }
        ],
        userRules: [
          value => value.length <= 25 || 'Max 25 characters',
          value => !!value || 'Username is required.',
        ],
        passwordRules: [
          value => !!value || 'Password is required.',
          v => v.length >= 8 || 'At least 8 characters',
        ],
        telRules: [
          value => !!value || 'Phone is required.',
          value => {
            const pattern = /^(?:0[1-9]{1}?[0-9]{8})$/
            return pattern.test(value) || 'Phone must be a number (Example number (Thailand): 0XX XXX XXXX)'
          },
        ],
        ageRules: [
          value => !!value || 'Age is required.',
          value => {
            const pattern = /^[1-9]?[0-9]{1}$|^100$/
            return pattern.test(value) || 'Age must be a number between 1-100'
          },
        ],
        account: {
          username: '',
          password: '',
          fname: '',
          lname: '',
          company: '',
          province: '',
          age: '',
          gender: null,
          email: '',
          tel: '',
        },
        gender: ['Male', 'Female'],
      }
    },
    methods: {
      validateFirstStep () {
        if (((this.user.username && this.user.password) === '')) {
          console.log('NO DATA')
          this.$refs.ruleForm.validate()
        // this.alert = true
        } else if (this.$refs.ruleForm.validate() === false) {
          console.log('false')
        // this.alertvalid = true
        // return new Promise((resolve, reject) => {
        //   this.$refs.ruleForm.validate()
          // this.$refs.ruleForm.validate((valid) => {
          //   resolve(valid)
          // })
        } else {
          return true
        }
      },
      validate2Step () {
        if (((this.account.username && this.account.password && this.account.fname && this.account.lname && this.account.company && this.account.province && this.account.age && this.account.email && this.account.tel) === '')) {
          console.log('NO DATA')
          this.$refs.rule2Form.validate()
        // this.alert = true
        } else if (this.$refs.rule2Form.validate() === false) {
          console.log('false')
        // this.alertvalid = true
        // return new Promise((resolve, reject) => {
        //   this.$refs.ruleForm.validate()
          // this.$refs.ruleForm.validate((valid) => {
          //   resolve(valid)
          // })
        } else {
          return true
        }
      },
      onComplete: function () {
        alert('Yay. Done!')
      },
    },
  }
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200&display=swap');
#card {
  background-color: rgba(16, 161, 113, 0.5)
}
/* .login-wrapper {
      color: #4a4a4a;
} */
h2 {
  color: azure;
}
h1 {
  color: #16A085;
  font-family: 'Exo 2', sans-serif;
}
</style>

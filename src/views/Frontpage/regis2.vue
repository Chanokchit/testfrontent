<template>
  <!-- <div>hjkhjhk</div> -->
  <form-wizard
    @on-complete="onComplete"
  >
    <h1
      slot="title"
    >
      <!-- <v-btn
                    text
                    to="{ name: 'Login' }"
                  >
                    login
                  </v-btn> -->
      Register
    </h1>
    <tab-content
      title="ข้อมูลผู้ใช้งาน"
      :before-change="validateFirstStep"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot:default="{ hover }"
            close-delay="100"
            color="primary"
          >
            <v-card
              :elevation="hover ? 10 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto mt-n8"
              height="80"
              max-width="350"
              img="https://papers.co/wallpaper/papers.co-vm29-poly-art-abstract-blue-green-pattern-36-3840x2400-4k-wallpaper.jpg"
            >
              <!-- <v-card-text
                            class="text-center"
                          > -->
              <!-- <h2>
                              <v-radio-group>
                                <v-radio
                                  label="เป็นสมาชิก"
                                  color="white"
                                  value="indigo"
                                /><h2>kgghgjghjg</h2>
                              </v-radio-group> -->
              <!-- <v-radio-group> -->
              <!-- <template v-slot:label>
                                <div>Your favourite <strong>search engine</strong></div>
                              </template> -->
              <v-radio-group>
                <v-radio
                  class="mt-7 ml-15"
                  color="white"
                >
                  <template v-slot:label>
                    <h2><strong class="white--text">เป็นสมาชิก</strong></h2>
                  </template>
                </v-radio>
              </v-radio-group>
              <!-- </h2> -->
              <!-- <v-img
                      max-width="10"
                      class="mx-1"
                      src="src/assets/one.png"
                    /> -->
              <!-- </v-card-text> -->
              <!-- </v-radio-group> -->
              <!-- </v-radio-group> -->
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          align-self="center"
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot:default="{ hover }"
            close-delay="100"
            color="primary"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto mt-n8"
              height="80"
              max-width="350"
              img="https://papers.co/wallpaper/papers.co-vm29-poly-art-abstract-blue-green-pattern-36-3840x2400-4k-wallpaper.jpg"
            >
              <v-radio-group>
                <v-radio
                  class="mt-7 ml-13"
                  color="white"
                >
                  <template v-slot:label>
                    <h2><strong class="white--text">ไม่เป็นสมาชิก</strong></h2>
                  </template>
                </v-radio>
              </v-radio-group>
              <!-- <v-card-text
                            class="text-center"
                          >
                            <h2 class="mt-4">
                              ไม่เป็นสมาชิก
                            </h2> -->
              <!-- <v-img
                      max-width="10"
                      class="mx-1"
                      src="src/assets/one.png"
                    /> -->
              <!-- </v-card-text> -->
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-form
        ref="ruleForm"
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
    </tab-content>
    <tab-content
      title="ข้อมูลส่วนตัว"
      :before-change="validate2Step"
    >
      <v-responsive
        class="overflow-y-auto"
        max-height="345"
      >
        <v-form
          ref="rule2Form"
          v-model="valid"
        >
          <v-container>
            <v-row class="mx-2">
              <v-col cols="12">
                <v-text-field
                  v-model="account.username"
                  :rules="userRules"
                  maxlength="25"
                  counter
                  hint="Max 25 characters"
                  outlined
                  color="#009688"
                  prepend-icon="mdi-account"
                  label="Username"
                  type="text"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="account.password"
                  required
                  :rules="passwordRules"
                  maxlength="50"
                  counter
                  color="#009688"
                  outlined
                  prepend-icon="mdi-lock"
                  label="Password"
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show2 = !show2"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="account.fname"
                  color="#009688"
                  label="Firstname"
                  type="text"
                  maxlength="50"
                  required
                  :rules="[v => !!v || 'Firstname is required.']"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="account.lname"
                  color="#009688"
                  label="Lastname"
                  type="text"
                  maxlength="50"
                  required
                  :rules="[v => !!v || 'Lastname is required.']"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="account.age"
                  color="#009688"
                  label="Age"
                  type="text"
                  maxlength="3"
                  required
                  :rules="ageRules"
                />
              </v-col>
              <v-col
                class="mt-4"
                cols="6"
              >
                <v-select
                  v-model="account.gender"
                  color="#009688"
                  :items="gender"
                  label="Gender"
                  dense
                  type="items"
                  required
                  :rules="[v => !!v || 'Genger is required.']"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="account.company"
                  color="#009688"
                  label="Company"
                  type="text"
                  maxlength="50"
                  required
                  :rules="[v => !!v || 'Company is required.']"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="account.province"
                  color="#009688"
                  label="Province"
                  type="text"
                  maxlength="50"
                  required
                  :rules="[v => !!v || 'Province is required.']"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="account.email"
                  color="#009688"
                  outlined
                  prepend-icon="mdi-mail"
                  type="email"
                  label="Email Address"
                  :rules="emailRules"
                  maxlength="50"
                  required
                />
              </v-col>
              <!-- Example number (Thailand): 081 234 5678 -->
              <v-col cols="12">
                <v-text-field
                  v-model="account.tel"
                  :rules="telRules"
                  maxlength="10"
                  required
                  color="#009688"
                  outlined
                  type="tel"
                  prepend-icon="mdi-phone"
                  label="Phone"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-responsive>
    </tab-content>
    <tab-content
      title="ข้อมูลฟาร์ม"
    >
      เลือกสิทธิ์การเข้าถึงฟาร์มของคุณ
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot:default="{ hover }"
            close-delay="100"
            color="primary"
          >
            <v-card
              :elevation="hover ? 10 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="80"
              max-width="350"
              img="https://papers.co/wallpaper/papers.co-vm29-poly-art-abstract-blue-green-pattern-36-3840x2400-4k-wallpaper.jpg"
            >
              <v-card-text
                class="text-center"
              >
                <h2 class="mt-4">
                  เจ้าของฟาร์ม
                </h2>
                <!-- <v-img
                      max-width="10"
                      class="mx-1"
                      src="src/assets/one.png"
                    /> -->
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          align-self="center"
          cols="12"
          sm="6"
        >
          <v-hover
            v-slot:default="{ hover }"
            close-delay="100"
            color="primary"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="80"
              max-width="350"
              img="https://papers.co/wallpaper/papers.co-vm29-poly-art-abstract-blue-green-pattern-36-3840x2400-4k-wallpaper.jpg"
            >
              <v-card-text
                class="text-center"
              >
                <h2 class="mt-4">
                  ผู้จัดการ
                </h2>
                <!-- <v-img
                      max-width="10"
                      class="mx-1"
                      src="src/assets/one.png"
                    /> -->
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </tab-content>
  </form-wizard>
</template>
<script>
  import { FormWizard, TabContent } from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  // component code

  // Vue.use(VueFormWizard)
  export default {
    components: {
      FormWizard,
      TabContent,
    },
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

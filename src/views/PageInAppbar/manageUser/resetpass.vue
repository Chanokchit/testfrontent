<!-- PasswordChange.vue -->
<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row class="text-center">
        <v-col cols="12" />

        <v-col
          class="mb-4"
          cols="12"
        >
          <h1 class="display-1 font-weight-bold mb-3">
            Change the password
          </h1>
        </v-col>
        <v-col
          class="offset-md-3"
          cols="6"
        >
          <v-text-field
            autocomplete="current-password"
            :value="userPassword"
            label="Enter old password"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @click:append="() => (value = !value)"
            @input="_=>userPassword=_"
          />
          <v-text-field
            autocomplete="current-password"
            :value="userPassword"
            label="Enter new password"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @click:append="() => (value = !value)"
            @input="_=>userPassword=_"
          />
          <v-text-field
            autocomplete="current-password"
            :value="userPassword"
            label="Enter confirm password"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @click:append="() => (value = !value)"
            @input="_=>userPassword=_"
          />
          <v-btn color="success">
            Change Password
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<!-- PasswordChange.vue -->
<script>
  export default {
    data: () => ({
      userPassword: '',
      valid: true,
      value: true,
      rules: {
        required: value => !!value || 'Required.',
        password: value => {

        },
      },
    }),
  }
</script>

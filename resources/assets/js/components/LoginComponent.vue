<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-10 ma-2 mt-10" outlined shaped>
      <v-card-text class="pa-10">
        <div class="display-1 primary--text">Login</div>
        <br><br>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <label>Email</label>
              <v-text-field
                prepend-icon="mdi-email"
                v-model="email"
                type="text"
                dense
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <label>Password</label>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password"
                :type="password_show ? 'text' : 'password'"
                dense
                :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="password_show = !password_show"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <br />
        <v-btn
          color="primary"
          rounded
          block
          :loading="loading"
          >Login</v-btn
        >
        <br />
        <v-row class="text-center">
          <v-col>
            <v-btn @click="login()" elevation="2" icon x-large>
              <v-icon color="primary">mdi-google</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn elevation="2" icon x-large>
              <v-icon color="primary">mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn elevation="2" icon x-large>
              <v-icon color="primary">mdi-twitter</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <br /><br />
        <v-divider></v-divider>
        <div class="body-2 mt-2 text-center">
          Doesn't have an account? Click here to
          <router-link :to="{ name: 'frontend_register' }" class="accent--text"
            >Register</router-link
          >
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>

export default {
  components: {},
  name: "LoginComponent",
  data() {
    return {
        isLogin: false,
      email: "",
      password: "",
      password_show: false,
    };
  },
  computed: {
    loading() {
      return this.$store.state.common.spinner;
    },
  },
  methods: {
    async login() {
        const googleUser = await this.$gAuth.signIn();
        const data = googleUser.getBasicProfile();
        const email = data.getEmail();
        const name = data.getName();
        
        if(this.$gAuth.isAuthorized) {
            const formdata = {
                email,
                name
            };

            this.$store.dispatch("auth/login", {formdata});
        }
    }
  }
}
</script>
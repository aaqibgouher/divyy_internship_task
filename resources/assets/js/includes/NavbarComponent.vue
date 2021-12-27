<template>
    <div>
        <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">
              <router-link :to="{ name: '' }">
                  <v-toolbar-title class="accent--text">@TASK</v-toolbar-title>
              </router-link>
              <v-spacer></v-spacer>
              <v-toolbar-items v-if="!user">
                <v-btn text :to="{ name: 'login' }">Login</v-btn>
              </v-toolbar-items>
              <v-toolbar-items v-if="!user">
                <v-btn text :to="{ name: '' }">Register</v-btn>
              </v-toolbar-items>
              <v-toolbar-items v-else class="hidden-sm-and-down">
                <v-btn text :to="{ name: 'logout' }">Logout</v-btn>
              </v-toolbar-items>
            </v-container>
      </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "NavbarComponent",
        computed: {
            user() {
                return this.$store.getters["auth/get_user"];
            },
        }
    }
</script>
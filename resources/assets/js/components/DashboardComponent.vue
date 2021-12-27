<template>
    <div>
        <navbar-component></navbar-component>
        Welcome In DashboardComponent<br><br>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-10 ma-2 mt-10" outlined shaped>
            <v-card-text class="pa-10">
                <div class="display-1 primary--text">Age : {{ detail.age ? detail.age : '---'}}</div><br>
                <div class="display-1 primary--text">Gender : {{ detail.gender ? detail.gender : '---'}}</div><br>
                <div class="display-1 primary--text">State : {{ detail.state ? detail.state : '---'}}</div> <br>
                <v-btn text :to="{ name: 'edit_detail' }">Edit</v-btn>
            </v-card-text>
            </v-card>       
        </v-flex>
    </div>
</template>

<script>
    import NavbarComponent from '../includes/NavbarComponent';

    export default {
        components: { NavbarComponent },
        name: "DashboardComponent",
        created() {
            this.$store.dispatch("dashboard/detail", {formdata: {}});
        }, 
        computed: {
            detail() {
                return this.$store.getters["dashboard/get_detail"]
            },
        }
    }

</script>

<style scoped>

</style>
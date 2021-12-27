<template>
    <div>
        <navbar-component></navbar-component>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-10 ma-2 mt-10" outlined shaped>
      <v-card-text class="pa-10">
        <div class="display-1 primary--text">Edit Details</div>
        <br>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <label>Age</label>
              <v-text-field
                v-model="age"
                type="text"
                dense
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="gender"
                label="Gender"
                outlined
                :items="sex"
                ></v-select>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="state"
                :items="items"
                label="State"
                outlined
                dense
            ></v-combobox>
            </v-col>
          </v-row>
        </v-form>
        <br />
        <v-btn
          color="primary"
          rounded
          block
          @click="edit()"
          >Edit</v-btn
        >
        <br />
      </v-card-text>
    </v-card>      
        </v-flex>
    </div>
</template>

<script>
    import NavbarComponent from '../includes/NavbarComponent';

    export default {
        components: { NavbarComponent },
        data() {
            return {
                age: "",
                gender: "",
                state: "",
                items: ["Andhra Pradesh", "Andaman and Nicobar Islands", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadar and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
                sex: ["male", "female"]
            }
        },
        name: "EditDetailComponent",
        created() {
            this.$store.dispatch("dashboard/detail", {formdata: {}});
        }, 
        computed: {
            detail() {
                return this.$store.getters["dashboard/get_detail"]
            },
        },
        watch: {
            detail(detail) {
                this.age = detail.age
                if(detail.gender === "male") {
                    this.gender = "male";
                }else if(detail.gender === "female") {
                    this.gender = "female"
                }else {
                    this.gender = "others"
                }
                this.state = detail.state
            }
        },
        methods: {
            edit() {
                const formdata = {
                    age: this.age,
                    gender: this.gender,
                    state: this.state,
                }
                this.$store.dispatch("dashboard/edit", {formdata});
            }
        }
    }

</script>

<style scoped>

</style>
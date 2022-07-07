import Vue from 'vue'; 
import App from to "./App.vue"; 


  <template>
  <div id="app">
    <img alt="Groupomania" src="./image">
  </div>



  <div class="form">
    <h3>Registration</h3>
    <div class="form-group">
      <label> Email <input v-model="text" v-if="authen === true" min="10" max="45" placeholder="Employee Email"
          pattern=".+" required> </label>
    </div>

  </div>
  <div class="form-group">
    <label>Password <input v-model="text" min="10" max="25" placeholder="password" required></label>
    <button @click="say('Thank You')">Register</button>
  </div>








</template>

<script>

import image from "./assets/icon-left-font.png"

export default {
  methods: {
    onSubmit() { 
      console.log('form submitted')
    }

  }



}




</script>



<style scoped>
 .form,
 .form-group {
   border: black 10px solid inset;
   border-radius: 25px;

 }

 .submit {
   background-color: black;
   border: red 20px solid;
 }
</style>






 <template>
  <div  class ="app" id="app">
  <!--   <img alt="Groupomainia" src="./images/icon-left-font.png">        -->  
  

<div class="form">
    <h3>Registration</h3>
    <div class="form-group">
      <label> Email <input v-model="text"  min="10" max="45" placeholder="Employee Email"
          pattern=".+@groupmainia.com" required> </label>
    </div>

  </div>
  <div class="form-group">
    <label>Password <input v-model="text" min="10" max="25" placeholder="password" required></label>
    <button @click="say('Thank You')">Register</button>
  </div>
  </div>


</template>


<!--<script>
const app = new vue 
el: '#app'
data:{
  Email: ' '
  Password:' '
}; 


</script>-->

<style>
.form { 
border:10px solid black; 
}

.form-group{ 

  border: 5px solid Red; 
  background: gray;
  font-size: large;
  font-style: normal;
}
</style>




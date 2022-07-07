import { createApp } from 'vue'
import App from './App.vue'
import router from ./router


const vue = new Vue ({

    el: "#app"
    data: {
        Email:{{"Email"}}, 
        Password:{{'Password'}}
    }
})





createApp(App).mount('#app')

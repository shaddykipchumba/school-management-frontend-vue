// import './assets/main.css'
//  Font Awesome Icons
import './assets/plugins/fontawesome-free/css/all.min.css'

//  IonIcons
// import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'

// Theme style
import './assets/dist/css/adminlte.min.css'

import './assets/plugins/jquery/jquery.min.js'
import './assets/plugins/bootstrap/js/bootstrap.bundle.min.js'
// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback'
import './assets/dist/js/adminlte.js'




import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

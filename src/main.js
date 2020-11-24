import { createApp } from 'vue'
import App from './App.vue'

// We can import Tailwind directly here if we dont want
// to use our own styles in /src/assets/css/app.scss
// import 'tailwindcss/tailwind.css'

// Import our own SCSS file which includes importing Tailwind
import './assets/css/app.scss'

createApp(App).mount('#app')

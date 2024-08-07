
import { createApp } from 'vue'
import { createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import { createGtm } from '@gtm-support/vue-gtm';
import App from './App.vue'
import router from './router'
import './style.css'
import './template.js'

// skeleton css  show er jonno start
import "skeleton-screen-css";
// skeleton css  show er jonno end
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.use(
  createGtm({
    id: 'GTM-5GSKDBVT', // Replace with your GTM container ID
    vueRouter: router, // Enable automatic route tracking
  }),
);


app.config.globalProperties.$filters = {
    currencySymbol(value) {
      // return "৳" + value.toLocaleString();
      // return Math.round(value) ? "৳ " + value.toLocaleString() : "৳";
      return Math.round(value) ? "TK " + value.toLocaleString() : "TK";
    },
    makeImagePath(img) {
      return import.meta.env.VITE_API_URL + "/" + img;
  },
    textShort(text, size) {
    if (!text) return "";
    text = text.toString();

    if (text.length <= size) {
      return text;
    }
    return text.substr(0, size) + "...";
  },

  productPrice(product){
    if (product?.offer_price == 0) {
      return `<span>${this.currencySymbol(Math.round(product?.mrp))}</span>`;
    }else {
      return `<del>${this.currencySymbol(Math.round(product?.mrp))}</del> <span>${this.currencySymbol(Math.round(product?.offer_price))}</span>`;
    }
  },
}

app.mount('#app')

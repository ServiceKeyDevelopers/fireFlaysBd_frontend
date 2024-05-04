import { createRouter, createWebHistory } from "vue-router";
import {HomePage, ShopPage, ProductDetailsPage, WishlistPage, Login, CheckoutPage, Contact, About, CartPage, thankyou} from "@/views/pages";
import NProgress from "nprogress";
import {useAuth} from '@/stores'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: "Fireflys BD | Home Page" },
  },
  {
    path: '/shop-page',
    name: 'ShopPage',
    component: ShopPage,
    meta: { title: "Fireflys BD | Shop Page" },
  },
  {
    path: "/product-details/:id/:slug",
    name: 'ProductDetailsPage',
    component: ProductDetailsPage,
    meta: { title: "Fireflys BD | Product Details Page" },
  },
  {
    path: '/wishlist',
    name: 'WishlistPage',
    component: WishlistPage,
    meta: { title: "Fireflys BD | Wishlist Page" },
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: { title: "Fireflys BD | Cart Page" },
  },
  {
    path: '/checkoutPage',
    name: 'CheckoutPage',
    component: CheckoutPage,
    meta: { title: "Fireflys BD | Checkout Page" },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login,
    meta: { title: "Fireflys BD | Login Page", guest: true },
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
    meta: { title: "Fireflys BD | About Page" },
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: Contact,
    meta: { title: "Fireflys BD | Contact Page" },
  },
  {
    path: "/your-order-submited",
    name: "thankYou.page",
    component: thankyou,
    meta: { title: "Fireflys BD | Thank You" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //dynamiclly scroll behavior start
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  //dynamiclly scroll behavior end
});

const DEFAULT_TITLE = "404";

router.beforeEach((to, from, next) => {
  // dynamiclly page title start
  document.title = to.meta.title || DEFAULT_TITLE;
  // dynamiclly page title end

  //dynamiclly scroll behavior start
  window.scrollTo(0, 0);
  //dynamiclly scroll behavior end

  // dynamiclly page progress bar start
  NProgress.start();
  // dynamiclly page progress bar end

  // dynamiclly Auth Checking Start
  const isLogin = useAuth();
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if (!isLogin.user.user) {
      next({name: 'LoginPage'})  
    }else{
      next()
    }
  }else if(to.matched.some((record)=> record.meta.guest)){
    if (isLogin.user.user) {
      next({name: 'HomePage'})  
    }else{
      next()
    }
  }else{
    next()
  }
// dynamiclly Auth Checking End
});

// dynamiclly page progress bar start
router.afterEach(() => {
  NProgress.done();
});
// dynamiclly page progress bar end


export default router;
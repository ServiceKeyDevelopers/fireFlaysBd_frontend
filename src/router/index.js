import { createRouter, createWebHistory } from "vue-router";
import {HomePage, ShopPage, ProductDetailsPage, WishlistPage, Login, CheckoutPage, Contact, About} from "@/views/pages";
import NProgress from "nprogress";

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
    path: '/ProductDetailsPage',
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
    path: '/checkoutPage',
    name: 'CheckoutPage',
    component: CheckoutPage,
    meta: { title: "Fireflys BD | Checkout Page" },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login,
    meta: { title: "Fireflys BD | Login Page" },
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
  next();
  // dynamiclly page title end

  //dynamiclly scroll behavior start
  window.scrollTo(0, 0);
  //dynamiclly scroll behavior end

  // dynamiclly page progress bar start
  NProgress.start();
  // dynamiclly page progress bar end
});

// dynamiclly page progress bar start
router.afterEach(() => {
  NProgress.done();
});
// dynamiclly page progress bar end

export default router;

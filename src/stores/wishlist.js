// All Import File  Code Is Here......................................................................................................
import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";
import { useAuth } from "@/stores";

// All Variable  Code Is Here.....................................................................................................
export const useWishlist = defineStore("wishlist", {
  state: () => ({
    wishlists: {},
    loading: false,
  }),

  actions: {
    // API Calling Code Is Here.....................................................................................................

    async index(product) {
      try {
        const res = await axiosInstance.get("/wishlists");
        console.log(res);
        if (res.status === 200) {
          const auth = useAuth();
          auth.user.wishlist = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },


    async addToWishlist(product) {
      this.loading = product.id;
      try {
        const res = await axiosInstance.post("/wishlists", {product_id: product.id});
        if (res.status) {
          const auth = useAuth();
          if (res.data.result == 0) {
            // attach
            auth.user.wishlist.unshift(product);
          } else {
            // detach
            const index = auth.user.wishlist.findIndex((i) => i.id === product.id);
            auth.user.wishlist.splice(index, 1);
          }
          return res;
        }
      } catch (error) {
        console.log(error);
      } finally{
        this.loading = false;
      }
    },

    async destroy(index) {
      const auth = useAuth();
      auth.user.wishlist.splice(index, 1);
  },

  },
});
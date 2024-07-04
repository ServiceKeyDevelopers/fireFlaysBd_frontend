// All Import File  Code Is Here......................................................................................................
import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useProduct = defineStore("product", {
  // All Variable  Code Is Here.....................................................................................................
  state: () => ({
    products: {},
    recentProducts: [],
    topProducts: [],
    featureProducts: [],
    productReviews: [],
    loading: false,
  }),

  actions: {
    // API Calling Code Is Here.....................................................................................................

    async getData(type = "", paginate_size = 0) {
      this.loading = true;
      try {
        const res = await axiosInstance.get(`/products?type=${type}&paginate_size=${paginate_size}`);
        if (res.status === 200) {
          if (type === "feature-product") {
            this.featureProducts = res.data.result;
          } else if (type === "top-product") {
            this.topProducts = res.data.result;
          } else if (type === "recent-product") {
            this.recentProducts = res.data.result;
          } else {
            this.products = res.data.result;
          }
          return res.data.result;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async productById(id) {
      this.loading = true;
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        this.productReviews = res.data.reviews;
        return res.data.data;
        
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async productRequest(formData) {
      try {
        const res = await axiosInstance.post(`/product-requests`, formData);
        return res ;       
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});




// All Function  Code Is Here.....................................................................................................

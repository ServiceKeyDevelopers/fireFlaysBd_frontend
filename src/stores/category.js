// All Import File  Code Is Here......................................................................................................
import { defineStore } from 'pinia'
import axiosInstance from "@/services/axiosService.js";




export const useCategory = defineStore('category', {
  // All Variable  Code Is Here.....................................................................................................
  state: () => ({ 
    categories: {},
    loading: false,
  }),
  
  actions: {
    // API Calling Code Is Here.....................................................................................................
    
    async getData() {
      try {
        const res = await axiosInstance.get("/categories");
        if (res.status === 200) {
            this.categories = res.data
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
  })
  // All Function  Code Is Here.....................................................................................................
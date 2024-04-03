// All Import File  Code Is Here......................................................................................................
import { defineStore } from 'pinia'
import axiosInstance from "@/services/axiosService.js";




export const useSlider = defineStore('slider', {
  // All Variable  Code Is Here.....................................................................................................
  state: () => ({ 
    sliders: {},
    loading: false,
  }),
  
  actions: {
    // API Calling Code Is Here.....................................................................................................
    
    async getData() {
      try {
          const res = await axiosInstance.get("/sliders");
        if (res.status === 200) {
            this.sliders = res.data
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
  })
  // All Function  Code Is Here.....................................................................................................
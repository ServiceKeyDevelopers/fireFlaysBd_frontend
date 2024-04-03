import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useSection = defineStore("section", {
    state: () =>({
        sections : {},
        loading : false,
        isActive : false,
    }),

        actions: {
            async getData(){
                try {
                    const response = await axiosInstance.get('/sections')
                    this.sections = response.data.result
                  } catch (error) {
                    console.log(error);
                  } finally {
                    // isPreloader.value = false
                  }
            }
        }
})
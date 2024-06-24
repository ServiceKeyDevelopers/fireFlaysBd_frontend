<script setup>
// All Import File  Code Is Here......................................................................................................
import { onMounted, ref } from "vue";
import { storeToRefs } from 'pinia';
import {useSetting} from '@/stores'
import axiosInstance from "@/services/axiosService.js";
// All Variable  Code Is Here.....................................................................................................
const setting = useSetting();
const { settings } = storeToRefs(setting);

const email = ref()
const logo = ref()
const address = ref()
const phone = ref()
const description = ref()
const facebook = ref()
const whatsapp = ref()

const fbPageUrl = ref('https://www.facebook.com/fireflysbd')

// social Icons start
const socialShares = ref("");
// social Icons end

// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................



const getSettingsData = async() => {
  const settingData = await setting.getData();
  settingData.map((ele)=> {
    if (ele.key == "email" ) {
      email.value = ele
    } 
    if (ele.key == "facebook" ) {
      facebook.value = ele
    } 
    if (ele.key == "address" ) {
      address.value = ele
    } 
    if (ele.key == "phone" ) {
      phone.value = ele
    } 
    if (ele.key == "description" ) {
      description.value = ele
    } 
    if (ele.key == "logo" ) {
      logo.value = ele
    } 
    if (ele.key == "whatsapp" ) {
      whatsapp.value = ele
    } 
    if (ele.key == "pageUrl" ) {
      fbPageUrl.value = ele
    } 
  })
}



// social media link  start

const socialMedia = async () => {
  try {
    const res = await axiosInstance.get("/social-medias");
    socialShares.value = res.data.result;
  } catch (error) {
    console.log(error);
  }
};

const socialIcons = (socialType) => {
  const iconMapping = {
    Facebook: "fab fa-facebook-f",
    Twitter: "fab fa-twitter",
    Whatsapp: "fab fa-whatsapp",
    Messenger: "fab fa-facebook-messenger",
    Linkedin: "fab fa-linkedin",
    Instagram: "fab fa-instagram",
    Phone: "fas fa-phone",
  };
  return iconMapping[socialType] || "default-icon-class";
};

const socialURL = (socialType, socialUrl) => {
  const iconMapping = {
    Facebook: `https://www.facebook.com/${socialUrl}/`,
    Twitter: `https://www.twitter.com/${socialUrl}/`,
    Whatsapp: `https://wa.me/+88${socialUrl}?text=Hello!`,
    Messenger: `https://www.messenger.com/t/${socialUrl}/`,
    Linkedin: `https://www.linkedin.com/${socialUrl}/`,
    Instagram: `https://www.instagram.com/${socialUrl}/`,
    Phone: `https://m.me/+88${socialUrl}`,
  };
  return iconMapping[socialType] || "default-icon-class";
};

// social media link  end



onMounted(() => {
    getSettingsData(); 
    socialMedia();
    // Load the Facebook SDK script here
    const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.nonce = 'isN1HXTF';

        // Append the script to the document's body
        document.body.appendChild(script);
})
</script>

<template>
    <div>
        <footer class="footer font2">
            <div class="footer-middle">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">Customer Services</h3>
                            <div class="widget-content">
                                <ul>
                                  <li><router-link :to="{name : 'PrivacyPolicy'}">Privacy Policy</router-link></li>
                                  <li><router-link :to="{name : 'TermsConditions'}">Terms Conditions</router-link></li>
                                    <li><router-link :to="{name : 'ReturnRefund'}">Return Refund</router-link></li>
                                    <li><router-link :to="{name: 'LoginPage'}">Login</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">About Us</h3>
                            <div class="widget-content">
                                <ul>
                                    <li><router-link :to="{name: 'AboutPage'}">About Us</router-link></li>
                                    <li><router-link :to="{name: 'ContactPage'}">Contact Us</router-link></li>
                                    <li><router-link :to="{name: 'ShopPage'}">Our Stores</router-link></li>
                                    <li><router-link :to="{name: 'CartPage'}">Cart Page</router-link></li>
                                    <li><router-link :to="{name: 'WishlistPage'}">Wishlist Page</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">More Information</h3>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="#">{{ email?.value }}</a></li>
                                    <li><a href="#">+88{{ phone?.value }}</a></li>
                                    <li><a href="#">{{ address?.value }}</a></li>
                                    <li><a href="#">{{ whatsapp?.value }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">Follow Us</h3>
                            <div class="social-icons" v-show="socialShares.length > 0">
                              <template v-for="(socialShare, index) in socialShares" :key="index">
                                <a :href="socialURL(socialShare.type, socialShare.contact)" target="_blank" title="" class="icon-font-size"><i :class="socialIcons(socialShare.type)"></i></a>
                              </template>
                            </div>
                            <div class="fb-page" :data-href="fbPageUrl" data-tabs="timeline" data-width="" data-height="130" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                              <blockquote :cite="fbPageUrl" class="fb-xfbml-parse-ignore">
                              <a :href="fbPageUrl" class="text-light">FireFlys BD</a>
                              </blockquote>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom d-sm-flex align-items-center">
                <div class="footer-left">
                    <span class="footer-copyright">FireFlays BD. © 2024</span>
                </div>
            </div>
            <!-- End .footer-bottom -->
        </footer>
    </div>
</template>

<style>

.footer {
  background: rgb(2,0,36) !important;
  background: linear-gradient(259deg, rgba(2, 0, 36, 1) 0%, rgba(0, 179, 124, 1) 0%, rgba(5, 48, 67, 1) 100%) !important;
  padding: 0px 40px;
  border-radius: 5px;
  margin-top: 10px;
}

.widget-title{
  color: white !important;
}
.widget-content ul li{
  color: white !important;
}

.footer-copyright{
  color: white !important;
}

.icon-font-size{
  font-size:20px;
  margin-right:15px;
}
</style>
<script setup>
import { ref, onMounted, watch } from "vue";
import { Footer, Breadcrumb, ProductSize, ProductPrice, ProductCard } from "@/components";
import { useRouter, useRoute } from "vue-router";
import { useProduct, useCart, useNotification, useShop, useWishlist, useAuth } from "@/stores";
import { storeToRefs } from "pinia";
import { useGtm } from '@gtm-support/vue-gtm';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import axiosInstance from "@/services/axiosService.js";
import { addToCart } from '@/composables/addToCart';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import './style.css';
// Review Section Start
const selectedRating  = ref(0);
const selectedComment = ref('');
// Review Section End
// cart button animation start
const isCartButtonAnimated = ref(false);
// cart button animation end
const auth               = useAuth();
const notify             = useNotification();
const shop               = useShop();
const { products }       = storeToRefs(shop);
const wishlist           = useWishlist();
const {loading}          = storeToRefs(wishlist);
const route              = useRoute();
const product            = useProduct();
const { productReviews } = storeToRefs(product);
const singleProduct      = ref('');
const quantityInput      = ref(1);

// get size price start  
const sizeID        = ref('');
const productPrices = ref('');
const sizeName      = ref('');
// get size price end 

// related product start
const relatedProducts = ref('');
const categoryId      = ref([]);
// related product end

// social Icons start
const socialShares = ref("");
// social Icons end

const modules = ref();
// image section start
const thumbnailImage = ref(null)
const activeImage    = ref(0)

const changeImage = (img, index) => {
    thumbnailImage.value = img
    activeImage.value    = index
}

// image section end

// single product get by id start 
const productByid = async () => {
  singleProduct.value = await product.productById(route.params.id);
  //GTM
  // const gtm = useGtm();
  // const ecommerce = {
  //   item_id: singleProduct.value.id,
  //   item_name: singleProduct.value.name,
  //   item_category: singleProduct.value.category,
  //   price: singleProduct.value.mrp ? singleProduct.value.mrp : singleProduct.value.offer_price,
  // }
  // gtm.trackEvent({
  //     event: 'Product_Details_Page', // Custom event name
  //     gtm: {uniqueEventId:singleProduct.value.id, start:'GTM-5GSKDBVT'},
  //     category: 'Ecommerce', // Event category (adjust as needed)
  //     action: 'Product Details Page', // Action (adjust as needed)
  //     Ecommerce: ecommerce, // Product name as event label
  //     value: quantityInput, // Quantity added (optional)
  //     // Add other relevant product details as event properties (optional)
  // });

  // for related products
  categoryId.value.push(singleProduct.value?.category_id);
};
// single product get by id end 


// Related product  start
const getRelatedProductData = async (catId) => {
  let   type                  = "";
  let   brand                 = [];
  let   subCategory           = [];
  let   price                 = [];
  let   search                = "";
  let   paginateSize          = 8;
  const res                   = await shop.getData(type, brand, catId, subCategory, price, search, paginateSize);
        relatedProducts.value = res?.data;
};

// product changes function 

const productChangesFunction = async() => {
  singleProduct.value = await product.productById(route.params.id);
}
// product detials changes start
watch(() => route.params.id, (newValue, oldValue) => {
  productChangesFunction();
});
// product detials changes end
watch(
  categoryId,
  (newValue, oldValue) => {
    getRelatedProductData(newValue);
  },
  { deep: true }
);

// Related product end


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
    Facebook : "fab fa-facebook-f",
    Twitter  : "fab fa-twitter",
    Whatsapp : "fab fa-whatsapp",
    Messenger: "fab fa-facebook-messenger",
    Linkedin : "fab fa-linkedin",
    Instagram: "fab fa-instagram",
    Phone    : "fas fa-phone",
  };
  return iconMapping[socialType] || "default-icon-class";
};

const socialURL = (socialType, socialUrl) => {
  const iconMapping = {
    Facebook : `https://www.facebook.com/${socialUrl}/`,
    Twitter  : `https://www.twitter.com/${socialUrl}/`,
    Whatsapp : `https://wa.me/+88${socialUrl}?text=Hello!`,
    Messenger: `https://www.messenger.com/t/${socialUrl}/`,
    Linkedin : `https://www.linkedin.com/${socialUrl}/`,
    Instagram: `https://www.instagram.com/${socialUrl}/`,
    Phone    : `https://m.me/+88${socialUrl}`,
  };
  return iconMapping[socialType] || "default-icon-class";
};

// social media link  end


// get size price start  

const sizeByPrice = (sizeByProductPrice) => {
  productPrices.value = sizeByProductPrice;
}
// get size price end

// cart increment && Decrement function start 
const incrementCartItem = () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
  
};
const decrementCartItem = () => {
  if (quantityInput.value != 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
};
// cart increment && Decrement function end 





// video url setup start

const getEmbedUrl = (watchUrl) => {
  const videoIdMatch = watchUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  const videoId      = (videoIdMatch && videoIdMatch[1]) || '';
  
  return `https://www.youtube.com/embed/${videoId}`;
}

// video url setup end

// cart button animation start
    const cartClick = () => {
      isCartButtonAnimated.value = !isCartButtonAnimated.value
      setTimeout(() => {
        isCartButtonAnimated.value = false
      }, 1500);
    }
// cart button animation end

// Review Section Start
const selectRating = (rating) => {
  selectedRating.value = rating;
}

const SubmitReviewForCustomer = async () => {
  try {
    const res = await axiosInstance.post("/product/reviews", {
      product_id: route.params.id,
      rate      : selectedRating.value,
      comment   : selectedComment.value ?? ''
    });
    
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

const calculateWidth = (avgRating) => {
    const percentage = (avgRating / 5) * 100;
    return `${percentage}%`;
  }

const formattedDate = (createdAtString) => {
  const createdAtDate = new Date(createdAtString);
  return createdAtDate.toLocaleDateString("en-US", {
    year : "numeric",
    month: "long",
    day  : "2-digit"
  });
};

// Review Section End

// Wishlist Work Start

const addToWishlist = async (product) => {
    if (Object.keys(auth.user).length > 0) {
        let res = await wishlist.addToWishlist(product);
        if (res.data.result == 0) {
            notify.Success(`${product.name} Successfully Added Your Wishlist Item`);
        }else{
            notify.Warning(`${product.name} Successfully Removed Your Wishlist Item`);
        }
        
    }else{
        modal.toggleLoginModal()
    }
}

// Wishlist Work end

onMounted(() => {
  productByid();
  socialMedia();
})


</script>

<template>
  <div>
    <div class="main-content">
      <div class="product-single-container product-single-default">
        <div class="cart-message d-none">
          <strong class="single-cart-notice">“Men Black Sports Shoes”</strong>
          <span>has been added to your cart.</span>
        </div>
        <div class="row">
          <div class="col-xl-5 col-md-6 product-single-gallery">
            <div class="product-imgs">
              <div class="img-display">
                <div class="img-showcase">
                  <img :src="singleProduct?.image" alt="shoe image" v-if="thumbnailImage == null">
                  <img :src="thumbnailImage" alt="shoe image" v-else>
                </div>
              </div>
              <div class="img-select">
                <div class="img-item" v-for="(image, index) in singleProduct?.images" :key="index"
                  :class="[activeImage == index ? 'active-thumb' : '']">
                  <img :src="image.image" alt="shoe image" @click.prevent="changeImage(image.image, index)">
                </div>
              </div>
            </div>

          </div>
          <!-- End .product-single-gallery -->

          <div class="col-xl-7 col-md-6 product-single-details">
            <h1 class="product-title">{{ singleProduct?.name }}</h1>



            <div class="ratings-container">
              <div class="product-ratings">
                <span class="ratings" :style="{ width: calculateWidth(singleProduct?.avg_rating) }"></span>
                <!-- End .ratings -->
                <span class="tooltiptext tooltip-top"></span>
              </div>
              <!-- End .product-ratings -->

              <a href="#" class="rating-link">( 6 Reviews )</a>
            </div>
            <!-- End .ratings-container -->

            <hr class="short-divider" />


            <ProductPrice :product="singleProduct" :productSizePrice="productPrices" />
            <!-- End .price-box -->

            <div class="product-desc ls-0 font2">
              <p v-html="singleProduct?.short_description"></p>
            </div>
            <!-- End .product-desc -->

            <ul class="single-info-list font2">
              <li>
                CATEGORies:
                <strong>
                  <router-link :to="{name: 'ShopPage', query:{ category: singleProduct?.category_id }}"
                    class="product-category">{{ singleProduct?.category?.name }}</router-link>
                </strong>
              </li>
              <li v-if="singleProduct?.warranty">warranty : <span class="product-category">{{ singleProduct?.warranty.name }}</span></li>
            </ul>
            <template v-if="singleProduct &&  singleProduct?.product_prices.length > 0">
              <ProductSize :product="singleProduct" @sizeByPrice="sizeByPrice" />
            </template>
            <div class="product-action">
              <div class="product-single-qty">
                <a href="#" class="quantity__minus" @click.prevent="decrementCartItem"><span>-</span></a>
                <input name="quantity" type="text" class="quantity__input" v-model="quantityInput">
                <a href="#" class="quantity__plus" @click.prevent="incrementCartItem"><span>+</span></a>
              </div>

              <template v-if="singleProduct && singleProduct.product_prices.length > 0">
                <template v-if="productPrices">
                  <!-- <a href="javascript:;" class="btn addToBtn add-cart mr-2"
                    @click.prevent="addToCart(singleProduct, quantityInput, productPrices)">Add to Cart</a> -->
                    <span @click="cartClick()">
                      <button class="cart-button mr-3 mt-3" :class="{'clicked' : isCartButtonAnimated}" @click.prevent="addToCart(singleProduct, quantityInput, productPrices)">
                        <span class="add-to-cart">Add to cart</span>
                        <span class="added">Add to cart</span>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-box"></i>
                      </button>
                    </span>
                  <router-link :to="{name: 'CheckoutPage'}" href="javascript:;" class="btn buyNowBtn add-cart mb-2"
                    @click.prevent="addToCart(singleProduct, quantityInput, productPrices)">Buy Now</router-link>
                </template>
                <template v-else>
                  <p class="mb-2 text-danger">প্রথমে ওয়েট সিলেক্ট করুন তারপর<span class="fw-bold"> BUY NOW </span> বাটনে
                    ক্লিক করুন অথবা<span class="fw-bold"> ADD TO CART </span>বাটনে ক্লিক করুন</p>
                  <!-- <button href="javascript:;" disabled class="btn addToBtn add-cart mr-2" title="Add to Cart"
                    @click.prevent="addToCart(singleProduct, quantityInput, productPrices)">Add to Cart</button> -->
                    <span @click="cartClick()">
                      <button class="cart-button mr-3 mt-3 btn-disable">
                        <span class="add-to-cart">Add to cart</span>
                        <span class="added">Add to cart</span>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-box"></i>
                      </button>
                    </span>
                  <button href="javascript:;" disabled class="btn buyNowBtn add-cart mr-2 mb-2">Buy Now</button>
                </template>
              </template>
              <template v-else>
                <!-- <a href="javascript:;" class="btn addToBtn add-cart mr-2" title="Add to Cart"
                  @click.prevent="addToCart(singleProduct, quantityInput)">Add to Cart</a> -->
                <span @click="cartClick()">
                  <button class="cart-button mr-3 mt-3" :class="{'clicked' : isCartButtonAnimated}" @click.prevent="addToCart(singleProduct, quantityInput)">
                    <span class="add-to-cart">Add to cart</span>
                    <span class="added">Add to cart</span>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-box"></i>
                  </button>
                </span>

                <router-link :to="{name: 'CheckoutPage'}" href="javascript:;" class="btn buyNowBtn add-cart mb-2"
                  @click.prevent="addToCart(singleProduct, quantityInput)">Buy Now</router-link>
              </template>
              <!-- <div class="mt-2">
                <a :href="`https://wa.me/+8801791580400?text=Product%20Details%0A%0AWebsite:%20https://fireflysbd.com/single-product/${singleProduct?.id}%0AProduct%20Name:%20${singleProduct?.name}%0AProduct%20Size:%20${sizeName}%0AOffer%20Price:%20${productPrices ? productPrices?.offer_price : singleProduct?.offer_price}৳%0ARegular%20Price:%20${productPrices ? productPrices?.mrp : singleProduct?.mrp}৳`"
                  class="btn btn-success mr-2" target="_blank">
                  <i class="fab fa-whatsapp mr-2"></i><span>হোয়াটসঅ্যাপ</span>
                </a>
                <a href="tel:+8801791580400" class="btn btn-danger  mr-2"><i
                    class="fas fa-phone-volume mr-2"></i><span>ফোন করুন</span></a>
              </div> -->
            </div>

            <hr class="divider mb-0 mt-0" />

            <div class="product-single-share icon-with-color mb-2 mt-2">
              <label class="sr-only">Share:</label>

              <div class="social-icons" v-show="socialShares.length > 0">
                <template v-for="(socialShare, index) in socialShares" :key="index">
                  <a :href="socialURL(socialShare.type, socialShare.contact)" target="_blank" title="" class="icon-font-size"><i :class="socialIcons(socialShare.type)"></i></a>
                </template>
              </div>

              <a href="wishlist.html" class="btn-icon-wish add-wishlist" title="Add to Wishlist" @click.prevent="addToWishlist(singleProduct)">
                <i :class="loading == singleProduct.id ? 'icon-spin5 fa-spin' : 'icon-heart'"></i>
                <span>Add to Wishlist</span>
              </a>

            </div>
            <div class="videoHW" v-if="singleProduct?.video_url">
              <iframe class="" :src="getEmbedUrl(singleProduct?.video_url)" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
            <!-- End .product single-share -->
          </div>
          <!-- End .product-single-details -->
        </div>
        <!-- End .row -->
      </div>
      <!-- End .product-single-container -->

      <div class="product-single-tabs font2">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab"
              aria-controls="product-desc-content" aria-selected="true">Description</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab"
              aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="product-desc-content" role="tabpanel"
            aria-labelledby="product-tab-desc">
            <div class="product-desc-content">
              <p v-html="singleProduct?.description"></p>
            </div>
            <!-- End .product-desc-content -->
          </div>
          <!-- End .tab-pane -->

          <div class="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
            <div class="product-reviews-content">

              <div class="comment-list" v-for="(review, index) in productReviews.data" :key="index">
                <div class="comments">
                  <figure class="img-thumbnail">
                    <img src="@/assets/images/blog/author.jpg" alt="author" width="80" height="80" />
                  </figure>

                  <div class="comment-block">
                    <div class="comment-header">
                      <div class="comment-arrow"></div>

                      <div class="ratings-container float-sm-right">
                        <div class="product-ratings">
                          <span class="ratings" :style="{ width: calculateWidth(review.rate) }"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                      </div>

                      <span class="comment-by">
                        <strong>{{ review.user.name }}</strong> – {{ formattedDate(review.created_at) }}
                      </span>
                    </div>

                    <div class="comment-content">
                      <p>{{ review.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="add-product-review">
                <h3 class="review-title">Add a review</h3>

                <form action="#" class="comment-form m-0">
                  <div class="rating-form">
                    <label for="rating">Your rating <span class="required">*</span></label>
                    <span class="rating-stars">
                      <a v-for="n in 5" :key="n" :class="['star-' + n, { 'selected': n <= selectedRating }]"  href="#" @click.prevent="selectRating(n)">{{ n }}</a>
                    </span>
                  </div>

                  <div class="form-group">
                    <label>Your review <span class="required">*</span></label>
                    <textarea cols="5" rows="6" class="form-control form-control-sm" v-model="selectedComment"></textarea>
                  </div>

                  <input type="submit" class="btn btn-primary" value="Submit" @click.prevent="SubmitReviewForCustomer" />
                </form>
              </div>
              <!-- End .add-product-review -->
            </div>
            <!-- End .product-reviews-content -->
          </div>
          <!-- End .tab-pane -->
        </div>
        <!-- End .tab-content -->
      </div>
      <!-- End .product-single-tabs -->

      <!-- <div class="products-section pt-0" v-if="relatedProducts.length > 0">
        <h2 class="section-title pb-3">Related Products</h2>

        <div class="products-slider">
          <swiper :slidesPerView="6" :sliderPerGroup="6" :space-between="30" :loop="true" :autoplay="{
              delay: 2000,
            }" :modules="modules" class="mySwiper" :breakpoints="{
              [425 - 320]: { slidesPerView: 2, spaceBetweenSlides: 20 },
              768: { slidesPerView: 3, spaceBetweenSlides: 30 },
              1024: { slidesPerView: 4, spaceBetweenSlides: 30 },
              1200: { slidesPerView: 6, spaceBetweenSlides: 30 },
            }">
            <swiper-slide v-for="(relatedProduct, index) in relatedProducts" :key="index">
              <ProductCard :product="relatedProduct" />
            </swiper-slide>
          </swiper>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

.selected {
  color: #fd5b5a !important; 
}

.rating-stars a {
  color: #fd5b5a !important;
}

.ratings-container .ratings:before {
  color: #fd5b5a !important;
}

.btn-disable{
  background-color: #435d68 !important;
  cursor: default !important;
}
.btn-disable:hover{
  background-color: #324953 !important;
  cursor: default !important;
}
.cart-button {
	position: relative;
	padding: 10px;
	width: 163px;
  height: 49px;
	border: 0;
	border-radius: 10px;
	background-color: #053043;
  color: #fff;
	outline: none;
	cursor: pointer;
	transition: .3s ease-in-out;
	overflow: hidden;
}
.cart-button:hover {
	background-color: #0f4861;
}
.cart-button:active {
	transform: scale(.9);
}

.cart-button .fa-shopping-cart {
	position: absolute;
	z-index: 2;
	top: 50%;
	left: -10%;
	font-size: 2em;
	transform: translate(-50%,-50%);
}
.cart-button .fa-box {
	position: absolute;
	z-index: 3;
	top: -20%;
	left: 52%;
	font-size: 1.2em;
	transform: translate(-50%,-50%);
}
.cart-button span {
	position: absolute;
	z-index: 3;
	left: 50%;
	top: 50%;
	font-size: 1.2em;
	color: #fff;
	transform: translate(-50%,-50%);
}
.cart-button span.add-to-cart {
	opacity: 1;
}
.cart-button span.added {
	opacity: 0;
}

.cart-button.clicked .fa-shopping-cart {
	animation: cart 1.5s ease-in-out forwards;
}
.cart-button.clicked .fa-box {
	animation: box 1.5s ease-in-out forwards;
}
.cart-button.clicked span.add-to-cart {
	animation: txt1 1.5s ease-in-out forwards;
}
.cart-button.clicked span.added {
	animation: txt2 1.5s ease-in-out forwards;
}
@keyframes cart {
	0% {
		left: -10%;
	}
	40%, 60% {
		left: 50%;
	}
	100% {
		left: 110%;
	}
}
@keyframes box {
	0%, 40% {
		top: -20%;
	}
	60% {
		top: 40%;
		left: 52%;
	}
	100% {
		top: 40%;
		left: 112%;
	}
}
@keyframes txt1 {
	0% {
		opacity: 1;
	}
	20%, 100% {
		opacity: 0;
	}
}
@keyframes txt2 {
	0%, 80% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
































.icon-font-size{
  font-size:20px;
  margin-right:15px;
}

.buyNowBtn{
  border-radius: 10px;
  background-color: #00b37c;
  color: #fff;
}
.buyNowBtn:hover{
  background-color: #2e927c;
  color: #fff;
}
.addToBtn{
  background-color: #053043;
  color: #fff;
}
.addToBtn:hover{
  background-color: #0f4861;
  color: #fff;
}

/* Gallery image start css */

img{
    width: 100%;
    display: block;
}
.img-display{
    overflow: hidden;
}
.img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
}
.img-select{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 100%;
}
.img-item{
    margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.active-thumb{
  border: 2px solid #119744;
}

/* Gallery image End css */


/* Product Quentity start css */

.product-single-qty{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.quantity__minus,
.quantity__plus {
  display: block;
  width: 25px;
  height: 30px;
  margin: 0;
  background: #dee0ee;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: #1f7956;
  color: #fff;
} 
.quantity__minus {
  border-radius: 3px 0 0 3px;
}
.quantity__plus {
  border-radius: 0 3px 3px 0;
}
.quantity__input {
  width: 45px;
  height: 30px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #8184a1;
}
.quantity__minus:link,
.quantity__plus:link {
  color: #ffffff;
} 
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

/* Product Quentity end css */

/* video section start */
.videoHW iframe{
  width: 560px !important;
  height: 315px !important;
}
/* video section end */

@media (max-width: 1024px) {

.videoHW iframe{
  width: 383px !important;
  height: 190px!important;
}

}



@media (max-width: 768px) {

.videoHW iframe{
  width: auto !important;
  height: auto !important;
}

}



@media (max-width: 425px) {

  .videoHW iframe{
    width: 355px !important;
    height: 220px !important;
  }

}

@media (max-width: 375px) {

  .videoHW iframe{
    width: 305px !important;
    height: 170px !important;
  }
}

@media (max-width: 320px) {

  .videoHW iframe{
    width: 251px !important;
    height: 150px !important;
  }
}

</style>

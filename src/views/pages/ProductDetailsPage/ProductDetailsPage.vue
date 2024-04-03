<script setup>
import { ref, onMounted } from "vue";
import { Footer } from "@/components";

// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// // import required modules
// import { Pagination, Autoplay, Navigation } from "swiper/modules";

// const newSlide = ref([Navigation]);

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';
//   import './style.css';



const modules = ref();
// image section start
const thumbnailImage = ref("https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg")
const activeImage = ref(0)
const images = ref([
  {
    id: 1,
    imgUrl: "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
  },
  {
    id: 2,
    imgUrl: "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
  },
  {
    id: 3,
    imgUrl: "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
  },
  {
    id: 4,
    imgUrl: "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
  }
])

const changeImage = (img, index) => {
    thumbnailImage.value = img
    activeImage.value = index
}

// image section end

// video url setup start

const getEmbedUrl = (watchUrl) => {
  const videoIdMatch = watchUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  const videoId = (videoIdMatch && videoIdMatch[1]) || '';
  
  return `https://www.youtube.com/embed/${videoId}`;
}

// video url setup end


</script>

<template>
  <div>
    <div class="main-content">
      <nav aria-label="breadcrumb" class="breadcrumb-nav font2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="demo40.html"><i class="icon-home"></i></a>
          </li>
          <li class="breadcrumb-item"><a href="#">Product</a></li>
        </ol>
      </nav>

      <div class="product-single-container product-single-default">
        <div class="cart-message d-none">
          <strong class="single-cart-notice">“Men Black Sports Shoes”</strong>
          <span>has been added to your cart.</span>
        </div>

        <div class="row">
          <div class="col-xl-5 col-md-6 product-single-gallery">
            
            <div class = "product-imgs">
                <div class = "img-display">
                    <div class = "img-showcase">
                    <img :src="thumbnailImage" alt = "shoe image">
                    </div>
                </div>
                <div class = "img-select">
                    <div class = "img-item" v-for="(image, index) in images" :key="index" :class="[activeImage == index ? 'active-thumb' : '']">
                        <img :src="image.imgUrl" alt = "shoe image" @click.prevent="changeImage(image.imgUrl, index)">
                    </div>
                </div>
            </div>

          </div>
          <!-- End .product-single-gallery -->

          <div class="col-xl-7 col-md-6 product-single-details">
            <h1 class="product-title">Product Short Name</h1>

            

            <div class="ratings-container">
              <div class="product-ratings">
                <span class="ratings" style="width: 60%"></span>
                <!-- End .ratings -->
                <span class="tooltiptext tooltip-top"></span>
              </div>
              <!-- End .product-ratings -->

              <a href="#" class="rating-link">( 6 Reviews )</a>
            </div>
            <!-- End .ratings-container -->

            <hr class="short-divider" />

            <div class="price-box">
              <span class="product-price"> $35.00</span>
            </div>
            <!-- End .price-box -->

            <div class="product-desc ls-0 font2">
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque.
              </p>
            </div>
            <!-- End .product-desc -->

            <ul class="single-info-list font2">
              <li>
                CATEGORies:
                <strong>
                  <a href="#" class="product-category">Breakfast</a>
                </strong>
              </li>
            </ul>

            <div class="product-action">
              <div class="product-single-qty">
                <a href="#" class="quantity__minus"><span>-</span></a>
                <input name="quantity" type="text" class="quantity__input" value="1">
                <a href="#" class="quantity__plus"><span>+</span></a>
              </div>

              <a
                href="javascript:;"
                class="btn btn-dark add-cart mr-2"
                title="Add to Cart"
                >Add to Cart</a
              >
              <a
                href="javascript:;"
                class="btn buyNowBtn add-cart mr-2"
                title="Add to Cart"
                >Buy Now</a
              >

              <a href="cart.html" class="btn btn-gray view-cart d-none">View cart</a>
            </div>
            <!-- End .product-action -->

            <hr class="divider mb-0 mt-0" />

            <div class="product-single-share icon-with-color mb-2 mt-2">
              <label class="sr-only">Share:</label>

              <div class="social-icons">
                <a
                  href="#"
                  class="social-icon social-facebook"
                  target="_blank"
                  title="Facebook"
                >
                  <i class="icon-facebook"></i>
                </a>
                <a
                  href="#"
                  class="social-icon social-twitter"
                  target="_blank"
                  title="Twitter"
                >
                  <i class="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  class="social-icon social-linkedin"
                  target="_blank"
                  title="Linkedin"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  class="social-icon social-gplus"
                  target="_blank"
                  title="Google +"
                >
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social-icon social-mail" target="_blank" title="Email">
                  <i class="icon-mail-alt"></i>
                </a>
              </div>
              <!-- End .social-icons -->
            </div>
            <div class="videoHW">
              <iframe class="mt-5"   src="https://www.youtube.com/embed/0J3bMvYEFOM?si=JEAooYiLUrLS5MEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>              
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
            <a
              class="nav-link active"
              id="product-tab-desc"
              data-toggle="tab"
              href="#product-desc-content"
              role="tab"
              aria-controls="product-desc-content"
              aria-selected="true"
              >Description</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="product-tab-reviews"
              data-toggle="tab"
              href="#product-reviews-content"
              role="tab"
              aria-controls="product-reviews-content"
              aria-selected="false"
              >Reviews (1)</a
            >
          </li>
        </ul>

        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="product-desc-content"
            role="tabpanel"
            aria-labelledby="product-tab-desc"
          >
            <div class="product-desc-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat.
              </p>
              <ul>
                <li>Any Product types that You want - Simple, Configurable</li>
                <li>Downloadable/Digital Products, Virtual Products</li>
                <li>Inventory Management with Backordered items</li>
              </ul>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <!-- End .product-desc-content -->
          </div>
          <!-- End .tab-pane -->

          <div
            class="tab-pane fade"
            id="product-reviews-content"
            role="tabpanel"
            aria-labelledby="product-tab-reviews"
          >
            <div class="product-reviews-content">
              <h3 class="reviews-title">1 review for Men Black Sports Shoes</h3>

              <div class="comment-list">
                <div class="comments">
                  <figure class="img-thumbnail">
                    <img
                      src="@/assets/images/blog/author.jpg"
                      alt="author"
                      width="80"
                      height="80"
                    />
                  </figure>

                  <div class="comment-block">
                    <div class="comment-header">
                      <div class="comment-arrow"></div>

                      <div class="ratings-container float-sm-right">
                        <div class="product-ratings">
                          <span class="ratings" style="width: 60%"></span>
                          <!-- End .ratings -->
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <!-- End .product-ratings -->
                      </div>

                      <span class="comment-by">
                        <strong>Joe Doe</strong> – April 12, 2018
                      </span>
                    </div>

                    <div class="comment-content">
                      <p>Excellent.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="add-product-review">
                <h3 class="review-title">Add a review</h3>

                <form action="#" class="comment-form m-0">
                  <div class="rating-form">
                    <label for="rating"
                      >Your rating <span class="required">*</span></label
                    >
                    <span class="rating-stars">
                      <a class="star-1" href="#">1</a>
                      <a class="star-2" href="#">2</a>
                      <a class="star-3" href="#">3</a>
                      <a class="star-4" href="#">4</a>
                      <a class="star-5" href="#">5</a>
                    </span>

                    <select name="rating" id="rating" required="" style="display: none">
                      <option value="">Rate…</option>
                      <option value="5">Perfect</option>
                      <option value="4">Good</option>
                      <option value="3">Average</option>
                      <option value="2">Not that bad</option>
                      <option value="1">Very poor</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Your review <span class="required">*</span></label>
                    <textarea
                      cols="5"
                      rows="6"
                      class="form-control form-control-sm"
                    ></textarea>
                  </div>
                  <!-- End .form-group -->

                  <div class="row">
                    <div class="col-md-6 col-xl-12">
                      <div class="form-group">
                        <label>Name <span class="required">*</span></label>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          required
                        />
                      </div>
                      <!-- End .form-group -->
                    </div>

                    <div class="col-md-6 col-xl-12">
                      <div class="form-group">
                        <label>Email <span class="required">*</span></label>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          required
                        />
                      </div>
                      <!-- End .form-group -->
                    </div>

                    <div class="col-md-6 col-xl-12">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="save-name"
                        />
                        <label class="custom-control-label mb-0" for="save-name"
                          >Save my name, email, and website in this browser for the next
                          time I comment.</label
                        >
                      </div>
                    </div>
                  </div>

                  <input type="submit" class="btn btn-primary" value="Submit" />
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

      <div class="products-section pt-0">
        <h2 class="section-title pb-3">Related Products</h2>

        <div class="products-slider">
          <swiper
            :slidesPerView="6"
            :sliderPerGroup="6"
            :loop="true"
            :autoplay="{
              delay: 2000,
            }"
            :modules="modules"
            class="mySwiper"
            :breakpoints="{
              [425 - 320]: { slidesPerView: 2, spaceBetweenSlides: 20 },
              768: { slidesPerView: 3, spaceBetweenSlides: 30 },
              1024: { slidesPerView: 4, spaceBetweenSlides: 30 },
              1200: { slidesPerView: 6, spaceBetweenSlides: 30 },
            }"
          >
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-17.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-16.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-18.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-19.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-20.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-21.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo40-product.html">
                    <img
                      src="@/assets/images/demoes/demo40/products/product-7.jpg"
                      width="205"
                      height="205"
                      alt="product"
                    />
                  </a>

                  <div class="btn-icon-group">
                    <a href="#" class="btn-icon btn-add-cart product-type-simple"
                      ><i class="icon-shopping-cart"></i
                    ></a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    class="btn-quickview"
                    title="Quick View"
                    >Quick View
                  </a>
                </figure>
                <div class="product-details">
                  <div class="category-wrap">
                    <div class="category-list">
                      <a href="demo40-shop.html" class="product-category">category</a>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"
                      ><i class="icon-heart"></i
                    ></a>
                  </div>
                  <h3 class="product-title">
                    <a href="demo40-product.html">Product Short Name</a>
                  </h3>
                  <div class="ratings-container">
                    <div class="product-ratings">
                      <span class="ratings" style="width: 100%"></span>
                      <!-- End .ratings -->
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <!-- End .product-ratings -->
                  </div>
                  <!-- End .product-container -->

                  <div class="price-box">
                    <span class="old-price">$90.00</span>
                    <span class="product-price">$70.00</span>
                  </div>
                  <!-- End .price-box -->
                </div>
                <!-- End .product-details -->
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- End .products-slider -->
      </div>
      <!-- End .products-section -->
      <Footer />
      <!-- End .footer -->
    </div>
  </div>
</template>

<style scoped>

.buyNowBtn{
  background-color: #8DC540;
  color: #fff;
}
.buyNowBtn:hover{
  background-color: #69922e;
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
    display: flex;
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
  background: #575b71;
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
  color: #8184a1;
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

<script setup>
ref
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ref } from "vue";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

</script>

<template>
<main class="main about">

			<div class="about-section">
				<div class="container">
					<h2 class="subtitle">OUR STORY</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.</p>

					<p class="lead">“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their
						default model search for evolved over sometimes by accident, sometimes on purpose ”</p>
				</div><!-- End .container -->
			</div><!-- End .about-section -->

			<div class="features-section bg-gray">
				<div class="container">
					<h2 class="subtitle">WHY CHOOSE US</h2>
					<div class="row">
						<div class="col-lg-4">
							<div class="feature-box bg-white">
								<i class="icon-shipped"></i>

								<div class="feature-box-content p-0">
									<h3>Free Shipping</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div><!-- End .feature-box-content -->
							</div><!-- End .feature-box -->
						</div><!-- End .col-lg-4 -->

						<div class="col-lg-4">
							<div class="feature-box bg-white">
								<i class="icon-us-dollar"></i>

								<div class="feature-box-content p-0">
									<h3>100% Money Back Guarantee</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div><!-- End .feature-box-content -->
							</div><!-- End .feature-box -->
						</div><!-- End .col-lg-4 -->

						<div class="col-lg-4">
							<div class="feature-box bg-white">
								<i class="icon-online-support"></i>

								<div class="feature-box-content p-0">
									<h3>Online Support 24/7</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div><!-- End .feature-box-content -->
							</div><!-- End .feature-box -->
						</div><!-- End .col-lg-4 -->
					</div><!-- End .row -->
				</div><!-- End .container -->
			</div><!-- End .features-section -->

			<div class="testimonials-section">
				<div class="container">
					<h2 class="subtitle text-center">HAPPY CLIENTS</h2>

					<swiper
                    :slidesPerView="3"
                    :sliderPerGroup="3"
                    :space-between="30"
                    :loop="true"
                    :autoplay="{
                      delay: 2000,
                    }"
                    :modules="modules"
                    class="mySwiper"
                    :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:3,spaceBetweenSlides: 30  } }"
                  >
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-5.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">John Smith</strong>
									<span>SMARTWAVE CEO</span>
								</div>
							</div><!-- End .testimonial-owner -->

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-6.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">David Lee</strong>
									<span>HEALTHCARE Plus CEO</span>
								</div>
							</div><!-- End .testimonial-owner -->

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-7.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">Sarah Wilson</strong>
									<span>CLEANENERGY Founder</span>
								</div>
							</div><!-- End .testimonial-owner -->

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-8.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">Michael Brown</strong>
									<span>INNOVATE CFO</span>
								</div>
							</div><!-- End .testimonial-owner -->

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-9.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">Emily Johnson</strong>
									<span>TECHNOVATE CTO</span>
								</div>
							</div><!-- End .testimonial-owner -->

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                    <swiper-slide>
						<div class="testimonial">
							<div class="testimonial-owner">
								<figure>
									<img src="@/assets/images/clients/client-7.png" alt="client">
								</figure>

								<div>
									<strong class="testimonial-title">John Smith</strong>
									<span>SMARTWAVE CEO</span>
								</div>
							</div>

							<blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum
									dolor sit amet, consectetur elitad adipiscing cas non placerat mi.</p>
							</blockquote>
						</div>
                    </swiper-slide>
                  </swiper>
				</div><!-- End .container -->
			</div><!-- End .testimonials-section -->

			<div class="counters-section bg-gray">
				<div class="container">
					<div class="row">
						<div class="col-6 col-md-4 count-container">
							<div class="count-wrapper">
								<span class="count-to" data-from="0" data-to="200" data-speed="2000"
									data-refresh-interval="50">200</span>+
							</div><!-- End .count-wrapper -->
							<h4 class="count-title">MILLION CUSTOMERS</h4>
						</div><!-- End .col-md-4 -->

						<div class="col-6 col-md-4 count-container">
							<div class="count-wrapper">
								<span class="count-to" data-from="0" data-to="1800" data-speed="2000"
									data-refresh-interval="50">1800</span>+
							</div><!-- End .count-wrapper -->
							<h4 class="count-title">TEAM MEMBERS</h4>
						</div><!-- End .col-md-4 -->

						<div class="col-6 col-md-4 count-container">
							<div class="count-wrapper line-height-1">
								<span class="count-to" data-from="0" data-to="24" data-speed="2000"
									data-refresh-interval="50">24</span><span>HR</span>
							</div><!-- End .count-wrapper -->
							<h4 class="count-title">SUPPORT AVAILABLE</h4>
						</div><!-- End .col-md-4 -->

						<div class="col-6 col-md-4 count-container">
							<div class="count-wrapper">
								<span class="count-to" data-from="0" data-to="265" data-speed="2000"
									data-refresh-interval="50">265</span>+
							</div><!-- End .count-wrapper -->
							<h4 class="count-title">SUPPORT AVAILABLE</h4>
						</div><!-- End .col-md-4 -->

						<div class="col-6 col-md-4 count-container">
							<div class="count-wrapper line-height-1">
								<span class="count-to" data-from="0" data-to="99" data-speed="2000"
									data-refresh-interval="50">99</span><span>%</span>
							</div><!-- End .count-wrapper -->
							<h4 class="count-title">SUPPORT AVAILABLE</h4>
						</div><!-- End .col-md-4 -->
					</div><!-- End .row -->
				</div><!-- End .container -->
			</div><!-- End .counters-section -->
			<!-- <Footer /> -->
		</main>
</template>

<style scoped></style>

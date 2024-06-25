<script setup>
import {Footer } from "@/components";

</script>

<template>
<main class="main">

    <div class="container contact-us-container mt-5">
        <div class="contact-info">
            <div class="row">
                <div class="col-12">
                    <h2 class="ls-n-25 m-b-1">
                        Contact Info
                    </h2>

                    <p>
                        Discover the innovative world of Bangladesh from the comfort of your home with "FIREFLYS BD" and embark on an exciting shopping experience that brings the essence of Bangladesh directly to your doorstep. FIREFLYS BD is not just an e-commerce platform; it is a gateway to the rich culture, tradition, and modern innovations of Bangladesh. The platform is designed to provide a seamless shopping experience, allowing you to explore a wide range of products that reflect the unique craftsmanship, creativity, and entrepreneurial spirit of Bangladeshi artisans and businesses.

                        At FIREFLYS BD, we believe in celebrating the vibrant culture and heritage of Bangladesh. Our platform offers an extensive collection of products, ranging from traditional handicrafts, exquisite textiles, and fashion accessories to cutting-edge electronics, home decor, and everyday essentials. Each item is carefully curated to ensure quality and authenticity, giving you a taste of Bangladesh's diverse and dynamic marketplace. Whether you are looking for a beautifully handcrafted saree, intricately designed jewelry, or the latest tech gadgets, FIREFLYS BD has something for everyone.
                        
                        One of the standout features of FIREFLYS BD is our commitment to supporting local artisans and small businesses. By partnering with skilled craftsmen and entrepreneurs from across Bangladesh, we provide them with a platform to showcase their products to a global audience. This not only helps preserve traditional crafts and techniques but also empowers these artisans economically, contributing to the overall development of their communities. When you shop with FIREFLYS BD, you are not just purchasing a product; you are supporting a sustainable and inclusive business model that makes a positive impact on countless lives.
                    </p>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="sicon-location-pin"></i>
                        <div class="feature-box-content">
                            <h3>Address</h3>
                            <h5>House - 613, 3rd Floor, Flat - 4c East Kazipara, Mirput, Bangladesh</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="fa fa-mobile-alt"></i>
                        <div class="feature-box-content">
                            <h3>Phone Number</h3>
                            <h5>+088 1711986839</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="far fa-envelope"></i>
                        <div class="feature-box-content">
                            <h3>E-mail Address</h3>
                            <h5>support@fireflysbd.com</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="far fa-calendar-alt"></i>
                        <div class="feature-box-content">
                            <h3>Working Days/Hours</h3>
                            <h5>Saturday to Thursday / 10:00AM - 8:00PM</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <h2 class="mt-6 mb-2">Send Us a Message</h2>

                <form class="mb-0" action="#">
                    <div class="form-group">
                        <label class="mb-1" for="contact-name">Your Name
                            <span class="required">*</span></label>
                        <input type="text" class="form-control" id="contact-name" name="contact-name"
                            required />
                    </div>

                    <div class="form-group">
                        <label class="mb-1" for="contact-email">Your E-mail
                            <span class="required">*</span></label>
                        <input type="email" class="form-control" id="contact-email" name="contact-email"
                            required />
                    </div>

                    <div class="form-group">
                        <label class="mb-1" for="contact-message">Your Message
                            <span class="required">*</span></label>
                        <textarea cols="30" rows="1" id="contact-message" class="form-control"
                            name="contact-message" required></textarea>
                    </div>

                    <div class="form-footer mb-0">
                        <button type="submit" class="btn btn-dark font-weight-normal">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div class="col-lg-6">
                <h2 class="mt-6 mb-1">Frequently Asked Questions</h2>
                <div id="accordion">
                    <div class="card card-accordion">
                        <a class="card-header collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            How can I track my order?
                        </a>

                        <div id="collapseOne" class="collapse" data-parent="#accordion" style="">
                            <p>After placing an order, your that order has to complete several steps/stages before it's done with "Delivery". To track order status, please follow the below steps:

                                Login to your “Daraz Account” 
                                
                                Go to “Account” > “My Orders” > “View All”
                                
                                From the order list, click on the"Order Number" that you want to track.
                                
                                Click on Track Package
                                
                                That will lead you to the“Delivery Detail” page.</p>
                        </div>
                    </div>

                    <div class="card card-accordion">
                        <a class="card-header collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                            How do I cancel my order?
                        </a>

                        <div id="collapseTwo" class="collapse" data-parent="#accordion" style="">
                            <p>Cancellation is only possible before shipping.

                                To cancel an item from your order, follow the steps belowCancellation is only possible before shipping.

                                To cancel an item from your order, follow the steps below</p>
                        </div>
                    </div>

                    <div class="card card-accordion">
                        <a class="card-header collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            What are the features of checkout page?
                        </a>

                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <p>Cancellation is only possible before shipping.

                                To cancel an item from your order, follow the steps below</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <Footer /> -->
    <div class="mb-8"></div>
</main>
</template>

<style scoped></style>

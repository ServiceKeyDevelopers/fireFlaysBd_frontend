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
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed imperdiet libero id nisi euismod, sed
                        porta est consectetur. Vestibulum auctor felis eget
                        orci semper vestibulum. Pellentesque ultricies nibh
                        gravida, accumsan libero luctus, molestie nunc.L
                        orem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </p>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="sicon-location-pin"></i>
                        <div class="feature-box-content">
                            <h3>Address</h3>
                            <h5>House # 40, Road # 2, Dhaka Real Estate, Katasur, Mohammadpur, Dhaka</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="fa fa-mobile-alt"></i>
                        <div class="feature-box-content">
                            <h3>Phone Number</h3>
                            <h5>01712079742</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="far fa-envelope"></i>
                        <div class="feature-box-content">
                            <h3>E-mail Address</h3>
                            <h5>ahsumon2000@gmail.com</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="feature-box text-center">
                        <i class="far fa-calendar-alt"></i>
                        <div class="feature-box-content">
                            <h3>Working Days/Hours</h3>
                            <h5>Mon - Sun / 9:00AM - 8:00PM</h5>
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
                        <a class="card-header" href="#" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Is bonus applicable on sales made using a voucher?
                        </a>

                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <p>Yes. Bonus is applicable on sales as long as the paid price is equal to or above BDT 500.</p>
                        </div>
                    </div>

                    <div class="card card-accordion">
                        <a class="card-header collapsed" href="#" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            When will the bonus be disbursed?
                        </a>

                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <p>Bonus will be given on 20th of every month, given that it is equal to or more than BDT 500 (before tax deduction). Current month’s bonus will be given on the following month.</p>
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

import { Component, OnInit } from '@angular/core';

import SwiperCore, { Swiper, Navigation, Pagination, EffectFade, EffectCards, EffectFlip, Autoplay, EffectCoverflow, Controller } from 'swiper';
import { PaginationOptions } from 'swiper/types';


SwiperCore.use([EffectFade, EffectCards, EffectFlip, Autoplay, EffectCoverflow, Pagination, Navigation, Controller]);


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  ratingSlider: any;

  constructor() { }

  ngOnInit(): void {
    this.ratingSlider = new Swiper('.review-slide', {
      // speed: 200,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      centeredSlides: true,
      watchOverflow: true,
      initialSlide: 1,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
        clickable: true
      },
      autoplay: {
        disableOnInteraction: false,

        delay: 4000
      }


    });
  }

}

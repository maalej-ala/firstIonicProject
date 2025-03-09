import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Enregistre les Web Components de Swiper
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;

  images = [
    'assets/images/publicite-01.png',
    'assets/images/publicite-01.png',
    'assets/images/publicite-01.png',
    'assets/images/publicite-01.png'
  ];

  // Configuration de Swiper
  private swiperConfig = {
    loop: true,
    pagination: true,
    autoplay: {
      delay: 2000, // 2 secondes
      disableOnInteraction: false
    }
  };

  constructor() {}

  ngAfterViewInit() {
    if (this.swiperRef && this.swiperRef.nativeElement) {
      console.log('Swiper element exists:', this.swiperRef.nativeElement);

      // Applique la configuration
      Object.assign(this.swiperRef.nativeElement, this.swiperConfig);

      // Initialise Swiper
      this.swiperRef.nativeElement.initialize();

      // Force le démarrage de l'autoplay
      const swiperInstance = this.swiperRef.nativeElement.swiper;
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.start();
        console.log('Autoplay started manually:', swiperInstance.autoplay);
      } else {
        console.log('Swiper instance or autoplay not available');
      }
    } else {
      console.log('Swiper reference not found');
    }
  }

  // Optionnel : pour déboguer
  onSlideChange(event: any) {
    console.log('Slide changed', event);
  }
}
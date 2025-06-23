import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.scss'],
})
export class Home11Component {
  public routes = routes;
  public discoverSliderOptions: OwlOptions = {
    loop: true,
			margin: 10,
			dots: true,
			nav: false,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1
				},
				500: {
					items: 1
				},
				575: {
					items: 2
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
  };
  public treatmentSliderOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  public featuresSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };
  public sliderSixteenOptions: OwlOptions = {
    margin: 0,
		center: true,
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1,
				margin: 15,
			},
			1000: {
				items: 3,
			}
		}
  };
  public eyeTestiSliderOptions: OwlOptions = {
    loop:true,
    margin:15,
    dots: false,
    nav:true,
    smartSpeed: 2000,
    navText: [ '<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      1300:{
        items:1
      }
    }
  };
}

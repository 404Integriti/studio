"use client";

import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";


export default function PortfolioSlider({ images = [] }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = $;

      import("slick-carousel").then(() => {
        if ($(".slider-center").hasClass("slick-initialized")) return;

        $(".slider-center").slick({
          centerMode: true,
          infinite: true,
          centerPadding: "200px",
          slidesToShow: 3,
          prevArrow:
            '<button type="button" class="slick-prev " aria-label="Previous slide"><img src="https://cdn.prod.website-files.com/68078fa4ba014e835ab81bc9/680933dac40a1f5374b1d02b_Vector%20(1).png" alt="Previous slide"/></button>',
          nextArrow:
            '<button type="button" class="slick-next" aria-label="Next slide"><img src="https://cdn.prod.website-files.com/68078fa4ba014e835ab81bc9/680933fa17e676ad004c4695_Vector%20(2).png" alt="Next slide"/></button>',
          responsive: [
            {
              breakpoint: 480,
              settings: { arrows: false, dots: true, centerMode: true, centerPadding: "40px", slidesToShow: 1 }
            },
            {
              breakpoint: 768,
              settings: { arrows: false, dots: true, centerMode: true, centerPadding: "40px", slidesToShow: 1 }
            },
            {
              breakpoint: 1024,
              settings: { arrows: false, dots: true, centerMode: true, centerPadding: "120px", slidesToShow: 3 }
            },
            {
              breakpoint: 1440,
              settings: { arrows: true, centerMode: true, centerPadding: "150px", slidesToShow: 3 }
            },
            {
              breakpoint: 1920,
              settings: { arrows: true, centerMode: true, centerPadding: "150px", slidesToShow: 3 }
            },
            {
              breakpoint: 2500,
              settings: { arrows: true, centerMode: true, centerPadding: "150px", slidesToShow: 3 }
            }
          ],
        });
        
      });
    }

    return () => {
      if ($(".slider-center").hasClass("slick-initialized")) {
        $(".slider-center").slick("unslick");
      }
    };
  }, []);

  return (
    <div className="slider-center">
      {images.map((img, index) => (
        <Link href={`${img.link}`} className="slider-item " key={index} >
          <Image src={img.img} alt={`Portfolio ${index + 1}`} width={327} height={427} className="w-[327px] h-[427px]" />
        </Link>
      ))}
    </div>
  );
}

import FlavourSlide from './FlavourSlide.jsx';
import FlavourContentSlide from './FlavourContentSlide.jsx';

export default function Flavour() {
  const slides = [
    { doseImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/mato.png', packImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/onn.png', secondPackImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/plenty.png', alt: 'strawberry' },
    { doseImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/milo.png', packImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/kivo.png?updatedAt=1768590898030', secondPackImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/ndc.png', alt: 'provisions' },
    { doseImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/roti.png?updatedAt=1768808598933', packImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/slider/thigh.png?updatedAt=1768819424108', secondPackImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/perfecr.png?updatedAt=1768810765886', alt: 'good-meat' },
    { doseImg: 'https://ik.imagekit.io/dr5fryhth/pearshaped', packImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/banana.png?updatedAt=1768542984405', secondPackImg: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/products/cuttt.png?updatedAt=1768590905797', alt: 'tasty-fruits' },
    { doseImg: 'https://ik.imagekit.io/dr5fryhth/optisimon', packImg: 'https://ik.imagekit.io/dr5fryhth/optinoo', secondPackImg: 'https://ik.imagekit.io/dr5fryhth/optishai', alt: 'vanilla-perfection' }
  ];

  const contentSlides = [
    { title: 'Fresh<br />Vegetables', link: '#'},
    { title: 'Best <br />Provisions', link: '#'},
    { title: 'Good<br />Meat', link: '#'},
    { title: 'Tasty<br />Fruits', link: '#'},
    { title: 'Everything<br />Else', link: '#' }
  ];

  return (
    <section data-inertia className="flavour">
      <div className="flavour-container">
        <div className="flavour-header">
          <div className="flavour-heading-wrap">
            <h2 className="flavour-title">Best Prices</h2>
            <h3 data-highlight-text className="flavour-subline">Great Quality, Low Cost</h3>
          </div>
          <p className="flavour-paragraph">GoShop gives presents an avenue to dodge the hassle, shouting, travel and the bargaining. We do all that for you!</p>
        </div>
        <div data-flavour-content className="flavour-content">
          <div className="flavour-left">
            <div className="flavour-signature-wrap">
              <div className="flavour-signature">
                    <div className="stage-deco-text is-wiggle league-script-regular">Your foodstuffs here</div>
              </div>
              <div style={{ '--animation-delay': '.15s' }} className="flavour-signature-arrow">
                <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823659937fb4ddc9834_slider-signature-arrow.svg" loading="lazy" width="147" height="150" alt="slider-signature-arrow" className="flavour-signature-arrow-img" />
                <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823659937fb4ddc9834_slider-signature-arrow.svg" loading="lazy" width="147" height="150" alt="slider-signature-arrow" className="flavour-signature-arrow-img is-wiggle" />
              </div>
            </div>
            <div data-inertia-item className="flavour-left-dose">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/gmg.png" loading="lazy" width="481" height="1002" alt="slider-base-product-visual" data-inertia-item-child className="flavour-left-dose-img" />
            </div>
            <div data-inertia-item className="flavour-left-pack is-first">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/nice.png" loading="lazy" width="447" height="699" alt="slider-base-product-pack" data-inertia-item-child className="flavour-left-pack-img" />
            </div>
            <div data-inertia-item className="flavour-left-pack is-second">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/nice.png" loading="lazy" width="447" height="699" alt="slider-base-product-pack" data-inertia-item-child className="flavour-left-pack-img" />
            </div>
          </div>
          <div className="flavour-plus">
            <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c948227a747d8be568507e_slider-plus.svg" loading="lazy" width="146" height="150" alt="slider-plus" className="flavour-plus-img" />
          </div>
          <div className="flavour-right">
            <div data-flavour-slider className="flavour-swiper swiper">
              <div className="flavour-swiper-wrapper swiper-wrapper">
                {slides.map((slide, index) => (
                  <FlavourSlide key={index} doseImg={slide.doseImg} packImg={slide.packImg} secondPackImg={slide.secondPackImg} alt={slide.alt} />
                ))}
              </div>
            </div>
            <div className="flavour-right-bg">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 769 691" fill="none" data-flavour-content-svg className="flavour-right-bg-svg">
                <path d="M245.813 59.5015C54.1619 152.668 -34.1186 356.234 41.6525 512.101C117.424 667.969 332.042 724.289 523.692 631.123C715.343 537.957 803.624 334.39 727.852 178.522C652.081 22.6546 437.463 -33.6648 245.813 59.5015Z" stroke="currentColor" strokeWidth="28"></path>
              </svg>
            </div>
          </div>
          <div className="flavour-navigation">
            <button type="button" data-flavour-slider-left-button className="flavour-slider-button is-left">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0fba88460ab65187e9_icon-arrow-left.svg" loading="lazy" width="20" height="20" alt="icon-arrow-left" className="flavour-slider-button-arrow" />
            </button>
            <button type="button" data-flavour-slider-right-button className="flavour-slider-button is-right">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0f2245f238d5eb3226_icon-arrow-right.svg" loading="lazy" width="20" height="20" alt="icon-arrow-right" className="flavour-slider-button-arrow" />
            </button>
          </div>
          <div className="flavour-center">
            <div data-flavour-content-slider className="flavour-content-swiper swiper">
              <div className="flavour-content-swiper-wrapper swiper-wrapper">
                {contentSlides.map((slide, index) => (
                  <FlavourContentSlide key={index} title={slide.title} link={slide.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

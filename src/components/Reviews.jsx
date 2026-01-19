import ReviewItem from './ReviewItem.jsx';

export default function Reviews() {
  const reviews = [
    { heading: 'Fast and reliable', text: 'Placed my order in the morning and everything arrived the same day in great condition.', name: 'Daniela A.' },
    { heading: 'Saved me so much time', text: 'No more market runs after work. I order once, track it, and it shows up at my door.', name: 'Tina H.' },
    { heading: 'Great quality produce', text: 'The fruits and veggies were fresh and packed carefully. Exactly what I hoped for.', name: 'Sandra D.' },
    { heading: 'Transparent pricing', text: 'What I saw at checkout is what I paid. No surprise fees and no hidden add-ons.', name: 'Sandra W.' },
    { heading: 'Super smooth experience', text: 'Simple ordering, quick updates, and delivery windows that actually work for my schedule.', name: 'Carolin S.' },
    { heading: 'My new go-to', text: 'I use it weekly now. It feels like having a personal shopper without the hassle.', name: 'Farah M.' }
  ];

  return (
    <div id="reviews" className="testimonial-section">
      <div data-testimonial-parallax className="bg-img-wrapper">
        <img className="testimonial-top-img" src="" width="2048" alt="Iced Matcha Latte - More Nutrition" sizes="100vw" data-testimonial-parallax-item loading="lazy" />
        <img className="bg-img" src="https://ik.imagekit.io/dr5fryhth/ult" width="2048" alt="Iced Matcha Latte - More Nutrition" sizes="100vw" data-testimonial-parallax-item loading="lazy" />
      </div>
      <div className="testimonial-container">
        <div className="grid-layout">
          <div id="w-node-_188a35c2-2913-dd29-6c54-5bf8cbbe64f3-0ac01850" className="big-title-wrapper">
            <div className="testimonial-signature">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2e8120f5b95bfbd87aebf_testimonial-signature.svg" loading="lazy" width="300" height="27" alt="testimonial-signature" className="testimonial-signature-img" />
            </div>
            <h2 className="testimonial-big-heading">
              Go Easy. Go Safe.
              <br />
              GoShop.
            </h2>
          </div>
          <div id="w-node-d56024cf-9b70-fc24-7ba0-e2b3ea8d1769-0ac01850" className="testimonial-slider">
            <h3 className="testimonial-heading">
              don't take our
              <br />
              word for it
            </h3>
            <div data-testimonial-inview className="testimonial-slider-wrapper">
              <div data-slider-interface className="testimonial-slider-interface">
                <div data-slider-arrows className="testimonial-slider-button-wrapper">
                  <button type="button" data-slider-left-button className="testimonial-slider-button is-left">
                    <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0fba88460ab65187e9_icon-arrow-left.svg" loading="lazy" width="20" height="20" alt="icon-arrow-left" className="testimonial-slider-button-arrow" />
                  </button>
                  <button type="button" data-slider-right-button className="testimonial-slider-button is-right">
                    <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0f2245f238d5eb3226_icon-arrow-right.svg" loading="lazy" width="20" height="20" alt="icon-arrow-right" className="testimonial-slider-button-arrow" />
                  </button>
                </div>
              </div>
              <div data-slider className="testimonial-slider-inner">
                {reviews.map((review, index) => (
                  <ReviewItem key={index} heading={review.heading} text={review.text} name={review.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

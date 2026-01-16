import ReviewItem from './ReviewItem.jsx';

export default function Reviews() {
  const reviews = [
    { heading: 'Best matcha ever!', text: 'I already have it and they bought it straight away too.', name: 'Daniela A.' },
    { heading: 'Super delicious!', text: 'Super delicious with ice cubes, water and oat-almond milk.', name: 'Tina H.' },
    { heading: 'Risk of addiction 🙈', text: 'The Iced Matcha Latte is so delicious, with a truly creamy consistency.', name: 'Sandra D.' },
    { heading: 'The best Matcha.', text: 'This matcha has a sweet and tangy raspberry flavor. Perfect for breakfast or lunch.', name: 'Sandra W.' },
    { heading: 'Highly recommended!', text: 'Very tasty, dissolves perfectly. No clumps and a proper matcha flavor.', name: 'Carolin S.' },
    { heading: 'Favorite!!!', text: 'My favorite variety. Depending on my mood, I just add the matching Chunky flavor and enjoy 😌', name: 'Farah M.' }
  ];

  return (
    <div id="reviews" className="testimonial-section">
      <div data-testimonial-parallax className="bg-img-wrapper">
        <img className="testimonial-top-img" src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd.webp" width="2048" alt="Iced Matcha Latte - More Nutrition" sizes="100vw" data-testimonial-parallax-item loading="lazy" srcSet="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-500.webp 500w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-800.webp 800w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-1080.webp 1080w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-1600.webp 1600w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-2000.webp 2000w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-2600.webp 2600w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd-p-3200.webp 3200w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd.webp 4096w" />
        <img className="bg-img" src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649.webp" width="2048" alt="Iced Matcha Latte - More Nutrition" sizes="100vw" data-testimonial-parallax-item loading="lazy" srcSet="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-500.webp 500w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-800.webp 800w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-1080.webp 1080w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-1600.webp 1600w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-2000.webp 2000w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-2600.webp 2600w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649-p-3200.webp 3200w, https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649.webp 4096w" />
      </div>
      <div className="testimonial-container">
        <div className="grid-layout">
          <div id="w-node-_188a35c2-2913-dd29-6c54-5bf8cbbe64f3-0ac01850" className="big-title-wrapper">
            <div className="testimonial-signature">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2e8120f5b95bfbd87aebf_testimonial-signature.svg" loading="lazy" width="300" height="27" alt="testimonial-signature" className="testimonial-signature-img" />
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2e8120f5b95bfbd87aebf_testimonial-signature.svg" loading="lazy" width="300" height="27" alt="testimonial-signature" className="testimonial-signature-img is-wiggle" />
            </div>
            <h2 className="testimonial-big-heading">
              Clean. Green.
              <br />
              Goodness.
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

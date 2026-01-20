export default function ReviewItem({ heading, text, name }) {
  return (
    <div className="testimonial-slider-item-wrap">
      <div data-slider-item-inner className="testimonial-slider-item">
        <div className="testimonial-star-wrap">
          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg" loading="lazy" width="20" height="20" alt="icon-testimonial-star" className="testimonial-star" />
          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg" loading="lazy" width="20" height="20" alt="icon-testimonial-star" className="testimonial-star" />
          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg" loading="lazy" width="20" height="20" alt="icon-testimonial-star" className="testimonial-star" />
          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg" loading="lazy" width="20" height="20" alt="icon-testimonial-star" className="testimonial-star" />
          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg" loading="lazy" width="20" height="20" alt="icon-testimonial-star" className="testimonial-star" />
        </div>
        <div className="testimonial-item-inner-text">
          <h3 className="testimonial-item-heading">{heading}</h3>
          <p className="testimonial-item-text">{text}</p>
        </div>
        <div className="testimonial-line"></div>
        <div className="testimonial-item-bottom">
          <div className="testimonial-client-name">{name}</div>
          <div className="testimonial-verified-wrap">
            <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2c1be2762f3ffc1be06c5_icon-bubble-check.svg" loading="lazy" width="20" height="20" alt="icon-bubble-check" className="testimonial-verified-icon" />
            <div className="testimonial-verified-text">Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
}

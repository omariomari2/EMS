export default function Benefits() {
  return (
    <div id="benefits" className="benefit-section">
      <div data-smiley className="top-smiley is-benefit">
        <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/cropped_tom" loading="lazy" alt="Smiley" />
      </div>
      <div className="container smaller">
        <div className="grid-layout">
          <div id="w-node-_6f3e86b5-5cf7-4a62-19af-d6d71a8517d6-0ac01850" className="img-wrapper">
            <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/grobag.png" loading="lazy" alt="Iced Matcha Latte - More Nutrition" className="top-img" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 575 559" width="100%" data-fill-line className="benefit-svg">
              <path stroke="currentColor" strokeWidth="27" d="M-56.447 495.508C-26.61 513.052 53.628 569.352 87 532.069c46.24-51.66 4.952-146.571-102.084-223.636-107.035-77.065-70.703-150.5-16.274-179.818C100.1 57.804 196.947 412.744 398.5 290.569 583.168 178.628 665-36.931 945 24.953"></path>
            </svg>
            <img src="https://ik.imagekit.io/dr5fryhth/shadow.jpg" loading="lazy" alt="Iced Matcha Latte - More Nutrition" className="img" />
          </div>
          <div id="w-node-_32be253f-aa6e-8103-6d3f-40e63162832f-0ac01850" className="benefit-wrapper">
            <h2 className="benefit-heading">
              <span data-highlight-text className="light-green-span">Try Goshop.</span>
              <br />
              See the difference.
            </h2>
            <div data-benefit-table className="benefit-table">
              <div id="w-node-_244ca70f-4fb8-4324-7d1f-6e5cebd97f1e-0ac01850" className="benefit-table-title-wrapper">
                <div id="w-node-da33aad3-e9be-fd6f-a8b0-79237ed37994-0ac01850" className="benefit-table-title">Benefits</div>
                <div id="w-node-d5a0031d-8b6e-5d4a-5e75-e26d1c40acd5-0ac01850" className="benefit-table-title">GoShop</div>
                <div id="w-node-_78d70ec8-c380-1f74-9296-fa312e5af0f4-0ac01850" className="benefit-table-title">Others</div>
              </div>
              <div data-benefit-table-line id="w-node-dabaf014-7b8f-d5cf-7507-3b9733e65ad8-0ac01850" className="sub-line"></div>
              <div id="w-node-_89929daf-28b9-a774-1cdd-9d54c6ee4049-0ac01850" className="benefit-item-wrapper">
                {['Time Efficiency', 'Fast Delivery', '0 additional fees', 'Quality Assurance', 'Direct Farm Access', 'Delivery Flexibility', 'Simple Tracking'].map((benefit, index) => (
                  <div key={index}>
                    <div className="benefit-table-item">
                      <div className="benefit-item-title">{benefit}</div>
                      <div className="benefit-checker-inner">
                        <div className="benefit-item-check">
                          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68953a1b9a0c9299ece16c1e_check.svg" loading="lazy" data-benefit-table-check alt="Check" className="check" />
                        </div>
                        <div className="benefit-item-x">
                          <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68953b9f3d54aaa40b14e92f_x.svg" loading="lazy" alt="X" className="check" />
                        </div>
                      </div>
                    </div>
                    {index < 6 && <div data-benefit-table-line className="line"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

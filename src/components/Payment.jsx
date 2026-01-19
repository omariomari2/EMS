export default function Payment() {
  const paymentMethods = [
    { img: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/telecel-zimbabwe-seeklogo.png', alt: 'Amex', className: 'is-amex' },
    { img: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689b2b1554cf5d3d8dbbeb01_Group%20102.svg', alt: 'Mastercard', className: 'is-mastercard' },
    { img: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/airtel-logo-icon.svg', alt: 'PayPal', className: 'is-paypal' },
    { img: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689734d5c258f310eceeeb26_Group%2097.svg', alt: 'Apple Pay', className: 'is-apple-pay' },
    { img: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/mtn-mobile-logo-icon.svg', alt: 'Google Pay', className: 'is-google-pay' },
    { img: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689b2b2738c618add8d9334b_Group%20104.svg', alt: 'Visa', className: 'is-visa' },
    { img: 'https://ik.imagekit.io/dr5fryhth/go-shopping/images/momo.png?updatedAt=1768855658488', alt: 'Klarna', className: '' }
  ];

  return (
    <div data-inertia className="payment-section">
      <div className="payment-container">
        <div className="grid-layout">
          <div id="w-node-_041f45d4-47b7-9fbf-98ee-78b1c2254fcb-0ac01850" className="payment-wrapper">
            <div id="w-node-_358aeb55-90b6-f7e1-a5ad-3d95f312e343-0ac01850" className="payment-signature-days is-desktop">
              <div className="stage-deco-text league-script-regular" style={{ color: 'black' }}>Fast delivery</div>
              <div className="stage-deco-text is-wiggle league-script-regular" style={{ color: 'black' }}>Fast delivery</div>
            </div>
            <h2 id="w-node-_5aa7990f-3909-960f-ff04-09bf6fbaf58f-0ac01850" className="insider-heading">
              Don't just crave It.
              <br />
              <span className="light-green-span">Get It.</span>
            </h2>
            <div id="w-node-_3b9ad9e4-4de9-0d6f-0561-c6944df56da5-0ac01850" className="payment-methods-inner">
              <div data-payment className="pament-methods">
                {paymentMethods.map((method, index) => (
                  <div key={index} data-inertia-item className="payment-method-item-outer">
                    <div data-payment-item data-inertia-item-child className={`payment-method-item _${index + 1}`}>
                      <img src={method.img} loading="lazy" alt={method.alt} className={`payment-method-img ${method.className}`} />
                    </div>
                  </div>
                ))}
                <div className="payment-signature-days is-mobile">
                  <div className="stage-deco-text league-script-regular" style={{ color: 'black' }}>Fast delivery</div>
                  <div className="stage-deco-text is-wiggle league-script-regular" style={{ color: 'black' }}>Fast delivery</div>
                </div>
                <div className="payment-signature-mobile">
                  <div className="stage-deco-text league-script-regular" style={{ color: 'black' }}>5+ payment options</div>
                  <div className="stage-deco-text is-wiggle league-script-regular" style={{ color: 'black' }}>5+ payment options</div>
                </div>
              </div>
            </div>
            <div id="w-node-a4554c61-f2f6-fed6-6652-44ed900999ad-0ac01850" className="payment-signature">
              <div className="stage-deco-text league-script-regular" style={{ color: 'black' }}>5+ payment options</div>
              <div className="stage-deco-text is-wiggle league-script-regular" style={{ color: 'black' }}>5+ payment options</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bridge">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 362" data-fill-line className="footer-line">
          <path stroke="currentColor" strokeWidth="40" d="M-18.71 5c-13.946 63.747 87.162 120.514 206.635 115.163 94.068-4.213 234.063-38.055 299.378-54.44C939.856-47.813 622.333 217.95 673.484 297.908c37.655 58.861 225.928-110.975 381.896-110.975 56.25 0 206.21 27.386 293.1 98.412 72.29 59.093 134.66 63.049 158.52 51.416"></path>
        </svg>
      </div>
    </div>
  );
}

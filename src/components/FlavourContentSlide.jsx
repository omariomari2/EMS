export default function FlavourContentSlide({ title, link }) {
  return (
    <div className="flavour-content-slide swiper-slide">
      <div className="flavour-content-slide-inner">
        <div className="flavour-content-slide-header">
          <h3 className="flavour-content-slider-title" dangerouslySetInnerHTML={{ __html: title }}></h3>
          <p className="flavour-content-slider-subline">Chunky Flavour®</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="button w-inline-block">
          <div className="button-cycle is-first">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
              <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
            </svg>
            <div className="button-cycle-bg"></div>
          </div>
          <div className="button-bg">
            <div className="button-text">Buy now</div>
          </div>
          <div className="button-cycle is-second">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" width="100%" className="button-arrow">
              <path fill="currentColor" fillRule="evenodd" d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z" clipRule="evenodd"></path>
            </svg>
            <div className="button-cycle-bg"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

import Image from "next/image";
import "../../styles/home-about.css";

export default function HomeAbout() {
  return (
    <>
     <div className="pset">
  <div className="container">
    <div className="row listar-feature-items">
      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank" />
          <div className="listar-feature-item-inner">
            <div className="listar-feature-right-border" />
            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                <div className="listar-feature-icon-inner">
                  <div>
                   <Image src="/public/images/home-about/3414151.png.png" alt="alt" width={50} height={50} />
                  </div>
                </div>
              </div>
              <div className="listar-feature-content-wrapper" style={{paddingTop: 0}}>
                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span><span>01</span>
                    Businesses </span>
                </div>
                <div className="listar-feature-item-excerpt">
                  Start publish listings to show everyone the details and goodies of your establishment. </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank" />
          <div className="listar-feature-item-inner">
            <div className="listar-feature-right-border" />
            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                <div className="listar-feature-icon-inner">
                  <div>
                    <Image src="/public/images/home-about/921591.png" alt="alt" width={50} height={50} />
                  </div>
                </div>
              </div>
              <div className="listar-feature-content-wrapper" style={{paddingTop: 0}}>
                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span><span>02</span>
                    Customers </span>
                </div>
                <div className="listar-feature-item-excerpt">
                  Easily find interesting places by local experts, save time by checking listing features. </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div className="listar-feature-item listar-feature-has-link">
          <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank" />
          <div className="listar-feature-item-inner">
            <div className="listar-feature-right-border" />
            <div className="listar-feature-block-content-wrapper">
              <div className="listar-feature-icon-wrapper">
                <div className="listar-feature-icon-inner">
                  <div>
                    <Image src="/public/images/home-about/3412953.png" alt="alt" width={50} height={50} />
                  </div>
                </div>
              </div>
              <div className="listar-feature-content-wrapper" style={{paddingTop: 0}}>
                <div className="listar-feature-item-title listar-feature-counter-added">
                  <span><span>03</span>
                    Feedback </span>
                </div>
                <div className="listar-feature-item-excerpt">
                  Visitors discuss listings to share experiences, so businesses get reputation consolidated. </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
      </div>
    </div>
  </div>
</div>

    </>
  );
}

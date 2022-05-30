import React from 'react'
import language from '../resources/language-dict'

const VendorItem = (props) => {
    const vendor = props.vendors.data
    if(typeof(vendor) == 'string') return
    return (
        <div ref={props.refItem} className='vendor-items-container'>
            <section className='vendor-items-container__section' >
                <div className='vendor-items-container__section__box'>
                    <header className='vendor-items-container__section_box--img'>
                        <div className='box-img'>
                            <img className='box-img__img' src={vendor.backgroundImage} alt='vendor background' />
                        </div>
                        <div className='box-logo'>
                            <img className='box-logo__img' src={vendor.logo} alt='vendor logo'/>
                        </div>
                    </header>
                    <div className='vendor-items-container__section_box--content'>
                        <div className='box-details'>
                            <div className='box-details__right'>
                                <h3 className='box-details__right__text'>{vendor.title}</h3>
                                {vendor.discountValueForView > 0 && <div className='box-details__right__discount__box'>
                                    <div className='discount-content'>
                                        <span>تا</span>
                                        <span>{vendor.discountValueForView}</span>
                                        <span>%</span>
                                    </div>
                                </div>}
                            </div>
                            <div className='box-details__left'>
                                <span className='box-details__left__span'>
                                    <span className="box-details__left__span__char">(</span>
                                        {vendor.commentCount}
                                    <span className="box-details__left__span__char">)</span>
                                </span>
                                &nbsp;
                                <div 
                                    className={
                                        vendor.rate >= 3 ? 'box-details__left__box--lightgreen random-box'
                                            : vendor.rate >= 4 ? 'box-details__left__box--green random-box'
                                            : 'box-details__left__box--yellow random-box'
                                    }>
                                    {vendor.rate}
                                </div>
                            </div>
                        </div>
                        <div className='box-description'>{vendor.description}</div>
                        <div className='box-bottom'>
                            <div className='box-bottom__btn'>
                                <span className='box-bottom__btn__span'>{language.tokens['PRE_ORDER']}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         </div>
    )
}

export default VendorItem
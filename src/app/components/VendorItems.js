import React from 'react'
import VendorItem from './VendorItem'

const VendorItems = (props) => {
    const vendors = props.items
    return (
        <React.Fragment>
            {/* <header className='header'>
                {vendors[0] !== undefined && <h2 className='header__title'>{vendors[0]['data']}</h2>}
            </header> */}
            <div className='vendor-content'>
                <div className='vendor-content__2'>
                    {vendors !== undefined && vendors.map((vendor, index) => {
                        if(vendors.length === index + 1) {
                            return <VendorItem refItem={props.refItem} vendors={vendor} key={index} />
                        } else {
                            return <VendorItem vendors={vendor} key={index} />
                        }
                    })}
                </div> 
            </div>   
        </React.Fragment>
    )
}

export default VendorItems
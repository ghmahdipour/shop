import React, {useEffect, useState, useRef, useCallback} from 'react';
import * as actions from '../../store/actions/listVendors';
import {useDispatch, useSelector} from 'react-redux'
import VendorItems from '../../components/VendorItems'
import search from '../../assets/images/search.png';
import language from '../../resources/language-dict'

const VendorList = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [char, setChar] = useState('');
    const [hasMore, setHasMore] = useState(false);
    const loading = useSelector(state => state.vendor.loading);
    const vendors = useSelector(state => state.vendor.vendors);
    const [SearchVendors, setSearchVendors] = useState();
    const vendorRef = useRef();
    const dispatch = useDispatch();
    const lastVendorElementRef = useCallback(node => {
        if(loading) return
        if(vendorRef.current) vendorRef.current.disconnect()
        vendorRef.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(prev => prev + 1)
            }
        })
        if(node) vendorRef.current.observe(node)
    },[loading, hasMore]);

    const _search = (e) => {
        setChar(e.target.value)
    }

    useEffect(() => {
        let _temp
        if(char){
            _temp = vendors.filter(item => {
                if(typeof(item.data) == 'string') return
                let _elem = item.data.title.match(char);
                return _elem;
            });
            setSearchVendors(_temp)
        } 
    },[char])


    useEffect(() => {
        const launchVendors = async () => {
            dispatch(actions.getVendors(pageNumber));
        };
        launchVendors();
    },[pageNumber]);

    useEffect(() => {
        if(vendors.length !== 0) {
            setHasMore(vendors.length > 0)
        }
    },[vendors])
  
 
    return (
        <div className='main-container'>
            <div className='main-container__search-box'>
                <div className='main-container__search-box__content'>
                    <div className='main-container__search-box__content--first'></div>
                    <input
                        value={char}
                        onChange={_search}
                        className='main-container__search-box__content--input'
                        id="searchQuery-input" name="searchQuery" type="text" placeholder="جستجو در رستوران" />
                    <div className='main-container__search-box__content--icon'>
                        <img src={search} alt="snappfood logo" height={'100%'}/>
                    </div>    
                </div>
            </div>
            {vendors.length === 0 && loading ? <div className='main-container__loading'>
                     <p className='main-container__loading__text'>
                        {language.tokens['WAITING']}
                    </p>
                </div> 
                    : 
                <VendorItems refItem={lastVendorElementRef} 
            items={SearchVendors !== undefined && SearchVendors.length !== 0 ? Object.values(SearchVendors) : Object.values(vendors)} />}
        </div> 
    )
}

export default VendorList;
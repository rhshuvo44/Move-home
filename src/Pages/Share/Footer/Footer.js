import React from 'react';
import FooterButtom from './FooterButtom';
import FooterTop from './FooterTop';
import NewsLetter from './NewsLetter';

const Footer = () => {
    return (
        <div className='bg-secondary py-10'>
            <FooterTop/>
            <NewsLetter/>
            <FooterButtom/>
        </div>
    );
};

export default Footer;
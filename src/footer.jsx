import React from 'react';
import classes from './footer.module.css';

const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <p className={classes.footer__element}>Quotes are taken from <a className={classes.footer__link} target='_blank' style={{color:props.linkColor}} href="https://github.com/lukePeavey/quotable?tab=readme-ov-file#get-random-quotes">there</a></p>
            <p className={classes.footer__element}>Icons from <a className={classes.footer__link} target='_blank' style={{color:props.linkColor}} href="https://fontawesome.com/">there</a></p>
            <p className={classes.footer__element}>Fonts from <a className={classes.footer__link} target='_blank' style={{color:props.linkColor}} href="https://fonts.google.com/">there</a></p>
            <p className={classes.footer__element}>Inspired by <a className={classes.footer__link} target='_blank' style={{color:props.linkColor}} href="https://codepen.io/chepe/pen/VLZoMK">this</a></p>
            <p className={classes.footer__element}>Assembled by <a className={classes.footer__link} target='_blank' style={{color:props.linkColor}} href="https://codepen.io/enderlorde/pens/">that guy</a> in 2021</p>
        </footer>
    );
}
 
export default Footer;
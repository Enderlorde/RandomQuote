import React from 'react';
import classes from './footer.module.css';

const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <p>Quotes are taken from <a style={{color:props.linkColor}} href="https://github.com/lukePeavey/quotable?tab=readme-ov-file#get-random-quotes">there</a></p>
            <p>Icons from <a style={{color:props.linkColor}} href="https://fontawesome.com/">there</a></p>
            <p>Fonts from <a style={{color:props.linkColor}} href="https://fonts.google.com/">there</a></p>
            <p>Inspired by <a style={{color:props.linkColor}} href="https://codepen.io/chepe/pen/VLZoMK">this</a></p>
            <p>Assembled by <a style={{color:props.linkColor}} href="https://codepen.io/enderlorde/pens/">that guy</a> in 2021</p>
        </footer>
    );
}
 
export default Footer;
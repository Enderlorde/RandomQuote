import React from 'react';
import classes from "./quote.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

class Quote extends React.Component{
    constructor(props){
      super(props)
      this.state={
        text:"Nothing to say",
        author:"John Doe",
      }
      this.switchColor = props.switchColor;
    }
    
    quoteGet(){
      //get quote
      fetch("https://api.quotable.io/random").then(response => response.json()).then(json => {
            this.setState({
                text:json.content,
                author:json.author,
            })
            this.switchColor()
        } );
    }
  
    componentDidMount(){
      this.quoteGet()
    }
  
    handleClick() {
      this.quoteGet()
    }
    
    render(){
      return (
        <div className={classes.box}>
            <a href={'https://twitter.com/intent/tweet?hashtags=Quotable&related=Quotable&text=' +
          encodeURIComponent('"' + this.state.text + '" ' + this.state.author)}><FontAwesomeIcon color='#ffffff' className={classes.icon} icon={faTwitter} /></a>

            <p>{this.state.text}</p>

            <p className={classes.author}>--{this.state.author}--</p>

            <FontAwesomeIcon className={classes.icon} icon={faRandom} onLoad={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)} />
          </div>
      );
    }
  }

export default Quote;
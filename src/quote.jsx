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
        url:"local"
      }
      this.API = import.meta.env.MODE=='development'?'http://localhost:5173/api/qotd':'https://favqs.com/api/qotd';
      console.log(import.meta.env.MODE);
      this.switchColor = props.switchColor;
    }
    
    quoteGet(){
      //get quote
      fetch(this.API).then(response => response.json()).then(json => {
            this.setState({
                text:json.quote.body,
                author:json.quote.author,
                url:json.quote.url
            })
            this.switchColor()
        } );
    }
  
    componentDidMount(){
      this.quoteGet()
    }
  
    handleClick() {
      this.quoteGet()
      
      //change background color
    }
    
    render(){
      return (
        <div className={classes.box}>
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + this.state.text + '" ' + this.state.author)}><FontAwesomeIcon color='#ffffff' icon={faTwitter} /></a>
            <div>
              <p>{this.state.text}</p>
              <p className={classes.author}>--{this.state.author}--</p>
            </div>
            <FontAwesomeIcon className={classes.randomIcon} icon={faRandom} onLoad={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)} />
          </div>
      );
    }
  }

export default Quote;
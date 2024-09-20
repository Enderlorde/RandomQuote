import React from "react";
import { motion } from "framer-motion";
import classes from "./quote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { BounceLoader } from "react-spinners";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Nothing to say",
      author: "John Doe",
      busy: false,
    };
    this.switchColor = props.switchColor;
  }

  quoteGet() {
    //get quote
    this.setState({ busy: true });
    fetch("https://zenquotes.io/api/random")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          text: json[0].q,
          author: json[0].a,
          busy: false,
        });
        this.switchColor();
      });
  }

  componentDidMount() {
    this.quoteGet();
  }

  handleClick() {
    if (!this.state.busy) this.quoteGet();
  }

  render() {
    if (this.state.busy) {
      return <BounceLoader />;
    }
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={classes.box}
      >
        <a
          target="_blank"
          href={
            "https://x.com/intent/tweet?hashtags=Quotable&related=Quotable&text=" +
            encodeURIComponent('"' + this.state.text + '" ' + this.state.author)
          }
        >
          <FontAwesomeIcon
            color="#ffffff"
            className={classes.icon}
            icon={faTwitter}
          />
        </a>

        <p>{this.state.text}</p>

        <p className={classes.author}>--{this.state.author}--</p>

        <FontAwesomeIcon
          className={this.state.busy ? classes.icon_state_busy : classes.icon}
          icon={faRandom}
          onLoad={this.handleClick.bind(this)}
          onClick={this.handleClick.bind(this)}
        />
      </motion.div>
    );
  }
}

export default Quote;

//Background colors
const palette = [
  "#8aa399",
  "#2C2A4A",
  "#907AD6",
  "#85c1cc",
  "#960200",
  "#AABD8C",
  "#DC851F",
  "#CC2936"
];

//QuoteBox component
class QuoteBox extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text:"Nothing to say",
      author:"John Doe",
      url:"local"
    }
  }
  quoteGet(){
    //get quote
    $.ajax({
        type:'GET',
        url:'https://favqs.com/api/qotd' 
      }).done(response=>{
        this.setState({
          text:response.quote.body,
          author:response.quote.author,
          url:response.quote.url
      }) 
    })
  }
  componentDidMount(){
    this.quoteGet()
  }
  handleClick() {
  this.quoteGet()
  //change background color
  let randomBackground = palette[Math.floor(Math.random() * palette.length)]
  $('body').animate(
    {
      backgroundColor: randomBackground
    },
    1000);
  $('footer a').animate(
    {
      color:randomBackground
    },
  1000)
    
  }

  
  render(){
    return (
      <div id="quote-box">
          <a id = 'tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + this.state.text + '" ' + this.state.author)}><i class="fab fa-twitter"></i></a>
          <div id="quote-content" cite={this.state.url}>
            <p id="text">{this.state.text}</p>
            <p id='author'>--{this.state.author}--</p>
          </div>
        <i id="new-quote" class="fas fa-random" onLoad={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}></i>
        </div>
    )
  }
}

const quoteContainer = $("content").get(0);
ReactDOM.render(<QuoteBox />,quoteContainer)
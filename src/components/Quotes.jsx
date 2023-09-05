import React from "react";
import ReactDOM from "react-dom";
import './quotes.css';


//App component

class Quotes extends React.Component{
    constructor(){
        super();
        this.state = ({

        });
    }

    render(){

        return(
            <div>
                <QuoteBox />
            </div>
        );
    }
}

class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quoteText: "",
            quoteAuthor: "",
            color: this.props.color,
            tweetUrl: "https://twitter.com/intent/tweet/?text="
        }
    this.getNewQuote();

    //Bind Handles and functions
    this.getNewQuote = this.getNewQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    //Get a quote and author from API and set state
    getNewQuote(){
        const app = this;
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            app.setState ({
                quoteText: data.content,
                quoteAuthor: data.author,
                tweetUrl: "https://twitter.com/intent/tweet/?text=" + data.content.replace(/ /g, "+")
            });
        });
    }

    //Handles new quote button
    handleNewQuote(){

        this.getNewQuote();
    }

    render(){
        return (
            <main id="quote-box">
                <div id="quote-content">
                    <div id="text">{this.state.quoteText}</div>
                    <div id="author">{this.state.quoteAuthor}</div>
                </div>
                <button onClick={this.handleNewQuote} id="new-quote">Get New quote</button>
                <a href={ this.state.tweetUrl } target="_blank" id="tweet-quote">
                    <i className="fab fa-twitter"></i> Tweet Quote</a>

            </main>

        )
    }

}



export default Quotes;
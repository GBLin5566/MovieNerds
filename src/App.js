
const React = require('react');
const Rebase = require('re-base');
const Item = require('./Item');
const NewItem = require('./NewItem');

const initialState = {
    items: [
    {
        movie:'2001',
        content:'Crazy movie',
        rate:'10'
    },
    {
        movie:'memento',
        content:'Cool',
        rate:'8'
    }
    ],
    newMovie: '',
    newRate: '',
    newComment: ''
};


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }


    handleRateInput(event){
        const inputValue = event.target.value;
        if (event.keyCode == 13 && inputValue !== '') {
            const {items, newMovie, newRate, newComment} = this.state;
            items.push({
                movie: newMovie,
                content: newComment,
                rate: newRate
            });
            this.setState({
                items: items,
                newMovie: '',
                newRate: '',
                newComment: ''
            });
        }
    }

    handleMovieChange(event){
        this.setState({
            newMovie: event.target.value
        });
    }
    handleRateChange(event){
        this.setState({
            newRate: event.target.value
        });
    }
    handleCommentChange(event){
        this.setState({
            newComment: event.target.value
        });
    }

    rendorItems(item, i){
        const {movie, content, rate} = item;
        return(
            <Item 
                key={i}
                movie={movie}
                content={content}
                rate={rate}
            />        
        );
    }
    render(){
        const {items, newMovie, newRate, newComment} = this.state;
        return(
            <div className="app">
                <div className="newitem">
                    <p>Movie</p>
                    <input type="text" className="input-movie" value={newMovie} onChange={this.handleMovieChange.bind(this)}></input>
                    <p>Comment</p>
                    <input type="text" className="input-comment" value={newComment} onChange={this.handleCommentChange.bind(this)}></input>
                    <p>Rate(1~10)</p>
                    <input 
                    type="text" 
                    className="input-rate" 
                    value={newRate} 
                    onChange={this.handleRateChange.bind(this)} 
                    onKeyDown={this.handleRateInput.bind(this)}></input>
                </div>
                <div className="item-list">
                    {items.map(this.rendorItems, this)}
                </div>
            </div>
        );
    }
}
module.exports = App;

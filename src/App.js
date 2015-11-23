
const React = require('react');
const Rebase = require('re-base');
const base = Rebase.createClass('https://movie-nerds.firebaseio.com');
const Item = require('./Item');
const NewItem = require('./NewItem');

const initialState = {
    items: [],
    newMovie: '',
    newDirector: '',
    newRate: '',
    newComment: ''
};


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        this.ref = base.syncState(`items`, {
            context: this,
            state: 'items',
            asArray: true
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    handleInput(event){
        const inputValue = event.target.value;
      //  if (event.keyCode == 13 && inputValue !== '') {
            const {items, newMovie, newDirector,newRate, newComment} = this.state;
            if (newMovie === '' || newRate === '' || newComment === '' || newDirector === '')
                return;
            items.push({
                movie: newMovie,
                director: newDirector,
                content: newComment,
                rate: newRate
            });
            this.setState({
                items: items,
                newMovie: '',
                newDirector: '',
                newRate: '',
                newComment: ''
            });
       // }
    }

    handleDeleteItem(event){
        
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
    handleDirectorChange(event){
        this.setState({
            newDirector: event.target.value
        });
    }

    rendorItems(item, i){
        const {movie, director, content, rate} = item;
        return(
            <Item 
                key={i}
                index={i}
                movie={movie}
                director={director}
                content={content}
                rate={rate}
            />        
        );
    }
    render(){
        const {items, newMovie, newDirector ,newRate, newComment} = this.state;
        return(
            <div className="app">
                <div className="new-item">
                <form className="form-inline show">
                    <div className="form-group">
                        <label>Movie</label>
                        <input type="text"
                        className="form-control" 
                        value={newMovie}
                        placeholder="ex. 2001: Space Odyssey"
                        onChange={this.handleMovieChange.bind(this)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Director</label>
                        <input type="text"
                        className="form-control"
                        value={newDirector}
                        placeholder="Ang Lee"
                        onChange={this.handleDirectorChange.bind(this)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Rate</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={newRate}
                        placeholder="8.5"
                        onChange={this.handleRateChange.bind(this)} 
                        ></input>
                    </div>
                </form>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea 
                        className="form-control" 
                        value={newComment}
                        row="3"
                        placeholder="Nice Moive"
                        onChange={this.handleCommentChange.bind(this)}
                        ></textarea>
                    </div>
                    <div>
                        <input 
                        className="btn btn-primary btn-send"
                        type="button"
                        value="Send"
                        onClick={this.handleInput.bind(this)}
                        ></input>
                    </div>
                </div>
                <div className="item-list">
                    {items.map(this.rendorItems, this)}
                </div>
            </div>
        );
    }
}
module.exports = App;

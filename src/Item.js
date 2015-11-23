
const React = require('react');

class Item extends React.Component {

    gotoRotten(string){
        window.open("http://www.rottentomatoes.com/search/?search="+string);
    }

    deleteIndex(index){
        return index;
    }

    render(){
        const {index, movie, director, content, rate, onDestroy} = this.props;
        return(
            <div className="item lead well well-sm">
                <div className="item-element">
                <div className="movie">
                    <button type="button" className="btn btn-default btn-close" aria-label="Right Align" onClick={(event) => onDestroy(index)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                    <h1><label>{movie}</label></h1>
                    <h3><label>Directed by {director}</label></h3>
                </div>
                <div className="rate">
                    <label>Rate: {rate}</label>
                </div>
                <div className="usercontenet">
                    <p>{content}</p>
                </div>
                <div className="button-rotten">
                    <input type="button" className="btn btn-info" value="Rotten" onClick={this.gotoRotten.bind(this, movie)}></input>
                </div>
                </div>
            </div>
        );
    }
}

module.exports = Item;


const React = require('react');

class Item extends React.Component {

    gotoRotten(string){
        window.open("http://www.rottentomatoes.com/search/?search="+string);
    }

    deleteIndex(index){
        return index;
    }

    render(){
        const {index, movie, director, content, rate} = this.props;
        return(
            <div className="item lead">
                <div className="movie">
                    <h2><label>{movie}</label></h2>
                    <h3><label>{director}</label></h3>
                </div>
                <div className="rate">
                    <label>Rate: {rate}</label>
                </div>
                <div className="usercontenet">
                    <p>{content}</p>
                </div>
                <div className="button-rotten">
                    <input type="button" className="btn btn-info" value="Rotten" onClick={this.gotoRotten.bind(this, movie)}></input>
                    <input type="button" className="btn btn-danger" value="Delete" onClick={this.deleteIndex.bind(this, index)}></input>
                </div>
            </div>
        );
    }
}

module.exports = Item;

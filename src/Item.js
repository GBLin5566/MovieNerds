
const React = require('react');

class Item extends React.Component {

    gotoRotten(string){
        window.open("http://www.rottentomatoes.com/search/?search="+string);
    }

    render(){
        const {movie, content, rate} = this.props;
        return(
            <div className="item">
                <div className="movie">
                    <p>{movie}</p>
                </div>
                <div className="usercontenet">
                    <p>{content}</p>
                </div>
                <div className="rate">
                    <p>{rate}</p>
                </div>
                <div className="button-rotten">
                    <input type="button" value="Rotten" onClick="window.open('www.yahoo.com.tw')"></input>
                </div>
            </div>
        );
    }
}

module.exports = Item;

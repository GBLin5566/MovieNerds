
const React = require('react');

class NewItem extends React.Component {
    render(){
        return(
            <div className="newitem">
                <p>Movie</p>
                <input type="text"></input>
                <p>Comment</p>
                <input type="text"></input>
                <p>Rate(1~10)</p>
                <input type="text"></input>
                <button type="button">Send</button>
            </div>
        );    
    }
}

module.exports = NewItem;

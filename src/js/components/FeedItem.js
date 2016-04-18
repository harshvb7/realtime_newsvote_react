var React = require('react');

var FeedItem = React.createClass({

    _vote : function(newCount){
        this.props.onVote({
            key:this.props.key,
            title: this.props.title,
            description: this.props.desc,
            voteCount: newCount
        });
    },

    _voteUp: function(){
        var count = parseInt(this.props.voteCount, 10);
        newCount = count + 1;
        this._vote(newCount);
    },

    _voteDown: function(){
        var count = parseInt(this.props.voteCount, 10);
        newCount = count - 1;
        this._vote(newCount);
    },

    render: function() {
        return (
            <li key = {this.props.key}  className="list-group-item">
                <span className="badge badge-success">{this.props.voteCount}</span>
                <h4>{this.props.title}</h4>
                <span>{this.props.desc}</span>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary" onClick={this._voteUp}>&uarr;</button>
                    <button id="down" className="btn btn-sm btn-primary" onClick={this._voteDown}>&darr;</button>
                </span>
                <br/><br/>
            </li>
        );
    }

});

module.exports = FeedItem;

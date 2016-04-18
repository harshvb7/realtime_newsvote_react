var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash'),
    Firebase = require('firebase');

var Feed = React.createClass({

    componentDidMount: function(){
        var ref = Firebase('https://vote-this.firebaseio.com/');
        ref.on('value', function(snap){
            
        });
    },

    getInitialState: function () {
        var FEED_ITEMS = [
            {key: 1, title: 'Real time Data', description: 'Firebase is cool', voteCount: 49},
            {key: 2, title: 'Javascript is Fun', description: 'Lexical Scoping', voteCount: 34},
            {key: 3, title: 'Coffee', description: 'Foo Bar', voteCount: 15}
        ];
        return {
            items: FEED_ITEMS,
            formDisplayed: false
        };
    },

    _onToggleForm: function(){
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },

    _getNewItem: function(newItem){

        newItems = this.state.items.concat([newItem]);  // concat new items and change the state..

        this.setState({
            items: newItems,
            formDisplayed: false,   //hide the form by changing the state of form..
            key: this.state.items.length
        });
    },

    _onVote: function (item) {
        var items = _.uniq(this.state.items);
        console.log(items);
        var index = _.findIndex(items, function (feedItems) {
            return feedItems.key === item.key;
        });
        var oldObj = items[index];
        var newItems = _.pull(items, oldObj);
        newItems.push(item);
        this.setState({
            items: newItems
        });
    },

    render: function() {
        return (
            <div>
                <div className="container">
                    <ShowAddButton displayed={this.state.formDisplayed} buttonToggle = {this._onToggleForm}  />
                </div>
                <FeedForm displayed = {this.state.formDisplayed} newItem = {this._getNewItem} stateKey={this.state.key}  />
                <br/>
                <FeedList items = {this.state.items} onVote = {this._onVote} />
            </div>
        );
    }

});

module.exports = Feed;

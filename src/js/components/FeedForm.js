var React = require('react');

var FeedForm = React.createClass({

    _handleForm: function(e) {
        e.preventDefault();

        var newKey = parseInt(this.props.stateKey, 10) + 1;
        console.log(newKey);

        var newItem = {
            key: newKey,
            title: this.refs.title.value,
            description: this.refs.desc.value,
            voteCount: 0
        };

        this.refs.feedForm.reset();  //reset the form after submit
        this.props.newItem(newItem);   // call the function from Feed.js because it handles the sate.. this function is passed to FeedForm child via props..

    },

    render: function() {

        var display = this.props.displayed ? 'block' : 'none';

        var styles = {
            'display': display
        };

        return (
            <form ref="feedForm" className="container" id="feedForm" style={styles} onSubmit={this._handleForm}>
                <div className="form-group">
                    <input ref="title" type="text" className="form-control" placeholder="Title" />
                    <input ref="desc" type="text" className="form-control" placeholder="Description" />
                    <button type="submit" className="btn btn-success btn-block">Add</button>
                </div>
            </form>
        );
    }

});

module.exports = FeedForm;

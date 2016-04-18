var React = require('react');

var ShowAddButton = React.createClass({

    render: function() {

        var buttonText, buttonClass;

        if (this.props.displayed) {
            buttonText = 'Cancel';
            buttonClass = "btn btn-block btn-default";

        }
        else{
            buttonText = 'Add New Item';
            buttonClass = "btn btn-block btn-primary";
        }

        return (
            <button type="button" className={buttonClass} onClick={this.props.buttonToggle}>{buttonText}</button>
        );
    }

});

module.exports = ShowAddButton;

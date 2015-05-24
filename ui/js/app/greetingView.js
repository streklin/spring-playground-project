define(function(require) {

    var $ = require('jquery');

    var greetingView = function(target) {
        this.target = target;
    };

    greetingView.prototype.render = function(data) {

        $(this.target).find('span').html(data.content);

    };


    return greetingView;

});
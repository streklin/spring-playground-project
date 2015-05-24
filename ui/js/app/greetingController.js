define(function(require) {

    var $ = require('jquery');

    var GreetingsController = function(view, target) {
        this.view = view;
        this.target = target;

        var self = this;

        $(target).find('#submitName').click(function() {

            var name = $(target).find('#name').val();
            getResponse.call(self, name);
        });

    };

    function getResponse(name) {

        var self = this;

        var promise = $.ajax({
            url: 'http://local.springplay.com/spring/greeting?name=' + name
        });

        promise.done(function(response) {
           self.view.render(response);
        });
    };

    return GreetingsController;

});
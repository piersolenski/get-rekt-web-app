angular.module("elHacko").factory("WebSocket", function(CONFIG, $timeout) {

    var url = CONFIG["web_socket"];

    var callback;

    return {
        setCallback: function setCallback(fn) {
            callback = fn;
        },
        start: function start() {
            var webSocket = new WebSocket(url);
            webSocket.onmessage = function (evt) {
                callback(evt);
            };
            // webSocket.onclose = function(){
            //     $timeout(function(){
            //         console.info("Attempting reconnect");
            //         start();
            //     }, 5000);
            // };
        }
    };
});

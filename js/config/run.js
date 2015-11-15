angular.module("elHacko").run(function(CONFIG, WebSocket) {
    WebSocket.start(CONFIG["web_socket"]);
});

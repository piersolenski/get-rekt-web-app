angular.module("elHacko", [
    "ngRoute",
    "monospaced.qrcode",
    "vxWamp"
]).config(function($wampProvider, CONFIG) {
     $wampProvider.init({
        url: CONFIG["web_socket"],
        realm: CONFIG["realm"]
     });
 });

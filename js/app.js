angular.module("elHacko", [
    "ngRoute",
    "monospaced.qrcode"
]);

// angular.module("elHacko").directive("shareTags", function($document) {
//     return {
//         restrict: "E",
//         replace: true,
//         link: function(scope, elem, attrs) {
//
//             var tags = `
//             <meta name="twitter:card" content="photo" />
// <meta name="twitter:site" content="@flickr" />
// <meta name="twitter:title" content="Mountain sunset" />
// <meta name="twitter:image" content="http://farm8.staticflickr.com/7334/11858349453_e3f18e5881_z.jpg" />
// <meta name="twitter:url" content="https://www.flickr.com/photos/reza-sina/11858349453/" />
//             `;
//
//             var head = angular.element(document.getElementsByTagName("head"));
//
//             head.append(tags);
//
//             elem.remove();
//
//         }
//     };
// });

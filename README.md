# Get Rekt Web App

Built as part of the Get Rekt hackathon, this is a component in a larger photobooth app.

This part grabs a UUID from an API and generates a QR code from it. The user then scans the QR code, which triggers a countdown before taking a photo. The image is then composited on a sever before being sent back to the app via a websocket. The countdown "beep" is generated using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), 'cos why not?

## Setup
````
$ bower install
$ npm install
````

**Development**
````
$ gulp watch
````

**Distribution**
````
$ gulp build
````

# jQuery.cover.js
This plugin creates a full page, resizable background.

It has been tested in IE7-9 and weighs less than a kilobyte.

You can download it in a zip file or view source on GitHub.

## Usage
HTML
```html
<img id='background' src='sf.jpg' data-image-width='2560' data-image-height='1600' data-horizontal-align='[left|center|right]' data-vertical-align='[top|center|bottom]' />
```
CSS
```css
html {
  background-attachment: fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#background {
  display: none;
  position: fixed;
  z-index: -1;
}
```
JavaScript
```html
<!-- import jQuery -->
<!-- import jQuery.cover -->
<script type='text/javascript'>
$(function() {
  $('#background').cover();
});
</script>
```

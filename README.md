# @connectivepack/link-meta-preview

Link meta preview which returns basic preview info like title, description, images, videos based on metadata.

## Install

<pre>
	npm install @connectivepack/link-meta-preview
</pre>

## How to use

```javascript
var preview = require("@connectivepack/link-meta-preview");
preview("http://www.google.com", function(err, data) {
	if(!err) {
		console.log(data); //Prints the meta data about the page 
	}
});
```

You can set a proxy server too
```javascript
var preview = require("@connectivepack/link-meta-preview");
preview({ url: "http://www.google.com", proxy: "{server name}", function(err, data) {
	if(!err) {
		console.log(data); //Prints the meta data about the page 
	}
});
```
returns

```json
{ url: 'http://www.google.com',
  loadFailed: false,
  title: 'Google',
  description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  contentType: 'text/html',
  mediaType: 'website',
  images: [ 'http://www.google.com/intl/en_ALL/images/srpr/logo1w.png' ],
  videos: undefined,
  audios: undefined }
 ```

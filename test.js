var preview = require("./index.js");
var input = [ "https://www.google.com","https://id.yahoo.com"];


input.forEach(function(val) {
	preview(val, function(err, data) {
		if(err) {
			console.log('err',err)
		} else {
			console.log('data',data)
		}
	});
});

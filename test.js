var preview = require("./index.js"),
	assert = require("assert");

var input = [ "http://www.yahoo.com" ]


input.forEach(function(val) {
	preview(val, function(err, data) {
		if(err) {
			assert.fail(err, null, "Unexpected error");
		} else {
			switch(val) {
				case "http://www.yahoo.com":
					assert.ok(data.images && data.images.length > 1, "Loading of page with no og tag and multiple images failed. -- " + val);
					break;
				default:
					assert.ok(!data.loadFailed, "Test failed. -- " + val);
			}
		}
	});
});

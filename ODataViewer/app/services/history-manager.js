
app.service("HistoryManager", function () {
	// Array Remove - By John Resig (MIT Licensed)
	Array.prototype.remove = function(from, to) {
		var rest = this.slice((to || from) + 1 || this.length);
  		this.length = from < 0 ? this.length + from : from;
  		return this.push.apply(this, rest);
	};
	
	function pushUnique(item) {
		var i = this.indexOf(item);
		if (i != -1) {
			this.remove(i);
		}
		this.push(item);
	}

    	function addLink(url) {
		var links = getLinks();
		links.pushUnique(url);
		localStorage["ODataLinks"] = JSON.stringify(links);
    	}

    	function getLinks() {
        	return JSON.parse(localStorage["ODataLinks"] || '[]');
    	}

    	return {
        	getLinks: getLinks,
		addLink: addLink
    	}
});

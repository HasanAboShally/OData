function append(str, intel){
	var parts = str.split('?');
	
	if(parts.length == 1){
		return addIntel(str, intel, '/');
	}
	
	var lastQuery = parts[1].split('&').pop();
	var queryParts = lastQuery.split('=');
	
	if(queryParts.length == 1){
		return parts[0] + '?' +  addIntel(parts[1], intel, '&');
	}
	
	lastQueryArr = lastQuery.split('=');
	
	return parts[0] + '?' + parts[1].join('&') + '&'+ lastQueryArr[0] + '=' + addIntel(lastQueryArr[1], intel, ' ');
}

function addIntel(str , intel, sep){
	var tmp = (sep === ' ') ? str.split(/\s+/) : str.split(sep);
	tmp.pop();
	tmp.push(intel);
	return tmp.join(sep);
}

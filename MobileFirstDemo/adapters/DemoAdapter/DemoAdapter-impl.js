function getAllCountries() {
	
	var input = {
			method : 'get', 
			returnedContentType : 'json',
			path : '/country/get/all'
	};
	
	return WL.Server.invokeHttp(input);
}

function search2charCountryCode(code) {
	
	var input = {
			method : 'get',
			returnedContentType : 'json',
			path : '/country/get/iso2code/' + code
	};
	
	return WL.Server.invokeHttp(input);
}
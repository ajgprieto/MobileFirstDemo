function getAllCountries() {
	
	var input = {
			method : 'get', 
			returnedContentType : 'json',
			path : '/country/get/all'
	};
	
	return WL.Server.invokeHttp(input);
}
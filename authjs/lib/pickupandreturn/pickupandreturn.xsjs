function saveTU(tu) {
	var conn = $.hdb.getConnection();
	var output = JSON.stringify(tu);
	var fnCreateTU = conn.loadProcedure("trp_auth_test.authdb::createTU");

	var result = fnCreateTU({
		TU_ID: tu.TU_ID,
		TU_TYPE: tu.TU_TYPE,
		SOURCE_LOCATION: tu.SOURCE_LOCATION
	});
	conn.commit();
	conn.close();

	if (result && result.EX_ERROR !== null) {
		return result.EX_ERROR;
	} else {
		return output;
	}
}

var tu = {
	TU_ID: $.request.parameters.get("TU_ID"),
	TU_TYPE: $.request.parameters.get("TU_TYPE"),
	SOURCE_LOCATION: $.request.parameters.get("SOURCE_LOCATION")
};

// validate the inputs here!
var output = saveTU(tu);

$.response.contentType = "application/json";

$.response.setBody(output);
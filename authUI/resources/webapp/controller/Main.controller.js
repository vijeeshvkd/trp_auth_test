sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.trp.auth.authUI.controller.Main", {
		onInit: function () {

		},
		onWorksetItemSelected: function(oEvent) {
			var routeName = oEvent.getParameter("key") || "";
			var router = this.getOwnerComponent().getRouter();
			router.navTo(routeName);
		}
	});
});
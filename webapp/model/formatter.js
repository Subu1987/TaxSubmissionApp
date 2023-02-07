sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		formatURL: function(Pernr, oDesc, Filename) {

			console.log(Pernr, oDesc, Filename);

			var sRootUrl = this.getView().getModel().sServiceUrl;

			console.log("formatter:sRootUrl", sRootUrl);

			var sPath = sRootUrl + this.getView().getModel().createKey("/ZfileSet", {
				Pernr: Pernr,
				Zdesc: oDesc,
				Filename: Filename
			}) + "/$value";

			console.log("formatter:sPath", sPath);
			return sPath;

		}
	};

});
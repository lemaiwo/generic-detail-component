sap.ui.define([
	"be/wl/zcomploaderlib/cl/BaseController",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("be.wl.detailcomponentgeneric.controller.App", {
			onInit: function () {
				Controller.prototype.onInit.apply(this, arguments);
				this.setModel(new JSONModel());
			},
			onUpdateInput:function(channel, action, data){
				this.data = data;
				this.setModel(new JSONModel({data:JSON.stringify(data)}));
			},
			onAfterRendering:function(){
				this.setModel(new JSONModel({data:JSON.stringify(this.data)}));
			}
		});
	});

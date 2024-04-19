sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.fioriapplication.controller.Home", {
            onInit: function() {
                const oPerson = {
                    employee: {
                        EmployeeName: "Ryka",
                        Age:20,
                        Salary:"10lpa"

                    }
                }
                const oPerson1 = {
                    employee: {
                        EmployeeName: "Nigama",
                        Age:20,
                        Salary:"12lpa"

                    }
                }

                const oJsonModel = new JSONModel(oPerson);
                const localMode1 = new JSONModel(oPerson1);
                this.getView().setModel(oJsonModel);
                this.getView().setModel(localMode1,"Employee1");
            }

        });
    });

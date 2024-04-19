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

            onCalculate: function (OEvent) {

                var oView = this.getView();

                var iFirstNumber = parseInt(oView.byId("idFirstNumber").getValue());

                var iSecondNumber = parseInt(oView.byId("idSecondNumber").getValue());

                var iResult = iFirstNumber + iSecondNumber;

                alert(iResult);
            },
            JsonModel: function () {
                alert("button triggred")
               const oPerson = {
                 details: {
                     name: "Rohan",
                    age: 50
                },
             salDetails: {
                     ctc: "1LPA"
                }
             }
             const oPerson1 = {
                details: {
                    name: "Ryka",
                    age: 24
                },
                salDetails: {
                    ctc:"10LPA"
                }
             }
            //  debugger
             const oJsonModel = new JSONModel(oPerson);
             const localModel = new JSONModel(oPerson1);
             this.getView().setModel(oJsonModel);
             this.getView().setModel(localModel,"localmodel");
             console.log(oJsonModel);
             console.log(localModel);
         }
            
        });
    });

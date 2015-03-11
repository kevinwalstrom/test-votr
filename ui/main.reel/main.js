/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    states: {
    	value : [
			{name: "Alabama", code: "AL" },
			{name: "Alaska", code: "AK"},
			{name: "Arizona", code: "AZ"},
			{name: "Arkansas", code: "AR"},
			{name: "Wyoming", code: "WY"}
		]
    }
    

});

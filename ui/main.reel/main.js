/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Montage = require("montage/core/core").Montage;

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
    content: {
        value: null
    },

    sidebar: {
        value: null
    },

    // content.selectedItem and sidebar.selectedItem are bound to selectedItem
    _selectedItem: {value: null},
    selectedItem: {
        get: function() {return this._selectedItem;},
        set: function(value) {this._selectedItem = value; this.needsDraw = true;}
    },

    templateDidLoad: {
        value: function() {
            console.log("main templateDidLoad");
        }
    },

    deserializedFromTemplate: {
        value: function() {
            console.log("main deserializedFromTemplate");
        }
    },

    draw: {
        value: function() {
            console.log('main draw');
        }
    },

    didDraw: {
        value: function() {
            console.log('main didDraw');
        }
    }


});

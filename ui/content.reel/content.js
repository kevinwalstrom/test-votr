/**
 * @module ui/content.reel
 */
var Component = require("montage/ui/component").Component;
/**
 * @class Content
 * @extends Component
 */
exports.Content = Component.specialize(/** @lends Content# */ {
    constructor: {
        value: function Content() {
            this.super();
        }
    },

    sandbox: {
        value: null
    },

    contentDeck: {
        value: null
    },

    _selectedItem: {value: null},
    selectedItem: {
        get: function() {
            return this._selectedItem;
        },
        set: function(value) {
            this._selectedItem = value;
            this.needsDraw = true;
        }
    },

    slotDidSwitchContent: {
        value: function(substitution, nodeShown, componentShown, nodeHidden, componentHidden) {
            console.log('substitution did switch content');
            debugger;               
            if(componentHidden && typeof componentHidden.didBecomeInactiveInSlot === 'function') {
                componentHidden.didBecomeInactiveInSlot();
            }
            if(componentShown && typeof componentShown.didBecomeActiveInSlot === 'function') {
                componentShown.didBecomeActiveInSlot();
            }
        }
    }


 });

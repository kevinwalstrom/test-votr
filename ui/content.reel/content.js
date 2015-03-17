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

    _switchValue: {value: null},
    switchValue: {
        get: function() {
            return this._switchValue;
        },
        set: function(value) {
            console.log('switchValue'+ value);
            this._switchValue = value;
            this.needsDraw = true;
        }
    },

    slotDidSwitchContent: {
        value: function(substitution, nodeShown, componentShown, nodeHidden, componentHidden) {
            console.log('substitution did switch content');
            console.log('componentShown' + componentShown);
            console.log('nodeShown' + nodeShown);
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

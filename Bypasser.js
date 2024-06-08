// ==UserScript==
// @name         Bypasser
// @namespace    
// @version      100000000000.000000000000
// @description Anti Reload
// @author       H4CKE3R
// @match
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Disable page reload
    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        event.returnValue = '';
    });
})();

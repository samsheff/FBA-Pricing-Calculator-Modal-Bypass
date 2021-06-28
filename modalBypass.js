// ==UserScript==
// @name         Clear FBA Modal
// @namespace    https://amazon-asin.com/
// @version      0.1
// @description  Clears Modal on FBA calculator
// @author       samsheff (https://github.com/samsheff/)
// @match        https://amazon-asin.com/fba-revenue-calculator.html
// @icon         https://cdn.sellerapp.com/asin-lookup/fav.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var clearedModal = false;

    setInterval(function () {
        try {
            document.querySelector("ngb-modal-window").remove();
            document.querySelector("ngb-modal-backdrop").remove();
            document.body.removeAttribute("class");
            clearedModal = true;
        } catch {
            if (clearedModal === true) {
                clearInterval(this);
            }}
    }, 1000);
})();

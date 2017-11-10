// ==UserScript==
// @name         OVH Status RACK
// @namespace    http://szczepix.pl
// @version      0.1
// @description  try to take over the world!
// @author       szczepix
// @match        http://prace.ovh.pl/vms/index_sbg2.html
// @downloadURL  http://szczepix.pl/discord/OVHStatus.user.js
// @updateURL    http://szczepix.pl/discord/OVHStatus.user.js
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

(function() {
    'use strict';

    //paste your rack name here
    var rack = "74B01";

    var tab = $('table').children().children().children();

    var count = tab.length;
    // console.log(tab);
    // console.log(count);

    for(var i=0; i <= count; i++)
    {
        var test = tab[i];

        if (test.textContent === rack) {
            // console.log(test.textContent);
            // console.log(test.className);
            // console.log(test);
            if (test.className !== "lv4") 
            {
                var myAudio = new Audio('http://szczepix.pl/discord/alarm.mp3');
                myAudio.loop = true;
                myAudio.play();
            }

            break;
        }
    }

})();
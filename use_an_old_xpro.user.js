// ==UserScript==
// @name         Use an old X Pro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  課金要求されたら旧新Deckを使うやつ
// @author       K.Ohsawa
// @match        https://twitter.com/i/premium_sign_up
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

/* globals jQuery, $, Cookies, waitForKeyElements */
(function() {
    'use strict';

    // Your code here...
    waitForKeyElements(
        "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x",
        function(){
            console.log(document.cookie);
            if (Cookies.get("tweetdeck_version")) {
                Cookies.remove("tweetdeck_version", { path: '/', domain: '.twitter.com' });
            };
            Cookies.set(
                "tweetdeck_version",
                "legacy",
                {
                    url: "https://twitter.com/",
                    domain: ".twitter.com",
                    path: "/",
                    secure: true,
                    expires: 365
                }
            );
            console.log(document.cookie);
            location.href = "https://tweetdeck.twitter.com/";
        }
    );
})();

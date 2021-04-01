function killAllStuff()
{
    var yes = document.getElementsByClassName("ignore-click-outside app-modal in");

    // Stolen from https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp THANK YOU!!
    var i;
    for (i = 0; i < yes.length; i++) {
        yes[i].remove();
    }
}

(function() {
    'use strict';

    // Delete
    killAllStuff();
})();

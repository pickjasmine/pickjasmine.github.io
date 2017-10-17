var nameOfCookie = "count";


function createCookie() {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);
    document.cookie = nameOfCookie + "=0; expires=" + expirationDate.toUTCString();
}

function checkForCookie() {
    if (!document.cookie) {
        return false;
    }

    var foundCookie = document.cookie.match(new RegExp(nameOfCookie + "=\\d+"));

    if (foundCookie === null) {
        return false;
    }

    return true;
}

function readCookieValue() {
    var cookieExists = checkForCookie();
    if (!cookieExists) {
        return null;
    }

    var cookieValue = document.cookie.match(new RegExp(nameOfCookie + "=(\\d+)"));
    var cookieCounter = Number(cookieValue[1]);
    return cookieCounter;
}

function updateCookie(value) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);
    document.cookie = nameOfCookie + "=" + value + "; expires=" + expirationDate.toUTCString();
}

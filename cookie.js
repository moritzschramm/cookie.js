
function setCookie(key, value, expires) {

  var expireDate = new Date;
  expireDate.setTime(expireDate.getTime() + 24 * expires * 60 * 60 * 1000);

  expires = "expires=" + expireDate.toUTCString();

  document.cookie = key + "=" + value + "; " + expires + "; path=/";
}

function getCookie(key) {

  key = key + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookie = decodedCookie.split(";");

  for(var i = 0; i < cookie.length; i++) {

    var c = cookie[i];

    while(c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(key) == 0) {
      return c.substring(key.length, c.length);
    }
  }

  return "";
}

function checkCookie(key) {

  var value = getCookie(key);
  return "" != value;
}

function deleteCookie(key) {

  if(checkCookie(key)) {

    setCookie(key, "", -1);
    return true;

  } else {

    return false;
  }
}

<h2>Usage</h2>
Include the js file like this:
<code>&lt;script src="path/to/cookie.js"&gt;&lt;/script&gt;</code>
Now you can use any of the 3 functions below

<h3>setCookie([string] key, [string] value, [int] expires)</h3>
sets a cookie which expires after 'expires' days

<h3>getCookie([string] key)</h3>
retrieves value of a cookie; returns an empty string if the key is not set

<h3>checkCookie([string] key)</h3>
returns true if the key exists; otherwise false

<h3>deleteCookie([string] key)</h3>
deletes a cookie and returns true if the cookie existed; otherwise false

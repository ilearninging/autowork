/*
 * @name  search bing.com
 * @description search bing.com for text of pasteboard
 * @author AutoWork
 *
 */
var url="http://bing.com/search?q="+getClip();
openURL(encodeURI(url));

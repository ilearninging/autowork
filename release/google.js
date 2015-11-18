/*
 * @name  search google 
 * @description search google for text of pasteboard
 * @author AutoWork
 *
 */
var url="http://www.google.com/search?hl=en&q="+getClip();
openURL(encodeURI(url));

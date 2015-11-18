/*
 * @name markdown to poster
 * @description change HTML to Markdown ,and send the markdown to poster app. 
 * @author ilearninging
 */
var base = 'notesy://x-callback-url/render-markdown?text=';
var url=encodeURI(getClip());
var poster="posterapp://x-callback-url/create?text=";
var actions = '&output-param=text&x-success=' + poster + '&x-error=autowork://';
openURL(base+url+actions);

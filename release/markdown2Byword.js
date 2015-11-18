/*
 *  @name markdown text to Byword
 *  @description  change the Markdown string of the first pasteboard item  to html string ,then create text in byword
 *  @author AutoWork
 */
import_module("markdown");
var md=getClip();
var html=markdown2html(md);
setClip(html);
var url="byword://new?text="+encodeURI(html);
openURL(url);

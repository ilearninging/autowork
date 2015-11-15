/*
 *  @name markdown2Byword
 *  @description Markdown to Byword
 *  @author ilearninging
 */
import_module("markdown");
var md=getClip();
var html=markdown2html(md);
setClip(html);
var url="byword://new?text="+encodeURI(html);
openURL(url);

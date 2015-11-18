/*
 * @name convert html to markdown
 * @description change HTML string of the first pasteboard item to Markdown string
 * @author AutoWork
 */
import_module("markdown");
var html=getClip();
function callback(err,markdown){
    setClip(markdown);
}
html2markdown(html,callback);

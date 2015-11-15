/*
 * @name html2markdown
 * @description change HTML to Markdown 
 * @author ilearninging
 */
import_module("markdown");
var html=getClip();
function callback(err,markdown){
    setClip(markdown);
}
html2markdown(html,callback);

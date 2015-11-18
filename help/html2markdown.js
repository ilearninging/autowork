/*
 * @name html2markdown
 * @description this method convert html string to markdown string
 * @author AutoWork
 *
 */
import_module("html2markdown");
function callback(err,markdown){
if(!err) log(markdown);
}

html2markdown("<h1>hello,world</h1>",callback);

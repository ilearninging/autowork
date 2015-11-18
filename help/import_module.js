/*
 * @name import_module(module)
 * @description this method import moudles
 * @author AutoWork
 *
 */
import_module("html2markdown");
function callback(err,markdown){
if(!err) log(markdown);
}

html2markdown("<h1>hello,world</h1>",callback);

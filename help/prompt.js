/*
 * @name prompt(name,callback)
 * @description this method prompt user to input some info
 * @author AutoWork
 *
 */
function callback(text){
    log("Hi,"+text);
}
prompt('Please Input Your Name:',callback);

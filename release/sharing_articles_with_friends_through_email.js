/*
 * @name Sharing articles with friends through mail
 * @description the task need both Drafts and AutoWork working together to send a mail as html with copied URL
 * @author AutoWork
 *
 */
function callback(text){
var clip=getClip();
openURL("drafts://x-callback-url/create?text="+text+"%0D%20%5BLink%5D%28"+clip+"%29%20%0D%0Dhtnawsaj&action={{Share Link}}&x-success={{autowork://}}");
}
prompt("text",callback);

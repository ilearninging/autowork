/*
 * @name add event to Fantastical
 * @description add event to Fantastical
 * @author AutoWork
 *
 */
var url="fantastical2://parse?sentence=";
var text=encodeURI(getClip());
openURL(url+text);

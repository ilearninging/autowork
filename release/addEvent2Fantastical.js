/*
 * @name addEvent2Fantastical
 * @description add event to Fantastical
 * @author ilearninging
 *
 */
var url="fantastical2://parse?sentence=";
var text=encodeURI(getClip());
openURL(url+text);

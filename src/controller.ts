import { Alerts } from "./model";
import * as $ from "jquery";

const alerts = new Alerts(); //TS instantiation of object
//var jsobj; //JS standard var implementation

alerts.messages = ["hello", "world"]; //in TS you can only modify declared members of objects    
//alerts.messages = "Hello World"; //in fact alerts.messages is of type 'any' by defaul so it's treated as a JS var.
//jsobj.blah = ["this is legal because TS defaults to JS if no TS features are used."]; //non-TS objects can still add arbitr1ary members. Maybe.

export function DisplayAlerts(){
    $("#alerts").append(alerts.messages.join());
}

DisplayAlerts();
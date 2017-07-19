/**
 * Created by admin on 2017/7/19.
 */

var  start = ctrl.loadCommands().start,
     count = ctrl.loadCommands().count,
     total = ctrl.loadCommands().total;

var pagenum = total/count ,
    page = start/count ;
document.getElementById("demo").innerHTML=page;
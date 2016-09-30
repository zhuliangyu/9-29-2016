/**
 * Created by macbook on 2016-09-29.
 */
var parseSong = function (string) {
    var eachNote = string.split(" ");
    var newNote=[];

    for (var i = 0; i < eachNote.length; i++) {
        var arr = eachNote[i].split("*");
        if(!arr[1]){
            arr[1]=1;
        }

        //arr[0]=pitch
        //arr[1]=beats
        var obj={};
        obj["pitch"]=arr[0];
        obj["beats"]=parseInt(arr[1]);
        newNote.push(obj);


    }


    return newNote;
}

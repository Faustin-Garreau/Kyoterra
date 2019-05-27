var xmlhttp = new XMLHttpRequest();
var url = "https://private-fabb9f-xd4.apiary-mock.com/element";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        var myArr = JSON.parse(this.responseText);
        console.log(myArr);
                                                                                
        document.getElementById("bloc_titre").innerHTML = myArr.section[0].titre;
        document.getElementById("bloc_titre2").innerHTML = myArr.section[1].titre;
        document.getElementById("bloc_titre3").innerHTML = myArr.section[2].titre;
        document.getElementById("text_bloc").innerHTML = myArr.section[0].texte;
        document.getElementById("text_bloc2").innerHTML = myArr.section[1].texte;
        document.getElementById("text_bloc3").innerHTML = myArr.section[2].texte;
    }
};
xmlhttp.open("GET", url , true);
xmlhttp.send();

	
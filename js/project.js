var xmlhttp = new XMLHttpRequest();
var url = "https://private-fabb9f-xd4.apiary-mock.com/element";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url , true);
xmlhttp.send();
// получаем случайное
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        change(this);
    }
};

xhttp.open("GET", "../base/base.xml", true);
xhttp.send();

function change(xml) {
    var xmlDoc = xml.responseXML;
    var index = Math.floor(Math.random() * xmlDoc.getElementsByTagName("task").length);
    document.getElementsByClassName("insertAction")[0].innerHTML =
        xmlDoc.getElementsByTagName("task")[index].childNodes[0].nodeValue;
}

function getnum(num) {
    var r = document.getElementById("r");
    r.value += num;

}
function getclear() {
    var r = document.getElementById("r");
    r.value = " " ;

}
function getresult(){
    var r = document.getElementById("r");
    r.value = eval(r.value);
}
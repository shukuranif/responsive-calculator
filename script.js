function val(id) {
    document.getElementById('answer').value += id;
}

function ans() {
    var res = document.getElementById('answer').value;
    var finalResult = eval(res);
    document.getElementById('answer').value = finalResult;
}

function clea() {
    var a = 0;
    document.getElementById('answer').value = " ";
}
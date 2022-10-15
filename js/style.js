var toDoList = [];

document.getElementById('buttonClick').onclick = function buttonToDo() {


    var buttonClick = document.getElementById('input').value;
    var temp = {};
    temp.todo = buttonClick;
    temp.check = false;
    var i = toDoList.length;
    toDoList[i] = temp;
    console.log(toDoList);

    function out() {
        var out = "";
        for (var key in toDoList) {
            out += toDoList[key].todo + "</br>";
        }
        document.getElementById("out").innerHTML = out;
    }

    out();
}
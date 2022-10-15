function buttonToDo() {

    var toDoList = [];

    var buttonClick = document.getElementById('input').value;
    var temp = {};
    temp.todo = buttonClick;
    temp.check = false;
    var i = toDoList.length;
    toDoList[i] = temp;
    console.log(toDoList);

    
}
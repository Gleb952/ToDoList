window.onload = function () {
    var toDoList = [];
    if (localStorage.getItem('todo') != undefined) {

        toDoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }

    function out() {
        var out = "";
        for (var key in toDoList) {

            if (toDoList[key].check == true) {
                out += '<input type="checkbox" checked>' + '<button id="buttonDel">Delete</button>'
            } else {
                out += '<input type="checkbox">' + '<button id="buttonDel">Delete</button>'
            }

            out += toDoList[key].todo + "</br>";

        }
        document.getElementById("out").innerHTML = out;
    }

    document.getElementById('buttonClick').onclick = function buttonToDo() {
        function getNewID(arr) {
            var max = 1;
            for (const item of arr) {
                if (item.id > max) max = item.id
            }
            return max + 1;

        }

        var buttonClick = document.getElementById('input').value;
        var temp = {};
        temp.todo = buttonClick;
        temp.check = false;
        temp.id = getNewID(toDoList);
        var i = toDoList.length;
        toDoList[i] = temp;
        console.log(toDoList);


        out();

        localStorage.setItem('todo', JSON.stringify(toDoList));
        document.getElementById('buttonDel').onclick = function() {
            for (let i = 0; i <= toDoList.length; i++) {
                /* if (toDoList[i].id == id) */
                    toDoList.splice(i, 1);
            }
            console.log(toDoList);
        }

    }


}
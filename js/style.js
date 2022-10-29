document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#out').innerHTML += `
            <div class="task box">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span> 
                <button class="delete">
                    <i class="far fa-trash-alt">Delete</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    function addToLocalStorage (){
    localStorage.setItem('addToLocalStorage', JSON.stringify(current_tasks));


    }
}
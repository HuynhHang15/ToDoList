const push = document.querySelector("#push");
const task = document.querySelector("#task");
const taskname = document.querySelector('#newtask input');

push.onclick = function(){
    if (taskname.value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        task.innerHTML += 
        `
            <div class = "task">
                <span id = "taskname">
                    ${taskname.value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll('.delete');
        for (var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('.task');
        for (var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#newtask input').value= "";
    }
}
document.querySelector('#btn').onclick = function() {
    if(document.querySelector('#input-box').value.length ==0){
        alert("Please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#input-box').value}
            </span>
            <button class="delete">
            <i class="fa-sharp fa-solid fa-xmark"></i>
            </button>
        </div>
        
        `;

        //now active cancel button

        var task = document.querySelectorAll(".delete");
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#input-box").value = "";

    }
}
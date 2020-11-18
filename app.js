// function to display current date
var today = new Date;
function getDateString(today){
    return today.toLocaleDateString('en-us',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
document.querySelector('#date').textContent = getDateString(today);

//Quote highlighter
function highlight(){    
    document.querySelector('#quote').style.cssText = 'color:#f5f5f5; transition:0.7s ease; opacity:100%';
}
 
//refrencing elements
var inputEl = document.querySelector('#input');
var buttonEl = document.querySelector('#btn');
var taskListEl = document.querySelector('.list-display');

const taskArr = [];
var task_ID = 0;
var task;

function getTask(){
    document.querySelector('#quote').style.display = 'none';
    const taskObj = {};
    task = inputEl.value;
    if(task === ''){
        task = NaN;
    }
    taskObj.name = task;
    taskObj.id = task_ID;

    taskArr.push(taskObj);
    task_ID++;
    displayTask(taskArr);
    inputEl.value = '';
}

function displayTask(taskArr){
    const task_html = taskArr.map( taskObj => viewLayer(taskObj)).join('');
    taskListEl.innerHTML = task_html;
}

function viewLayer(taskObj){
    return `<li class="task-list">
        <div class="task-div">
            <p class="display-text">${taskObj.name}</p>
        </div>
        <button onclick="deleteTask(${taskObj.id})" class="btn"><img id="deleteBtn" class="delete" src="img/remove.png"</button>
    </li>`;
}


//delete task
function deleteTask(temp_id){
    for(var i = 0; i < taskArr.length;i++){
        if(taskArr[i].id === temp_id){
            taskArr.splice(i,1);
        }
        displayTask(taskArr);
    }
}

inputEl.addEventListener('keydown ',(e) => {
    if(e.keyCode === 13){
        getTask();
    }
})
buttonEl.addEventListener('click',getTask);  

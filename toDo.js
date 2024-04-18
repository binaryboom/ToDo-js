function run(){
let todo = [];
window.alert("Welcome to To-Do App");

let req = prompt("Enter the operation you want to perform :-\n 'list'--> To Display all Tasks \n 'add'--> To Add a Task \n 'delete'--> To Delete a Task \n 'quit'--> To Exit the App \n")

while (true) {
    if (req == 'quit') {
        window.alert("Closing the To-Do App");
        break;
    }

    if (req == "list") {
        if(todo.length===0){
            window.alert("You haven't added any tasks yet (ಠ_ಠ)")
        }else{
            let tasks="";
            for (i = 0; i < todo.length; i++) {
                tasks= tasks+(`Task No: ${i+1} --> ${todo[i]}`+`\n`);
            }
            window.alert(tasks);
        }
    }
    else if (req == "add") {
        let task = prompt("Enter the task : ");
        todo.push(task);
        window.alert("Task Added Successfully !!");
    }
    else if (req == "delete") {
        let idx = prompt("Enter the Serial No of task to be deleted : ");
        todo.splice(idx-1,1);
        window.alert("Task Deleted Successfully");
    }
    else if(req=="5"){
        window.alert(todo);
    }
    else{
        window.alert("Invalid Operation ¯\_(ツ)_/¯ ");
    }

    req = prompt("Enter the operation you want to perform :-\n 'list'--> To Display all Tasks \n 'add'--> To Add a Task \n 'delete'--> To Delete a Task \n 'quit'--> To Exit the App \n")
}
}

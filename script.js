const ip = document.querySelector(".add input")
const add = document.querySelector(".add button");
const alltask = document.querySelector(".alltask");


add.addEventListener("click" ,function(){

    
    const val = ip.value;
    ip.value = "";

   ip.toggleAttribute("disable")
    const task = document.createElement("div");
    task.classList.add("task");

const editb = document.createElement("button");
editb.classList.add("edit");
editb.textContent = "edit";


const deleteb = document.createElement("button");
deleteb.classList.add("delete");
deleteb.textContent = "delete";

//create input boc

const inputb = document.createElement("input");
inputb.value = val;

task.append(inputb)
task.append(deleteb)
task.append(editb)

    alltask.append(task);

    deleteb.addEventListener("click" ,function() {
        deleteb.parentElement.remove();
        
    });

    editb.addEventListener("click", function(){
        if(editb.textContent === "edit"){
            editb.textContent = "save";
        }
        else{
            editb.textContent = "edit";
        }

        ip.toggleAttribute("disable")
    });



});






// // process or actions ( Business Logic )
// console.dir(taskInput);

import Swal from "sweetalert2";
import { doneTaskTotal, listTemplate, taskTotal } from "./selectors.js";
import { v4 as uuidv4 } from 'uuid';

export const tasks = ["To Read JS Book", "Learn React", "Learn Vue"];


export const updateTaskTotal = () => {
    // count lists and update
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
};

export const updateDoneTaskTotal = () => {
   // count lists and update
   const lists = document.querySelectorAll(".list input:checked");
   doneTaskTotal.innerText = lists.length;
};

export const createNewList = (currentTask) => {

    const list = listTemplate.content.cloneNode(true);
    list.querySelector(".list").id = "list" + uuidv4();
    list.querySelector(".list-task").innerText = currentTask;
    return list;
   
};

export const addList = (text) => {

    // mount list to listGroup
    listGroup.append(createNewList(text));
    taskInput.value = null;
    // updateTaskTotal();
};


export const deleteList = (listId) => {
    // console.log("delete");
    const currentList = document.querySelector(`#${listId}`);
    // if(window.confirm("Are you sure you want to delete?")){
    //     currentList.classList.add("animate__animated", "animate__zoomOut")
    //    currentList.addEventListener("animationend", () => {
    //     currentList.remove();
    //     // updateDoneTaskTotal();
    //     // updateTaskTotal();
    //    })
    // }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if(result.isConfirmed){
            currentList.classList.add("animate__animated", "animate__zoomOut")
               currentList.addEventListener("animationend", () => {
                currentList.remove();
            })
        }
    })
}


export const editList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const listDoneCheck = currentList.querySelector(".list-done-check");
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");

    listEditBtn.setAttribute("disabled" , true);
        listDoneCheck.setAttribute("disabled" , true);
        const currentTask = listTask.innerText;
        const newTaskInput = document.createElement("input");
        newTaskInput.className = "border border-stone-950 w-40 font-mono px-2 py-1 focus-visible:outline-none"; 
        newTaskInput.value = currentTask;
        listTask.after(newTaskInput);
        newTaskInput.focus();
        listTask.classList.add("hidden");

        newTaskInput.addEventListener("blur", () => {
            listEditBtn.removeAttribute("disabled");
            listDoneCheck.removeAttribute("disabled");
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            newTaskInput.remove();
        })


        newTaskInput.addEventListener("keyup", (event) => {
           if(event.key === "Enter"){
            listEditBtn.removeAttribute("disabled");
            listDoneCheck.removeAttribute("disabled");
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            newTaskInput.remove();
           }
        })
}


const updateList = () => {
    
}

export const donetList = (listId) => {
        const currentList = document.querySelector(`#${listId}`);
        const listDoneCheck = currentList.querySelector(".list-done-check");
        const listTask = currentList.querySelector(".list-task");
        const listEditBtn = currentList.querySelector(".list-edit-btn");

        listTask.classList.toggle("line-through");
        currentList.classList.toggle("opacity-20");
        currentList.classList.toggle("scale-95");
        currentList.classList.add("duration-300");
        if(listDoneCheck.checked){
            listEditBtn.setAttribute("disabled" , true);
        }else{
            listEditBtn.removeAttribute("disabled");
        }
        // updateDoneTaskTotal();
}
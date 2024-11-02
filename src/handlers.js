import { addList, deleteList, donetList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

// // handler
export const listGroupHandler = (event) => {
    const list = event.target.closest(".list");
   if(event.target.classList.contains("list-edit-btn")){
    // console.log("edit"); 
    editList(event.target.closest(".list").id);
   }

   if(event.target.classList.contains("list-delete-btn")){
    // console.log("delete");
    deleteList(event.target.closest(".list").id);
   }

   if(event.target.classList.contains("list-done-check")){
    // console.log("check");
    donetList(event.target.closest(".list").id);
   }
}

export const addTaskBtnHandler = () => {
    if(taskInput.value.trim()){
        addList(taskInput.value);
    }else{
        alert("You must input task.");
    }
}

export const taskInputHandler = (event) => {
    if(event.key === "Enter"){
        if(taskInput.value.trim()){
            addList(taskInput.value);
        }else{
            alert("You must input task.");
        }
    }
}


export const deleteAllHandler = () => {
   if(confirm("Are you sure you want to delete all lists?")){
    const allLists = listGroup.querySelectorAll(".list");
    allLists.forEach((list) => {
        list.remove();
    })
   }
}

export const doneAllHandler = () => {
    if(confirm("Are you sure you want to done all lists?")){
        const allLists = listGroup.querySelectorAll(".list");
        allLists.forEach((list) => {
            list.querySelector(".list-done-check").checked = true;
            donetList(list.id);
        })
       }
}

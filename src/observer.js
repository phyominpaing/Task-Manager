import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
    // watching listgroup

    const job = () => {
        updateTaskTotal();
        updateDoneTaskTotal();
    } ;  

    const observerOption = {
        childList: true,
        subtree: true,
        attributes: true,
    };

    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup, observerOption);
}

export default observer;
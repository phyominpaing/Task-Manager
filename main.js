import Todo from "./src/Todo";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

const app = new Todo();
app.init();
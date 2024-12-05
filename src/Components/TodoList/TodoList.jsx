import styles from "./TodoList.module.css";
import ListItems from "../ListItems/ListItems";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const TodoList = ({ lists }) => {
  return (
    <div className={styles.todoListContainer}>
      <SortableContext items={lists} strategy={verticalListSortingStrategy}>
        { lists.map(( list ) => {
         return <ListItems id={list.id} title={list.title} key={list.id}/>;   
        })}
      </SortableContext>
    </div>
  );
};

export default TodoList;

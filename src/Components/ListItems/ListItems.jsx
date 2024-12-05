import styles from "./ListItems.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ListItems = ({ id, title }) => {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id });

  const style = { transition, transform: transform ? CSS.Transform.toString(transform) : undefined,
    };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className={styles.listItems}
    >
      <input type="checkbox"   />
      <h3>{title}</h3>
    </div>
  );
};

export default ListItems;

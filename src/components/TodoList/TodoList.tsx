import { TodoItem } from "../TodoItem/TodoItem";
import './TodoList.css'
import type { Todo } from '../../types/Todo';

interface Props {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

export function TodoList({ todos, onDeleteTodo, onToggleTodo }: Props) {

    return (

        <div className="todo-wrapper">
            <div>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} text={todo.text} onDelete={() => onDeleteTodo(todo.id)} onToggle={() => onToggleTodo(todo.id)} checked={todo.checked} />
                })}
            </div>

        </div>

    )

}
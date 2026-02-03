import { useState } from "react"
import './TodoForm.css'

interface Props {
    addTodo: (todo: string) => void;
}

export function TodoForm({ addTodo }: Props) {

    const [input, setInput] = useState<string>('');

    const handleInput = function (e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    const handleSubmit = function (e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) {
            return;
        }
        addTodo(input);
        setInput("");
    }

    return (

        <>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" maxLength={35} value={input} onChange={handleInput} placeholder="Neue Aufgabe..."></input>
            </form>

        </>

    )

}
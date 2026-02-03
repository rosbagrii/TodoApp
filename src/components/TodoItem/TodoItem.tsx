import './TodoItem.css'
import remove from '../../assets/remove.png'

interface Props {
    text: string;
    onDelete: () => void;
    checked: boolean;
    onToggle: () => void;
}

export function TodoItem({ text, onDelete, checked, onToggle }: Props) {

    return (
        <div className={`todo ${checked ? 'done' : ''}`} onClick={onToggle}>
            <div className='checkbox-wrapper'><input checked={checked} type='checkbox'></input></div>
            <div className='text-wrapper'><p className={checked ? 'done' : ''}>{text}</p></div>
            <div className='delete-wrapper'><div onClick={onDelete} className='delete-img-box'><img src={remove}></img></div></div>
        </div>
    )
}
import './Header.css'
import logo from '../../assets/logo.png'

interface HeaderProps {
    text: string;
}

export function Header({ text }: HeaderProps) {
    return (

        <div className="header-wrapper">
            <div className="img-holder"><img src={logo}></img></div>
            <h1 className="header">{text}</h1>
        </div>

    )
}
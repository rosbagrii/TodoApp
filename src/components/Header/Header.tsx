import './Header.css'

interface HeaderProps {
    text: string;
}

export function Header({ text }: HeaderProps) {
    return (

        <div className="header-wrapper">
            <div className="img-holder"><img src="../src/assets/logo.png"></img></div>
            <h1 className="header">{text}</h1>
        </div>

    )
}
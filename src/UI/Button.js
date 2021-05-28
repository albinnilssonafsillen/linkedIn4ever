import './Button.css'

const Button = props => {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className="btn">{props.text}</button>
    );
}

export default Button;
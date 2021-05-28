import './Input.css'

const Input = props => {
    return (
        <input className="txtInput" onChange={props.onChange} placeholder={props.placeHolder} type={props.type}></input>
    );
}

export default Input

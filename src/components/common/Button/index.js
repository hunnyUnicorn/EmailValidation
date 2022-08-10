import './index.css'

const Button = (props) => {
  const {name, disabled} = props;
  return (
    <input className={ 'button ' + (!disabled ? 'disabled' : '') } type='button'
      value={name}
    />
  );
}

export default Button;
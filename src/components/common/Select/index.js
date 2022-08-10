import './index.css'

const Select = (props) => {
  return (
    <select className='select'>
      {props.children}
    </select>
  );
}

export default Select;
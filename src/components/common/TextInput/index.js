import { useState } from 'react';
import './index.css'

const TextInput = (props) => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const {caption, warning, info, type, setValidated, setIsTyping} = props;
  const [value, setValue] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  
  const onChanged = (e) => {
    const newVal = e.target.value;
    setIsTyping(true);
    setValue(newVal);
    setValidated(false);
    if ( newVal === '' ) { return; }
    switch(type) {
      case 'email':
        if ( !newVal.match(emailRegex) ) { return; }
        break;
      case 'string':
        break;
      case 'password':
        if ( newVal.length < 8 ) { return; }
    }
    setValidated(true);
  }

  const onFocusIn = () => {
    setWarningMessage('');
  }

  const onFocusOut = () => {
    setValidated(false);
    if ( value === '' ) {
      setWarningMessage('This field is required.');
      return;
    }
    switch(type) {
      case 'email':
        if ( !value.match(emailRegex) ) {
          setWarningMessage(warning);
          return;
        }
        break;
      case 'string':
        break;
      case 'password':
        if ( value.length < 8 ) {
          setWarningMessage(warning);
          return;
        }
    }
    setWarningMessage('');
    setValidated(true);
  }
  return (
    <div>
      <div className='input-group'>
        <input className={'input-control ' + ( warningMessage !== '' ? 'warning' : '' ) }
          type={type}
          placeholder={caption}
          value={value}
          onFocus={onFocusIn}
          onBlur={onFocusOut}
          onChange={onChanged}/>
        <label className={'input-label ' + ( warningMessage !== '' ? 'warning' : '' ) }>{caption}</label>
      </div>
      { warningMessage !== '' ? <code className='warning'>{warningMessage}</code> : '' }
      { info !== '' ? <code className='info'>{info}</code> : '' }
    </div>
  );
}

export default TextInput;
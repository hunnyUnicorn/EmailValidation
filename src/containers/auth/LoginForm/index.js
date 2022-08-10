import { useState, useCallback } from 'react';
import TextInput from '../../../components/common/TextInput'
import Select from '../../../components/common/Select'
import Button from '../../../components/common/Button'
import CircularProgress from '../../../components/common/CircularProgress'
import './index.css'

const LoginForm = () => {
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isNameValidated, setIsNameValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    }
  };

  const debouncedHandler = useCallback(debounce(setIsTyping, 1000), []);
  return (
    <div className='login-form'>
      <h2>Let's set up your account</h2>
      <div>
        { isTyping ? <CircularProgress/> : '' }
        <p>Already have an account? <a>Sign in</a></p>
      </div>
      <TextInput caption='Your name' type='string'
        setValidated={setIsNameValidated}
        setIsTyping={ () => { setIsTyping(true); debouncedHandler(false) } }/>
      <TextInput caption='Email Address' warning='Please enter a valid emial address' type='email'
       setValidated={setIsEmailValidated}
       setIsTyping={ () => { setIsTyping(true); debouncedHandler(false) } }/>
      <Select>
        <option>I would describe my user type as</option>
        <option>2</option>
        <option>3</option>
      </Select>
      <TextInput caption='Password' warning='Password must be longer than 8.' info='Minimum 8 characters' type='password'
       setValidated={setIsPasswordValidated}
       setIsTyping={ () => { setIsTyping(true); debouncedHandler(false) } }/>
      <Button name='Next' disabled={ isEmailValidated && isNameValidated && isPasswordValidated }/>
      <code className='login-info'>By clicking the 'Next' button, you agree to creating a free account, and to <a>Terms of Services</a> and <a>Privacy Policy</a></code>
    </div>
  );
}

export default LoginForm;
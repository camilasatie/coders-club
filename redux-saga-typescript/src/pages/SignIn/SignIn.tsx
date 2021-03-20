import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import scss from './SignIn.module.scss';

import iconUser from '../../assets/login.svg';

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, error, token } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log('LOADING:', loadingSignInRequest);
  console.log('SIGN IN:', isSignedIn);
  console.log('TOKEN:', token);
  console.log('ERROR:', error);

  return (
    <div className={scss.container}>
      <img src={iconUser} className={scss.logo} alt="User Icon" />
      <input className={scss.input} type="text" defaultValue="test@email.com" />
      <input className={scss.input} type="password" defaultValue="123456" />
      <button 
        className={scss.btn} 
        type="button" 
        onClick={() => dispatch(signInRequest({ 
          email: 'test@email.com', 
          password: '123456' 
        }))}
      >
        {loadingSignInRequest ? 'Carregando...' : 'Entrar'}
      </button>
    </div>
  );
}

export default SignIn;

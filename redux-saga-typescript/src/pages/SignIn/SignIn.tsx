import React from 'react';

import scss from './SignIn.module.scss';

import iconUser from '../../assets/login.svg';

const SignIn: React.FC = () => {
  return (
    <div className={scss.container}>
      <img src={iconUser} className={scss.logo} alt="User Icon" />
      <input className={scss.input} type="text" defaultValue="test@email.com" />
      <input className={scss.input} type="password" defaultValue="123456" />
      <button className={scss.btn} type="button" onClick={() => {}}>Entrar</button>
    </div>
  );
}

export default SignIn;

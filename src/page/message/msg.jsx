import React from 'react'
import { Chat } from './Chat';
import Side from './Side';
import './message.css';

export const Msg = () => {
  return (
    <div className='home'>
    <div className='container'>
      <Side/>
      <Chat/>
      

      
    </div>
    </div>
  )
}
export default Msg;
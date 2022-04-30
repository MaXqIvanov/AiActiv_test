

import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import s from '../scss/home.module.scss'
import { addMessage, addNewMessages, sortMessage } from '../redux/messageSlice'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  
    const dispatch:any = useDispatch()
    const nav:any = useNavigate()
    const MessageValue = useSelector((state:any)=> state.messages)
    const idLastMessage = useSelector((state:any)=> state.messages.idLastMessage)    
    const [sort, setSort] = useState(false);
   const getNewMessage =  ()=>{
    if(idLastMessage !== 0){
      axios({
        method: "post",
        url: "http://f0665380.xsph.ru/",
        data: {
          'actionName':'MessagesLoad',
          'messageId': idLastMessage,
        },
        headers: { "Content-Type": "multipart/form-data" },
      }).then((data:any)=>{      
        dispatch(addNewMessages(data))
        setFitch(!fitc)
  })
    }else{
      setFitch(!fitc)
    }
   }
   const [fitc, setFitch] = useState(true)
   useEffect(() => {
     setTimeout(()=> getNewMessage(), 5000)
   }, [fitc])
   
   const sortFunc = (state:any)=>{
    setSort(!sort)
      dispatch(sortMessage(!sort))
     
   }
  
 

   
  return (
    <> <div  className={s.mainHome}>
            
            <div className={s.sorting}>  <Form.Check
            className={s.Check}
            onChange={(event:any)=>
              sortFunc(event.target.value)
            }
    checked={sort}
    type="switch"
    label= {sort? "Сообщение сверху" : "Сообщение снизу"}
    id="disabled-custom-switch"
  /> </div>
            <div className={s.message1}>
            {MessageValue ?
            MessageValue.message.map((elem:any, index:any)=> 
                    <Message key={index} sort={sort} elem={elem} date = {elem.date.split(' ')[1].split(':')}/>
            )
            : <></>}
           </div>
          
      </div>
    </>
  )
}


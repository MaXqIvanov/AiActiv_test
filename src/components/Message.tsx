
import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import s from '../scss/message.module.scss'
import ReactPlayer from 'react-player'
import image from '../images/not_image.svg'
import imageStarsSVG from '../images/not_addStars.svg'
import imageStarsSVGadded from '../images/starts.svg'
export const Message = (props:any) => {
    const message:any = useSelector((state:any)=> state.messages)
    const [imageStars, setImagesStars] = useState(true)
     const video:any = props.elem?.attachments[0]?.url.indexOf('mp4')
    useEffect(() => {
      const elem = localStorage.getItem(props.elem.id)
      if(elem !== null){
        setImagesStars(false)
      }else {
        setImagesStars(true)
      }
    }, [props.sort])
    
      
      const changeImage = ()=>{
        setImagesStars(!imageStars)      
        localStorage.setItem(props.elem.id, JSON.stringify(props.elem)) 
        if(imageStars == false){
          localStorage.removeItem(props.elem.id)
        }
      }
  return (
       <div className={s.main}>
                  <div className={s.newMessage}></div>
                <div className={s.elems}>
                  <div title='отправить сообщение' className={s.elem3}></div>
                  <div title='скрыть' className={s.elem2}></div>
                  <div title='настройки' className={s.elem1}></div>
                </div>
                <div onClick={()=>changeImage()} style={{backgroundImage: imageStars ? `url(${imageStarsSVG})`: `url(${imageStarsSVGadded})`}} title="Поставить оценку" className={s.stars}></div>
                <div className={s.icon}>
                    <div className={s.icon_img}></div>
                    <div className={s.time}>{props.date[0]+":"+props.date[1]}</div>
                </div>
                <div className={s.content}>
                  <div className={s.aurhor}>{props.elem.author}</div>
                  <div className={s.channel}>{props.elem.channel}</div>
                  <div className={s.contentMessage}>{props.elem.content}</div>
                  <div className={s.button}>далее</div>
                 
                  {video == -1 ?
                  <div style={{backgroundImage: `url(${props.elem?.attachments[0]?.url})`, height:"100px", width:"200px", backgroundSize:"contain"}} className={s.image}></div>
                 :<></>}
                 {(video !== -1 && video !== undefined) ? <ReactPlayer
                      height='100px'
                      width='200px'
                      style={{position:"absolute", bottom:"0px", backgroundSize:"contain"}} controls url={props.elem?.attachments[0]?.url}/>
                  
                  :<></>
                } 
                  {video == undefined ? <div  style={{backgroundImage:`url(${image})`, height:"100px", width:"200px", backgroundRepeat:"no-repeat", backgroundSize:"contain"}}> </div> :<></>}
                </div>
                
    </div>




  )
}

import { Message } from './../components/Message';
import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
    name: "messages",
    initialState: {
        message: [] as any[],
        idLastMessage: 0 as number,
        
        sortMessage: false as boolean
    },
    reducers: {
      addMessage(state, action){
       
        state.message = action.payload
        state.idLastMessage = action.payload[action.payload.length - 1].id
      },
    
      addNewMessages(state, action){
        if(action.payload.data == "no message"){

        }else{        
          state.idLastMessage = action.payload.data.Messages[0].id
          if(state.sortMessage == false){
          action.payload.data.Messages.forEach((elem:any, index:any) => {
            state.message = [...state.message, elem]
          });
        }else {
          action.payload.data.Messages.forEach((elem:any, index:any) => {
            // state.message = [elem, ...state.message]
              state.message.unshift(elem)
          });
        }
        }
      },
      changeIdElem(state,action){
        state.idLastMessage = action.payload.data.Messages[action.payload.data.Messages.length - 1].id
      },
      sortMessage(state,action){
        state.sortMessage = action.payload
        // if(action.payload == false){
        //     state.message.reverse()
        // }else{
        //   state.message.reverse()
          
        // }
      }

      
    }
})

export default prodSlice.reducer
export const {
    addMessage,
    addNewMessages,
    changeIdElem,
    sortMessage

} = prodSlice.actions
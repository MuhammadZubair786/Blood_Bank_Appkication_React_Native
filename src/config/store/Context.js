import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"


const initialState = {
  User: [],
  Donation:[],
  count: 5
}


export const GlobalContext = createContext(initialState)


// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function addCart(data) {
    // console.log("GLOBAL DATA :", data)
    dispatch({
      type: "ADD_USER",
      payload: data
    })
  }

  function Donation_User (data ){
    // console.log(data)
    dispatch({
      type:'Donation_User',
      payload:data
    })
  }

  // function deleteCart(id) {
  //   console.log("Delete Card :",id)
  //   dispatch({
  //     type: "DELETE_Card",
  //     payload: id
  //   })
  // }

  return (
    <GlobalContext.Provider
      value={{
        User: state.User,
        count: state.count,
        //   Cards : state.Cards,
        addCart,
        Donation_User,
        //   deleteCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}





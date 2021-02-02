export default (state, action) => {
  // console.log("REDUCER Type :",action.type,"Data :",action.payload)
    switch (action.type) {
      case "ADD_USER":
        return {
          
          User : [ action.payload]
       
        }
      case "Donation_User":
        // console.log("ACTion :",action.payload)
          return {
           
            Donation : [ action.payload]
         
          }
    //   case "DELETE_Card":
    //     return {
    //       ...state,
    //       Cards: state. Cards.filter(
    //        Card => Card.id !== action.payload
    //       )
    //     }
      default:
        return state
    }
  }
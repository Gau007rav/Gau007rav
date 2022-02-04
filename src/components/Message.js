import React, { Component } from "react";

class Message extends Component {
   constructor() {
      super()
      this.state = { Message: "Welcome Visitor" }
   }




   changeMessage() {
      
      this.setState({ Message: "thanks for subscribing" })
      
   }

   render() {
      return (
         <div>

            <h1>
               {this.state.Message}<br></br>
               <button onClick={() => this.changeMessage()}>Subscribe
               </button>
               
            </h1>
         </div>
      )
   }
}
export default Message
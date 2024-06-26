import React, { Component } from 'react'
import axios from 'axios'; 
class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
         title:'',
         body:'',
      }
    }
    

    changehandler = e =>{
     this.setState({[e.target.name] :e.target.value})
    } 

    submithandler =e =>{
        e.preventDefault()
        // preventdefault used for avoid page refreshing
        console.log(this.state)
    //   post request post data send two arguments
    axios.post('https://jsonplaceholder.typicode.com/posts' ,this.state)
      .then(response =>{
        console.log(response)
      })
   .catch(error =>{
    console.log(error)
   })
    }
  render() {
    const {userid,title,body}=this.state
    // structured after that assign the value
    return (
     
     <div>
        <form onSubmit={this.submithandler}>
     <div>
        <input type ="text" name="userid" value={userid} onChange={this.changehandler} /> 
      </div>
        <div>
        <input type ="text" name="title" value={title} onChange={this.changehandler} /> 
      </div>
        <div>
        <input type ="text" name="body" value={body} onChange={this.changehandler} /> 
      </div>
      <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default PostForm

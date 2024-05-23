import React, { Component } from 'react'
import axios from 'axios'
 class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }
    

    componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})    
            // for response the data fetch update data ten render
        })
        .catch(error =>{
            console.log(error)
            this.setState({errormsg:'error retriving data'})
        })
    }
  render() {
    const { posts ,errormsg}=this.state    
    // structure the state property then go to return
    return (
      <div>
      <h1> list of post</h1>
       {
        // map methd use for fetch data from ApI
        posts.length ? 
        posts.map(post => <div key={post.id}>{post.title}</div>): null
       }
       {/* {
        errormsg ?<div>{errormsg}</div>:null
       } */}
      </div>
    )
  }
}

export default Postlist

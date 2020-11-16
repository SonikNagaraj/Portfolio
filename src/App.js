import React, { Component } from 'react'
import Projects from './Projects'
import sonik from './images/Sonik.jpg'
class App extends Component {

  state = { displayBio: false };

  readMore = () => {
    this.setState({ displayBio: true });
  }

  showLess = () => {
    this.setState({ displayBio: false });
  }

  render() {

    return (
      <div>
         <h1>Hello!</h1>
         <img src={sonik} alt='sonik-pic' className='sonikimg' />
         <p>My name is Sonik and I am B.Tech Information Technology graduate</p>
         <p>I love web development!</p>
         {
           this.state.displayBio ? (
            <div>
                <p>Besides coding I love acting and dancing</p>
                <p>I live in Coimbatore!</p>
                <button onClick ={this.showLess}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick ={this.readMore}>Read more</button>
            </div>
          )
         }  
         <hr />
         <Projects />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      total: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
        }));
        
        this.setState((prevState) => ({
          total: prevState.likes + prevState.dislikes,
          }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
        }));

        this.setState((prevState) => ({
          total: prevState.likes + prevState.dislikes,
          }));
      }

    };

  }
  render() {
    return (
     <div className='content-rating'  >
      <p>Check the functionality of likes and dislikes by
        clicking the buttons. If you will click likes and dislikes
        buttons also show the total clicks.</p>
      <div className='rating-buttons'>
      <button className='like-button' onClick={this.state.handleLike}>
        Like ({this.state.likes})
      </button>
        <button className='dislike-button' onClick={this.state.handleDislike}>
        Dislike ({this.state.dislikes})
      </button>
      <h1>
        Total {this.state.total}
      </h1>
      </div>
     </div>
    );
  }
}

export default ContentRating;

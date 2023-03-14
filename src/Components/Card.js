// import styles
import '../styles/Card.scss';

// import useState hook 
import { useState } from 'react';

// function to retun Card component
const Card = () => {
    // state of already created comments
    const [comments,setComments] = useState([])
    // state of new comment
    const [newComment,setNewComment] = useState('')

    // reverse comments array
    const revComments = comments.slice(0).reverse().map(el => {
        return el
    })
    
    // function to handleSubmit
    const handleSubmit = (e) =>{
        // prevent default to not change url
        e.preventDefault()
        // check if newComent not empty
        if(newComment.trim() !== ''){
            // if not epmty, pass this created comment to comments array
            setComments([...comments,newComment])
            // empty state of newComment
            setNewComment('')
        }
    }
    // function to handle input change
    const handleChange = (e) =>{
        // update newComment state on each letter
        setNewComment(e.target.value)
    }

    // return final Card component
    return(
    <div className="card">
        {/* top part of card */}
        <div className='top'>
            <div className='image'></div>
            <div className='top-text'>
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit</p>
            </div>
        </div>
        {/* bottom part of card */}
        <div className='bottom'>
            {/* form to add new comment */}
            <form onSubmit={handleSubmit}>
                {/* input field */}
                <input type='text' value={newComment} onChange={handleChange} placeholder='Placeholder...'></input>
                {/* submit button */}
                <button type='submit'>submit</button>
            </form>
            {/* comments section */}
            <div className='comments'>
                {/* map trough array of new created comments */}
                {revComments.map((comment, idx)=>(
                    // return Comment component for each comment
                    <Comment key={idx} header={'Lorem Ipsum'} text={comment}/>
                ))}
                {/* hardcoded comments */}
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
                <Comment header={'Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}/>
            </div>
        </div>
    </div>
    )
}

export default Card

// Comment component, pass props to set content
const Comment = (props) =>{
    return(
    <div className='comment'>
        <div className='avatar'></div>
        <div className='comment-text'>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
        </div>
    </div>
    )
}
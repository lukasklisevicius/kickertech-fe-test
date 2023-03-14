import '../styles/Card.scss';
import { useState } from 'react';

const Card = () => {
    const [comments,setComments] = useState([])
    const [newComment,setNewComment] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(newComment.trim() !== ''){
            setComments([...comments,newComment])
            setNewComment('')
        }
    }
    const handleChange = (e) =>{
        setNewComment(e.target.value)
    }

    return(
    <div className="card">
        <div className='top'>
            <div className='image'></div>
            <div className='top-text'>
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit</p>
            </div>
        </div>
        <div className='bottom'>
            <form onSubmit={handleSubmit}>
                <input type='text' value={newComment} onChange={handleChange} placeholder='Placeholder...'></input>
                <button type='submit'>submit</button>
            </form>
            <div className='comments'>
                {comments.map((comment, idx)=>(
                    <Comment key={idx} header={'Lorem Ipsum'} text={comment}/>
                ))}
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
import '../styles/Card.scss';

const Card = () => {
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
            <Form />
            <div className='comments'>
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

const Form = () =>{
    return(
    <form>
        <input type='text' placeholder='Placeholder...'></input>
        <button type='submit'>submit</button>
    </form>
    )
}

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
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
            <form>
                <input type='text'></input>
                <button type='submit'>submit</button>
            </form>
            <div className='comment'>

            </div>
        </div>

    </div>
    )
}

export default Card
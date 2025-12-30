import myImage from './assets/WhatsApp Image 2025-04-06 at 23.35.21_31ed6c97.jpg'
function Card(){
    return(
        <div className="card">
            <img src={myImage}alt="me" />
            <h2 className='card-title'>The Imposter God</h2>
            <p className='card-p'>Right now broke but the dark knight will rise.</p>
        </div>
    );
}
export default Card;

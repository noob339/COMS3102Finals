import cat from '../assets/images/catPic.jpg';
import sparrow from '../assets/images/sparrowPic.jpg';

function Home(){
    return(
        <>
            <h1 className="heading">Welcome to Furry Friends</h1>
            <ul className="imageBox">
                <li>
                    <a href="/facts/143" className="animalLink"><img className="animalImage" src={sparrow} alt="Sparrow"/></a>
                    <br /><a href="/facts/143" className="animalLink">sparrow</a>
                </li>
                <li>
                    <a href="/facts/486" className="animalLink"><img className="animalImage" src={cat} alt="Cat."/></a>
                    <br /><a href="/facts/486" className="animalLink">cat</a>
                </li>
            </ul>
        </>
    );
}

export default Home;
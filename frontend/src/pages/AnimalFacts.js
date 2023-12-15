import { useParams } from "react-router-dom";
import { useContext } from 'react';
import Context from '../components/Context.js';

function AnimalFacts(){
    const params = useParams();
    const userData = useContext(Context);
    let animalData = null;

    switch (params.id) {
        case "143":
            animalData = {
                name: "sparrow",
                description: "A sparrow is a small, passerine bird belonging to the family Passeridae. Sparrows are known for their adaptability, social nature, and widespread distribution across various habitats.",
                image: require('../assets/images/sparrowPic.jpg')
            }
            break
        case "486":
            animalData = {
                name: "cat",
                description: "A cat is a small domesticated carnivorous mammal that is often kept as a pet for companionship. Cats belong to the family Felidae and are known for their agility, sharp retractable claws, keen senses, and distinctive vocalizations. ",
                image: require('../assets/images/catPic.jpg')
            }
            break
        
        default:
            break
    }


    return(
        <>
            <h1>Animal Facts</h1>
            <h2>{animalData.name}</h2>
            {
                animalData != null ?
                <>
                    <img src={animalData.image} alt={animalData.name} width="400" />
                    <p>{animalData.description}</p>
                </>
                : ''
            }
        </>
    );
}

export default AnimalFacts;
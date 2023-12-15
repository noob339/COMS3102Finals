import { useState, useEffect } from "react";
import axios from "axios";

function Contact(){

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectData, setSelectData] = useState([]);
    const [selectValue, setSelectValue] = useState("");

    useEffect( () => {
        let processing = true;

        fetchData(processing);

        return() => {
            processing = false;
        }
    }, []);


    const fetchData = async(processing) =>{
        await axios.get('http://localhost:4000/api')
        .then( res => {
            if(processing === true){
                setSelectData(res.data);
            }
        })
        .catch(err => console.log(err));
    }

    const URL = "http://localhost:4000/contact";

    const postData = async() => {
        const pData = {
            email: email,
            website: selectValue,
            message: message
        }

        await axios.post(URL, pData, {proxy: false})
        .then(res => {
            setErrorMsg(<p className="success">{res.data}</p>);

        })
        .catch(error => console.log(error))
    }
    

    const SelectDropdown = () => {
        return(
            <select value={selectValue} onChange={(event) => setSelectValue(event.target.value)}>
                <option value="" key="none"> -- Select One -- </option>
                {
                    selectData?.map( (item) => (
                        <option value={item.website} key={item.website}>{item.website}</option>
                    ))
                }
            </select>
        );
    }


    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log(email + ', ' + selectValue + ', ' + message);

        if(!message){
            setErrorMsg(<p className="required">Please type a message</p>)
        } else {
            setErrorMsg("");
            postData();
        }
    }

    return(
        <>
            <h2 className="heading">Contact Us</h2>
            <form className="contactForm">
                <label>Email</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label>How did you hear about us?</label>
               <SelectDropdown/>

                <label>Message</label>
                <textarea 
                    id="message" 
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />

                {errorMsg}

                <button type="submit" onClick={handleSubmit}>Submit</button>

            </form>

        </>
    );
}

export default Contact;
import React, { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import axios from 'axios'
import './MailList.css';

const MailList = () => {
    const [disabled, setDisabled] = useState(true);

    const disableButton = () => {
        setDisabled(false);
    }

    const saveToMailList = () => {
        axios.post('http://localhost:5000/post', {mail: "lol@mailcom"})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // useEffect(() => {
    //     function disableBtn() {
    //         document.querySelector('mail').value.length == 0 ? setDisabled(true) : setDisabled(false);
    //     }
    //     disableBtn()
    // }, []);

    return (
        <div className="mailList">
            <p>Jag, Albin, motsätter mig detta inlägg från LinkedIn.</p>
            <ul>
                <p className="douchQuote">"Som <strong>många</strong> andra som jag förmånen att ha städhjälp"</p>
                <p className="douchQuote">"Jag gjorde hennes dag och jag gav henne hopp, bara genom att stanna upp 5 minuter och <strong>se henne</strong>"</p>
            </ul>
            <p>Personen blev såklart unisont hyllad på LinkedIn. Inga kritiska frågor om förslagsvis <strong>beroendeställning</strong> osv.</p>
            <p>För att säkerställa att jag inte blir en liknande person blir jag påmind en gång i halvåret om detta. Om du, käre besökare önskar bli påmind, Vänligen ange mail nedan:</p>
            <div className="sendMail">
                <Input id="mail" onChange={() => disableButton()} type="text" placeHolder="LinkedIn@spray.se" />
                <Button disabled={disabled} text="Påminn" onClick={() => saveToMailList()} />
            </div>
            <div className="count">
                <p>Personer i mailutskick:'props.count'</p>
            </div>
        </div>
    );
}

export default MailList;
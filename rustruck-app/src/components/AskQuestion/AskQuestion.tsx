import "./AskQuestion.css"
import bigTruck from "../../assets/AskQuestion/big-truck-half.png"

export default function AskQuestion(){
    return(
        <div className="ask-question-container">
            <div className="ask-question-datas">
                <h1 className="ask-question-h1">ANY QUESTIONS LEFT?</h1>
                <p className="ask-question-desc1">Leave your contact details and we will call you back shortly.</p>
                <form className="ask-question-form">
                    <label className="entity-label">
                        <h6 className="form-h6">Name</h6>
                        <input type="text" className="entity-input" placeholder="Example: Tunay Huseynli" />
                    </label>
                    <label className="entity-label">
                        <h6 className="form-h6">Phone</h6>
                        <input type="text" className="entity-input"  placeholder="+994 ** *** ** **"/>
                    </label>
                    <button className="send-catalog-button" type="submit">Send Catalog</button>
                </form>
                <p className="ask-question-desc2">By clicking the send button, you agree to the processing of your personal data by Rustrak LLC</p>
            </div>
            <img src={bigTruck} alt="" className="big-truck" />
        </div>
    )
}
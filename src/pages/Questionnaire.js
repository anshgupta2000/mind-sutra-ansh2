import React, { useState } from 'react';
import './Questionnaire.css';

function Questionnaire({navigateToChatPage, navigateToMainPage}) {
    const [responses, setResponses] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <h1>Questionnaire</h1>
            
            <div className="question">
                <p>How often do you feel overwhelmed by stress?</p>
                <label>
                    <input type="radio" name="q1" value="daily" onChange={handleChange} /> Daily
                </label>
                <label>
                    <input type="radio" name="q1" value="weekly" onChange={handleChange} /> Weekly
                </label>
                <label>
                    <input type="radio" name="q1" value="monthly" onChange={handleChange} /> Monthly
                </label>
                <label>
                    <input type="radio" name="q1" value="rarely" onChange={handleChange} /> Rarely
                </label>
                <label>
                    <input type="radio" name="q1" value="never" onChange={handleChange} /> Never
                </label>
            </div>
            
            <div className="question">
                <p>How would you rate your overall mood on a scale of 1 to 10 (1 being extremely low, 10 being extremely high)?</p>
                <input type="number" min="1" max="10" name="q2" onChange={handleChange} />
            </div>
            
            <div className="question">
                <p>Have you experienced feelings of sadness or hopelessness recently?</p>
                <label>
                    <input type="radio" name="q3" value="yes" onChange={handleChange} /> Yes
                </label>
                <label>
                    <input type="radio" name="q3" value="no" onChange={handleChange} /> No
                </label>
            </div>
            
            <div className="question">
                <p>What are your interests?</p>
                <input type="text" name="q4" onChange={handleChange} />
            </div>

            <div className="question">
                <p>Please describe your typical daily routine or schedule.</p>
                <textarea name="q5" onChange={handleChange}></textarea>
            </div>

            <div className="question">
                <p>Do you engage in regular physical exercise or activity to manage stress and improve your mood?</p>
                <label>
                    <input type="radio" name="q6" value="yes" onChange={handleChange} /> Yes
                </label>
                <label>
                    <input type="radio" name="q6" value="no" onChange={handleChange} /> No
                </label>
            </div>

            <div className="question">
                <p>Are you currently taking any medications or supplements for mental health or mood management?</p>
                <label>
                    <input type="radio" name="q7" value="yes" onChange={handleChange} /> Yes
                </label>
                <label>
                    <input type="radio" name="q7" value="no" onChange={handleChange} /> No
                </label>
            </div>

            <div className="question">
                <p>How satisfied are you with your sleep quality and duration?</p>
                <select name="q8" onChange={handleChange}>
                    <option value="" disabled selected>Select</option>
                    <option value="very-satisfied">Very Satisfied</option>
                    <option value="satisfied">Satisfied</option>
                    <option value="neutral">Neutral</option>
                    <option value="dissatisfied">Dissatisfied</option>
                    <option value="very-dissatisfied">Very Dissatisfied</option>
                </select>
            </div>

            <div className="question">
                <p>Do you have a supportive network of friends and family you can confide in or seek help from when you're feeling down or stressed?</p>
                <label>
                    <input type="radio" name="q9" value="yes" onChange={handleChange} /> Yes
                </label>
                <label>
                    <input type="radio" name="q9" value="no" onChange={handleChange} /> No
                </label>
            </div>

            <div className="question">
                <p>Have you ever participated in therapy or counseling for mental health support?</p>
                <label>
                    <input type="radio" name="q10" value="yes" onChange={handleChange} /> Yes
                </label>
                <label>
                    <input type="radio" name="q10" value="no" onChange={handleChange} /> No
                </label>
            </div>

            <div className="question">
                <p>How often do you engage in relaxation techniques or mindfulness exercises to manage stress and improve your mental well-being?</p>
                <label>
                    <input type="radio" name="q11" value="daily" onChange={handleChange} /> Daily
                </label>
                <label>
                    <input type="radio" name="q11" value="weekly" onChange={handleChange} /> Weekly
                </label>
                <label>
                    <input type="radio" name="q11" value="monthly" onChange={handleChange} /> Monthly
                </label>
                <label>
                    <input type="radio" name="q11" value="rarely" onChange={handleChange} /> Rarely
                </label>
                <label>
                    <input type="radio" name="q11" value="never" onChange={handleChange} /> Never
                </label>
            </div>
            <button className="button" onClick={navigateToMainPage}>Mainpage</button>
            <button className="button" onClick={navigateToChatPage}>Submit</button>
        </div>
    );
}

export default Questionnaire;

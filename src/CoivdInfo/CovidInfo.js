import React from "react";
import './CovidInfo.css';

import HeaderArea from "../HeaderArea/HeaderArea";

const CoivdInfo = () => {
    return (
        <>
            <HeaderArea/>
            <div className="covidpage">
                <div className="covidheader"><h1>Covid Information</h1></div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XSe7OgKqpP5EAlheMPrILNC4Xwnt_8O_QQ&s"></img>
            </div>

            <div className="covidpara">
                <div className="covidinfo">
                    <div className="infopara1"><h2>Overview</h2>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

                        Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.

                        The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.

                        The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.</div>
                    <div className="infopara2"><h2>Prevention</h2>To prevent infection and to slow transmission of COVID-19, do the following:
                        <ul>
                            <li>Get vaccinated when a vaccine is available to you.</li>
                            <li>Stay at least 1 metre apart from others, even if they don’t appear to be sick.</li>
                            <li>Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</li>
                            <li>Choose open, well-ventilated spaces over closed ones. Open a window if indoors.</li>
                            <li>Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</li>
                            <li>Cover your mouth and nose when coughing or sneezing.</li>
                            <li>If you feel unwell, stay home and self-isolate until you recover.</li>
                        </ul>
                    </div>
                    <div className="infopara3"><h2>Symptoms</h2>
                        COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.

                        <p><b>Most common symptoms:</b></p>
                        <ul>
                            <li>fever</li>
                            <li>cough</li>
                            <li>tiredness</li>
                            <li>loss of taste or smell.</li>
                        </ul>
                        <p><b>Less common symptoms:</b></p>

                        <ul>
                            <li>sore throat</li>
                            <li>headache</li>
                            <li>aches and pains</li>
                            <li>diarrhoea</li>
                            <li>a rash on skin, or discolouration of fingers or toes</li>
                            <li>red or irritated eyes.</li>
                        </ul>

                        Serious symptoms:
                        <ul>
                            <li>difficulty breathing or shortness of breath</li>
                            <li>loss of speech or mobility, or confusion</li>
                            <li>chest pain.</li>
                        </ul>
                        <p>Seek immediate medical attention if you have serious symptoms.  Always call before visiting your doctor or health facility.

                        People with mild symptoms who are otherwise healthy should manage their symptoms at home.

                        On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
                         </div>
                </div>

            </div>


        </>
    );
}

export default CoivdInfo;
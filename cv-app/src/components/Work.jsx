import { useState } from 'react';
import { WorkForm } from './MyForm';
import '../styles/style.css';

export default function Work() {
    const [formData, setFormData] = useState({
        'Company Name': 'Foster Electric Ltd',
        'Job Title': 'Purchasing',
        'Date of Employment': 'From 2014-2016',
        'Job Description': `Main job description include procuring materials needed for production which takes place at Mukakuning.Other task included performing stock check and getting quality assurance form needed for stock quality checking to match standard.`
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = (fieldName, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value,
        }));
    };

    const handleEditClick = () => {
        setIsDisabled(false);
    };

    const handleSubmit = (fieldName) => {
        // Submit the edited data for the specific field
        console.log(`Submit Data for ${fieldName}:`, formData[fieldName]);

        setIsDisabled(true);
    };

    const fieldNames = ['Company Name', 'Job Title', 'Date of Employment', 'Job Description'];

    return (
        <div className="work-container">
            <h2>Working Experience</h2>
            <section className="work">
                <WorkForm
                    formData={formData}
                    isDisabled={isDisabled}
                    handleInputChange={handleInputChange}
                    handleEditClick={handleEditClick}
                    handleSubmit={handleSubmit}
                    fieldNames={fieldNames}
                />
            </section>
        </div>
    )
}
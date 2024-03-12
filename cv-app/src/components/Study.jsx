import { useState } from 'react';
import { MyForm } from './MyForm';
import '../styles/style.css';

export default function Study() {
    const [formData, setFormData] = useState({
        Study: 'University of Tarumanagara',
        'Field of Study': 'Industrial Engineering',
        'Date of Study': '17 August 2010',
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

    const fieldNames = ['Study', 'Field of Study', 'Date of Study'];

    return (
        <div className="study-container">
            <h2>Study Section</h2>
            <section className="study">
                <MyForm
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
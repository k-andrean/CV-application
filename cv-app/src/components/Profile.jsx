import { useState } from 'react';
import { MyForm } from './MyForm';
import '../styles/style.css';

export default function Profile() {
    const [formData, setFormData] = useState({
        Name: 'Kelvin Andrean',
        Number: '082231123113',
        Email: 'Bagance@gmail.com',
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

    const fieldNames = ['Name', 'Number', 'Email'];

    return (
        <div className="profile-container">
            <h2>Profile Section</h2>
            <section className="profile">
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
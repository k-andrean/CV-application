import MyForm from './MyForm';

export default function Profile() {
    const [formData, setFormData] = useState({
        field1: 'Initial Value 1',
        field2: 'Initial Value 2',
        field3: 'Initial Value 3',
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
            <h1>Curriculum Vitae</h1>
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
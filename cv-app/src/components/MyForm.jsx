function MyForm({ formData, isDisabled, handleInputChange, handleEditClick, handleSubmit, fieldNames }) {
    return (
      <form>
        {fieldNames.map((fieldName) => (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}:</label>
            <input
              type="text"
              id={fieldName}
              value={formData[fieldName]}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              disabled={isDisabled}
            />
          </div>
        ))}
        {isDisabled ? (
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <button type="button" onClick={() => handleSubmit(fieldNames)}>
            Submit
          </button>
        )}
      </form>
    );
  }
  
  export default MyForm;
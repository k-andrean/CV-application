import '../styles/style.css';

function MyForm({ formData, isDisabled, handleInputChange, handleEditClick, handleSubmit, fieldNames }) {
  return (
    <form className="my-form">
      <div className="left-section">
        {fieldNames.map((fieldName) => (
          <div key={fieldName} className="text-field">
            <p>{fieldName}:</p>
          </div>
        ))}
      </div>
      <div className="right-section">
        {fieldNames.map((fieldName) => (
          <div key={fieldName} className="form-field">
            <label htmlFor={fieldName}></label>
            <input
              type="text"
              id={fieldName}
              value={formData[fieldName]}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              disabled={isDisabled}
            />
          </div>
        ))}
      </div>
      <div className="button-container">
        {isDisabled ? (
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <button type="button" onClick={() => handleSubmit(fieldNames)}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

function WorkForm({ formData, isDisabled, handleInputChange, handleEditClick, handleSubmit, fieldNames }) {
  return (
    <form className="my-form">
      <div className="left-section">
        {fieldNames.map((fieldName) => (
          <div key={fieldName} className="text-field">
            <p>{fieldName}:</p>
          </div>
        ))}
      </div>
      <div className="right-section">
        {fieldNames.map((fieldName) => (
          <div key={fieldName} className="form-field">
            <label htmlFor={fieldName}></label>
            {fieldName === 'Job Description' ? (
              <textarea
                id={fieldName}
                value={formData[fieldName]}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                disabled={isDisabled}
                rows={6}
                cols={24}
              />
            ) : (
              <input
                type="text"
                id={fieldName}
                value={formData[fieldName]}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                disabled={isDisabled}
              />
            )}
          </div>
        ))}
      </div>
      <div className="button-container">
        {isDisabled ? (
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <button type="button" onClick={() => handleSubmit(fieldNames)}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export { MyForm, WorkForm };
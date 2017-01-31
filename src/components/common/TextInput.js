import React, {PropTypes} from 'react';

const TextInput = ({name, label, value, placeholder, onChange, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.lenth > 0){
        wrapperClass += ' ' + 'has-error';
    }

    return (
    <div className={wrapperClass} >
        <label htmlFor={name}>{label}</label>
        <div className="field">
            <input 
                type="text"
                name={name} 
                className="form-control" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
             />
             {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>

    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
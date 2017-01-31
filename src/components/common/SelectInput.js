import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, options, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.lenth > 0){
        wrapperClass += ' ' + 'has-error';
    }

    return (
    <div className={wrapperClass} >
        <label htmlFor={name}>{label}</label>
        <div className="field">
            <select 
                type="text"
                name={name} 
                className="form-control" 
                value={value} 
                onChange={onChange}
             >
             <option value="" >{defaultOption}</option>
             {
                 options.map((option) => {
                     return <option key={option.value} value={option.value} >{option.text}</option>;
                 })
             }
             </select>
             {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>

    );
};

SelectInput.propTypes = {
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    value: PropTypes.string
};

export default SelectInput;
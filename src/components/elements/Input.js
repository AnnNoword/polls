import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, dataOption, onChange, value }) => {
    return (
        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-600 focus:outline-none" onChange={onChange} placeholder={text} data-option={dataOption} value={value} />
    );
};

Input.propTypes = {
    text: PropTypes.string.isRequired,
    dataOption: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};
export default Input;

import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Button = ({ text, isChecked = false, onClick, dataOption, isDisabled }) => {
    return (
        <button className={'group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-sky-800 focus:ring-offset-2 uppercase font-bold disabled:opacity-75'} onClick={onClick} data-option={dataOption} disabled={isDisabled}>
            {isChecked ? (
                    <BsFillCheckCircleFill className="mt-0.5 mr-1" />
                )
                : ''}
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onClick: PropTypes.func,
    dataOption: PropTypes.string,
    isDisabled: PropTypes.bool
};
export default Button;

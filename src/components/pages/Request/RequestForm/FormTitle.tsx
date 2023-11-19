import React from 'react';

interface FormTitleProps {
    title: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title }) => {
    return (
        <div className='text-white'>
            <h1>{title}</h1>
        </div>
    );
};

export default FormTitle;

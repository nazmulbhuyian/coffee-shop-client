import React from 'react';

const Option = ({categorie}) => {
    return (
            <option>{categorie.category_name}</option>
    );
};

export default Option;
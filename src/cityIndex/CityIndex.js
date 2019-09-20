import React from 'react';
import citySelect from './CitySelect';
import reviewIndex from '../reviews/ReviewIndex';

function cityIndex() {


const protectedViews = () => {
   <citySelect /> ? <reviewIndex /> : null ;

}

return (
    <div>
        {protectedViews()}
    </div>
);

}

export default cityIndex
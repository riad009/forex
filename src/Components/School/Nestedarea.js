import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Areacard from './Areacard';
import AreaDetails from './AreaDetails';

const Nestedarea = ({nested}) => {


    return (
        <div >


       <button className="w-full  btn btn-outline btn-primary px-16 text-left justify-left my-2 flex  "><Link to={`/aread/${nested._id}`} >{nested.city}  </Link></button>
   

        </div>
    );
};

export default Nestedarea;
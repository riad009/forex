import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetail from './CardDetail';

const TownSchool = ({title}) => {
    const detail = useLoaderData()
   
    return (
        <div>
            
                {



                    detail.map(d => <CardDetail
                    key={d._id}
                    
                     d={d}
                     
                    >  </CardDetail> )
                }
        </div>
    );
};

export default TownSchool;
import React from 'react';
import Light from '../Light';
import smartHomeData from '../../smartHomeData.js';


const Lights = ({lights}) => {
    return(
        <div className="lights">
            
            
                        
            {
            smartHomeData.lights.map(light => <Light name={light.name} state={light.state} />)
            }

        </div>
    );
}

export default Lights;
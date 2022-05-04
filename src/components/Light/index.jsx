import React from 'react';
import './style.css';
import lightIsOff from './light-off.svg';
import lightIsOn from './light-on.svg';
import { useState } from 'react';

const Light = ({name, state}) => {

    const [lightState, setLightState] = useState({state});
	
	const handleClick = () => {
		if (lightState === 'off'){
			setLightState('on');
		} else {
			setLightState('off');
		}
		
		console.log({name, state});
	};

    return(
        <div className="light" onClick={handleClick}>
			<div className="light__icon">
				<p>{state}</p>
			
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
    );
}

export default Light;
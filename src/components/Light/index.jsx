import React from 'react';
import lightIsOff from './light-off.svg';
import lightIsOn from './light-on.svg';
import { useState } from 'react';

const Light = ({name, state}) => {

    const [lightState, setLightState] = useState('off');
	
	const handleClick = () => {
		setLightState('on');
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
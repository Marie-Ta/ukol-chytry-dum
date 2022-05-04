import React from 'react';
import './style.css';

const Blinds = ({state}) => {
    return(
        <div className="blinds">
				<div className="blinds__icon">
					
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className="button button--active">Otevřeno</button>
					<button className="button">Zavřeno</button>
				</div>
		</div>
    );
}

export default Blinds;
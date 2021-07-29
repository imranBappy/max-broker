import React, { useState } from 'react';
import WorldMap from 'react-world-map'
import './WorldMap.css';
function WorldMaps() {
  const [selected, onSelect] = useState(null);
    return(<>
        <div className="world-map">
        <WorldMap selected={ selected } onSelect={ onSelect } />
        </div>
    </>)
}
export default WorldMaps;
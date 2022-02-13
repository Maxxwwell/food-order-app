import React from "react";


function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})`, height: '200px' }}>
            </div>
            <h1>{name}</h1>
            <p>Ȼ{price}</p>
        </div>
    )
}

export default MenuItem
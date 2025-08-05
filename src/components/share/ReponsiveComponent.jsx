import React from 'react'
import useScreenSize from '../hooks/useScreenSize'

const ReponsiveComponent = ({ children }) => {
    const size = useScreenSize();
    return (
    <>
        {children({ size })}
    </>
    );
}


export default ReponsiveComponent;

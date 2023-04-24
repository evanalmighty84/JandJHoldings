import React, { useState, useEffect } from 'react';

function AbsolutePositioning() {
    const [position, setPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        function handleResize() {
            setPosition({ left: window.innerWidth / 2, top: window.innerHeight / 4 });

        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div
                style={{
                    position: 'absolute',
                    left: position.left,
                    top: position.top,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                }}
            >
                This is an absolute element
            </div>
        </div>
    );
}

export default AbsolutePositioning;






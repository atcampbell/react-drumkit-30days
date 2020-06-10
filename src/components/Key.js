import React from 'react';

export default function Key({ keyCode, keyName, sound }) {
    const styles = {
        key: {
            border: '.4rem solid black',
            borderRadius: '.5rem',
            margin: '1rem',
            fontSize: '1.5rem',
            padding: '1rem .5rem',
            transition: 'all .07s ease',
            width: '10rem',
            textAlign: 'center',
            color: 'white',
            background: 'rgba(0,0,0,0.4)',
            textShadow: '0 0 .5rem black',
        },
        sound: {
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '.1rem',
            color: '#ffc600',
        },
        kbd: {
            display: 'block',
            fontSize: '4rem',
        },
    };

    return (
        <div data-key={keyCode} style={styles.key}>
            <kbd style={styles.kbd}>{keyName}</kbd>
            <span style={styles.sound}>{sound}</span>
        </div>
    );
}

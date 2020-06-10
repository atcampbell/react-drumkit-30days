import React, { Fragment, useEffect, useRef } from 'react';
import './App.css';
import Audio from './components/Audio';
import Key from './components/Key';

export default function App({ config }) {
    const styles = {
        keys: {
            display: 'flex',
            flex: 1,
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };

    const audioItemsRef = useRef([]);

    useEffect(() => {
        function playSound({ keyCode }) {
            const audioItem = audioItemsRef.current.find(
                (el) => el.dataset.key === keyCode.toString()
            );

            if (audioItem) {
                audioItem.currentTime = 0;
                audioItem.play();
            }
        }

        window.addEventListener('keydown', playSound);

        return () => {
            window.removeEventListener('keyDown', playSound);
        };
    }, []);

    useEffect(() => {
        audioItemsRef.current = audioItemsRef.current.slice(0, config.length);
    }, [config]);

    return (
        <div className="App">
            <div style={styles.keys}>
                {config.map((sound, i) => (
                    <Fragment key={sound.keyCode}>
                        <Key keyCode={sound.KeyCode} keyName={sound.key} sound={sound.sound} />
                        <Audio
                            keyCode={sound.keyCode}
                            path={sound.path}
                            ref={(el) => (audioItemsRef.current[i] = el)}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

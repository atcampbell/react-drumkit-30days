import React, { forwardRef } from 'react';

const Audio = forwardRef(({ path, keyCode }, ref) => (
    <audio data-key={keyCode} src={path} ref={ref} />
));

export default Audio;

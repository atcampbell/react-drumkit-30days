import React, { forwardRef } from 'react';

const Audio = forwardRef(({ path, keyCode }, ref) => (
    <audio data-key={keyCode} src={path} ref={ref} />
));

export default Audio;

// export default function forwardRef(({path, keyCode, ref}, ref) {

// })

// function Audio({ path, keyCode, ref }) {
//     console.log(ref);
//     return <audio data-key={keyCode} src={path} ref={ref} />;
// }

// export default forwardRef(Audio);

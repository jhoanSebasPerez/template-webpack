import { useState } from 'react';

const useCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const MAX_VALUE = 10;
    const MIN_VALUE = 0;

    const increment = (step = 1) => (
        setValue(value + step)
    );

    const decrement = (step = 1) => {
        setValue(value - step);
    };

    const reset = () => {
        setValue(0);
    };

    return {
        value, MAX_VALUE, MIN_VALUE, increment, decrement, reset,
    };
};

export default useCounter;

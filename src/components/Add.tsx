'use client';
import { useAppDispatch } from '@/store/store';
import * as React from 'react';
import { addPerson } from '../../personSlice';

const Add = () => {
    const name = React.useRef<string>('');
    const dispatch = useAppDispatch();

    return (
        <form>
            <label htmlFor='input'>Person Name:</label>
            <input onChange={(e => name.current = e.target.value)} />
            <button
                onClick={() => dispatch(addPerson({ name: name.current }))}

            >Add</button>
        </form>
    );
};

export default Add;
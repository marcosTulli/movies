// 'use client';
// import { useAppDispatch } from '@/store/store';
// import * as React from 'react';
// import { addPerson } from '../store/features/personSlice';

// const Add = () => {
//     const name = React.useRef<string>('');
//     const dispatch = useAppDispatch();

//     const handleSave = () => {
//         dispatch(addPerson({ name: name.current }));
//         name.current = "";
//     };
//     return (
//         <form>
//             <label htmlFor='input'>Person Name:</label>
//             <input onChange={(e => name.current = e.target.value)} />
//             <button
//                 type='button'
//                 onClick={handleSave}
//             >
//                 Add
//             </button>
//         </form>
//     );
// };

// export default Add;
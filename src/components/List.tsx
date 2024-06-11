// 'use client';
// import React from 'react';
// import { useAppSelector } from '@/store/store';

// const List = () => {
//     const persons = useAppSelector(state => state.person.persons);
//     return (
//         <div>
//             <p>this is List component</p>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {persons.map(person => {
//                         return (
//                             <tr key={person.id}>
//                                 <td>{person.id}</td>
//                                 <td>{person.name}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default List;
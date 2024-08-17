



































// import React, { useState, useEffect } from 'react';

// const Test = () => {
//    const [data, setData] = useState([]);

//    const fetchData = async () => {
//        try {
//            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//            const data = await response.json();
//            setData(data);
//            console.log(data)
//        } catch (error) {
//            console.error('Error fetching data:', error);
//        }
//    };

//    useEffect(() => {
//        fetchData();
//    }, []);

//    return (
//     <>
//       <h1>Fetching Data</h1>
//       <ul>
//         {data.map(user => {
//         return(
//             <li key={user.id}>{user.name}, {user.id}</li>
//         )
//         })}

// {data.map(user => (
//   <li key={user.id}>
//     {user.name}, {user.id}
//   </li>
// ))}
         

//       </ul>
//     </>
//   );
// }

// export default Test;

// import React, { useState, useEffect } from 'react';

// const UserList = ({ users, onSelectUser }) => {
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id} onClick={() => onSelectUser(user)}>
//           {user.name}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const UserDetails = ({ user }) => {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>ID: {user.id}</p>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Website: {user.website}</p>
//     </div>
//   );
// };

// const Test = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filter, setFilter] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       setError('Error fetching data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredUsers = data.filter(user =>
//     user.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Fetching Data</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <input
//         type="text"
//         placeholder="Filter users by name"
//         value={filter}
//         onChange={handleFilterChange}
//       />
//       <UserList users={filteredUsers} onSelectUser={setSelectedUser} />
//       {selectedUser && <UserDetails user={selectedUser} />}
//     </div>
//   );
// };

// export default Test;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setData(response.data);
//       } catch (error) {
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Fetching Data</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             {user.name}, {user.id}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Test;



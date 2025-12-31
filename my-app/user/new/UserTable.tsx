import React from 'react';

interface User{
    name:string;
    id:number;
    email:string;
}




const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();

  return (
    <main>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <table border={1} cellPadding={8} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td><center>{user.id}</center></td>
              <td><center>{user.name}</center></td>
              <td><center>{user.email}</center></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserPage;

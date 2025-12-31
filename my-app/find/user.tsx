
export default async function UserPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users" , {
        next: {revalidate:10}
    });


const users : User []  = await res.json();

return (
    <main>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <table border={1} cellPadding={8} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td><center>{user.username}</center></td>
              <td><center>{user.phone}</center></td>
              <td><center>{user.website}</center></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
)}

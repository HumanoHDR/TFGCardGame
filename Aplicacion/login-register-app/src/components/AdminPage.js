import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    type: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://localhost:7042/api/User');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7042/api/User/${id}`);
      fetchUsers(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        username: editingUser.username,
        email: editingUser.email,
        type: editingUser.type,
      };
      await axios.put(`https://localhost:7042/api/User/${editingUser.id}`, updatedUser);
      setEditingUser(null);
      fetchUsers(); // Refresh the list after editing
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        if (error.response.data.errors) {
          Object.entries(error.response.data.errors).forEach(([key, value]) => {
            console.error(`${key}: ${value}`);
          });
        }
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7042/api/User', newUser);
      setNewUser({ username: '', email: '', password: '', type: '' });
      fetchUsers(); // Refresh the list after creating
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleCreateSubmit}>
        <h3>Create New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={newUser.type}
          onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
          required
        />
        <button type="submit">Create User</button>
      </form>

      {editingUser && (
        <form onSubmit={handleEditSubmit}>
          <h3>Edit User</h3>
          <input
            type="text"
            placeholder="Username"
            value={editingUser.username}
            onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Type"
            value={editingUser.type}
            onChange={(e) => setEditingUser({ ...editingUser, type: e.target.value })}
            required
          />
          <button type="submit">Update User</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;

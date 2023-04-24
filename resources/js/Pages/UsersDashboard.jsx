import { useState } from 'react';


export default function Dashboard({ users }) {
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    Inertia.post(`/users/${id}`, { _method: 'DELETE' });
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleCancelEdit = () => {
    setEditing(null);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    Inertia.post(`/users/${id}`, formData);
    setEditing(null);
  };

  return (
    <div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
              </h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        {editing === user.id ? (
                          <form
                            onSubmit={(event) => handleSubmit(event, user.id)}
                          >
                            <input
                              type="text"
                              name="name"
                              defaultValue={user.name}
                            />
                          </form>
                        ) : (
                          user.name
                        )}
                      </td>
                      <td>
                        {editing === user.id ? (
                          <form
                            onSubmit={(event) => handleSubmit(event, user.id)}
                          >
                            <input
                              type="text"
                              name="email"
                              defaultValue={user.email}
                            />
                          </form>
                        ) : (
                          user.email
                        )}
                      </td>
                      <td>
                        {editing === user.id ? (
                          <>
                            <button onClick={() => handleCancelEdit()}>
                              Cancel
                            </button>
                            <button
                              type="submit"
                              form={`form-${user.id}`}
                              className="ml-2"
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => handleEdit(user.id)}>
                              Edit
                            </button>
                            <button onClick={() => handleDelete(user.id)}>
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.layout = (page) => <>{page}</>;

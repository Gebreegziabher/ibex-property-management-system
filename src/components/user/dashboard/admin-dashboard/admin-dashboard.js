import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./admin-dashboard.css";
const AdminDashboard = () => {

    const navigate = useNavigate();

    const [roles, setRoles] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchRoles = () => {
        axios.get('roles').
            then(response => {
                setRoles(response.data);
            }).catch(error => {
                console.log(error.message);
            });
    };

    const fetchUsers = () => {
        axios.get('users').
            then(response => {
                setUsers(response.data);
            }).catch(error => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        fetchRoles();
        fetchUsers();
    }, []);

    const removeRole = (id) => {
        axios.delete("roles/" + id).then(response => {
            setRoles(r => r.filter(i => i.id !== id));
        }).catch(error => {
            console.log(error.message);
        });
    };

    const createRole = () => {
        navigate("/admin-dashboard/roles/create");
    }

    const editRole = (id) => {
        navigate("/admin-dashboard/roles/" + id + "/edit");
    };

    const createUser = () => {
        navigate("/admin-dashboard/users/create");
    };

    const changeUserLock = (id) => {
        const user = users.filter(f => f.id == id)[0];
        user.active = !user.active;
        axios.put("users/" + id, user).then(response => {
            const newUsersList = users.filter(f => f.id != id);
            setUsers([...newUsersList, user]);
        }).catch(error => {
            console.log(error.message);
        });
    };
    
    const changePassword = (id) => {
        navigate("/admin-dashboard/users/change-password", {state:{id: id }});
    };

    let rolesTable = null;
    if (roles.length != 0) {
        rolesTable = roles.map(m => {
            return (
                <tr key={m.id}>
                    <td>{m.role}</td>
                    <td>{m.createdDate}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger" title="Remove role" onClick={() => removeRole(m.id)}>
                                <i className="bi bi-trash3"></i>
                            </button>

                            &nbsp;

                            <button type="button" className="btn btn-secondary" title="Edit role" onClick={() => editRole(m.id)}>
                                <i className="bi bi-pencil-fill"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });
    }

    let usersTable = null;
    if (users.length != 0) {
        usersTable = users.map(m => {
            return (
                <tr key={m.id}>
                    <td>{m.firstName} {m.lastName}</td>
                    <td>{m.email}</td>
                    <td>{m.phoneNumber}</td>
                    <td>{m.role.role}</td>
                    <td>{m.active == false ?
                        <button type="button" className="btn btn-danger btn-sm" disabled><i className="bi bi-x-circle"></i> Inactive </button>
                        :
                        <button type="button" className="btn btn-success btn-sm" disabled><i className="bi bi-check-circle"></i> Active </button>
                    }</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            {m.active == true &&
                                <button type="button" className="btn btn-danger" title="Lock user" onClick={() => changeUserLock(m.id)}>
                                    <i className="bi bi-lock-fill"></i>
                                </button>
                            }
                            {m.active == false &&
                                <button type="button" className="btn btn-success" title="Unlock user" onClick={() => changeUserLock(m.id)}>
                                    <i className="bi bi-unlock-fill"></i>
                                </button>
                            }
                            &nbsp;
                            {m.active == true &&
                                <button type="button" className="btn btn-secondary" title="Change password" onClick={() => changePassword(1)}>
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                            }
                        </div>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className="container dashboard">
            <h2>Roles</h2>
            <button type="submit" onClick={createRole}><i className="bi bi-plus"></i> Create Role</button>
            {
                rolesTable != null ?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Role</th>
                                <th scope="col">Created date</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rolesTable}
                        </tbody>
                    </table>
                    :
                    <div className="alert alert-warning alert-info" role="alert">
                        No roles.
                    </div>
            }

            <br />
            <h2>Users</h2>
            <button type="submit" onClick={createUser}><i className="bi bi-plus"></i> Create User</button>
            {
                usersTable != null ?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Full name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Role</th>
                                <th scope="col">Active?</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersTable}
                        </tbody>
                    </table>
                    :
                    <div className="alert alert-warning alert-info" role="alert">
                        No users.
                    </div>
            }
        </div>
    );
}

export default AdminDashboard;
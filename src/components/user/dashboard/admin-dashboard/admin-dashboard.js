import "./admin-dashboard.css";
const AdminDashboard = () => {

    const users = [
        { id: 1, locked:false, firstName: "Luwam", lastName: "Yihdego", role: "Seller", email: "markOtto@gmail.com", phoneNumber: "00000000", },
        { id: 2, locked:false, firstName: "Suzan", lastName: "Suzan", role: "Admin", email: "JacobOtto@gmail.com", phoneNumber: "00000000", },
        { id: 3, locked:false, firstName: "Feven", lastName: "Feven", role: "Buyer", email: "LarryOtto@gmail.com", phoneNumber: "00000000", },
        { id: 4, locked:true, firstName: "Thornton", lastName: "Larry", role: "Seller", email: "markOtto@gmail.com", phoneNumber: "00000000", },
    ];

    const lockUser = (userId) => {
        //TODO: lock user
    };
    const unlockUser = (userId) => {
        //TODO: unlock user
    };
    const changePassword = (userId) => {
        //TODO: change password 
    };

    const counter = 1;

    const tableContent = users.map(m => {
        return (
            <tr key={m.id}>
                <th scope="row">{counter}</th>
                <td>{m.firstName} {m.lastName}</td>
                <td>{m.email}</td>
                <td>{m.phoneNumber}</td>
                <td>{m.role}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {m.locked == false && 
                        <button type="button" className="btn btn-danger" title="Lock user" onClick={lockUser}>
                            <i className="bi bi-lock-fill"></i>
                        </button>
                        }
                        {m.locked == true && 
                        <button type="button" className="btn btn-success" title="Unlock user" onClick={unlockUser}>
                            <i className="bi bi-unlock-fill"></i>
                        </button>
                        }
                        &nbsp;
                        {m.locked == false && 
                        <button type="button" className="btn btn-secondary" title="Change password" onClick={changePassword}>
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                        }
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <div className="container dashboard">
            <h2>Registered users</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Role</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
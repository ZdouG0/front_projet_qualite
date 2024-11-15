import React from 'react';
import './UserList.css';


function UserList(props) {
    return (
        <div className="body_list">
            <div className="container_tableau">
                <table className="tableau">

                    <thead>
                    <tr>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>

                    <tr>
                        <td>001</td>
                        <td>Smith</td>
                        <td>John</td>
                        <td>john.smith@example.com</td>
                        <td>
                            <div className="Role_style admin_style">
                                Admin
                                {/* ajouter une condition dans le className pour adapter style */}
                            </div>
                        </td>
                        <td className="action-column">
                            <div className="Action_button blue">
                                Set/Unset Admin
                            </div>
                            <div className="Action_button red">
                                Delete
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>001</td>
                        <td>Smith</td>
                        <td>John</td>
                        <td>john.smith@example.com</td>
                        <td>
                            <div className="Role_style user_style">
                                User
                                {/* ajouter une condition dans le className pour adapter style */}
                            </div>
                        </td>
                        <td className="action-column">
                            <div className="Action_button blue">
                                Set/Unset Admin
                            </div>

                            <div className="Action_button red">
                                Delete
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Smith</td>
                        <td>John</td>
                        <td>john.smith@example.comaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                        <td>
                            <div className="Role_style user_style">
                                User
                                {/* ajouter une condition dans le className pour adapter style */}
                            </div>
                        </td>
                        <td className="action-column">
                            <div className="Action_button blue">
                                Set/Unset Admin
                            </div>
                            <div className="Action_button red">
                                Delete
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</td>
                        <td>Smith</td>
                        <td>John</td>
                        <td>john.smith@example.com</td>
                        <td>
                            <div className="Role_style user_style">
                                User
                                {/* ajouter une condition dans le className pour adapter style */}
                            </div>
                        </td>
                        <td className="action-column">
                            <div className="Action_button blue">
                                Set/Unset Admin
                            </div>
                            <div className="Action_button red">
                                Delete
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default UserList;
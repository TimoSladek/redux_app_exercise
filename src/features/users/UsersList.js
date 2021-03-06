import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUsers } from "./usersSlice";

export const UsersList = () => {
    const users = useSelector(selectUsers);

    const renderedUsers = users.map(user => (
        <li>
            <Link to={`/users/${user.id}`}>
                {user.name}
            </Link>
        </li>
    ))

    return (
        <section>
            <h1>Users</h1>
            <ul>{renderedUsers}</ul>
        </section>
    )
}
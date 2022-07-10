import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

export const PostAuthor = ({ userId }) => {

    const authors = useSelector(selectUsers);

    const author = authors.find(user => String(user.id) === userId)

    return <span>{
                    author ?
                    <Link to={`/users/${author.id}`} className="button muted-button" >
                        by {author ? author.name : 'Unknown author'}
                    </Link> : 
                    'Unknown author'
                }
            </span>
}
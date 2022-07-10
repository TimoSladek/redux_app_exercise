import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../users/usersSlice";
import { selectPosts } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";


export const UserPage = () => {
    const { userId } = useParams();

    const users = useSelector(selectUsers);
    const posts = useSelector(selectPosts);

    const user = users.find(user => user.id === userId);

    const renderedPosts = posts.filter(post => post.user === user.id)

    const usersPosts = renderedPosts.map((post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button" >
                View Post
            </Link>
        </article>
    ))

    if(!user) {
        return (
            <section>
                <h2>User not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <h2>{user.name}'s Posts</h2>
            {usersPosts}
        </section>
    )
}
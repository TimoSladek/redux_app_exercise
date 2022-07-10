import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { Navbar } from './app/Navbar'
import { UserPage } from './features/posts/UserPage'
import { UsersList } from './features/users/UsersList'


function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact path="/" element={<React.Fragment>
                                      <AddPostForm />
                                      <PostsList />
                                    </React.Fragment>
                                    }
          />
          <Route exact path="/users" element={<UsersList />}
          />
          <Route exact path="/posts/:postId" element={<SinglePostPage />}
          />
          <Route exact path="/editPost/:postId" element={<EditPostForm />}
          />
          <Route exact path="/users/:userId" element={<UserPage />}
          />
          <Route to="/" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
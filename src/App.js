import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import TravelerPage from "./pages/travelers/TravelerPage";
import UsernameForm from "./pages/travelers/UsernameForm";
import UserPasswordForm from "./pages/travelers/UserPasswordForm";
import TravelerEditForm from "./pages/travelers/TravelerEditForm";

function App() {
  const currentUser = useCurrentUser();
  const traveler_id = currentUser?.traveler_id || "";


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__traveler=${traveler_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__traveler=${traveler_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/bucketlist"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or add a post to your bucketlist."
                filter={`bucketlist__owner=${traveler_id}&ordering=-created_at&`}
              />
            )}
          />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm userId={traveler_id} />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/travelers/:id" render={() => <TravelerPage />} />
          <Route
            exact
            path="/travelers/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/travelers/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/travelers/:id/edit"
            render={() => <TravelerEditForm />}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

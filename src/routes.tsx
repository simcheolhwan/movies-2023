import App from "./app/App"
import WithIsMobile from "./app/WithIsMobile"
import AddMovie from "./pages/AddMovie"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"

const routes = [
  {
    path: "/",
    element: <WithIsMobile>{(isMobile) => <App isMobile={isMobile} />}</WithIsMobile>,
    children: [
      { path: "new", element: <AddMovie /> },
      { path: "signin", element: <SignIn /> },
      { path: "signout", element: <SignOut /> },
    ],
  },
]

export default routes

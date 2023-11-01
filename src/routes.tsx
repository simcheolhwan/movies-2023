import App from "./app/App"
import WithIsMobile from "./app/WithIsMobile"
import Browse from "./pages/Browse"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"

const routes = [
  {
    path: "/",
    element: <WithIsMobile>{(isMobile) => <App isMobile={isMobile} />}</WithIsMobile>,
    children: [
      { index: true, element: <Browse /> },
      { path: "new", element: <Search /> },
      { path: "signin", element: <SignIn /> },
      { path: "signout", element: <SignOut /> },
    ],
  },
]

export default routes

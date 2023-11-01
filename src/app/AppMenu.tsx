import { Link } from "react-router-dom"
import { Group, UnstyledButton } from "@mantine/core"
import { useIsAuthenticated } from "../data/auth"
import classes from "./AppMenu.module.css"

const AppMenu = () => {
  const isAuthenticated = useIsAuthenticated()

  const menu = [
    { to: "/", label: "Browse" },
    { to: "/new", label: "Add" },
    !isAuthenticated ? { to: "/signin", label: "Sign in" } : { to: "/signout", label: "Sign out" },
  ]

  return (
    <Group ml="xl" gap={0}>
      {menu.map(({ to, label }) => (
        <UnstyledButton component={Link} to={to} className={classes.control} key={to}>
          {label}
        </UnstyledButton>
      ))}
    </Group>
  )
}

export default AppMenu

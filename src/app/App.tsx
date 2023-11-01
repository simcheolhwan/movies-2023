import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { onAuthStateChanged } from "firebase/auth"
import { AppShell, Burger, Group, ScrollArea, Skeleton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { auth } from "../firebase"
import { authenticatedState } from "../data/auth"
import AppMenu from "./AppMenu"

export default function App({ isMobile }: { isMobile: boolean }) {
  // AppShell UI state
  const [opened, { toggle }] = useDisclosure(!isMobile)
  const [disabled] = useDisclosure()

  // Set global state on auth changed
  const setAuthenticated = useSetRecoilState(authenticatedState)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [setAuthenticated])

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened, desktop: !opened } }}
      padding="md"
      disabled={disabled}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Burger opened={opened} onClick={toggle} size="sm" />
            <AppMenu />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section>Navbar footer</AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

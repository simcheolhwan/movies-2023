import { useDisclosure } from "@mantine/hooks"
import { AppShell, Burger, Button, Group, ScrollArea, Skeleton, Title, UnstyledButton } from "@mantine/core"
import classes from "./App.module.css"

export default function App() {
  const [opened, { toggle }] = useDisclosure()
  const [disabled, { toggle: toggleDisabled }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      disabled={disabled}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Title></Title>
            <Group ml="xl" gap={0}>
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
            </Group>
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
        <Button onClick={toggleDisabled}>Toggle disabled</Button>
      </AppShell.Main>
    </AppShell>
  )
}

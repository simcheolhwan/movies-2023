import { useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

export default function WithIsMobile({ children }: { children: (isMobile: boolean) => React.ReactNode }) {
  const { breakpoints } = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.sm})`)
  if (typeof isMobile !== "boolean") return null
  return <>{children(isMobile)}</>
}

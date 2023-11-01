import { useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

export default function useIsMobile() {
  const { breakpoints } = useMantineTheme()
  return useMediaQuery(`(max-width: ${breakpoints.sm})`)
}

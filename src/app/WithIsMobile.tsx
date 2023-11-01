import useIsMobile from "./useIsMobile"

export default function WithIsMobile({ children }: { children: (isMobile: boolean) => React.ReactNode }) {
  const isMobile = useIsMobile()
  if (typeof isMobile !== "boolean") return null
  return <>{children(isMobile)}</>
}

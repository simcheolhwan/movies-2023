import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createTheme, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import routes from "./routes"

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)
const theme = createTheme({})

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications position="top-right" />
          <RouterProvider router={router} />
        </MantineProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>,
)

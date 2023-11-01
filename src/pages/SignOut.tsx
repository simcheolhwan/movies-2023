import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { notifications } from "@mantine/notifications"
import { auth } from "../firebase"

const SignIn = () => {
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: () => {
      return auth.signOut()
    },
    onSuccess: () => {
      navigate("/")
    },
    onError: (error) => {
      notifications.show({ message: error.message, color: "red" })
    },
  })

  useEffect(() => {
    mutate()
  }, [mutate])

  return null
}

export default SignIn

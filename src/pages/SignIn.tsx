import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useMutation } from "@tanstack/react-query"
import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { useForm } from "@mantine/form"
import { auth } from "../firebase"

interface FormValues {
  email: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate()

  const { getInputProps, onSubmit } = useForm({
    initialValues: {
      email: import.meta.env.VITE_EMAIL,
      password: import.meta.env.VITE_PASSWORD,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: FormValues) => {
      return signInWithEmailAndPassword(auth, email, password)
    },
    onSuccess: () => {
      navigate("/")
    },
    onError: (error) => {
      notifications.show({ message: error.message, color: "red" })
    },
  })

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit((values) => mutate(values))}>
        <Stack>
          <TextInput {...getInputProps("email")} label="Email" />
          <PasswordInput {...getInputProps("password")} label="Password" />

          <Button type="submit" loading={isPending}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignIn

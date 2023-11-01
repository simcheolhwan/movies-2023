import { atom, useRecoilValue } from "recoil"

export const authenticatedState = atom({
  key: "authenticatedState",
  default: false,
})

export function useIsAuthenticated() {
  return useRecoilValue(authenticatedState)
}

import { atom, useRecoilValue } from "recoil"

export const authenticatedState = atom<boolean | undefined>({
  key: "authenticatedState",
  default: undefined,
})

export function useIsAuthenticated() {
  return useRecoilValue(authenticatedState)
}

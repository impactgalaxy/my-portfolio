import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationProvider";

export default function useUserState() {
  const state = useContext(AuthenticationContext);

  return state;
}

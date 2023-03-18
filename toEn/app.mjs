import { trans } from "./translate.mjs";

export function toEnName(str) {
  return str
    .split(" ")
    .map((value) => trans(value))
    .join(" ");
}

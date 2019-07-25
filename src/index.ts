import { name } from "./crypto";

export function hi(name: string): string {
  return `hello my name is ${name}`;
}

export class TOTP {
  static generate(): number {
    return Math.random();
  }

  validate() {
    return name;
  }
}

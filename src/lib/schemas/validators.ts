export const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value)

export const isMinLength = (value: string, length: number) => value.length >= length

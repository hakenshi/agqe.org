import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileURL(key: string) {
  if(key){
  const endpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT;
  return key.includes(endpoint) ? key : `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${key}`
  }
  return undefined
}

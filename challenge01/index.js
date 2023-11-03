import { readFileSync } from "node:fs"
import { join } from 'node:path'
import { objectToString } from "./convert.js"

let words = []
let decrypted_message = {}

getMessage()

for (const word of words) {
  if (!decrypted_message[word]) decrypted_message[word] = 0
  decrypted_message[word] += 1
}

decrypted_message = objectToString(decrypted_message)
console.log(decrypted_message)

function getMessage () {
  const __dirname__ = join(import.meta.url.replace('file:', ''), "..")
  const messagePath = join(__dirname__, "message.txt")
  const encrypted_message = readFileSync(messagePath, "utf-8")
  words = encrypted_message.split(" ")
}
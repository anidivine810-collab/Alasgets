import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

// Initialize OpenSSL for serverless environments
if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
  process.env.NODE_OPTIONS = '--openssl-legacy-provider'
}

const googleId = process.env.AUTH_GOOGLE_ID
const googleSecret = process.env.AUTH_GOOGLE_SECRET

if (!googleId || !googleSecret) {
  console.error("NextAuth configuration error: Missing Google OAuth client ID or secret (AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET).")
}

const firebaseProjectId = process.env.AUTH_FIREBASE_PROJECT_ID
const firebaseClientEmail = process.env.AUTH_FIREBASE_CLIENT_EMAIL
const rawPrivateKey = process.env.AUTH_FIREBASE_PRIVATE_KEY

// Properly handle private key encoding - support both escaped and literal newlines
const privateKey = rawPrivateKey 
  ? rawPrivateKey.includes('\\n') 
    ? rawPrivateKey.replace(/\\n/g, "\n") 
    : rawPrivateKey 
  : undefined

const adapter = (firebaseProjectId && firebaseClientEmail && privateKey) ? FirestoreAdapter({
  credential: cert({
    projectId: firebaseProjectId,
    clientEmail: firebaseClientEmail,
    privateKey,
  }),
}) : undefined

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
     GoogleProvider({
        clientId: googleId,
        clientSecret: googleSecret
     }),
  ],
  adapter,
  debug: process.env.NEXTAUTH_DEBUG === "true" || process.env.NODE_ENV !== "production",
  secret: process.env.NEXTAUTH_SECRET,
})

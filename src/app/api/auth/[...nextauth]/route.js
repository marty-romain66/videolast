import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "965966902512-r5v7scijk55mv90r763sno1amp8gkl1q.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user && user) {
        session.user.id = user.id
        session.user.role = user.role
      
       
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

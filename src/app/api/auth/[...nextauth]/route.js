import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "965966902512-iu1uvfg42bfuie9bc8tn2i743nrciss0.apps.googleusercontent.com",
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

import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, user }) {
      console.log("account", account?.access_token);
      console.log("user", user);
      return true;
    },
  },
});

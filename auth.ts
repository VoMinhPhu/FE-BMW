import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, user }) {
      if (account) console.log("account", account);
      console.log("user", user);
      return true;
    },
  },
});

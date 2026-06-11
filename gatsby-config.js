module.exports = {
  siteMetadata: {
    title: `My Gatsby Advanced Site`,
    description: `موقع متقدم مبني باستخدام Gatsby.js ويدعم اللغة العربية.`,
    lang: `ar`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {},
    },
    {
      resolve: `gatsby-source-supabase`,
      options: {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
        types: [],
      },
    },
  ],
};

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "aaf6e9ac245d2a33f79701c3ee47a7b5"),
    },
    host: "my-host",
    port: 8000,
  },
});

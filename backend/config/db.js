const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "community_events", // <-- make sure this matches your pgAdmin DB name
  password: "bgxf2u", // <-- put the password you set during installation
  port: 5432,
});

// Test connection
pool.connect()
  .then(() => console.log("PostgreSQL Connected ✅"))
  .catch((err) => console.error("Database connection failed:", err));

module.exports = pool;

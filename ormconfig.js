require('dotenv').config()

module.exports = {
   "type": "postgres",
   "host": process.env.ADDRESS,
   "port": process.env.POSTGRES_PORT,
   "username": process.env.POSTGRES_USER,
   "password": process.env.POSTGRES_PASSWORD,
   "database": process.env.POSTGRES_DB,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/database/entity/**/*.{ts,js}"
   ],
   "migrations": [
      "src/database/migration/**/*.{ts,js}"
   ],
   "subscribers": [
      "src/database/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/database/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/database/subscriber"
   }
}
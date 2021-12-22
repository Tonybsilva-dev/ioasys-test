import { createConnection } from 'typeorm'

createConnection().then(
  () => console.log(`✅ Database connected on port 5432!`)
);
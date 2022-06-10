const client = require("./client");
const { users, } = require("./seedData");


const dropTables = async () => {
  console.log("----Dropping tables----");
  await client.query(`
      
        DROP TABLE IF EXISTS users;
    `);
  console.log("----Tables dropped----");
};

const createTables = async () => {
  console.log("---Building Tables----");
  try {
    
    await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
          );

      `);
    console.log("-----TABLES BUILT-----");
  } catch (error) {
    throw error;
  }
};

const seedDb = async () => {
  console.log("Creating Users...");
  const createdUsers = await Promise.all(users.map(User.createUser));
  console.log("Users:", createdUsers);

};

// async function testDb(){
//   try{
// console.log("getAllMovies")
// const findMovie = await getAllMovies()
// console.log(findMovie)
//   }catch(error){
//     throw error
//   }
// }

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
    // await testDb();
    console.log("DB is seeded and ready to go!!");
  } catch (error) {
    console.error(error);
  }
};

initDb().then(() => client.end());
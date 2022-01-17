import 'dotenv/config';
import database from './config/database';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(async () => {
  try {
    await database.sync({ force: true });
    console.log(`Server listening on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});

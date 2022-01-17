import 'dotenv/config';
import database from './config/database';
import logger from './loaders/logger';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await database.sync({ force: true });
    logger.info(`Server started on port ${port}`);
  } catch (error) {
    logger.error(error);
  }
});

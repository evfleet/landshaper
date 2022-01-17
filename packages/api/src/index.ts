import 'dotenv/config';
import logger from './loaders/logger';
import database from './loaders/sequelize';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await database.sequelize.sync({ force: true });
    logger.info(`Server started on port ${port}`);
  } catch (error) {
    logger.error(error);
  }
});

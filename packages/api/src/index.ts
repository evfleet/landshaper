import 'dotenv/config';
import logger from './loaders/logger';
import sequelize from './loaders/sequelize';
import initModels from './models/init';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await initModels();

    logger.info(`Server started on port ${port}`);
  } catch (error) {
    logger.error(error);
  }
});

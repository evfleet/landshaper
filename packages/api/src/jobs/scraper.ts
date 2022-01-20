// import { CronJob } from 'cron';
import axios from 'axios';
import 'dotenv/config';
import { Transaction } from 'sequelize';
import sequelize from '../loaders/sequelize';
import Card from '../models/card.model';
import formatCards from './utils/format-cards';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchCards = async (url: string, t: Transaction) => {
  const { data: { data, has_more, next_page } } = await axios.get(url);
  const cards = formatCards(data);

  await Card.bulkCreate(cards, { 
    logging: false,
    ignoreDuplicates: true,
    transaction: t 
  });

  if (has_more) {
    await wait(2000);
    await fetchCards(next_page, t);
  } else {
    return;
  }
}

(async () => {
  await sequelize.authenticate();

  const t = await sequelize.transaction();

  try {
    await fetchCards('https://api.scryfall.com/cards/search?q=f:standard', t);

    console.log('done');

    await t.commit();

  } catch (error) {
    console.log(error);
  }
})();


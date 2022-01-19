import Deck from './deck.model';
import User from './user.model';

export default async () => {
  await User.sync();
  await Deck.sync();
};



import Card from './card.model';
import Deck from './deck.model';
import Set from './set.model';
import User from './user.model';

export default async () => {
  await User.sync();
  await Deck.sync();
  await Card.sync();
  await Set.sync();
};



import app from './server';

const port = process.env.PORT || 3000;

app.listen(() => {
  try {
    console.log(`Server listening on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});

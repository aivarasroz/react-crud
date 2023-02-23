const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

export const getTeamFormValues = (form: HTMLFormElement | undefined): Omit<TeamModel, 'id'> => {
  const formData = new FormData(form);

  const title = formData.get('team');
  if (typeof title!== 'string') throw new Error('Missing Team');
  if (title.length < 2) throw new Error('Team must have at least 2 symbols');

  const starting = formData.get('starting');
  if (typeof starting !== 'string') throw new Error('Missing starting MVP');
  if (starting.length < 2) throw new Error('Starting players name must have at least 2 symbols');

  const bench = formData.get('bench');
  if (typeof bench !== 'string') throw new Error('Missing benched MVP');
  if (bench.length < 2) throw new Error('Benched MVP must have at least 2 symbols');

  const titles = formData.get('titles');
  if (typeof titles !== 'string') throw new Error('Missing championship titles');

  const images = formData.getAll('images');
  if (!isStringArray(images)) throw new Error('All images must be strings');

  const values = {
    title,
    RosterMvps: {
      starting,
      bench,
    },
    titles: Number(titles),
    images: images.filter((img) => img !== ''),
  };

  return values;
};
const title = {
  edit: ' Update ',
  create: 'Create'
};
const color = {
  edit: 'warning',
  create: 'primary'
} as const;
const btnText = {
  edit: 'Update Team',
  create: 'Add New Team'
};
const colorMain = {
  edit: 'warning.main',
  create: 'primary.main'
} as const;

 export const getData = (mode: 'create' | 'edit') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode]
})

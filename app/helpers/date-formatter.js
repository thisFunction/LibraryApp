import { helper } from '@ember/component/helper';

export function dateFormatter(date) {
  const year = date[0].getFullYear();
  return year;
}

export default helper(dateFormatter);

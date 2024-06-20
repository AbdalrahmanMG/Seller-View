
/**
 * 
 * @param {string} txt ~ the text you want to slice 
 * @param {number} [max = 50] ~ the max number of characters want to be showen
 * @returns txt after being sliced if it is longer than the max number
 */
export const txtSlicer = (txt: string, max: number = 50) => {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
};

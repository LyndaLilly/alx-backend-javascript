export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* this is eslint-disabled */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* this eslint-enable */

  return [task, task2];
}

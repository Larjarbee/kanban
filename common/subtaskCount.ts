export function countCompletedSubtasks(data: any) {
  let count = 0;

  if (Array.isArray(data)) {
    data.forEach((subtask) => {
      if (subtask.completed === true) {
        count++;
      }
    });
  }

  return count;
}

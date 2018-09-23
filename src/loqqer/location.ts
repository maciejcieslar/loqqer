const getLocation = (error: Error = null, stepInStack: number = 0) => {
  let step = stepInStack;

  try {
    if (error) {
      throw error;
    }

    step = 1;
    throw new Error('Log stack');
  } catch (e) {
    try {
      const err: Error = e;
      const stackLocations = err.stack
        .split('\n')
        .map((m) => m.trim())
        .filter((m) => m.startsWith('at'));

      return String(stackLocations[step]).slice(3);
    } catch (e) {
      return '';
    }
  }
};

export { getLocation };

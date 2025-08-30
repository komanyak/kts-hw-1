const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...arg: Parameters<T>) => ReturnType<T>) => {
  if (typeof func !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (time !== undefined && (typeof time !== 'number' || time < 0)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const cache = new Map<
    string,
    { value: ReturnType<T>; timeoutId: NodeJS.Timeout }
  >();

  const createKey = (args: any[]): string => {
    return JSON.stringify(args);
  };

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = createKey(args);

    if (cache.has(key)) {
      const cached = cache.get(key)!;

      if (time !== undefined) {
        clearTimeout(cached.timeoutId);
        cached.timeoutId = setTimeout(() => cache.delete(key), time);
      }

      return cached.value;
    }

    const result = func(...args);

    if (time !== undefined) {
      const timeoutId = setTimeout(() => cache.delete(key), time);
      cache.set(key, { value: result, timeoutId });
    } else {
      cache.set(key, {
        value: result,
        timeoutId: null as unknown as NodeJS.Timeout,
      });
    }

    return result;
  };
};

export default memo;

// ppppp

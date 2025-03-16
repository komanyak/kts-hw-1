type FunctionType<T> = () => Promise<T> | T;

type FunctionResultsUnion<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>
> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
}[number];

const promiseFrame = async <
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>,
  ResultsT = FunctionResultsUnion<T>
>(
  functions: T,
  limit?: number
): Promise<ResultsT[]> => {

  if (!Array.isArray(functions)) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (limit !== undefined && (typeof limit !== 'number' || limit <= 0)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const results: ResultsT[] = new Array(functions.length);
  let index = 0;

  const runNext = async (): Promise<void> => {
    if (index >= functions.length) return;

    const currentIndex = index++;
    const fn = functions[currentIndex];

    try {
      results[currentIndex] = await fn();
    } catch (error) {
      throw error; 
    }

    await runNext();
  };

  try {
    const initialPromises: Promise<void>[] = [];
    const actualLimit = limit || functions.length;

    for (let i = 0; i < actualLimit && i < functions.length; i++) {
      initialPromises.push(runNext());
    }

    await Promise.all(initialPromises);
  } catch (error) {
    throw error;
  }

  return results;
};

export default promiseFrame;
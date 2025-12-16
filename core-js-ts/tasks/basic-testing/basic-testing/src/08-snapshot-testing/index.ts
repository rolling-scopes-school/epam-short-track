type LinkedListNode<T> = {
  value: T | null;
  next: LinkedListNode<T> | null;
};

export const generateLinkedList = <T>(elements: T[]): LinkedListNode<T> => {
  if (!elements.length) {
    return { value: null, next: null };
  }

  const [head, ...rest] = elements;

  return {
    value: head ?? null,
    next: generateLinkedList(rest),
  };
};

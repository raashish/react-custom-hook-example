import React, { useState } from 'react';

export const useCustomHook = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const incrementCounter = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };
  const decrementCounter = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((prev) => prev - 1);
      setLoading(false);
    }, 500);
  };
  const resetCounter = () => {
    setLoading(true);
    setTimeout(() => {
      setCount(initialValue);
      setLoading(false);
    }, 500);
  };

  return [count, incrementCounter, decrementCounter, resetCounter, loading];
};

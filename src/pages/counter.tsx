import React from 'react'
import { useCounterStore } from '../../src/store/counter';
export const Counter = () => {
    const increment = useCounterStore((state) => state.increment);
    const count = useCounterStore((state) => state.count);

  return (
    <div>

          <h2>counter: {count}</h2>
          <button onClick={() => increment()}>
              Increment
          </button>
    </div>
  )
}

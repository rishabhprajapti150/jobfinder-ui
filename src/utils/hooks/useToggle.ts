import { useState, useCallback } from 'react';

export default function useToggle(defaultValue: boolean = false): [boolean, (value?: boolean) => void] {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback((value?: boolean) => {
    setValue(current => typeof value === 'boolean' ? value : !current);
  }, []);

  return [value, toggleValue];
}
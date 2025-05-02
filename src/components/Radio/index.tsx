import React, { useEffect, useState } from 'react';

type CustomRadioProps = {
  options: string[];
  name: string;
  onChange: (value: string) => void;
  defaultValue?: string;
};

const Radio: React.FC<CustomRadioProps> = ({
  options,
  name,
  onChange,
  defaultValue = '',
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
      onChange(defaultValue);
    }
  }, [defaultValue, onChange]);

  const handleChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => {
        const id = `${name}-${option}-${index}`;
        return (
          <div key={id} className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer" htmlFor={id}>
              <input
                type="radio"
                name={name}
                value={option}
                id={id}
                checked={selectedOption === option}
                onChange={() => handleChange(option)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-blue-600 transition-all"
              />
              <span className="absolute bg-blue-600 w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </label>
            <label htmlFor={id} className="ml-2 cursor-pointer text-sm font-medium">
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;

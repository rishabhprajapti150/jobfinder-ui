import React, { useEffect, useState } from 'react';

type CustomRadioProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

const Radio: React.FC<CustomRadioProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  className = '',
  disabled = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const handleChange = (value: string) => {
    // setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="space-y-3">
        <div key={ `${name}`} className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer">
              <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => handleChange(value)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-blue-600 transition-all"
              />
              <span className={"absolute bg-blue-600 w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} />
            </label>
            <label className="ml-2 cursor-pointer text-sm font-medium">
              {name}
            </label>
          </div>
    </div>
  );
};

export default Radio;

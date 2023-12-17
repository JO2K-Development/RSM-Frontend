import { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface CalendarPickProps {
  current: Date | null;
  onChange(date: Date): void;
  title: string;
  disabled?: boolean;
}

const CalendarPick: FC<CalendarPickProps> = ({ title, onChange, current, disabled }) => {
  return (
    <div className="flex items-baseline gap-[inherit]  text-black ">
      <div className="mr-auto text-white">{title}</div>
      <DatePicker
        className={`p-[0.5rem] text-right ${
          disabled ? 'text-gray-500' : 'text-white'
        } rounded-xl font-extrabold ${'bg-neutral-800/80'}`}
        disabled={disabled}
        placeholderText={current?.toLocaleDateString()}
        dateFormat="dd-MM-yyyy"
        selected={current}
        onChange={onChange}
      />
    </div>
  );
};

export default CalendarPick;

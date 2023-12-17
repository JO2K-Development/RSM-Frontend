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
    <div className="flex text-black ">
      <div className="mr-auto text-white">{title}</div>
      <DatePicker
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

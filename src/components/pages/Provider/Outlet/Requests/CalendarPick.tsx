import { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface CalendarPickProps {
  current: Date | null;
  onChange(date: Date): void;
  title: string;
}

const CalendarPick: FC<CalendarPickProps> = ({ title, onChange, current }) => {
  return (
    <div className="flex text-black ">
      <div className="text-white mr-auto">{title}</div>
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={current}
        onChange={onChange}
      />
    </div>
  );
};

export default CalendarPick;

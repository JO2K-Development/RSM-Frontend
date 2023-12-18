import { useEffect, useState } from 'react';
import RequestWithBackend from '../types/Request';

function useCalendar(request: RequestWithBackend | null) {
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  useEffect(() => {
    if (request?.deliveryDate) setDeliveryDate(new Date(request?.deliveryDate));
    else setDeliveryDate(null);
    if (request?.pickupDate) setPickupDate(new Date(request?.pickupDate));
    else setPickupDate(null);
  }, [request?.deliveryDate, request?.pickupDate, request]);
  return {
    pickupDate: pickupDate,
    setPickupDate: setPickupDate,
    deliveryDate: deliveryDate,
    setDeliveryDate: setDeliveryDate
  };
}
export default useCalendar;

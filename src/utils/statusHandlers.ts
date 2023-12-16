import RequestStatusEnum from '../types/RequestStatusEnum';

export function getNextStatus(
  currentStatus: RequestStatusEnum | undefined
): RequestStatusEnum | null {
  if (!currentStatus) return null;
  const statusOrder: RequestStatusEnum[] = Object.values(RequestStatusEnum);

  const currentIndex = statusOrder.indexOf(currentStatus);
  if (currentIndex === -1 || currentIndex === statusOrder.length - 1) {
    return null; // Return null if current status is not found or it is the last status
  }

  return statusOrder[currentIndex + 1];
}

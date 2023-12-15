enum RequestStatus {
  WAITING_FOR_AN_EMAIL_VERIFICATION = 'WAITING_FOR_AN_EMAIL_VERIFICATION',
  WAITING_FOR_A_MECHANIC_ASSIGNMENT = 'WAITING_FOR_A_MECHANIC_ASSIGNMENT',
  WAITING_FOR_A_CAR = 'WAITING_FOR_A_CAR',
  CAR_DIAGNOSIS = 'CAR_DIAGNOSIS',
  IN_REPAIR = 'IN_REPAIR',
  READY_TO_GO = 'READY_TO_GO',
  DONE = 'DONE'
}

export const requestStatusMap: Record<RequestStatus, string> = {
  [RequestStatus.WAITING_FOR_AN_EMAIL_VERIFICATION]: 'Waiting for an email verification',
  [RequestStatus.WAITING_FOR_A_MECHANIC_ASSIGNMENT]: 'Waiting for a mechanic assignment',
  [RequestStatus.WAITING_FOR_A_CAR]: 'Waiting for a car',
  [RequestStatus.CAR_DIAGNOSIS]: 'Car diagnosis',
  [RequestStatus.IN_REPAIR]: 'In repair',
  [RequestStatus.READY_TO_GO]: 'Ready to go',
  [RequestStatus.DONE]: 'Done'
};

export default RequestStatus;

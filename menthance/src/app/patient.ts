export interface Patient {
  firstname: string
  lastname: string
  gender: string
  phoneNumber: string
  email: string
  hl7: string
}

export interface AnalyzedPatient {
  id: string
  patientId: string
  firstName: string
  lastName: string
  gender: string
  phoneNumber?: string
  email: string
  observationResult: string
  address?: {
    city: string
    full: string
    state: string
    street: string
    postalCode: string
  }
  createdDate: Date
}

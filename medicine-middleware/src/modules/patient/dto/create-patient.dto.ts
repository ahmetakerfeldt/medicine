export interface CreatePatientDto {
  patientId: string
  firstName: string
  lastName: string
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    full: string
  }
  gender: string
  phoneNumber: string
  email?: string
  observationResult?: string
}
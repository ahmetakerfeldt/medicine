export async function normalizeToJSON(data: string): Promise<any> {
  const hl7Data = parseHL7(data as string);
  const pidSegment = hl7Data['PID'][0];
  return extractPatientInfo(pidSegment)
}

export function extractPatientInfo(pidSegment: { fields: string[] }) {
  const fields = pidSegment.fields;

  const patientId = fields[2] ?? '';
  const [lastName, firstName] = (fields[4]?.split('^') ?? ['','']).map(x => x || undefined);
  const genderCode = fields[7]?.toUpperCase();
  const gender = genderCode === 'M' ? 'Male' : genderCode === 'F' ? 'Female' : 'Other';
  const addressFields = fields[10]?.split('^') ?? [];
  const address = {
    street: addressFields[0] ?? '',
    city: addressFields[2] ?? '',
    state: addressFields[3] ?? '',
    postalCode: addressFields[4] ?? '',
    full: addressFields.join(', ')
  };

  const phoneNumber = fields[12] || fields[13] || '';

  return { patientId, firstName, lastName, address, gender, phoneNumber };
}

export function parseHL7(hl7: string) {
  const lines = hl7.trim().split('\n');
  const result: Record<string, any[]> = {};

  for (const line of lines) {
    const parts = line.trim().split('|');
    const segmentType = parts[0];

    if (!result[segmentType]) {
      result[segmentType] = [];
    }

    result[segmentType].push({
      raw: line.trim(),
      fields: parts.slice(1),
    });
  }

  return result;
}

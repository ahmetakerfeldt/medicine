export const mockPatients = [
  {
    firstname: "John",
    lastname: "Doe",
    gender: "M",
    phoneNumber: "+12125551234",
    email: "john.doe@example.com",
    hl7: `
    MSH|^~\\&|LIS|HOSPITAL|EMR|CLINIC|20250512080000||ORU^R01|MSG001|P|2.3
    PID|1||10001^^^HOSP^MR||DOE^JOHN||19900520|M|||123 MAIN ST^^NEW YORK^^10001^USA||+12125551234
    OBR|1||11111|CBC^Complete Blood Count^L|||20250512073000
    OBX|1|NM|WBC^White Blood Cell Count^L||6.5|10^9/L|4.0-10.0|N|||F
    OBX|2|NM|RBC^Red Blood Cell Count^L||5.1|10^12/L|4.5-5.9|N|||F
    OBX|3|NM|HGB^Hemoglobin^L||15.2|g/dL|13.5-17.5|N|||F
    OBX|4|NM|HCT^Hematocrit^L||45.5|%|38.0-50.0|N|||F
    OBX|5|NM|PLT^Platelet Count^L||220|10^9/L|150-450|N|||F
    OBX|6|NM|MCV^Mean Corpuscular Volume^L||88.4|fL|80-100|N|||F
    OBX|7|NM|GLU^Glucose (Fasting)^L||91|mg/dL|70-99|N|||F
    `
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    gender: "F",
    phoneNumber: "+13125556789",
    email: "jane.smith@example.com",
    hl7: `
    MSH|^~\\&|LIS|HOSPITAL|EMR|CLINIC|20250512081000||ORU^R01|MSG002|P|2.3
    PID|1||10002^^^HOSP^MR||SMITH^JANE||19821212|F|||456 PARK AVE^^CHICAGO^^60614^USA||+13125556789
    OBR|1||22222|CHEM7^Basic Metabolic Panel^L|||20250512074500
    OBX|1|NM|ALT^Alanine Transaminase^L||33|U/L|7-56|N|||F
    OBX|2|NM|AST^Aspartate Transaminase^L||30|U/L|10-40|N|||F
    OBX|3|NM|ALP^Alkaline Phosphatase^L||78|U/L|40-129|N|||F
    OBX|4|NM|CRE^Creatinine^L||0.9|mg/dL|0.6-1.3|N|||F
    OBX|5|NM|BUN^Blood Urea Nitrogen^L||14|mg/dL|7-20|N|||F
    OBX|6|NM|BIL^Total Bilirubin^L||0.8|mg/dL|0.1-1.2|N|||F
    `
  },
  {
    firstname: "Michael",
    lastname: "Lee",
    gender: "M",
    phoneNumber: "+13235559876",
    email: "michael.lee@example.com",
    hl7: `
    MSH|^~\\&|LIS|HOSPITAL|EMR|ICU|20250512082000||ORU^R01|MSG003|P|2.3
    PID|1||10003^^^HOSP^MR||LEE^MICHAEL||19781103|M|||789 OAK ST^^LOS ANGELES^^90001^USA||+13235559876
    OBR|1||33333|CBC^Complete Blood Count^L|||20250512075000
    OBX|1|NM|WBC^White Blood Cell Count^L||28.5|10^9/L|4.0-10.0|H|||F
    OBX|2|NM|HGB^Hemoglobin^L||21.8|g/dL|13.5-17.5|H|||F
    OBX|3|NM|HCT^Hematocrit^L||68.9|%|38.0-50.0|H|||F
    OBX|4|NM|PLT^Platelet Count^L||980|10^9/L|150-450|H|||F
    OBX|5|NM|NEU^Neutrophils^L||92|%|40-70|H|||F
    OBX|6|NM|LYM^Lymphocytes^L||4|%|20-40|L|||F
    OBX|7|NM|CRP^C-Reactive Protein^L||110|mg/L|0-5|H|||F
    `
  },
  {
    firstname: "Sara",
    lastname: "Taylor",
    gender: "F",
    phoneNumber: "+17865551234",
    email: "sara.taylor@example.com",
    hl7: `
    MSH|^~\\&|LIS|HOSPITAL|EMR|ENDO|20250512083000||ORU^R01|MSG004|P|2.3
    PID|1||10004^^^HOSP^MR||TAYLOR^SARA||19970315|F|||321 SUNSET BLVD^^MIAMI^^33101^USA||+17865551234
    OBR|1||44444|GLU_PANEL^Glucose + Metabolic^L|||20250512075500
    OBX|1|NM|GLU^Glucose (Fasting)^L||298|mg/dL|70-99|H|||F
    OBX|2|NM|A1C^HbA1c^L||10.3|%|4.0-5.6|H|||F
    OBX|3|NM|BMI^Body Mass Index^L||37.2|kg/m2|18.5-24.9|H|||F
    OBX|4|NM|TRIG^Triglycerides^L||380|mg/dL|<150|H|||F
    OBX|5|NM|LDL^LDL Cholesterol^L||190|mg/dL|<100|H|||F
    OBX|6|NM|HDL^HDL Cholesterol^L||34|mg/dL|>40|L|||F
    `
  },
  {
    firstname: "David",
    lastname: "Jackson",
    gender: "M",
    phoneNumber: "+14695554321",
    email: "david.jackson@example.com",
    hl7: `
    MSH|^~\\&|LIS|HOSPITAL|EMR|HEPATOLOGY|20250512084000||ORU^R01|MSG005|P|2.3
    PID|1||10005^^^HOSP^MR||JACKSON^DAVID||19660428|M|||654 RIVER RD^^DALLAS^^75201^USA||+14695554321
    OBR|1||55555|LFT^Liver Function Test^L|||20250512080000
    OBX|1|NM|ALT^Alanine Transaminase^L||478|U/L|7-56|H|||F
    OBX|2|NM|AST^Aspartate Transaminase^L||382|U/L|10-40|H|||F
    OBX|3|NM|BIL^Total Bilirubin^L||3.6|mg/dL|0.1-1.2|H|||F
    OBX|4|NM|INR^Prothrombin Time INR^L||2.5||0.8-1.2|H|||F
    OBX|5|NM|ALB^Albumin^L||2.9|g/dL|3.4-5.4|L|||F
    OBX|6|NM|GGT^Gamma GT^L||220|U/L|0-51|H|||F
    `
  }
]

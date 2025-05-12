import { Column, DataType, Model, Table, PrimaryKey, Default } from 'sequelize-typescript';

@Table({ tableName: 'patients' })
export class Patient extends Model<Patient> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, unique: true })
  id: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  patientId: string;

  @Column({ type: DataType.STRING })
  firstName: string;

  @Column({ type: DataType.STRING })
  lastName: string;

  @Column({ type: DataType.STRING })
  gender: string;

  @Column({ type: DataType.STRING })
  phoneNumber: string;

  @Column({ type: DataType.STRING, allowNull: true })
  email: string;

  @Column({ type: DataType.TEXT('long'), allowNull: true })
  observationResult: string;

  @Column({ type: DataType.JSONB, allowNull: true })
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    full: string;
  };
}

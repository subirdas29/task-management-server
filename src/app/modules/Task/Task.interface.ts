export interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
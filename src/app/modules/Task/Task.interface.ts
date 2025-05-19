export interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
    status?: "Pending"|"Completed";
  createdAt: Date;
  updatedAt: Date;
}
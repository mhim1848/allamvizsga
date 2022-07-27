export interface QuestionType {
  id: string;
  qTitle: string;
  text: string;
  Image: Array<{ id: string; imgLink: string }>;
  code?: string;
  rating: number;
  // user:   User    @relation(fields: [userId], references: [id])
  userId: string;
}

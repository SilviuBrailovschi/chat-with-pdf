import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";
 
export const users = pgTable('chats', {
  id: serial('id').primaryKey(),
  pdfName: text('pdf_name').notNull(),
  pdfUrl: text('pdf_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  userId: varchar('user-id', {length:256}).notNull(),
  fileKey: text('file_key').notNull()
});
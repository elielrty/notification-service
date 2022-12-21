import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(noticationId: string): Promise<Notification | null>;
  abstract save(noticationId: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}

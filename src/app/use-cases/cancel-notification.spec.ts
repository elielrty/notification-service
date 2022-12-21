import { Notification } from '@app/entities/notification';
import { NotificationContent } from '@app/entities/notification-content';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be to Cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solitação de amizade'),
      recipientId: 'exemple-recipient-id',
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({ noticationId: notification.id });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        noticationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

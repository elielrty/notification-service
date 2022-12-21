import { NotificationContent } from '../notification-content';
describe('NotificationContent', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent(
      'voce recebeu uma solicção de amizade',
    );
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content w less than 5 characters', () => {
    expect(() => new NotificationContent('aaa')).toThrow();
  });

  it('should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});

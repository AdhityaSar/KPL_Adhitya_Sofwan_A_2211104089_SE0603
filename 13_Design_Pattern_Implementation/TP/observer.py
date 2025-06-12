# Observer Interface
class Observer:
    def update(self, message):
        pass

# Subject / Publisher
class Publisher:
    def __init__(self):
        self.subscribers = []

    def attach(self, observer):
        self.subscribers.append(observer)

    def detach(self, observer):
        self.subscribers.remove(observer)

    def notify(self, message):
        for observer in self.subscribers:
            observer.update(message)

# Concrete Observers
class EmailSubscriber(Observer):
    def update(self, message):
        print(f"[Email] Notified with message: {message}")

class SMSSubscriber(Observer):
    def update(self, message):
        print(f"[SMS] Notified with message: {message}")

# Penggunaan
news = Publisher()
email = EmailSubscriber()
sms = SMSSubscriber()

news.attach(email)
news.attach(sms)

news.notify("Berita terbaru hari ini!")
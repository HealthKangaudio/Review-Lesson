importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAVgnXXx3riTtpOmXVmjZzeoAaTWrsXyJ8",
  authDomain: "lesson-review-c38f0.firebaseapp.com",
  projectId: "lesson-review-c38f0",
  storageBucket: "lesson-review-c38f0.firebasestorage.app",
  messagingSenderId: "153225026603",
  appId: "1:153225026603:web:32a9fa42f6ca1e2fa51e6e",
  measurementId: "G-625VDFBWWD"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title =
    payload.notification?.title ||
    payload.data?.title ||
    "새 알림이 도착했습니다";

  const options = {
    body:
      payload.notification?.body ||
      payload.data?.body ||
      "앱을 열어 확인해보세요.",
    icon: "https://healthkangaudio.github.io/Review-Lesson/icons/icon-192.png",
    data: {
      url: "https://healthkangaudio.github.io/Review-Lesson/"
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(
      event.notification.data?.url ||
      "https://healthkangaudio.github.io/Review-Lesson/"
    )
  );
});

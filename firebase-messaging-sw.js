// Firebase 백그라운드 푸시 알림 서비스워커
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBesowYLPFM3pCK--rPs4nbDphroPKiNoc",
  authDomain: "enjoymath-planer.firebaseapp.com",
  projectId: "enjoymath-planer",
  storageBucket: "enjoymath-planer.firebasestorage.app",
  messagingSenderId: "929239886547",
  appId: "1:929239886547:web:2d6f2b4988dd4913834226"
});

const messaging = firebase.messaging();

// 백그라운드 메시지 처리 (앱이 꺼져있을 때)
messaging.onBackgroundMessage((payload) => {
  console.log('백그라운드 알림 수신:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'planner-reminder',
    renotify: true,
    data: payload.data
  });
});

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallback: "en",
    resources: {
      en: {
        translation: {
          title: "Pek Plastic",
          description: "Pek Plastic Machine is a leading company providing high-quality plastic production machines. We are a global market leader with offices in Turkey and China. We make a difference in the plastic industry by offering high-tech solutions.",
          quick_links: "Quick Links",
          follow_us: "Follow Us",
          copyright: "© 2024 Pek Plastik. All rights reserved.",
          happy_customers: "Happy Customers",
          completed_projects: "Completed Projects",
          global_export: "Export to Anywhere in the World",
          homepage: 'Home',
          aboutpage: 'About',
          projectspage: 'Projects',
          blogpage: 'Blog',
          contactpage: 'Contact',
          englishLang: 'English',
          russian: 'Russian',
          turkish: 'Turkish',
          sendMessage: 'Send a Message',
          nameLabel: 'Your Name',
          emailLabel: 'Your Email',
          phoneLabel: 'Your Phone',
          messageLabel: 'Your Message',
          buttonLabelSend: 'Send Message',
          buttonLabelSending: 'Sending...',
          contactHeader: 'Contact Us',
          contactDescription: 'Thank you for reaching out to us. We will get back to you as soon as possible.',
          address: 'Address:',
          phone: 'Phone:',
          email: 'Email:',
          hours: 'Hours:',
          contactHours: 'Mon - Fri, 9:00 AM - 6:00 PM',
          addressLocation: '123 Pek Plastics Ave, Baku, Azerbaijan',
          about_us: {
            title: "About Us",
            content: "As Delta Plastik Makine, we have been a leading company in the Turkish plastic industry since 1998. Founded under the leadership of İsmail Karasu, our company has made significant contributions to the development of the plastic industry in Turkey and has focused on producing high-quality, technological extruder machines. While our headquarters are located in Istanbul, we continue our production activities in Qingdao, China. Delta Plastik Makine produces high-quality machines that work uninterruptedly and exceed industry standards. Beyond Turkey, we have become a well-known brand in the plastic industry as a reputable Turkish company manufacturing machinery in China."
          },
        }
      },
      tr: {
        translation: {
          title: "Pek Plastik",
          description: "Pek Plastik Makine, yüksek kaliteli plastik üretim makineleri sağlayan öncü bir şirkettir. Türkiye ve Çin'deki ofislerimizle global pazarda lideriz. Yüksek teknolojiye sahip çözümler sunarak plastik sektöründe fark yaratıyoruz.",
          quick_links: "Hızlı Bağlantılar",
          follow_us: "Bizi Takip Edin",
          copyright: "© 2024 Pek Plastik. Tüm hakları saklıdır.",
          happy_customers: "Mutlu Müşteriler",
          completed_projects: "Tamamlanan Projeler",
          global_export: "Dünyanın Her Yerine İhracat",
          homepage: 'Ana Sayfa',
          aboutpage: 'Hakkımızda',
          projectspage: 'Projeler',
          blogpage: 'Blog',
          contactpage: 'İletişim',
          englishLang: 'İngilizce',
          russian: 'Rusça',
          turkish: 'Türkçe',
          sendMessage: 'Mesaj Gönderin',
          nameLabel: 'Adınız',
          emailLabel: 'Email Adresiniz',
          phoneLabel: 'Telefon Numaranız',
          messageLabel: 'Mesajınız',
          buttonLabelSend: 'Mesajı Gönder',
          buttonLabelSending: 'Gönderiliyor...',
          contactHeader: 'Bizimle İletişime Geçin',
          contactDescription: 'Bizimle iletişime geçtiğiniz için teşekkür ederiz. Size en kısa sürede geri döneceğiz.',
          address: 'Adres:',
          phone: 'Telefon:',
          email: 'E-posta:',
          hours: 'Çalışma Saatleri:',
          contactHours: 'Pzt - Cuma, 9:00 AM - 6:00 PM',
          addressLocation: '123 Pek Plastics Ave, Baku, Azerbaycan',
          about_us: {
            title: "Hakkımızda",
            content: "Delta Plastik Makine olarak, 1998 yılından beri Türkiye plastik sektöründe öncü rol üstlenen bir firma olarak faaliyet gösteriyoruz. İsmail Karasu'nun liderliğinde kurulan şirketimiz, Türkiye'deki plastik sektörünün gelişimine önemli katkılarda bulunmuş ve yüksek kaliteli, teknolojik ekstrüder makineleri üretmeye odaklanmıştır. Merkez ofisimiz İstanbul’da bulunurken, üretim faaliyetlerimizi Çin'in Qingdao kentinde sürdürüyoruz. Delta Plastik Makine, kesintisiz çalışan ve endüstri standartlarını aşan yüksek kaliteli makineler üretmektedir. Türkiye'nin ötesinde Çin'de makine imalatı yapan saygın bir Türk firması olarak, plastik sektöründe tanınan bir marka haline gelmiş durumdayız."
          },
        }
      },
      ru: {
        translation: {
          title: "Пек Пластик",
          description: "Пек Пластик Машина - ведущая компания, предоставляющая высококачественные машины для производства пластика. Мы являемся лидером мирового рынка с офисами в Турции и Китае. Мы вносим изменения в пластмассовую отрасль, предлагая высокотехнологичные решения.",
          quick_links: "Быстрые ссылки",
          follow_us: "Подписывайтесь на нас",
          copyright: "© 2024 Пек Пластик. Все права защищены.",
          happy_customers: "Счастливые клиенты",
          completed_projects: "Завершенные проекты",
          global_export: "Экспорт по всему миру",
          homepage: 'Главная',
          aboutpage: 'О Нас',
          projectspage: 'Проекты',
          blogpage: 'Блог',
          contactpage: 'Контакты',
          englishLang: 'Английский',
          russian: 'Русский',
          turkish: 'Турецкий',
          sendMessage: 'Отправить сообщение',
          nameLabel: 'Ваше имя',
          emailLabel: 'Ваш Email',
          phoneLabel: 'Ваш телефон',
          messageLabel: 'Ваше сообщение',
          buttonLabelSend: 'Отправить сообщение',
          buttonLabelSending: 'Отправка...',
          contactHeader: 'Свяжитесь с нами',
          contactDescription: 'Спасибо, что связались с нами. Мы ответим вам в ближайшее время.',
          address: 'Адрес:',
          phone: 'Телефон:',
          email: 'Эл. почта:',
          hours: 'Часы работы:',
          contactHours: 'Пон - Пт, 9:00 AM - 6:00 PM',
          addressLocation: '123 Pek Plastics Ave, Баку, Азербайджан',
          about_us: {
            title: "О нас",
            content: "Delta Plastik Makine с 1998 года является ведущей компанией в пластмассовой отрасли Турции. Основанная под руководством Исмаила Карасу, наша компания внесла значительный вклад в развитие пластмассовой отрасли в Турции и сосредоточилась на производстве высококачественных технологичных экструдерных машин. Пока наш главный офис находится в Стамбуле, мы продолжаем производственную деятельность в Циндао, Китай. Delta Plastik Makine производит высококачественные машины, которые работают бесперебойно и превосходят отраслевые стандарты. За пределами Турции мы стали известным брендом в пластмассовой промышленности как уважаемая турецкая компания, производящая машины в Китае."
          },
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

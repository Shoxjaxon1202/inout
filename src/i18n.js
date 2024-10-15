import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        telegram: "Telegram",
        download: "Taqdimot (35 mb)",
        apply: "Arizangizni yuboring",
        avtobus: "Avtobuslarda reklama",
        led: "LED ekranlarda reklama",
        bilboard: "Bilboardlarda reklama",
        asosiy: "Asosiy",
        xizmatlar: "Xizmatlar",
        biz: "Biz",
        haqimizda: "Haqimizda",
        kontakt: "Kontakt",
        vakansiya: "Vakansiya",
        sharhlar: "Sharhlar",
        placeholder: "Bu yerda reklama turi...",
        time: "9:00-17:00 du-ju",
        location: "O'zbekiston barcha hududlarda",
        social_media: "Bizning ijtimoiy tarmoqlarimiz",
        team_name: "Inout jamoasi",
        copyright: "Mualliflik",
        all_rights_reserved: "Barcha huquqlar himoyalangan",
        successMessage: "Endi siz bizning mijozimizsiz",
        errorMessage: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        service_intro: "Xizmatlarimiz bilan to'liq tanishmas ekansiz....",
        result_intro: "Yangi natijalarga erisha olmayapsizmi?",
        consultation_button: "Konsultatsiya olish",
        become_customer: "Mijoz bo'lish",
        name_label: "Ism",
        name_placeholder: "Ismingizni kiriting",
        email_or_telegram_label: "Elektron pochta yoki Telegram",
        email_or_telegram_placeholder: "Elektron pochta yoki Telegram",
        phone_label: "Telefon raqami",
        phone_placeholder: "Telefon raqami",
        company_label: "Sizning kompaniyangiz",
        company_placeholder: "Sizning kompaniyangiz",
        send_button: "Yuborish",
        your_ad_places: "Sizning reklamangiz uchun joylar",
        places: "joylar...",
        all_posters: "Barcha afishalar",
        empty: "Bo'sh",
        reserved: "Band qilingan",
        by_regions: "Viloyatlar bo'yicha",
        flagpoles: "Bayroq ustunlari",
        billboards: "Bilboardlar",
        banner_stands: "Banner stendlar",
        prismatrons: "Prizmatronlar",
        security_boundary: "Xavfsizlik devori",
        city_formats: "Shahar formatlari",
        led_monitor: "LED Monitor",
        video: "Video",
        all_videos: "Barcha videolar",
        title: "Biz nima qilamiz?",
        slides: [
          {
            subtitle: "Avtobusda tashqi tomon",
            text: "Shahar avtobuslarining tashqi tomoniga reklamangizni joylashtirib beramiz...",
            button: "Ko'proq",
          },
          {
            subtitle: "LED ekranlarda reklama",
            text: "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir.",
            button: "Ko'proq",
          },
          {
            subtitle: "Reklama xizmati",
            text: "Komponiya tashqi reklama sohasida eng katta ko'lami xizmatlarni taqdim etishga intiladi.",
            button: "Ko'proq",
          },
          {
            subtitle: "HD Ekran",
            text: "Z-Edge 4K monitor, U28I4K 28 dyuymli IPS monitor Ultra HD 3840x2160 yangilanish.",
            button: "Ko'proq",
          },
          {
            subtitle: "4K Monitor",
            text: "Z-Edge U27P4K 27 dyuymli gaming monitor Ultra HD 4K.",
            button: "Ko'proq",
          },
          {
            subtitle: "Salom Dunyo",
            text: "In fiction, the planet Mars, fourth from the Sun, has appeared as a setting in at least 5,000 works.",
            button: "Ko'proq",
          },
        ],
        team_title: "Bizning jamoamiz",
        team_text:
          "Bu sizning buyurtmangizni bajaradigan jamoa sifatli, ishonchli va xavfsiz.",
        view_full_list: "To'liq ro'yxatni ko'ring",
        // evaluate: "Baholash" ,"Bizda <span class='counts_span'>raqamlar mavjud</span>",

        employee_count: "Xodimlar soni",
        ad_campaigns_started: "Reklama kampaniyalarini boshladi",
        success_stories: "Muvaffaqiyatli holatlar",
        mijozlar_title: "Ishonchli mijozlar",
        mijozlar_text:
          "Davom etilmoqda... Sizning logoyingiz uchun ham joy mavjud",
        video_btn: "Mijoz bo'lish",
        contact_title: "Bizga qanday savolingiz bor?",
        contact_name: "Ism",
        contact_email: "Elektron pochta yoki Telegram",
        contact_phone: "Telefon raqami",
        contact_message: "Sizning xabaringiz",
        contact_submit: "Yuborish",
        contact_success: "Ma'lumotlar jo'natildi",
        contact_error: "Jo'natishda xatolik bor",
        contact_warning: "Kiritilgan ma'lumot noto'g'ri",
        statistics: {
          header: "Biz",
          about: "haqimizda",
          more_info: "Batafsil ma'lumot olish",
          year_success: "Yil Muvaffaqiyatli jamoaviy ish",
          employees: "Xodimlar Bizning kompaniyamizda ishlash",
          communities_promoted:
            "Jamiyatlar Ijtimoiy tarmoqlarda targ'ib qilingan",
          websites_launched: "Sayt Ishlab chiqilgan va ishga tushirilgan",
          products_on_grafana: "Grafana grafanadagi mahsulotlar",
        },
        comments: {
          title: "Sharhlar",
          about_us: "Biz haqimizda",
          write_review: "Sharh yozish",
          modal_title: "Sharh yozish",
          name_label: "Ismingiz",
          rating_label: "Baholash",
          comment_label: "Fikringiz",
          submit_button: "Yuborish",
          success_message: "Sizning sharhingiz qo'shildi.",
          date_format: "DD.MM.YYYY HH:mm",
        },
        employeeCount: "Xodimlar soni",
        campaignCount: "Reklama kampaniyalarini boshladi",
        successCaseCount: "Muvaffaqiyatli holatlar",
        headerTitle: "Bizda <span class='counts_span'>raqamlar mavjud</span>",
        about: {
          title: "Biz haqimizda",
          text1:
            "InOut reklama joylashtirish xizmatlarining keng assortimentini taklif etadi, eng ko'p talab qilinadigani Toshkentdagi tashqi reklamadir. Siz buyurtma berishingiz va reklamalarni LED ekranlarga, shuningdek, laytboks va bannerlarga joylashtirishingiz mumkin. Reklama imkon qadar tezroq, kafolatli va hamyonbop narxda amalga oshiriladi.",
          text2:
            "Tashqi reklama maqsadli auditoriyani kerakli ma'lumotlar bilan ta'minlashning arzon va juda samarali usulidir. Dastlabki ma'lumotlarni taqdim etish uchun tashrif qog'ozidan foydalanish maqsadli auditoriyangizning e'tiborini jalb qilish imkonini beradi. LED ekranlardan tashqi reklama sifatida foydalanish eng istiqbolli formatlardan biri bo'lib, ayni paytda o'z tovarlarini (xizmatlarini) reklama qiluvchi kompaniya yoki tashkilotning yuqori maqomini ko'rsatadi.",
          statistics: {
            success: "Muvaffaqiyatli jamoaviy ish",
            employees: "Bizning kompaniyamizda ishlash",
            socialsPromoted: "Ijtimoiy tarmoqlarda targ'ib qilingan",
            developedLaunched: "Ishlab chiqilgan va ishga tushirilgan",
            products: "Grafanadagi mahsulotlar",
          },
        },
        vakansiya_title: "Ish Joylari",
        vakansiya_operator: "qo'ng'iroqlar markazi operatori",
        vakansiya_skills: "Kerakli ko'nikmalar",
        vakansiya_education: "Ma'lumoti: o'rta maxsus",
        vakansiya_webDesigner: "Web dizayner",
        vakansiya_experience: "3 yillik tajriba",
        vakansiya_logistician: "Logist",
        vakansiya_more: "Ko'proq",
      },
    },
    en: {
      translation: {
        telegram: "Telegram",
        download: "Presentation (35 mb)",
        apply: "Send your application",
        avtobus: "Advertising on buses",
        led: "Advertising on LED screens",
        bilboard: "Advertising on billboards",
        asosiy: "Home",
        xizmatlar: "Services",
        biz: "About",
        haqimizda: "About",
        kontakt: "Contact",
        vakansiya: "Vacancy",
        sharhlar: "Reviews",
        placeholder: "Type of advertising here...",
        time: "9:00-17:00 Mon-Fri",
        location: "All regions of Uzbekistan",
        social_media: "Our social networks",
        team_name: "Inout Team",
        copyright: "Copyright",
        all_rights_reserved: "All rights reserved",
        successMessage: "Now you are our client!",
        errorMessage: "An error occurred. Please try again.",
        service_intro: "You are not fully familiar with our services...",
        result_intro: "Are you unable to achieve new results?",
        consultation_button: "Get Consultation",
        become_customer: "Become a Client",
        name_label: "Name",
        name_placeholder: "Enter your name",
        email_or_telegram_label: "Email or Telegram",
        email_or_telegram_placeholder: "Email or Telegram",
        phone_label: "Phone Number",
        phone_placeholder: "Phone number",
        company_label: "Your Company",
        company_placeholder: "Your Company",
        send_button: "Send",
        your_ad_places: "Places for your advertisement",
        places: "places...",
        all_posters: "All posters",
        empty: "Empty",
        reserved: "Reserved",
        by_regions: "By regions",
        flagpoles: "Flagpoles",
        billboards: "Billboards",
        banner_stands: "Banner stands",
        prismatrons: "Prismatrons",
        security_boundary: "Security boundary",
        city_formats: "City formats",
        led_monitor: "LED Monitor",
        video: "Video",
        all_videos: "All Videos",
        title: "What We Do?",
        slides: [
          {
            subtitle: "Bus Exterior Advertising",
            text: "We place your ad on the exterior of city buses...",
            button: "Read More",
          },
          {
            subtitle: "Advertising on LED Screens",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            button: "Read More",
          },
          {
            subtitle: "Advertising Services",
            text: "The company provides the largest range of services in the field of outdoor advertising...",
            button: "Read More",
          },
          {
            subtitle: "HD Screen",
            text: "Z-Edge 4K monitor, U28I4K 28-inch IPS Ultra HD monitor 3840x2160 refresh...",
            button: "Read More",
          },
          {
            subtitle: "4K Monitor",
            text: "Z-Edge U27P4K 27-inch gaming monitor Ultra HD 4K, frequency...",
            button: "Read More",
          },
          {
            subtitle: "Hello World",
            text: "In fiction, the planet Mars, fourth from the Sun, has appeared as a setting in at least 5,000 works...",
            button: "Read More",
          },
        ],
        team_title: "Our Team",
        team_text:
          "This is the team that will fulfill your order with quality, reliability, and safety.",
        view_full_list: "View full list",
        evaluate: "Evaluate",
        numbers_available:
          "We have <span class='counts_span'>numbers available</span>",
        employee_count: "Number of Employees",
        ad_campaigns_started: "Ad Campaigns Started",
        success_stories: "Successful Cases",
        mijozlar_title: "Trusted Clients",
        mijozlar_text: "Ongoing... There's a place available for your logo.",
        video_btn: "Become a Client",
        contact_title: "What question do you have for us?",
        contact_name: "Name",
        contact_email: "Email or Telegram",
        contact_phone: "Phone number",
        contact_message: "Your message",
        contact_submit: "Submit",
        contact_success: "Information sent",
        contact_error: "Error in sending",
        contact_warning: "Incorrect information entered",
        statistics: {
          header: "We",
          about: "about us",
          more_info: "Get more information",
          year_success: "Years of successful teamwork",
          employees: "Employees working in our company",
          communities_promoted: "Communities promoted on social networks",
          websites_launched: "Websites developed and launched",
          products_on_grafana: "Products on Grafana",
        },
        comments: {
          title: "Comments",
          about_us: "About Us",
          write_review: "Write a Review",
          modal_title: "Write a Review",
          name_label: "Your Name",
          rating_label: "Rating",
          comment_label: "Your Comment",
          submit_button: "Submit",
          success_message: "Your comment has been added.",
          date_format: "DD.MM.YYYY HH:mm",
        },
        employeeCount: "Number of Employees",
        campaignCount: "Advertising Campaigns Launched",
        successCaseCount: "Successful Cases",
        headerTitle: "We have <span class='counts_span'>numbers</span>",
        about: {
          title: "About Us",
          text1:
            "InOut offers a wide range of advertising placement services, with outdoor advertising in Tashkent being the most demanded. You can order and place advertisements on LED screens, lightboxes, and banners. Advertising is carried out as quickly, reliably, and at affordable prices.",
          text2:
            "Outdoor advertising is an inexpensive and very effective way to provide the target audience with the necessary information. Using business cards to present initial information allows you to attract the attention of your target audience. Using LED screens for outdoor advertising is one of the most promising formats and demonstrates the high status of the company or organization advertising its goods (services).",
          statistics: {
            success: "Successful teamwork",
            employees: "Employees in our company",
            socialsPromoted: "Promoted on social networks",
            developedLaunched: "Developed and launched",
            products: "Products in graphics",
          },
        },
        vakansiya_title: "Job Vacancies",
        vakansiya_operator: "Call Center Operator",
        vakansiya_skills: "Required Skills",
        vakansiya_education: "Education: Secondary Special",
        vakansiya_webDesigner: "Web Designer",
        vakansiya_experience: "3 years of experience",
        vakansiya_logistician: "Logistician",
        vakansiya_more: "More",
      },
    },
    ru: {
      translation: {
        telegram: "Телеграм",
        download: "Презентация (35 Мб)",
        apply: "Отправьте ваше заявление",
        avtobus: "Реклама на автобусах",
        led: "Реклама на светодиодных экранах",
        bilboard: "Реклама на билбордах",
        asosiy: "Главная",
        xizmatlar: "Услуги",
        biz: "О нас",
        haqimizda: "О нас",
        kontakt: "Контакт",
        vakansiya: "Вакансия",
        sharhlar: "Отзывы",
        placeholder: "Тип рекламы здесь...",
        time: "9:00-17:00 Пн-Пт",
        location: "Все регионы Узбекистана",
        social_media: "Наши социальные сети",
        team_name: "Команда Inout",
        copyright: "Авторское право",
        all_rights_reserved: "Все права защищены",
        successMessage: "Теперь вы наш клиент!",
        errorMessage: "Произошла ошибка. Пожалуйста, попробуйте снова.",
        service_intro: "Вы не полностью знакомы с нашими услугами...",
        result_intro: "Не можете достичь новых результатов?",
        consultation_button: "Получить консультацию",
        become_customer: "Станьте клиентом",
        name_label: "Имя",
        name_placeholder: "Введите ваше имя",
        email_or_telegram_label: "Электронная почта или Telegram",
        email_or_telegram_placeholder: "Электронная почта или Telegram",
        phone_label: "Номер телефона",
        phone_placeholder: "Номер телефона",
        company_label: "Ваша компания",
        company_placeholder: "Ваша компания",
        send_button: "Отправить",
        your_ad_places: "Места для вашей рекламы",
        places: "места...",
        all_posters: "Все постеры",
        empty: "Пусто",
        reserved: "Забронировано",
        by_regions: "По регионам",
        flagpoles: "Флагштоки",
        billboards: "Билборды",
        banner_stands: "Баннерные стойки",
        prismatrons: "Призматроны",
        security_boundary: "Ограничение безопасности",
        city_formats: "Городские форматы",
        led_monitor: "LED монитор",
        video: "Видео",
        all_videos: "Все видео",
        title: "Что мы делаем?",
        slides: [
          {
            subtitle: "Реклама на внешней стороне автобуса",
            text: "Мы размещаем вашу рекламу на внешней стороне городских автобусов...",
            button: "Читать далее",
          },
          {
            subtitle: "Реклама на светодиодных экранах",
            text: "Lorem Ipsum - это простой поддельный текст полиграфической и типографской отрасли...",
            button: "Читать далее",
          },
          {
            subtitle: "Рекламные услуги",
            text: "Компания предоставляет самый большой спектр услуг в области наружной рекламы...",
            button: "Читать далее",
          },
          {
            subtitle: "HD экран",
            text: "Монитор Z-Edge 4K, 28-дюймовый IPS Ultra HD монитор 3840x2160...",
            button: "Читать далее",
          },
          {
            subtitle: "4K монитор",
            text: "27-дюймовый игровой монитор Z-Edge U27P4K Ultra HD 4K...",
            button: "Читать далее",
          },
          {
            subtitle: "Привет, мир",
            text: "В художественной литературе планета Марс, четвертая от Солнца, появилась как место действия как минимум в 5000 произведениях...",
            button: "Читать далее",
          },
        ],
        team_title: "Наша команда",
        team_text:
          "Это команда, которая выполнит ваш заказ с качеством, надежностью и безопасностью.",
        view_full_list: "Посмотреть полный список",
        evaluate: "Оценить",
        numbers_available:
          "У нас есть <span class='counts_span'>доступные числа</span>",
        employee_count: "Количество сотрудников",
        ad_campaigns_started: "Запущенные рекламные кампании",
        success_stories: "Успешные случаи",
        mijozlar_title: "Надежные клиенты",
        mijozlar_text: "В процессе... Место для вашего логотипа доступно.",
        video_btn: "Станьте клиентом",
        contact_title: "Какой у вас вопрос к нам?",
        contact_name: "Имя",
        contact_email: "Электронная почта или Telegram",
        contact_phone: "Номер телефона",
        contact_message: "Ваше сообщение",
        contact_submit: "Отправить",
        contact_success: "Информация отправлена",
        contact_error: "Ошибка отправки",
        contact_warning: "Введена неверная информация",
        statistics: {
          header: "Мы",
          about: "о нас",
          more_info: "Получить больше информации",
          year_success: "Лет успешной командной работы",
          employees: "Сотрудники, работающие в нашей компании",
          communities_promoted: "Сообщества, продвигаемые в социальных сетях",
          websites_launched: "Сайты разработаны и запущены",
          products_on_grafana: "Продукты на Grafana",
        },
        comments: {
          title: "Отзывы",
          about_us: "О нас",
          write_review: "Оставить отзыв",
          modal_title: "Написать отзыв",
          name_label: "Ваше имя",
          rating_label: "Оценка",
          comment_label: "Ваш комментарий",
          submit_button: "Отправить",
          success_message: "Ваш отзыв добавлен.",
          date_format: "DD.MM.YYYY HH:mm",
        },
        employeeCount: "Количество сотрудников",
        campaignCount: "Запущенные рекламные кампании",
        successCaseCount: "Успешные случаи",
        headerTitle: "У нас есть <span class='counts_span'>цифры</span>",
        about: {
          title: "О нас",
          text1:
            "InOut предлагает широкий ассортимент услуг по размещению рекламы, наиболее востребованной из которых является наружная реклама в Ташкенте. Вы можете заказать и разместить рекламу на светодиодных экранах, лайтбоксах и баннерах. Реклама осуществляется как можно быстрее, надежно и по доступным ценам.",
          text2:
            "Наружная реклама - это недорогой и очень эффективный способ предоставить целевой аудитории необходимую информацию. Использование визиток для предоставления первоначальной информации позволяет привлечь внимание вашей целевой аудитории. Использование светодиодных экранов для наружной рекламы является одним из самых перспективных форматов и демонстрирует высокий статус компании или организации, рекламирующей свои товары (услуги).",
          statistics: {
            success: "Успешная командная работа",
            employees: "Сотрудников в нашей компании",
            socialsPromoted: "Продвижено в социальных сетях",
            developedLaunched: "Разработано и запущено",
            products: "Продукты в графике",
          },
        },
        vakansiya_title: "Вакансии",
        vakansiya_operator: "Оператор колл-центра",
        vakansiya_skills: "Необходимые навыки",
        vakansiya_education: "Образование: Среднее специальное",
        vakansiya_webDesigner: "Веб-дизайнер",
        vakansiya_experience: "3 года опыта",
        vakansiya_logistician: "Логист",
        vakansiya_more: "Подробнее",
      },
    },
  },
  fallbackLng: "uz",
  debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

// Export the i18n instance
export default i18n;

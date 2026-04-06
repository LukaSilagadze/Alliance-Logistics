import fs from 'fs';
import path from 'path';

const ge = {
  header: {
    monday_friday: "ორშაბათი - პარასკევი",
    email: "ელ-ფოსტა",
    contact_us_top: "დაგვიკავშირდით",
    nav_home: "მთავარი",
    nav_services: "სერვისები",
    nav_about: "ჩვენს შესახებ",
    nav_contact: "კონტაქტი",
    cta_contact: "დაგვიკავშირდით",
    monday_friday_hours: "10:00 - 18:00"
  },
  footer: {
    quick_links: "სწრაფი ბმულები",
    cargo_tracking: "ტვირთის თვალთვალი",
    privacy_policy: "კონფიდენციალურობის პოლიტიკა",
    contact_info: "საკონტაქტო ინფორმაცია",
    copyright: "ალიანს ლოჯისტიკი. ყველა უფლება დაცულია."
  },
  stats: {
    years_experience: "წლიანი გამოცდილება",
    global_partner: "გლობალური პარტნიორი",
    active_support: "აქტიური მხარდაჭერა",
    global_support: "გლობალური მხარდაჭერა"
  },
  home: {
    hero_title: "საიმედო<br />ლოჯისტიკური გადაწყვეტილებები",
    hero_subtitle: "„ალიანს ლოჯისტიკი“ გთავაზობთ სწრაფ, საიმედო და კონკურენტულ საერთაშორისო ლოჯისტიკურ მომსახურებას ნებისმიერი ტიპის ტვირთისთვის.",
    air_freight: "საჰაერო გადაზიდვები",
    road_freight: "სახმელეთო გადაზიდვები",
    sea_freight: "საზღვაო გადაზიდვები",
    rail_freight: "სარკინიგზო გადაზიდვები",
    warehouse_oversized: "არაგაბარიტული გადაზიდვები",
    air_desc: "შპს „ალიანს ლოჯისტიკი“ ახორციელებს საჰაერო გადაზიდვებს აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მსოფლიოს მასშტაბით. კომპანია უზრუნველყოფს სრულ ლოჯისტიკურ მომსახურებას, მათ შორის საბაჟო გაფორმებას, სპეციალური ტვირთების გადაზიდვას, დაზღვევასა და დოკუმენტაციის მომზადებას.",
    learn_more: "გაიგეთ მეტი",
    road_ftl: "მთლიანი ტვირთის გადაზიდვა (FTL)",
    road_ftl_desc: "„ალიანს ლოჯისტიკი“ ახორციელებს სახმელეთო გადაზიდვებსა და ევროპა–აზიის ტრანზიტს კარიდან კარამდე სრული მომსახურებით.",
    road_ltl: "ნაკრები ტვირთის გადაზიდვა (LTL)",
    road_ltl_desc: "კომპანია სთავაზობს ნაკრები ტვირთების გადაზიდვას ევროპის, თურქეთისა და აზიის მიმართულებით კონსოლიდაციითა და დოკუმენტაციის მომზადებით.",
    sea_desc: "გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი, ისე ნაკრები ტვირთების შემთხვევაში. საკონტეინერო გადაზიდვები როგორც პორტიდან პორტამდე, ასევე დატვირთვის მისამართიდან დაცლის მისამართამდე.",
    rail_desc: "კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში წარმოადგენს აზიას. კერძოდ ჩინეთს და ყაზახეთის. აღნიშნული ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი, ასევე ექსპორტი საქართველოდან აზიაში.",
    oversize_desc: "დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების ტრანსპორტირებას სახმელეთო, საზღვაო და სარკინიგზო გზით. ძირითადი მიმართულებებია აგრარული სექტორი, სამშენებლო სფერი, მძიმე ტექნიკა და ა.შ.",
    about_title: "ჩვენს შესახებ",
    about_text: "კომპანია „ალიანს ლოჯისტიკი“ საქართველოს ბაზარზე წარმოდგენილია 2011 წლიდან, როგორც საერთაშორისო გადამზიდავი ფორვარდერი კომპანია. კომპანია ორიენტირებულია მომხმარებლებისთვის მაღალი ხარისხის მომსახურების მიწოდებაზე, რომელსაც უზრუნველყობს გამოცდილი გუნდი."
  },
  about: {
    title: "ჩვენს შესახებ",
    text1: "კომპანია „ალიანს ლოჯისტიკი“ საქართველოს ბაზარზე წარმოდგენილია 2011 წლიდან, როგორც საერთაშორისო გადამზიდავი ფორვარდერი კომპანია. კომპანია ორიენტირებულია მომხმარებლებისთვის მაღალი ხარისხის მომსახურების მიწოდებაზე, რომელსაც უზრუნველყობს გამოცდილი გუნდი.",
    text2: "ჩვენი კომპანია ახორციელებს ნებისმიერი სახის თუ ზომის ტვირთების გადაზიდვას სახმელეთო, საჰაერო, სარკინიგზო და საზღვაო გზით. ჩვენი სანდო პარტნიორების ჩართულობით მოკლე დროში და კონკურენტულ ფასებში ვუზრუნველვყოფთ მცირე თუ დიდი პროექტების შესრულებას.",
    text3: "კომპანიისთვის მნიშვნელოვანია, დამკვეთის მინიმალური ჩართულობით, დროულად განახლებული სტატუსებით, მაქსიმალურად მოკლე დროში მოხდეს პროდუქციის დანიშნულების ადგილზე მიწოდება.",
    text4: "კომპანიის მიზანია მუდმივი განახლება როგორც მიმართულებების, ასევე კონტროლი და გაუმჯობესება გადაზიდვის ტარიფების თუ ტრანზიტული ვადების."
  },
  contact: {
    title: "კონტაქტი",
    info_title: "საკონტაქტო ინფორმაცია",
    info_subtitle: "დაგვიკავშირდით ნებისმიერი ქვემოთ მოცემული არხის საშუალებით.",
    address_label: "მისამართი",
    phone_label: "ტელეფონი",
    email_label: "ელ-ფოსტა"
  },
  services: {
    title: "ჩვენი სერვისები",
    road: {
      title: "სახმელეთო გადაზიდვები",
      p1: "კომპანიის ერთ ერთი პრიორიტეტული მიმართულებაა სახმელეთო გადაზიდვები. „ალიანს ლოჯისტიკი“ ახორციელებს როგორც საქართველოში იმპორტს, ასევე ტრანზიტული ტვირთების გადაზიდვას საქართველოს გავლით ევროპიდან აზიაში და პირიქით. ჩვენი მომსახურება მოიცავს:",
      check1: "კარიდან კარამდე გადაზიდვა",
      check2: "სახიფათო, აალებადი ADR ტიპის ტვირთების გადაზიდვა",
      check3: "ალკოჰოლური სასმელების გადაზიდვა",
      check4: "შესაბამისი საბაჟო ფორმალობების უზრუნველყოფა",
      check5: "დასაწყობება შესაბამის საბაჟო ტერმინალებზე",
      p2: "შპს „ალიანს ლოჯისტიკი“ გამოირჩევა კონკურენტული ფასებით ნაკრები ტვირთების გადაზიდვის მიმართულებაში. ტვირთების კონსოლიდირება ხდება ევროპის რამოდენიმე ქალაქში. ასევე აზიაში და თურქეთში.",
      check6: "სტანდარტული მშრალი ტვირთების გადაზიდვას",
      check7: "სამაცივრე და აალებადი ტვირთების გადაზიდვა",
      check8: "კარიდან კარამდე მიტანის უზრუნველყოფა",
      check9: "EX 1-ის, EURO1, CMR, T1 დოკუმენტის მომზადება",
      check10: "დასაწყობება შესაბამის საბაჟო და კერძო ტერმინალებზე.",
      check11: "ევროპის ნებისმიერ ქვეყანაში სატრანსპორტო-საბროკერო მომსახურების უზრუნველყოფას"
    },
    air: {
      title: "საჰაერო გადაზიდვები",
      p1: "შპს „ალიანს ლოჯისტიკში“ საჰაერო გადაზიდვები ხორციელდება ტვირთის აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მიწოდებით. ჩვენი სანდო პარტნიორების ჩართულობით გთავაზობთ საჰაერო გადაზიდვების შემდეგ მომსახურებებს.",
      check1: "ტვირთის შეგროვება მსოფლიოს მასშტაბით",
      check2: "საბაჟო-საბროკერო მომსახურება",
      check3: "კარიდან კარამდე გადაზიდვა მსოფლიოს მასშტაბით",
      check4: "საკონსულტაციო მომსახურება",
      check5: "სახიფათო და სპეციალური ტვირთების გადაზიდვა",
      check6: "სწრაფი საექსპედიტორო მომსახურება მსოფლიოს მასშტაბით",
      check7: "ინდივიდუალური დაზღვევა",
      check8: "ტრანსპორტირების დოკუმენტაციის მომზადება"
    },
    sea: {
      title: "საზღვაო გადაზიდვები",
      p1: "გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი, ისე ნაკრები ტვირთების შემთხვევაში. საკონტეინერო გადაზიდვები როგორც პორტიდან პორტამდე, ასევე დატვირთვის მისამართიდან დაცლის მისამართამდე. ჩვენი მომსახურება მოიცავს:",
      check1: "მთლიან და ნაკრებ საკონტეინერო გადაზიდვას",
      check2: "სახიფათო ტვირთების გადაზიდვას/ADR",
      check3: "გემის დაფრახტვას",
      check4: "პორტიდან პორტამდე ტრანსპორტირებას",
      check5: "მძიმეწონიანი და არაგაბარიტული ტვირთების პროექტირებას",
      check6: "საბაჟო მომსახურებას"
    },
    rail: {
      title: "სარკინიგზო გადაზიდვები",
      p1: "კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში წარმოადგენს აზიას. კერძოდ ჩინეთს და ყაზახეთის. აღნიშნული ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი, ასევე ექსპორტი საქართველოდან აზიაში."
    },
    oversize: {
      title: "არაგაბარიტული გადაზიდვები",
      p1: "შპს „ალიანს ლოჯისტიკი“ აქტიურად არის ჩართული საპროექტო სამუშაოებში. დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების ტრანსპორტირებას სახმელეთო, საზღვაო და სარკინიგზო გზით. ძირითადი მიმართულებებია აგრარული სექტორი, სამშენებლო სფერი, მძიმე ტექნიკა და ა.შ.",
      p2: "გადაზიდვისას განსაკუთრებული ყურადღება ექცევა სწორი დატვირთვის კონტროლს და სადაზღვეო პირობებს. რასაც გადაზიდვის რისკები მინიმუმამდე დაჰყავს."
    }
  }
};

const en = {
  header: ge.header, // Placeholder, already done
  footer: {
    quick_links: "Quick Links",
    cargo_tracking: "Cargo Tracking",
    privacy_policy: "Privacy Policy",
    contact_info: "Contact Information",
    copyright: "Alliance Logistics. All rights reserved."
  },
  stats: {
    years_experience: "Years of Experience",
    global_partner: "Global Partners",
    active_support: "Active Support",
    global_support: "Global Support"
  },
  home: {
    hero_title: "Reliable<br />Logistics Solutions",
    hero_subtitle: "Alliance Logistics offers fast, reliable and competitive international logistics services for any type of cargo.",
    air_freight: "Air Freight",
    road_freight: "Road Freight",
    sea_freight: "Sea Freight",
    rail_freight: "Rail Freight",
    warehouse_oversized: "Oversized Cargo",
    air_desc: "Alliance Logistics Ltd. carries out air transportation from airport to airport and door to door worldwide. The company provides full logistics services, including customs clearance, transportation of special cargo, insurance and documentation preparation.",
    learn_more: "Learn More",
    road_ftl: "Full Truck Load (FTL)",
    road_ftl_desc: "Alliance Logistics carries out land transportation and transit between Europe and Asia with full door-to-door service.",
    road_ltl: "Less than Truck Load (LTL)",
    road_ltl_desc: "The company offers LTL transportation to Europe, Turkey and Asia with consolidation and documentation preparation.",
    sea_desc: "We offer sea transportation for both full and grouped cargo. Container shipping from port to port, as well as from loading to unloading address.",
    rail_desc: "The priority direction of the company in rail transportation is Asia, namely China and Kazakhstan. We serve both import and export to these countries.",
    oversize_desc: "We offer customers oversized cargo transportation by land, sea and rail. The main directions are agricultural sector, construction sphere, heavy equipment, etc.",
    about_title: "About Us",
    about_text: "Alliance Logistics has been present on the Georgian market since 2011 as an international freight forwarder. The company focuses on providing high quality services to its customers, provided by an experienced team."
  },
  about: {
    title: "About Us",
    text1: "Alliance Logistics has been present on the Georgian market since 2011 as an international freight forwarder. The company focuses on providing high quality services to its customers, provided by an experienced team.",
    text2: "Our company carries out transportation of cargo of any kind or size by land, sea, rail and air. With the involvement of our reliable partners, we ensure the execution of small or large projects in a short time and at competitive prices.",
    text3: "It is important for the company to deliver products to their destination in the shortest possible time, with minimal customer involvement and timely updated statuses.",
    text4: "The company's goal is to constantly update directions, as well as control and improve transportation rates or transit times."
  },
  contact: {
    title: "Contact",
    info_title: "Contact Information",
    info_subtitle: "Contact us via any of the channels below.",
    address_label: "Address",
    phone_label: "Phone",
    email_label: "Email"
  },
  services: {
    title: "Our Services",
    road: {
      title: "Road Freight",
      p1: "One of the company's priority directions is land transportation. Alliance Logistics carries out both imports to Georgia and transit cargo through Georgia from Europe to Asia and vice versa. Our services include:",
      check1: "Door-to-door transportation",
      check2: "Transportation of dangerous, flammable ADR type cargo",
      check3: "Transportation of alcoholic beverages",
      check4: "Provision of appropriate customs formalities",
      check5: "Warehousing at appropriate customs terminals",
      p2: "Alliance Logistics is distinguished by competitive prices in LTL transportation. Cargo is consolidated in several cities in Europe, as well as in Asia and Turkey.",
      check6: "Transportation of standard dry cargo",
      check7: "Transportation of refrigerated and flammable cargo",
      check8: "Providing door-to-door delivery",
      check9: "Preparation of EX 1, EURO1, CMR, T1 documents",
      check10: "Warehousing at appropriate customs and private terminals.",
      check11: "Providing transport and brokerage services in any European country"
    },
    air: {
      title: "Air Freight",
      p1: "In Alliance Logistics, air shipments are carried out with airport-to-airport and door-to-door delivery of cargo. With the involvement of our reliable partners, we offer the following air transportation services.",
      check1: "Cargo collection worldwide",
      check2: "Customs-brokerage services",
      check3: "Door-to-door transportation globally",
      check4: "Consulting services",
      check5: "Transportation of dangerous and special cargo",
      check6: "Fast forwarding service worldwide",
      check7: "Individual insurance",
      check8: "Preparation of transportation documentation"
    },
    sea: {
      title: "Sea Freight",
      p1: "We offer sea transportation for both full and grouped cargo. Container shipping from port to port, as well as from the loading address to the unloading address. Our services include:",
      check1: "Full and combined container transportation",
      check2: "Transportation of dangerous goods / ADR",
      check3: "Ship chartering",
      check4: "Port to port transportation",
      check5: "Design of heavy and oversized cargo",
      check6: "Customs services"
    },
    rail: {
      title: "Rail Freight",
      p1: "The company's priority direction in rail transportation is Asia, particularly China and Kazakhstan. We manage both imports to Georgia and exports from Georgia to these regions."
    },
    oversize: {
      title: "Oversized Cargo",
      p1: "Alliance Logistics is actively involved in project work. We offer customers the transport of oversized cargo by land, sea, and rail. The main sectors are agriculture, construction, heavy equipment, etc.",
      p2: "During transportation, special attention is paid to proper load control and insurance conditions. This minimizes transportation risks."
    }
  }
};

const ru = {
  header: ge.header, // Placeholder
  footer: {
    quick_links: "Быстрые ссылки",
    cargo_tracking: "Отслеживание грузов",
    privacy_policy: "Политика конфиденциальности",
    contact_info: "Контактная информация",
    copyright: "Альянс Логистик. Все права защищены."
  },
  stats: {
    years_experience: "Лет опыта",
    global_partner: "Глобальных партнеров",
    active_support: "Активная поддержка",
    global_support: "Глобальная поддержка"
  },
  home: {
    hero_title: "Надежные<br />Логистические решения",
    hero_subtitle: "«Альянс Логистик» предлагает быстрые, надежные и конкурентоспособные международные логистические услуги для любых видов грузов.",
    air_freight: "Авиаперевозки",
    road_freight: "Автомобильные перевозки",
    sea_freight: "Морские перевозки",
    rail_freight: "Железнодорожные перевозки",
    warehouse_oversized: "Негабаритные грузы",
    air_desc: "ООО «Альянс Логистик» осуществляет авиаперевозки от аэропорта до аэропорта и от двери до двери по всему миру. Компания предоставляет полный комплекс логистических услуг, включая таможенное оформление, перевозку специальных грузов, страхование и подготовку документации.",
    learn_more: "Узнать больше",
    road_ftl: "Полная загрузка автомобиля (FTL)",
    road_ftl_desc: "«Альянс Логистик» осуществляет наземные перевозки и транзит между Европой и Азией с полным обслуживанием от двери до двери.",
    road_ltl: "Сборные грузы (LTL)",
    road_ltl_desc: "Компания предлагает перевозку сборных грузов в Европу, Турцию и Азию с консолидацией и подготовкой всей документации.",
    sea_desc: "Мы предлагаем морские перевозки как для полных, так и для сборных грузов. Контейнерные перевозки от порта к порту, а также от адреса погрузки до адреса выгрузки.",
    rail_desc: "Приоритетным направлением компании в железнодорожных перевозках является Азия, а именно Китай и Казахстан. Осуществляем экспорт-импорт.",
    oversize_desc: "Предлагаем перевозку негабаритных грузов наземным, морским и железнодорожным транспортом для секторов сельского хозяйства, строительства и тяжелой техники.",
    about_title: "О нас",
    about_text: "Компания «Альянс Логистик» представлена на рынке Грузии с 2011 года как международный экспедитор. Компания специализируется на предоставлении высококачественных услуг, обеспечиваемых опытной командой."
  },
  about: {
    title: "О нас",
    text1: "Компания «Альянс Логистик» представлена на рынке Грузии с 2011 года как международный экспедитор. Компания специализируется на предоставлении высококачественных услуг, обеспечиваемых опытной командой.",
    text2: "Наша компания осуществляет перевозку грузов любого вида и размера наземным, морским, железнодорожным и воздушным путями. Благодаря нашим надежным партнерам мы обеспечиваем выполнение мелких и крупных проектов.",
    text3: "Для компании важно доставлять продукцию в пункт назначения в кратчайшие сроки, с минимальным участием клиента и своевременно обновляемыми статусами.",
    text4: "Цель компании – постоянно обновлять направления, а также контролировать и улучшать тарифы на перевозки и сроки транзита."
  },
  contact: {
    title: "Контакты",
    info_title: "Контактная информация",
    info_subtitle: "Свяжитесь с нами через любой из нижеуказанных каналов.",
    address_label: "Адрес",
    phone_label: "Телефон",
    email_label: "Эл. почта"
  },
  services: {
    title: "Наши услуги",
    road: {
      title: "Автомобильные перевозки",
      p1: "Одним из приоритетных направлений компании являются наземные перевозки. «Альянс Логистик» осуществляет как импорт в Грузию, так и транзит грузов через Грузию из Европы в Азию и наоборот. Наши услуги включают:",
      check1: "Перевозка от двери до двери",
      check2: "Перевозка опасных, легковоспламеняющихся грузов (ADR)",
      check3: "Перевозка алкогольных напитков",
      check4: "Обеспечение соответствующих таможенных формальностей",
      check5: "Складирование на таможенных терминалах",
      p2: "ООО «Альянс Логистик» отличается конкурентоспособными ценами на перевозку сборных грузов. Консолидация грузов происходит в нескольких городах Европы, Азии и Турции.",
      check6: "Перевозка стандартных сухих грузов",
      check7: "Перевозка охлажденных и легковоспламеняющихся грузов",
      check8: "Доставка от двери до двери",
      check9: "Оформление документов EX 1, EURO1, CMR, T1",
      check10: "Складирование на частных и таможенных терминалах.",
      check11: "Предоставление брокерско-транспортных услуг в любой стране Европы"
    },
    air: {
      title: "Авиаперевозки",
      p1: "В «Альянс Логистик» авиаперевозки осуществляются с доставкой от аэропорта до аэропорта и от двери до двери. При участии наших надежных партнеров мы предлагаем следующие услуги по авиаперевозкам.",
      check1: "Сбор грузов по всему миру",
      check2: "Таможенно-брокерские услуги",
      check3: "Перевозка от двери до двери по всему миру",
      check4: "Консалтинговые услуги",
      check5: "Перевозка опасных и специальных грузов",
      check6: "Быстрая экспедиторская служба по всему миру",
      check7: "Индивидуальное страхование",
      check8: "Подготовка транспортной документации"
    },
    sea: {
      title: "Морские перевозки",
      p1: "Мы предлагаем морские перевозки как для полных, так и для сборных грузов. Контейнерные перевозки от порта к порту, а также от адреса погрузки до адреса выгрузки. Наши услуги включают:",
      check1: "Транспортировку полных и сборных контейнеров",
      check2: "Перевозку опасных грузов / ADR",
      check3: "Фрахтование судов",
      check4: "Транспортировку от порта к порту",
      check5: "Проектирование тяжелых и негабаритных грузов",
      check6: "Таможенные услуги"
    },
    rail: {
      title: "Железнодорожные перевозки",
      p1: "Приоритетным направлением компании в железнодорожных перевозках является Азия, в частности Китай и Казахстан. Мы управляем как импортом в Грузию, так и экспортом из Грузии в эти регионы."
    },
    oversize: {
      title: "Негабаритные грузы",
      p1: "«Альянс Логистик» активно участвует в проектной работе. Мы предлагаем клиентам транспортировку негабаритных грузов наземным, морским и железнодорожным транспортом. Основными секторами являются сельское хозяйство, строительство, тяжелая техника и т.д.",
      p2: "При транспортировке особое внимание уделяется правильному контролю загрузки и условиям страхования. Это сводит риски транспортировки к минимуму."
    }
  }
};

// Write translated JSON files, merging with existing headers
const EN_PATH = './src/locales/en/translation.json';
const KA_PATH = './src/locales/ka/translation.json';
const RU_PATH = './src/locales/ru/translation.json';

const kaData = JSON.parse(fs.readFileSync(KA_PATH, 'utf8'));
const enData = JSON.parse(fs.readFileSync(EN_PATH, 'utf8'));
const ruData = JSON.parse(fs.readFileSync(RU_PATH, 'utf8'));

ge.header = kaData.header;
en.header = enData.header;
ru.header = ruData.header;

fs.writeFileSync(KA_PATH, JSON.stringify(ge, null, 2));
fs.writeFileSync(EN_PATH, JSON.stringify(en, null, 2));
fs.writeFileSync(RU_PATH, JSON.stringify(ru, null, 2));

console.log('Translations synced');

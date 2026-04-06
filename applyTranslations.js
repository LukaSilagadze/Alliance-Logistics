import fs from 'fs';

function applyToHome() {
  const file = './src/pages/Home.jsx';
  let content = fs.readFileSync(file, 'utf8');

  // Insert import
  if (!content.includes("useTranslation")) {
    content = content.replace(
      "import StatCounter from '../components/StatCounter';",
      "import StatCounter from '../components/StatCounter';\nimport { useTranslation } from 'react-i18next';"
    );
  }

  // Insert hook
  if (!content.includes("const { t } = useTranslation();")) {
    content = content.replace(
      "const Home = () => {",
      "const Home = () => {\n  const { t } = useTranslation();"
    );
  }

  // Basic replacements
  content = content.replace(/საიმედო<br \/>ლოჯისტიკური გადაწყვეტილებები/g, "{window.i18nRawHtml('home.hero_title')}"); 
  // Wait, React escapes HTML. Let's use dangerouslySetInnerHTML or just t() if we don't need <br>. Let's keep it simple and just do what we can.
  // Actually, for React, `{t('home.hero_title')}` will render `<br />` as literal text if it contains tags. 
  // Wait, I can use `<span dangerouslySetInnerHTML={{ __html: t('home.hero_title') }} />`
  
  content = content.replace(/<h1 className="hero__title">საიმედო<br \/>ლოჯისტიკური გადაწყვეტილებები<\/h1>/g, "<h1 className=\"hero__title\" dangerouslySetInnerHTML={{ __html: t('home.hero_title') }}></h1>");
  
  content = content.replace(/„ალიანს ლოჯისტიკი“ გთავაზობთ სწრაფ, საიმედო და კონკურენტულ\s*საერთაშორისო ლოჯისტიკურ მომსახურებას ნებისმიერი ტიპის ტვირთისთვის\./g, "{t('home.hero_subtitle')}");
  
  content = content.replace(/<button className="btn btn--primary btn--lg">დაგვიკავშირდით<\/button>/g, "<button className=\"btn btn--primary btn--lg\">{t('home.cta')}</button>");

  content = content.replace(/<span className="services__nav-text">საჰაერო გადაზიდვები<\/span>/g, '<span className="services__nav-text">{t("home.air_freight")}</span>');
  content = content.replace(/<span className="services__nav-text">სახმელეთო გადაზიდვები<\/span>/g, '<span className="services__nav-text">{t("home.road_freight")}</span>');
  content = content.replace(/<span className="services__nav-text">საზღვაო გადაზიდვები<\/span>/g, '<span className="services__nav-text">{t("home.sea_freight")}</span>');
  content = content.replace(/<span className="services__nav-text">სარკინიგზო გადაზიდვები<\/span>/g, '<span className="services__nav-text">{t("home.rail_freight")}</span>');
  content = content.replace(/<span className="services__nav-text">არაგაბარიტული გადაზიდვები<\/span>/g, '<span className="services__nav-text">{t("home.warehouse_oversized")}</span>');

  content = content.replace(/<h1 className="services__inner-title">საჰაერო გადაზიდვები<\/h1>/g, '<h1 className="services__inner-title">{t("home.air_freight")}</h1>');
  content = content.replace(/<h1 className="services__inner-title">სახმელეთო გადაზიდვები<\/h1>/g, '<h1 className="services__inner-title">{t("home.road_freight")}</h1>');
  content = content.replace(/<h1 className="services__inner-title">საზღვაო გადაზიდვები<\/h1>/g, '<h1 className="services__inner-title">{t("home.sea_freight")}</h1>');
  content = content.replace(/<h1 className="services__inner-title">სარკინიგზო გადაზიდვები<\/h1>/g, '<h1 className="services__inner-title">{t("home.rail_freight")}</h1>');
  content = content.replace(/<h1 className="services__inner-title">არაგაბარიტული გადაზიდვები<\/h1>/g, '<h1 className="services__inner-title">{t("home.warehouse_oversized")}</h1>');


  content = content.replace(/შპს „ალიანს ლოჯისტიკი“ ახორციელებს საჰაერო გადაზიდვებს\s*აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მსოფლიოს\s*მასშტაბით\.\s*კომპანია უზრუნველყოფს სრულ ლოჯისტიკურ მომსახურებას,\s*მათ შორის საბაჟო გაფორმებას,\s*სპეციალური ტვირთების გადაზიდვას,\s*დაზღვევასა და დოკუმენტაციის მომზადებას\./g, "{t('home.air_desc')}");

  content = content.replace(/<span className="service__desc_subtitle">მთლიანი ტვირთის გადაზიდვა \(FTL\)<\/span>/g, '<span className="service__desc_subtitle">{t("home.road_ftl")}</span>');
  content = content.replace(/„ალიანს ლოჯისტიკი“ ახორციელებს სახმელეთო გადაზიდვებსა და\s*ევროპა–აზიის ტრანზიტს კარიდან კარამდე სრული\s*მომსახურებით\./g, "{t('home.road_ftl_desc')}");

  content = content.replace(/<span className="service__desc_subtitle">ნაკრები ტვირთის გადაზიდვა \(LTL\)<\/span>/g, '<span className="service__desc_subtitle">{t("home.road_ltl")}</span>');
  content = content.replace(/კომპანია სთავაზობს ნაკრები ტვირთების გადაზიდვას ევროპის,\s*თურქეთისა და აზიის მიმართულებით კონსოლიდაციითა და\s*დოკუმენტაციის მომზადებით\./g, "{t('home.road_ltl_desc')}");

  content = content.replace(/გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი, ისე ნაკრები\s*ტვირთების შემთხვევაში\.\s*საკონტეინერო გადაზიდვები როგორც\s*პორტიდან პორტამდე,\s*ასევე დატვირთვის მისამართიდან დაცლის\s*მისამართამდე\./g, "{t('home.sea_desc')}");

  content = content.replace(/კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში\s*წარმოადგენს აზიას\.\s*კერძოდ ჩინეთს და ყაზახეთის\.\s*აღნიშნული\s*ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი,\s*ასევე\s*ექსპორტი საქართველოდან აზიაში\./g, "{t('home.rail_desc')}");

  content = content.replace(/დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების ტრანსპორტირებას\s*სახმელეთო,\s*საზღვაო და სარკინიგზო გზით\.\s*ძირითადი მიმართულებებია\s*აგრარული სექტორი,\s*სამშენებლო სფერი,\s*მძიმე ტექნიკა და ა\.შ\./g, "{t('home.oversize_desc')}");

  content = content.replace(/გაიგეთ მეტი/g, "{t('home.learn_more')}");

  content = content.replace(/<h2 className="about__card-title">ჩვენს შესახებ<\/h2>/g, '<h2 className="about__card-title">{t("home.about_title")}</h2>');
  
  content = content.replace(/კომპანია „ალიანს ლოჯისტიკი“ საქართველოს ბაზარზე წარმოდგენილია 2011\s*წლიდან,\s*როგორც საერთაშორისო გადამზიდავი ფორვარდერი კომპანია\.\s*კომპანია ორიენტირებულია მომხმარებლებისთვის მაღალი ხარისხის\s*მომსახურების მიწოდებაზე,\s*რომელსაც უზრუნველყობს გამოცდილი გუნდი\./g, "{t('home.about_text')}");

  content = content.replace(/label="წლიანი გამოცდილება"/g, `label={t('stats.years_experience')}`);
  content = content.replace(/label="გლობალური პარტნიორი"/g, `label={t('stats.global_partner')}`);
  content = content.replace(/label="გლობალური მხარდაჭერა"/g, `label={t('stats.global_support')}`);
  
  fs.writeFileSync(file, content, 'utf8');
}

function applyToServices() {
  const file = './src/pages/Services.jsx';
  let content = fs.readFileSync(file, 'utf8');

  if (!content.includes("useTranslation")) {
    content = content.replace(
      "import './services.css';",
      "import './services.css';\nimport { useTranslation } from 'react-i18next';"
    );
  }

  if (!content.includes("const { t } = useTranslation();")) {
    content = content.replace(
      "const Services = () => {",
      "const Services = () => {\n  const { t } = useTranslation();"
    );
  }

  // Service grid headers
  content = content.replace(/<h3 className="service-item__title">სახმელეთო გადაზიდვები<\/h3>/g, '<h3 className="service-item__title">{t("services.road.title")}</h3>');
  content = content.replace(/<h3 className="service-item__title">საზღვაო გადაზიდვები<\/h3>/g, '<h3 className="service-item__title">{t("services.sea.title")}</h3>');
  content = content.replace(/<h3 className="service-item__title">საჰაერო გადაზიდვები<\/h3>/g, '<h3 className="service-item__title">{t("services.air.title")}</h3>');
  content = content.replace(/<h3 className="service-item__title">სარკინიგზო გადაზიდვები<\/h3>/g, '<h3 className="service-item__title">{t("services.rail.title")}</h3>');
  content = content.replace(/<h3 className="service-item__title">არაგაბარიტული გადაზიდვები<\/h3>/g, '<h3 className="service-item__title">{t("services.oversize.title")}</h3>');

  content = content.replace(/<h2 className="service-row__title">სახმელეთო გადაზიდვები<\/h2>/g, '<h2 className="service-row__title">{t("services.road.title")}</h2>');
  content = content.replace(/<h2 className="service-row__title">საჰაერო გადაზიდვები<\/h2>/g, '<h2 className="service-row__title">{t("services.air.title")}</h2>');
  content = content.replace(/<h2 className="service-row__title">საზღვაო გადაზიდვები<\/h2>/g, '<h2 className="service-row__title">{t("services.sea.title")}</h2>');
  content = content.replace(/<h2 className="service-row__title">სარკინიგზო გადაზიდვები<\/h2>/g, '<h2 className="service-row__title">{t("services.rail.title")}</h2>');
  content = content.replace(/<h2 className="service-row__title">არაგაბარიტული გადაზიდვები<\/h2>/g, '<h2 className="service-row__title">{t("services.oversize.title")}</h2>');

  content = content.replace(/<h1 className="hero-banner__title">ჩვენი სერვისები<\/h1>/g, '<h1 className="hero-banner__title">{t("services.title")}</h1>');

  content = content.replace(/მთლიანი ტვირთის გადაზიდვა \(FTL\)/g, '{t("home.road_ftl")}');
  content = content.replace(/ნაკრები ტვირთის გადაზიდვა \(LTL\)/g, '{t("home.road_ltl")}');
  
  content = content.replace(/კომპანიის ერთ ერთი პრიორიტეტული მიმართულებაა სახმელეთო\s*გადაზიდვები\.\s*„ალიანს ლოჯისტიკი“ ახორციელებს როგორც საქართველოში\s*იმპორტს,\s*ასევე ტრანზიტული ტვირთების გადაზიდვას საქართველოს\s*გავლით ევროპიდან აზიაში და პირიქით\.\s*ჩვენი მომსახურება მოიცავს:/g, '{t("services.road.p1")}');

  content = content.replace(/<span>კარიდან კარამდე გადაზიდვა<\/span>/g, '<span>{t("services.road.check1")}</span>');
  content = content.replace(/<span>სახიფათო, აალებადი ADR ტიპის ტვირთების გადაზიდვა<\/span>/g, '<span>{t("services.road.check2")}</span>');
  content = content.replace(/<span>ალკოჰოლური სასმელების გადაზიდვა<\/span>/g, '<span>{t("services.road.check3")}</span>');
  content = content.replace(/<span>შესაბამისი საბაჟო ფორმალობების უზრუნველყოფა<\/span>/g, '<span>{t("services.road.check4")}</span>');
  content = content.replace(/<span>დასაწყობება შესაბამის საბაჟო ტერმინალებზე<\/span>/g, '<span>{t("services.road.check5")}</span>');

  content = content.replace(/შპს „ალიანს ლოჯისტიკი“ გამოირჩევა კონკურენტული ფასებით ნაკრები\s*ტვირთების გადაზიდვის მიმართულებაში\.\s*ტვირთების კონსოლიდირება\s*ხდება ევროპის რამოდენიმე ქალაქში\.\s*ასევე აზიაში და თურქეთში\./g, '{t("services.road.p2")}');

  content = content.replace(/<span>სტანდარტული მშრალი ტვირთების გადაზიდვას<\/span>/g, '<span>{t("services.road.check6")}</span>');
  content = content.replace(/<span>სამაცივრე და აალებადი ტვირთების გადაზიდვა<\/span>/g, '<span>{t("services.road.check7")}</span>');
  content = content.replace(/<span>კარიდან კარამდე მიტანის უზრუნველყოფა<\/span>/g, '<span>{t("services.road.check8")}</span>');
  content = content.replace(/<span>EX 1-ის, EURO1, CMR, T1 დოკუმენტის მომზადება<\/span>/g, '<span>{t("services.road.check9")}</span>');
  content = content.replace(/<span>დასაწყობება შესაბამის საბაჟო და კერძო ტერმინალებზე\.<\/span>/g, '<span>{t("services.road.check10")}</span>');
  content = content.replace(/<span>ევროპის ნებისმიერ ქვეყანაში სატრანსპორტო-საბროკერო მომსახურების უზრუნველყოფას<\/span>/g, '<span>{t("services.road.check11")}</span>');

  content = content.replace(/შპს „ალიანს ლოჯისტიკში“ საჰაერო გადაზიდვები ხორციელდება ტვირთის\s*აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მიწოდებით\.\s*ჩვენი\s*სანდო პარტნიორების ჩართულობით გთავაზობთ საჰაერო გადაზიდვების\s*შემდეგ მომსახურებებს\./g, '{t("services.air.p1")}');

  content = content.replace(/<span>ტვირთის შეგროვება მსოფლიოს მასშტაბით<\/span>/g, '<span>{t("services.air.check1")}</span>');
  content = content.replace(/<span>საბაჟო-საბროკერო მომსახურება<\/span>/g, '<span>{t("services.air.check2")}</span>');
  content = content.replace(/<span>კარიდან კარამდე გადაზიდვა მსოფლიოს მასშტაბით<\/span>/g, '<span>{t("services.air.check3")}</span>');
  content = content.replace(/<span>საკონსულტაციო მომსახურება<\/span>/g, '<span>{t("services.air.check4")}</span>');
  content = content.replace(/<span>სახიფათო და სპეციალური ტვირთების გადაზიდვა<\/span>/g, '<span>{t("services.air.check5")}</span>');
  content = content.replace(/<span>სწრაფი საექსპედიტორო მომსახურება მსოფლიოს მასშტაბით<\/span>/g, '<span>{t("services.air.check6")}</span>');
  content = content.replace(/<span>ინდივიდუალური დაზღვევა<\/span>/g, '<span>{t("services.air.check7")}</span>');
  content = content.replace(/<span>ტრანსპორტირების დოკუმენტაციის მომზადება<\/span>/g, '<span>{t("services.air.check8")}</span>');

  content = content.replace(/გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი,\s*ისე ნაკრები\s*ტვირთების შემთხვევაში\.\s*საკონტეინერო გადაზიდვები როგორც პორტიდან\s*პორტამდე,\s*ასევე დატვირთვის მისამართიდან დაცლის მისამართამდე\.\s*ჩვენი მომსახურება მოიცავს:/g, '{t("services.sea.p1")}');

  content = content.replace(/<span>მთლიან და ნაკრებ საკონტეინერო გადაზიდვას<\/span>/g, '<span>{t("services.sea.check1")}</span>');
  content = content.replace(/<span>სახიფათო ტვირთების გადაზიდვას\/ADR<\/span>/g, '<span>{t("services.sea.check2")}</span>');
  content = content.replace(/<span>გემის დაფრახტვას<\/span>/g, '<span>{t("services.sea.check3")}</span>');
  content = content.replace(/<span>პორტიდან პორტამდე ტრანსპორტირებას<\/span>/g, '<span>{t("services.sea.check4")}</span>');
  content = content.replace(/<span>მძიმეწონიანი და არაგაბარიტული ტვირთების პროექტირებას<\/span>/g, '<span>{t("services.sea.check5")}</span>');
  content = content.replace(/<span>საბაჟო მომსახურებას<\/span>/g, '<span>{t("services.sea.check6")}</span>');

  content = content.replace(/კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში\s*წარმოადგენს აზიას\.\s*კერძოდ ჩინეთს და ყაზახეთის\.\s*აღნიშნული\s*ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი,\s*ასევე ექსპორტი\s*საქართველოდან აზიაში\./g, '{t("services.rail.p1")}');

  content = content.replace(/შპს „ალიანს ლოჯისტიკი“ აქტიურად არის ჩართული საპროექტო\s*სამუშაოებში\.\s*დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების\s*ტრანსპორტირებას სახმელეთო,\s*საზღვაო და სარკინიგზო გზით\.\s*ძირითადი\s*მიმართულებებია აგრარული სექტორი,\s*სამშენებლო სფერი,\s*მძიმე ტექნიკა\s*და ა\.შ\./g, '{t("services.oversize.p1")}');

  content = content.replace(/გადაზიდვისას განსაკუთრებული ყურადღება ექცევა სწორი დატვირთვის\s*კონტროლს და სადაზღვეო პირობებს\.\s*რასაც გადაზიდვის რისკები\s*მინიმუმამდე დაჰყავს\./g, '{t("services.oversize.p2")}');

  fs.writeFileSync(file, content, 'utf8');
}

applyToHome();
applyToServices();
console.log('Home and Services JSX files synced!');

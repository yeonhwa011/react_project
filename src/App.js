import { Helmet } from "react-helmet-async";
import { userTranslation } from "react-i18next";

const App = () => {
  const { t } = userTranslation();

  return (
    <>
      <Helmet>
        <tilte>사이트 제목 변경 테스트!</tilte>
      </Helmet>
      <div>{t("아이디")}</div>
      <div>{t("약관에_동의")}</div>
      <div>{t("없는_문구")}</div>
      <button type="button" onClick={() =>i18n.changeLanguage} >한국어</button>
      <button type="button" onClick={() =>i18n.changeLanguage}>English</button>
    </>
  );
};

export default App;

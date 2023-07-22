import Articles from 'components/articles/articles';
import AskDoctor from 'components/ask-doctor/ask-doctor';

export default function MainPage() {
  return (
    <>
      {/*
      //
    // Самое популярное и новости
    //

    //
    // Карусель
    //
    */}
      <Articles />
      {/*
    //
    // Подкасты
    //

    //
    // Подписка
    //

    //
    // Лекарства и БАД
    //
    */}

      <AskDoctor />
    </>
  );
}

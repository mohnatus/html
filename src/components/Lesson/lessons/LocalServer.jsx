export default function Component() {
  return (
    <div>
      <h2>Локальный доступ</h2>
      <p>
        Обычно для соединения браузера с сервером требуется интернет. Это так
        называемое <em className="term">удаленное соединение</em>.
      </p>
      <p>
        Но сервером может служить и ваш компьютер, то есть браузер может
        обращаться к документам, которые лежат на том же самом компьютере, где
        работает браузер - это называется{" "}
        <em className="term">локальный доступ</em>
      </p>
      <h2>Создание локального сайта</h2>

      <p>
        Можем убедиться в этом. Создаем простой документ с расширением{" "}
        <code className="file">page.html</code> (в блокноте? рассказать, как
        работает Блокнот).
      </p>

      <p>
        Теперь на нашем локальном сервере лежит текстовый документ, который в
        перспективе может стать страницей сайта. Как нам на него посмотреть.
        Нужно открыть его с помощью браузера. Как открыть локальный документ в
        браузере
      </p>

      <h2>Локальная разработка</h2>

      <p>
        Обычно на начальном этапе разработка ведется именно локально, так как
        это быстрее и удобнее. Но технически это ровно то же самое, что и
        удаленные сайты. Вы с одинаковым успехом можете обратиться к удаленному
        серверу через интернет и к своему собственному компьютеру, получить
        текстовый HTML-документ и увидеть, как он превращается в сайт.
      </p>
    </div>
  );
}

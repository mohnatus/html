export default function Component() {
  return (
    <div>
      <h2>Нумерованный список</h2>
      <p>
        Для оформления списков на веб-страницах есть сразу несколько тегов. Тег
        <strong className="tag">ol</strong> - ordered list обозначает
        упорядоченный, или нумерованный, список. Этот тег оборачивает список
        целиком.
      </p>
      <h2>Пункт списка</h2>
      <p>
        Каждый пункт списка должен быть обернут в тег
        <strong className="tag">li</strong> - list item. Благодаря этому у
        каждого пункта появится свой собственный маркер списка. В данном случае
        номер.
      </p>
      <h2>Структура списка</h2>

      <p>
        Важно соблюдать структуру списка: внутри тега{" "}
        <strong className="tag">ol</strong> должны находиться только вложенные
        теги <strong className="tag">li</strong> и больше ничего. Ни других
        тегов, ни простого текста.
      </p>

      <p>
        При этом внутри тегов <strong className="tag">li</strong> мы можем
        спокойно использовать другие теги, например,{" "}
        <strong className="tag">b</strong>.
      </p>

      <h2>Маркированный список</h2>

      <p>
        Кроме нумерованного есть маркированный список, с кружочками вместо
        номеров. Это тег <strong className="tag">ul</strong> - unordered list.
      </p>

      <p>
        Внутри него также каждый пункт оборачивается в тег{" "}
        <strong className="tag">li</strong>.
      </p>
    </div>
  );
}

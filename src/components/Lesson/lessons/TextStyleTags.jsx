export default function Component() {
  return (
    <div>
      <p>
        Начнем с изучения тегов, изменяющих стиль шрифта. С одним из них мы уже
        знакомы - <strong className="tag">b</strong>, от слова bold. Придает
        тексту жирное начертание.
      </p>
      <p>
        Тег <strong className="tag">i</strong> - italic, курсивное начертание.
      </p>
      <p>
        Тег <strong className="tag">u</strong> - underline, подчеркнутый текст
      </p>
      <p>
        Тег <strong className="tag">del</strong> - deleted, зачеркнутый
      </p>
      <p>
        Тег <strong className="tag">small</strong> - уменьшает размер шрифта.
      </p>
      <p>
        Тег <strong className="tag">sub</strong> - subscript, подстрочный шрифт,{" "}
      </p>
      <p>
        Тег <strong className="tag">sup</strong> - superscript, надстрочный
        шрифт - эти два тега очень полезны при оформлении индексов в формулах.
      </p>
      <p>
        Тег <strong className="tag">code</strong> - моноширинный шрифт.
      </p>

      <h2>Вложенность тегов</h2>
      <p>
        Важно: теги должны закрываться последовательно, часть одного тега не
        может разрывать другой. Но один тег может целиком находиться внутри
        другого.
      </p>
    </div>
  );
}

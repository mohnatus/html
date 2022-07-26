export default function Component() {
  return (
    <div>
      <p>
        Тег <strong className="tag">video</strong> очень похож на{" "}
        <strong className="tag">img</strong>, он тоже одиночный и тоже
        замещается медиа-контентом.
      </p>
      <p>Тег </p>

      <h2>Атрибуты</h2>

      <p>
        {" "}
        атрибут <strong className="attr">src</strong>{" "}
      </p>
      <p>
        Атрибуты <strong className="attr">width</strong>,{" "}
        <strong className="attr">height</strong>{" "}
      </p>

      <h2>Управление воспроизведением</h2>
      <p>
        Несколько атрибутов для управления проигрыванием видео:{" "}
        <strong className="attr">controls</strong>,{" "}
        <strong className="attr">loop</strong>,
        <strong className="attr">muted</strong> - все они логические
      </p>
    </div>
  );
}

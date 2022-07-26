export default function Component() {
    return <div>Таблица - это сложная структура данных, поэтому в HTML есть ряд возможностей для более тонкой настройки таблиц - с помощью атрибутов.
    Размеры. width, height. Помним, что в таблице ячейки связаны, поэтому изменяют размеры вместе.
    Выравнивание в ячейках. Для ячеек таблицы - td и th доступен атрибут align, который определяет, как текст выравнивается внутри ячейки. Возможные значения left, center, right (часто используемые, еще justify)
    Еще есть атрибут valign, который отвечает за вертикальное выравнивание. Значения - top, middle, bottom (baseline).
    Объединение ячеек. colspan - указывает, на сколько колонок должна растянуться ячейка. Важно: общее количество занятых колонок в каждом ряду должно быть одинаково. То есть мы должны просто пропустить нужное количество колонок в этом ряду.
    rowspan - указывает, на сколько рядов должна растянуться ячейка. Общее количество занятых рядов в каждой колонке должно быть одинаково.
    </div>;
  }
  
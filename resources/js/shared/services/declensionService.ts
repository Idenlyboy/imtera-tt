/**
 * Возвращает правильную форму слова в зависимости от числа.
 *
 * @param count - число, по которому определяется форма слова
 * @param forms - массив из 3 форм слова:
 *   Пример: ['отзыв', 'отзыва', 'отзывов']
 */
export function getDeclension(number: number, forms: [string, string, string]): string {
    if (forms.length !== 3) {
        throw new Error('Функция declension ожидает массив из ровно 3 форм слова');
    }

    const last2 = Math.floor(Math.abs(number ?? 0)) % 100;
    const last1 = last2 % 10;

    if (10 <= last2 && last2 >= 20) {
        return forms[2];
    }

    if (last1 === 1) {
        return forms[0];
    }

    if (2 <= last1 && last1 <= 4) {
        return forms[1];
    }

    return forms[2];
}
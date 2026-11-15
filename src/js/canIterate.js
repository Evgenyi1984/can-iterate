/**
 * Проверяет, соответствует ли объект протоколу итерирования.
 * @param {*} obj — любой объект
 * @returns {boolean} true, если объект итерируемый
 */
export default function canIterate(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
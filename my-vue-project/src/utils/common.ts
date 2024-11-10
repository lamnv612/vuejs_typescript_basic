/**
 * 指定した桁数のランダムな数字を生成する関数です。
 * 
 * @param {number} digits - 生成するランダムな数字の桁数
 * @returns {number} - 指定された桁数のランダムな数字
 * 
 * @example
 * generateRandomNumber(3); // 例: 123
 * generateRandomNumber();  // デフォルトで3桁のランダムな数字が返されます（例: 456）
 */
export const generateRandomNumber = (digits: number = 3): number => {
  const min = Math.pow(10, digits - 1);  // 最小値（例えば、3桁の場合は100）
  const max = Math.pow(10, digits) - 1;  // 最大値（例えば、3桁の場合は999）

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

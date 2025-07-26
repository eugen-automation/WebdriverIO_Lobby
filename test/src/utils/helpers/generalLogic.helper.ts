

export function generateRandomNumber(min: number = 0, max: number = 10): number {
  console.log('@@@ called generateRandomNumber() with arguments: ', min, max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return true;
};

export function areStringsEqualBeforeAndAfterComma(str1: string, str2: string): boolean {
  const parts1 = str1.split(',').map((part) => part.trim());
  const parts2 = str2.split(',').map((part) => part.trim());

  // Sort and compare the components
  return JSON.stringify(parts1.sort()) === JSON.stringify(parts2.sort());
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getKeyByValue(value: any, enumName: any) {

  const indexOfS = Object.values(enumName).indexOf(value as unknown as typeof enumName);
  const key = Object.keys(enumName)[indexOfS];

  return key;
}

export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (const element of obj) {
      arrCopy.push(deepClone(element));
    }
    return arrCopy;
  }

  // Handle Object with prototype chain
  const clone = Object.create(Object.getPrototypeOf(obj));
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

export async function getTextEvenIfHidden(element: ChainablePromiseElement) {
  console.log('@@@ getTextEvenIfHidden function was called');

  try {
      let text = '';

      // wait for the element to exist
      await element.waitForExist({ timeout: 60000 });

      // try get the text
      text = await element.getText();
      if (text) {
          console.log('Visible Text:', text);
      }

      // if empty
      if (!text) {
          text = await element.getProperty('innerText');
          console.log('innerText :>> ', text);
      }
      // if empty
      if (!text) {
          text = await browser.execute((elem) => {
              return elem?.['textContent'];
          }, element);
          console.log('Invisible Text:', text);
      }

      return { value: text, error: undefined };
  }
  catch (err) {
      throw new Error(err);
  }
}
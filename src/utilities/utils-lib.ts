export function isEmpty(value: string | number | boolean | object): boolean {
  if (
    value === undefined ||
    value === null ||
    (typeof value == 'string' && value.length === 0) ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.entries(value).length === 0) ||
    (typeof value === 'object' && Object.values(value).some((e) => Boolean(e)) === false)
  ) {
    return true;
  }

  return false;
}

export function removeTags(str: string) {
  if (isEmpty(str)) {
    return;
  }

  str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, '');
}

export function formatDate(dateString: string, returnSymbol = '') {
  if (!isEmpty(dateString)) {
    return new Date(dateString).getFullYear();
  }

  return returnSymbol;
}

export const getCookie = (key) => {
    const searchKey = `${key}=`;
    const cookies = document.cookie ? document.cookie.split('; ') : [];
    const result = cookies.find((cookie) => cookie.startsWith(searchKey));
    if (result) {
      return result.split('=')[1];
    }
    return null;
  };
  
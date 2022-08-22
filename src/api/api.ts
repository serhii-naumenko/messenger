const API_URL = 'https://api.chucknorris.io/jokes/random';

interface Answer {
  icon_url: string,
  id: string,
  url: string,
  value: string,
}

export const getAnswerFromChack = async (): Promise<Answer> => {
  const response = await fetch(`${API_URL}`, { method: 'GET' });

  const result = await response.json()
    .catch((error) => {
      throw Error(`${error}`);
    });

  return result;
};

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

export async function resp() {
  const answerChackServer = await getAnswerFromChack();
  const answerFromChack = {
    ...answerChackServer,
  };

  // eslint-disable-next-line no-console
  console.log(answerFromChack.value);
}

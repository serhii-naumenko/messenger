interface OnePhrase {
  isAnswer: boolean,
  text: string,
  time: string,
}

export interface OneContactInfo {
  id: string,
  name: string,
  dialog: OnePhrase[],
  isActive: boolean,
  picture: string,
}

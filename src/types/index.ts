export interface Issue {
  id: number,
  number: number,
  title: string,
  created_at: string,
  comments: number
  login: string
  avatar_url: string
  body?: string
}

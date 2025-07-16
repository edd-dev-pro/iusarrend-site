export type Block =
  | { type: 'list'; items: string[] }
  | { type: 'note'; text: string }

export interface Section {
  key: string
  title: string
  blocks: Block[]
}

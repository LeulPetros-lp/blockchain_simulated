export interface Block {
  index: number,
  hash: string,
  previous_hash: string, 
  timestamp: number,
  data: string
}

export interface Status {
    warning: string
    type:  'danger' | 'success' | 'warning' ;
}
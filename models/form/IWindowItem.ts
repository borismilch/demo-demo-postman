export type IWindowItem = {
  method: string,
  name: string, 
  params: IParam[],
  headers: IHeader[],
  body: string,
  id: string
}

export type IParam = {
  key: string 
  value: string 
  description: string
}

interface IHeader extends IParam {}
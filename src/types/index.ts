export type PostObj = {
  id: number
  created_at: string
  updated_at: string
  title: string
  content: string
  category_id: number | null
  img_url: string
  category: {
    id: number
    name: string
    created_at: null
    updated_at: null
  } | null
}

export type Category = {
  id: number
  name: string
  created_at: null
  updated_at: null
}

export type MessageForm = {
  formValues: {
    title: string
    categoryId: number
    content: string
  }
  errors: ErrorObject | null
  succes: boolean
  succesMessage: string
}

export type State = {
  pageNr: number
  loadMorePosts: boolean
  posts: PostObj[] | []
  categories: Category[] | []
  messageForm: MessageForm
}

export type Context = {
  state: State
  dispatch: React.Dispatch<Action>
}

export type Children = {
  children: React.ReactNode
}

export type ErrorObject = {
  ok: false
  title?: string[]
  category_id?: string[]
  content?: string[]
}

export type PostMessageTypes =
  | 'FORM_VALUE_CHANGED'
  | 'SUBMIT_BUTTON_CLICKED'
  | 'NEW_MESSAGE_BUTTON_CLICKED'
  | 'SUBMIT_MESSAGE_SUCCESFUL'
  | 'SUBMIT_MESSAGE_FAILED'

export type Action = {
  type:
    | 'POSTS_FETCHED'
    | 'CATEGORIES_FETCHED'
    | 'POSTS_ADDED_TO_STATE'
    | 'ALL_POSTS_FETCHED'
    | PostMessageTypes
  name?: string
  value?: string
  id?: number
  nr?: number
  boolean?: boolean
  posts?: PostObj[]
  categories?: Category[]
  errors?: ErrorObject
}

export type DecoratedAction = Action & {
  rootState: State
}

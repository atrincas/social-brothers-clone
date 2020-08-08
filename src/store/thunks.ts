import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { ApiService } from './services'
import { setPosts, setLoadMorePosts, setCategories, setErrors, setSuccesMessage } from './actions'
import { State, Category, PostObj } from '../types'

export function fetchPosts() {
  return async function (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => State) {
    try {
      const apiService = new ApiService()
      const state = getState()
      const { pageNr } = state
      const url = `http://178.62.198.162/api/posts?page=${pageNr}`
      const result = (await apiService.fetchData(url)) as PostObj[]

      if (result.length > 0) {
        dispatch(setPosts(result))
      } else {
        dispatch(setLoadMorePosts(false))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchCategories() {
  return async function (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => State) {
    try {
      const apiService = new ApiService()
      const url = 'http://178.62.198.162/api/categories'
      const result = (await apiService.fetchData(url)) as Category[]

      if (result) {
        dispatch(setCategories(result))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function postMessage() {
  return async function (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => State) {
    try {
      const apiService = new ApiService()
      const state = getState()
      const { messageForm } = state
      const { formValues } = messageForm
      const { title, categoryId, content } = formValues
      const result = await apiService.postMessage(title, categoryId, content)

      if (result.ok) {
        dispatch(setSuccesMessage(`${title} is succesvol verzonden!`))
      } else {
        dispatch(setErrors(result))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

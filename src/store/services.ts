import { PostObj, Category } from '../types'

export class ApiService {
  handleError(error: Error) {
    console.error(error)
  }

  async fetchData(url: string): Promise<undefined | PostObj[] | Category[]> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': process.env.REACT_APP_API_TOKEN as string
        }
      })
      const json = await response.json()
      return json
    } catch (error) {
      this.handleError(error)
    }
  }

  async postMessage(title: string, categoryId: number, content: string) {
    try {
      const response = await fetch('http://178.62.198.162/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Token': process.env.REACT_APP_API_TOKEN as string
        },
        body: JSON.stringify({ title: title, content: content, category_id: categoryId })
      })
      const result = await response.json()
      const finalResult = { ...result, ok: response.ok }

      return finalResult
    } catch (error) {
      this.handleError(error)
    }
  }
}

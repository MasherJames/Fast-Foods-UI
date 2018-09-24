// This class fetches all the common urls and common methods to be used
class Api {
  constructor() {
    this.BaseUrl = "https://foods-fasty.herokuapp.com/api/v1";
  }

  post(endpoint, data, token = null) {
    return fetch(`${this.BaseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  }

  get(endpoint, token = null) {
    return fetch(`${this.BaseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  }

  update(endpoint, data, token = null) {
    return fetch(`${this.BaseUrl}${endpoint}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  }

  delete(endpoint, token = null) {
    return fetch(`${this.BaseUrl}${endpoint}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  }
}

const commonEndpoint = new Api();
export default commonEndpoint;

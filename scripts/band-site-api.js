export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComment(newComment) {
    return await axios.post(
      this.baseUrl + "/comments?api_key=" + this.apiKey,
      newComment
    );
  }

  async likeComment(commentID) {
    return await axios.put(
      this.baseUrl + "/comments/" + commentID + "/like?api_key=" + this.apiKey
    );
  }

  async deleteComment(commentID) {
    return await axios.delete(
      this.baseUrl + "/comments/" + commentID + "?api_key=" + this.apiKey
    );
  }

  async getComments() {
    try {
      const response = await axios.get(
        this.baseUrl + "/comments?api_key=" + this.apiKey
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        this.baseUrl + "/showdates?api_key=" + this.apiKey
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

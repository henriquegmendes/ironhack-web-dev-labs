class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  getOneRegister (characterId) {
    return new Promise(resolve => {
      axios.get(`${this.BASE_URL}/characters/${characterId}`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.log(error);
        resolve({});
      });
    });
  }

  async createOneRegister (newCharacterObject) {
    try {
      await axios.post(`${this.BASE_URL}/characters`, newCharacterObject);
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister (updatedCharacterObject, characterId) {
    try {
      await axios.put(`${this.BASE_URL}/characters/${characterId}`, updatedCharacterObject);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneRegister (characterId) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/${characterId}`);
    } catch (error) {
      console.log(error);
    }
  }
}

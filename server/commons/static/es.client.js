import ESClientConfig from "../../config/es.client.conf";

export default class ESClient {

    esClient;

    static setEsClient (client) {
      this.esClient = client;
    }

    static getEsClient () {
      if (this.esClient) {
        return this.esClient;
      } else {
        ESClientConfig.init();
        return this.esClient;
      }
    }
}

import Elasticsearch from "elasticsearch";
import ESClient from "../commons/static/es.client";

export default class ESClientConfig {
    static init() {
      var elasticClient = new Elasticsearch.Client({
        host: 'localhost:9200',
        log: 'info'
      });

      ESClient.setEsClient(elasticClient);
    }
}

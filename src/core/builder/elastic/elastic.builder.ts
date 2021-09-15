/**
 * 專案名稱： wistroni40-dmc
 * 部門代號： MLD500
 * 檔案說明： 抽象 ElasticSearch 查詢語句建構者
 * @CREATE Thursday, 9th September 2021 2:41:53 pm
 * @author Steve Y Lin
 * @contact Wits.SteveYLin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as esb from 'elastic-builder';

/**
 * 抽象 ElasticSearch 查詢語句建構者
 */
export interface ElasticBuilder {
  /**
   * 建構查詢語句
   *
   * @method public
   * @return 回傳查詢語句
   */
  build(): esb.RequestBodySearch;
}

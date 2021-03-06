# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.12] - 2021-10-07
### Added
#### Initializer
- 建立抽象初始化程序，實作該類可將要監控的數據加入至報警資料當中，同時也可以定期更新，去添加或移除不再監控範圍的資料

## [1.0.11] - 2021-09-27
### Changed
#### Producer
- MQTT Producer 轉接器，發送時可設定相關配置

## [1.0.10] - 2021-09-27
### Added
#### Producer
- 建立 MQTT Producer 轉接器

## [1.0.9] - 2021-09-23
### Changed
#### Alarm
- 提供取得特定資料所屬的報警資料方法
- 提供取得所有報警資料的方法

## [1.0.8] - 2021-09-23
### Changed
#### Alarm
- 提供檢視特定資料是否存在報警資料方法
- 提供刪除特定資料報警方法

## [1.0.7] - 2021-09-22
### Fixed
#### Alarm
- 初始化報警備援機制沒有將正確的報警狀態寫入報警觸發器，導致狀態遺失

## [1.0.6] - 2021-09-22
### Fixed
#### Alarm
- 啟動報警備援機制時，恢復後的報警資料，不進行報警觸發，避免重複發送報警

## [1.0.4] - 2021-09-22
### Changed
#### Alarm
- 報警流程將初始化的步驟改為最優先，避免再啟動備援機制時，將報警的資料給覆蓋(若初始化時有將資料寫入報警數據當中)

## [1.0.3] - 2021-09-22
### Changed
- 更新使用說明文檔

## [1.0.2] - 2021-09-17
### Fixed
#### Alarm
- 提供報警狀態改為實作方法，避免迴船報警狀態共用，使備援機制在恢復報警狀態後，讓其中一個報警影響到其他報警的報警狀態

## [1.0.1] - 2021-09-16
### Added
#### Consumer
- 建立複合式 Consumer 轉接器，可插入多個轉接器，介接多個數據來源


## [1.0.0] - 2021-09-14
### Added
#### Logger
- 建立抽象日誌轉接器，提供客製日誌功能
- 建立 Log4js 日誌轉接器
#### Storage
- 建立備援儲存功能，提供資料保存
- 建立 Local Storage 的備援儲存功能
#### CRON
- 建立抽象排程執行器，提供客製設定排程工作
- 建立 ElasticSearch 查詢排程執行器
#### Consumer
- 建立 Consumer 抽象類別，提供客製 Consumer 轉接器
- 建立 Kafka Consumer 轉接器
- 建立 MQTT Consumer 轉接器
- 建立 CRON Consumer 轉接器
- 建立 Consumer 資料解析策略
  - 建立 Kafka Confluent Avro 資料解析策略
  - 建立 Kafka JSON 資料解析策略
  - 建立 MQTT JSON 資料解析策略
  - 建立 ElasticSearch Hits 資料解析策略
  - 建立 ElasticSearch 聚合資料解析策略
#### Producer
- 建立 Producer 抽象類別，提供客製 Producer 轉接器
- 建立 Kafka Producer 轉接器
- 建立 HTTP Post 轉接器
#### Alarm
- 建立抽象報警流程範本，只需繼承並實作(或覆寫)對應屬性及方法，即可發送報警
- 建立抽象報警狀態物件，只需繼承並實作對應方法，即可讓報警自動升級或解除
- 報警流程範本內建時間驅動(`Timer-Driven`)、資料驅動(`Data-Driven`)及混合驅動(`Mixin-Driven`)，三種驅動報警的類型
- 報警流程範本內建失敗重新拋送機制，當上拋失敗，可設定重新拋送次數及間格時間，進行重拋
- 報警流程範本內建備援機制，當服務終止，會保存之前報警的升級紀錄，避免重新啟動後，誤拋報警資料
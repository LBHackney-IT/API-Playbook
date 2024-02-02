---
id: 'data_dictionary_hfs'
title: 'HFS'
---

import HFSDiagram from '../src/components/HFSDiagram';

## Data Diagram

<HFSDiagram/>

## Tables

### ActionDiaryAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Balance                        | decimal          | YES      | NULL           | NULL                 |
| 2                                   | Username                       | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | ActionDate                     | smalldatetime    | YES      | NULL           | NULL                 |
| 4                                   | ActionCode                     | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 7                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 8                                   | ActionComment                  | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | Action                         | nvarchar         | YES      | NULL           | \-1                  |
| 10                                  | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
|                                     |                                |                  |          |                |                      |

### ActionDiaryHistory
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 2                                   | ActionComment                  | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | Balance                        | decimal          | YES      | NULL           | NULL                 |
| 4                                   | Username                       | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Action                         | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | ActionCode                     | nvarchar         | YES      | NULL           | \-1                  |
| 7                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 10                                  | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 11                                  | ActionDate                     | smalldatetime    | YES      | NULL           | NULL                 |
|                                     |                                |                  |          |                |                      |

### Adjustment
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 2                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | TransactionType                | char             | YES      | NULL           | 3                    |
| 4                                   | Amount                         | decimal          | YES      | NULL           | NULL                 |
| 5                                   | TransactionDate                | datetime         | YES      | NULL           | NULL                 |
| 6                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 7                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
|                                     |                                |                  |          |                |                      |

### AdjustmentAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 2                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | TransactionType                | char             | YES      | NULL           | 3                    |
| 4                                   | Amount                         | decimal          | YES      | NULL           | NULL                 |
| 5                                   | TransactionDate                | datetime         | YES      | NULL           | NULL                 |
| 6                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### BatchLog
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | Type                           | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | StartTime                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 4                                   | EndTime                        | datetimeoffset   | YES      | NULL           | NULL                 |
| 5                                   | IsSuccess                      | bit              | YES      | NULL           | NULL                 |

### BatchLogError
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | Type                           | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | Message                        | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | BatchLogId                     | bigint           | NO       | NULL           | NULL                 |
| 5                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |


### BatchReport
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | IsSuccess                      | bit              | YES      | NULL           | NULL                 |
| 2                                   | Link                           | varchar          | YES      | NULL           | \-1                  |
| 3                                   | ReportDate                     | datetime         | YES      | NULL           | NULL                 |
| 4                                   | ReportStartDate                | datetime         | YES      | NULL           | NULL                 |
| 5                                   | RentGroup                      | varchar          | YES      | NULL           | 10                   |
| 6                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 7                                   | EndTime                        | datetimeoffset   | YES      | NULL           | NULL                 |
| 8                                   | ReportName                     | varchar          | YES      | NULL           | 255                  |
| 9                                   | ReportYear                     | int              | YES      | NULL           | NULL                 |
| 10                                  | Group                          | varchar          | YES      | NULL           | 10                   |
| 11                                  | StartTime                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 12                                  | ReportEndDate                  | datetime         | YES      | NULL           | NULL                 |
| 13                                  | TransactionType                | varchar          | YES      | NULL           | 10                   |

### CalculatedCurrentBalance
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | TenancyAgreementRef            | char             | YES      | NULL           | 11                   |
| 2                                   | RentAccount                    | char             | YES      | NULL           | 20                   |
| 3                                   | RentGroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | OpeningBalance2021             | decimal          | YES      | NULL           | NULL                 |
| 5                                   | Balance2021Wk1Wk26             | decimal          | YES      | NULL           | NULL                 |
| 6                                   | Balance2021Wk27Wk52            | decimal          | YES      | NULL           | NULL                 |
| 7                                   | OpeningBalance2022             | decimal          | YES      | NULL           | NULL                 |
| 8                                   | Balance2022Wk1Wk52             | decimal          | YES      | NULL           | NULL                 |
| 9                                   | OpeningBalance2023             | decimal          | YES      | NULL           | NULL                 |
| 10                                  | Balance2023Wk1Wk52             | decimal          | YES      | NULL           | NULL                 |
| 11                                  | CurrentBalance                 | decimal          | YES      | NULL           | NULL                 |
| 12                                  | PreviousWeekBalance            | decimal          | YES      | NULL           | NULL                 |
| 13                                  | OpeningBalance2024             | decimal          | YES      | NULL           | NULL                 |
| 14                                  | Balance2024Wk1Wk52             | decimal          | YES      | NULL           | NULL                 |

### CashSuspenseTransactionAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |
| 2                                   | NewRentAccount                 | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 4                                   | IdSuspenseTransaction          | bigint           | NO       | NULL           | NULL                 |
| 5                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 6                                   | Date                           | smalldatetime    | NO       | NULL           | NULL                 |

### Charges
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentGroup                      | char             | YES      | NULL           | 3                    |
| 2                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 3                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | ChargePeriod                   | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | ChargeType                     | char             | YES      | NULL           | 3                    |
| 6                                   | Amount                         | decimal          | YES      | NULL           | NULL                 |
| 7                                   | Active                         | bit              | YES      | NULL           | NULL                 |
| 8                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 9                                   | Year                           | int              | YES      | NULL           | NULL                 |

### ChargesAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentGroup                      | nvarchar         | YES      | NULL           | \-1                  |
| 2                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 3                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | DAT                            | decimal          | YES      | NULL           | NULL                 |
| 5                                   | DBR                            | decimal          | YES      | NULL           | NULL                 |
| 6                                   | DC4                            | decimal          | YES      | NULL           | NULL                 |
| 7                                   | DC5                            | decimal          | YES      | NULL           | NULL                 |
| 8                                   | DCB                            | decimal          | YES      | NULL           | NULL                 |
| 9                                   | DCC                            | decimal          | YES      | NULL           | NULL                 |
| 10                                  | DCE                            | decimal          | YES      | NULL           | NULL                 |
| 11                                  | DCI                            | decimal          | YES      | NULL           | NULL                 |
| 12                                  | DCO                            | decimal          | YES      | NULL           | NULL                 |
| 13                                  | DCP                            | decimal          | YES      | NULL           | NULL                 |
| 14                                  | DCT                            | decimal          | YES      | NULL           | NULL                 |
| 15                                  | DGA                            | decimal          | YES      | NULL           | NULL                 |
| 16                                  | DGM                            | decimal          | YES      | NULL           | NULL                 |
| 17                                  | DGR                            | decimal          | YES      | NULL           | NULL                 |
| 18                                  | DHA                            | decimal          | YES      | NULL           | NULL                 |
| 19                                  | DHE                            | decimal          | YES      | NULL           | NULL                 |
| 20                                  | DHM                            | decimal          | YES      | NULL           | NULL                 |
| 21                                  | DIN                            | decimal          | YES      | NULL           | NULL                 |
| 22                                  | DIT                            | decimal          | YES      | NULL           | NULL                 |
| 23                                  | DKF                            | decimal          | YES      | NULL           | NULL                 |
| 24                                  | DLL                            | decimal          | YES      | NULL           | NULL                 |
| 25                                  | DLP                            | decimal          | YES      | NULL           | NULL                 |
| 26                                  | DMC                            | decimal          | YES      | NULL           | NULL                 |
| 27                                  | DMJ                            | decimal          | YES      | NULL           | NULL                 |
| 28                                  | DMR                            | decimal          | YES      | NULL           | NULL                 |
| 29                                  | DR5                            | decimal          | YES      | NULL           | NULL                 |
| 30                                  | DRP                            | decimal          | YES      | NULL           | NULL                 |
| 31                                  | DRR                            | decimal          | YES      | NULL           | NULL                 |
| 32                                  | DSA                            | decimal          | YES      | NULL           | NULL                 |
| 33                                  | DSB                            | decimal          | YES      | NULL           | NULL                 |
| 34                                  | DSC                            | decimal          | YES      | NULL           | NULL                 |
| 35                                  | DSJ                            | decimal          | YES      | NULL           | NULL                 |
| 36                                  | DSO                            | decimal          | YES      | NULL           | NULL                 |
| 37                                  | DSR                            | decimal          | YES      | NULL           | NULL                 |
| 38                                  | DST                            | decimal          | YES      | NULL           | NULL                 |
| 39                                  | DTA                            | decimal          | YES      | NULL           | NULL                 |
| 40                                  | DTC                            | decimal          | YES      | NULL           | NULL                 |
| 41                                  | DTL                            | decimal          | YES      | NULL           | NULL                 |
| 42                                  | DTV                            | decimal          | YES      | NULL           | NULL                 |
| 43                                  | DVA                            | decimal          | YES      | NULL           | NULL                 |
| 44                                  | DWR                            | decimal          | YES      | NULL           | NULL                 |
| 45                                  | DWS                            | decimal          | YES      | NULL           | NULL                 |
| 46                                  | DWW                            | decimal          | YES      | NULL           | NULL                 |
| 47                                  | RCI                            | decimal          | YES      | NULL           | NULL                 |
| 48                                  | RPD                            | decimal          | YES      | NULL           | NULL                 |
| 49                                  | RSJ                            | decimal          | YES      | NULL           | NULL                 |
| 50                                  | RTM                            | decimal          | YES      | NULL           | NULL                 |
| 51                                  | RWA                            | decimal          | YES      | NULL           | NULL                 |
| 52                                  | WON                            | decimal          | YES      | NULL           | NULL                 |
| 53                                  | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 54                                  | Year                           | int              | YES      | NULL           | NULL                 |

### ChargesBatchYears
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | ProcessingDate                 | date             | YES      | NULL           | NULL                 |
| 3                                   | Year                           | int              | YES      | NULL           | NULL                 |
| 4                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |

### ChargesHistory
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | ChargePeriod                   | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Date                           | smalldatetime    | YES      | NULL           | NULL                 |
| 6                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 7                                   | ChargesId                      | bigint           | YES      | NULL           | NULL                 |
| 8                                   | ChargeType                     | char             | YES      | NULL           | 3                    |
| 9                                   | Amount                         | decimal          | YES      | NULL           | NULL                 |
| 10                                  | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 11                                  | FirstWeekAdjustment            | bit              | NO       | ((0))          | NULL                 |
| 12                                  | LastWeekAdjustment             | bit              | NO       | ((0))          | NULL                 |


### ChargesHistoryAdjustments
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 2                                   | StartDate                      | date             | NO       | NULL           | NULL                 |
| 3                                   | EndDate                        | date             | YES      | NULL           | NULL                 |
| 4                                   | ChargeType                     | varchar          | NO       | NULL           | 3                    |
| 5                                   | AdjustmentFactor               | decimal          | NO       | NULL           | NULL                 |
| 6                                   | Description                    | varchar          | NO       | NULL           | \-1                  |
| 7                                   | ExclusionSetRef                | int              | YES      | NULL           | NULL                 |

### ChargesHistoryAdjustmentsExclusions
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 2                                   | ExclusionSetRef                | int              | NO       | NULL           | NULL                 |
| 3                                   | PropertyRef                    | char             | NO       | NULL           | 12                   |

### CurrentBalance
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | TenancyAgreementRef            | char             | YES      | NULL           | 11                   |
| 2                                   | RentAccount                    | char             | YES      | NULL           | 20                   |
| 3                                   | RentGroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | OpeningBalanceWk1              | decimal          | YES      | NULL           | NULL                 |
| 5                                   | Balance2021Wk26                | decimal          | YES      | NULL           | NULL                 |
| 6                                   | Balance2021Wk27Till52          | decimal          | YES      | NULL           | NULL                 |
| 7                                   | Balance2022Wk1Onwards          | decimal          | YES      | NULL           | NULL                 |
| 8                                   | PreviousWeekBalance            | decimal          | YES      | NULL           | NULL                 |
| 9                                   | Balance2023Wk1Onwards          | decimal          | YES      | NULL           | NULL                 |


### DirectDebit
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |
| 2                                   | Active                         | bit              | NO       | NULL           | NULL                 |
| 3                                   | DueDay                         | tinyint          | NO       | NULL           | NULL                 |
| 4                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 5                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 6                                   | Id                             | bigint           | NO       | NULL           | NULL                 |

### DirectDebitAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | Date                           | smalldatetime    | NO       | NULL           | NULL                 |
| 4                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 5                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### DirectDebitHistory
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 2                                   | Date                           | datetime         | NO       | NULL           | NULL                 |
| 3                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 4                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 5                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 6                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |

### DirectDebitSuspenseAccounts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | DirectDebitHistoryId           | bigint           | NO       | NULL           | NULL                 |
| 3                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |
| 4                                   | NewRentAccount                 | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 6                                   | Date                           | datetime         | NO       | NULL           | NULL                 |
| 7                                   | IsResolved                     | bit              | YES      | NULL           | NULL                 |
| 8                                   | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### DMTransactionEntity
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | id                             | uniqueidentifier | YES      | NULL           | NULL                 |
| 2                                   | target_id                      | uniqueidentifier | YES      | NULL           | NULL                 |
| 3                                   | target_type                    | varchar          | YES      | NULL           | \-1                  |
| 4                                   | period_no                      | decimal          | YES      | NULL           | NULL                 |
| 5                                   | financial_year                 | int              | YES      | NULL           | NULL                 |
| 6                                   | financial_month                | int              | YES      | NULL           | NULL                 |
| 7                                   | transaction_source             | varchar          | YES      | NULL           | \-1                  |
| 8                                   | transaction_type               | varchar          | YES      | NULL           | \-1                  |
| 9                                   | transaction_date               | smalldatetime    | YES      | NULL           | NULL                 |
| 10                                  | transaction_amount             | decimal          | YES      | NULL           | NULL                 |
| 11                                  | payment_reference              | varchar          | YES      | NULL           | \-1                  |
| 12                                  | bank_account_number            | varchar          | YES      | NULL           | \-1                  |
| 13                                  | is_suspense                    | bit              | YES      | NULL           | NULL                 |
| 14                                  | suspense_resolution_info       | nvarchar         | YES      | NULL           | \-1                  |
| 15                                  | paid_amount                    | decimal          | YES      | NULL           | NULL                 |
| 16                                  | charged_amount                 | decimal          | YES      | NULL           | NULL                 |
| 17                                  | housing_benefit_amount         | decimal          | YES      | NULL           | NULL                 |
| 18                                  | balance_amount                 | decimal          | YES      | NULL           | NULL                 |
| 19                                  | person                         | nvarchar         | YES      | NULL           | \-1                  |
| 20                                  | fund                           | varchar          | YES      | NULL           | \-1                  |

### ErrorLog
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | TableName                      | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | RowId                          | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | UserFriendlyError              | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | ApplicationError               | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### GoogleFileSetting
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | int              | NO       | NULL           | NULL                 |
| 2                                   | GoogleIdentifier               | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | FileType                       | nvarchar         | NO       | NULL           | \-1                  |
| 4                                   | Label                          | nvarchar         | NO       | NULL           | \-1                  |
| 5                                   | StartDate                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 6                                   | EndDate                        | datetimeoffset   | YES      | NULL           | NULL                 |
| 7                                   | FileYear                       | int              | YES      | NULL           | NULL                 |

### MABalanceTransactionDetails
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | varchar          | YES      | NULL           | 20                   |
| 2                                   | date                           | smalldatetime    | YES      | NULL           | NULL                 |
| 3                                   | transaction_details            | varchar          | YES      | NULL           | 50                   |
| 4                                   | debit                          | decimal          | YES      | NULL           | NULL                 |
| 5                                   | credit                         | decimal          | YES      | NULL           | NULL                 |
| 6                                   | balance                        | decimal          | YES      | NULL           | NULL                 |
| 7                                   | row_num                        | int              | YES      | NULL           | NULL                 |

### MAContacts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | YES      | (space((1)))   | 11                   |
| 2                                   | con_name                       | varchar          | YES      | NULL           | 73                   |
| 3                                   | con_address                    | char             | YES      | (space((1)))   | 200                  |
| 4                                   | con_postcode                   | char             | YES      | (space((1)))   | 10                   |
| 5                                   | con_phone1                     | char             | YES      | (space((1)))   | 21                   |

### MAMember
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | house_ref                      | char             | NO       | (space((1)))   | 10                   |
| 2                                   | person_no                      | numeric          | NO       | ((0))          | NULL                 |
| 3                                   | gender                         | char             | YES      | NULL           | 1                    |
| 4                                   | title                          | char             | YES      | (space((1)))   | 10                   |
| 5                                   | initials                       | char             | YES      | NULL           | 3                    |
| 6                                   | forename                       | char             | YES      | (space((1)))   | 24                   |
| 7                                   | surname                        | char             | YES      | (space((1)))   | 20                   |
| 8                                   | age                            | numeric          | YES      | ((0))          | NULL                 |
| 9                                   | relationship                   | char             | YES      | NULL           | 1                    |
| 10                                  | responsible                    | bit              | NO       | ((0))          | NULL                 |
| 11                                  | member_sid                     | int              | NO       | NULL           | NULL                 |
| 12                                  | dob                            | datetime         | YES      | NULL           | NULL                 |

### MAProperty
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | prop_ref                       | char             | NO       | NULL           | 12                   |
| 2                                   | major_ref                      | char             | YES      | NULL           | 12                   |
| 3                                   | man_scheme                     | char             | YES      | NULL           | 11                   |
| 4                                   | post_code                      | char             | YES      | NULL           | 10                   |
| 5                                   | short_address                  | char             | YES      | NULL           | 200                  |
| 6                                   | telephone                      | char             | YES      | NULL           | 21                   |
| 7                                   | ownership                      | char             | NO       | NULL           | 10                   |
| 8                                   | agent                          | char             | YES      | NULL           | 3                    |
| 9                                   | area_office                    | char             | YES      | NULL           | 3                    |
| 10                                  | subtyp_code                    | char             | YES      | NULL           | 3                    |
| 11                                  | letable                        | bit              | NO       | NULL           | NULL                 |
| 12                                  | cat_type                       | char             | YES      | NULL           | 3                    |
| 13                                  | house_ref                      | char             | YES      | NULL           | 10                   |
| 14                                  | occ_stat                       | char             | YES      | NULL           | 3                    |
| 15                                  | post_preamble                  | char             | YES      | NULL           | 60                   |
| 16                                  | property_sid                   | int              | YES      | NULL           | NULL                 |
| 17                                  | arr_patch                      | char             | YES      | NULL           | 3                    |
| 18                                  | address1                       | char             | YES      | NULL           | 255                  |
| 19                                  | num_bedrooms                   | int              | YES      | NULL           | NULL                 |
| 20                                  | post_desig                     | char             | YES      | NULL           | 60                   |

### MATenancyAgreement
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | house_ref                      | char             | YES      | NULL           | 10                   |
| 4                                   | tag_desc                       | char             | YES      | NULL           | 200                  |
| 5                                   | cot                            | smalldatetime    | YES      | NULL           | NULL                 |
| 6                                   | eot                            | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 8                                   | prd_code                       | char             | YES      | NULL           | 2                    |
| 9                                   | present                        | bit              | NO       | NULL           | NULL                 |
| 10                                  | terminated                     | bit              | NO       | NULL           | NULL                 |
| 11                                  | rentgrp_ref                    | char             | YES      | NULL           | 3                    |
| 12                                  | rent                           | numeric          | YES      | NULL           | NULL                 |
| 13                                  | service                        | numeric          | YES      | NULL           | NULL                 |
| 14                                  | other_charge                   | numeric          | YES      | NULL           | NULL                 |
| 15                                  | tenancy_rent                   | numeric          | YES      | NULL           | NULL                 |
| 16                                  | tenancy_service                | numeric          | YES      | NULL           | NULL                 |
| 17                                  | tenancy_other                  | numeric          | YES      | NULL           | NULL                 |
| 18                                  | cur_bal                        | numeric          | YES      | NULL           | NULL                 |
| 19                                  | cur_nr_bal                     | numeric          | YES      | NULL           | NULL                 |
| 20                                  | occ_status                     | char             | YES      | NULL           | 3                    |
| 21                                  | tenagree_sid                   | int              | YES      | NULL           | NULL                 |
| 22                                  | u_saff_rentacc                 | char             | YES      | NULL           | 20                   |
| 23                                  | high_action                    | char             | YES      | NULL           | 3                    |
| 24                                  | u_notice_served                | smalldatetime    | YES      | NULL           | NULL                 |
| 25                                  | courtdate                      | smalldatetime    | YES      | NULL           | NULL                 |
| 26                                  | u_court_outcome                | char             | YES      | NULL           | 3                    |
| 27                                  | evictdate                      | smalldatetime    | YES      | NULL           | NULL                 |
| 28                                  | agr_type                       | char             | YES      | NULL           | 1                    |

### MonthsByYear
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | YearNo                         | int              | YES      | NULL           | NULL                 |
| 2                                   | MonthNo                        | int              | YES      | NULL           | NULL                 |
| 3                                   | StartDate                      | datetime         | YES      | NULL           | NULL                 |

### OperatingBalance
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| 1                                   | rentgrp_desc                   | char             | YES      | NULL           | 16                   |
| 2                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 3                                   | post_prdno                     | decimal          | YES      | NULL           | NULL                 |
| 4                                   | total_charged                  | numeric          | YES      | NULL           | NULL                 |
| 5                                   | total_paid                     | numeric          | YES      | NULL           | NULL                 |
| 6                                   | total_hb_paid                  | numeric          | YES      | NULL           | NULL                 |
| 7                                   | D20                            | numeric          | YES      | NULL           | NULL                 |
| 8                                   | D25                            | numeric          | YES      | NULL           | NULL                 |
| 9                                   | DAT                            | numeric          | YES      | NULL           | NULL                 |
| 10                                  | DBR                            | numeric          | YES      | NULL           | NULL                 |
| 11                                  | DBT                            | numeric          | YES      | NULL           | NULL                 |
| 12                                  | DC1                            | numeric          | YES      | NULL           | NULL                 |
| 13                                  | DC2                            | numeric          | YES      | NULL           | NULL                 |
| 14                                  | DC3                            | numeric          | YES      | NULL           | NULL                 |
| 15                                  | DC4                            | numeric          | YES      | NULL           | NULL                 |
| 16                                  | DC5                            | numeric          | YES      | NULL           | NULL                 |
| 17                                  | DCB                            | numeric          | YES      | NULL           | NULL                 |
| 18                                  | DCC                            | numeric          | YES      | NULL           | NULL                 |
| 19                                  | DCE                            | numeric          | YES      | NULL           | NULL                 |
| 20                                  | DCI                            | numeric          | YES      | NULL           | NULL                 |
| 21                                  | DCO                            | numeric          | YES      | NULL           | NULL                 |
| 22                                  | DCP                            | numeric          | YES      | NULL           | NULL                 |
| 23                                  | DCT                            | numeric          | YES      | NULL           | NULL                 |
| 24                                  | DGA                            | numeric          | YES      | NULL           | NULL                 |
| 25                                  | DGM                            | numeric          | YES      | NULL           | NULL                 |
| 26                                  | DGR                            | numeric          | YES      | NULL           | NULL                 |
| 27                                  | DHA                            | numeric          | YES      | NULL           | NULL                 |
| 28                                  | DHE                            | numeric          | YES      | NULL           | NULL                 |
| 29                                  | DHM                            | numeric          | YES      | NULL           | NULL                 |
| 30                                  | DHW                            | numeric          | YES      | NULL           | NULL                 |
| 31                                  | DIN                            | numeric          | YES      | NULL           | NULL                 |
| 32                                  | DIT                            | numeric          | YES      | NULL           | NULL                 |
| 33                                  | DKF                            | numeric          | YES      | NULL           | NULL                 |
| 34                                  | DLD                            | numeric          | YES      | NULL           | NULL                 |
| 35                                  | DLK                            | numeric          | YES      | NULL           | NULL                 |
| 36                                  | DLL                            | numeric          | YES      | NULL           | NULL                 |
| 37                                  | DLP                            | numeric          | YES      | NULL           | NULL                 |
| 38                                  | DMC                            | numeric          | YES      | NULL           | NULL                 |
| 39                                  | DMF                            | numeric          | YES      | NULL           | NULL                 |
| 40                                  | DMJ                            | numeric          | YES      | NULL           | NULL                 |
| 41                                  | DML                            | numeric          | YES      | NULL           | NULL                 |
| 42                                  | DMR                            | numeric          | YES      | NULL           | NULL                 |
| 43                                  | DPP                            | numeric          | YES      | NULL           | NULL                 |
| 44                                  | DPY                            | numeric          | YES      | NULL           | NULL                 |
| 45                                  | DR1                            | numeric          | YES      | NULL           | NULL                 |
| 46                                  | DR2                            | numeric          | YES      | NULL           | NULL                 |
| 47                                  | DR3                            | numeric          | YES      | NULL           | NULL                 |
| 48                                  | DR4                            | numeric          | YES      | NULL           | NULL                 |
| 49                                  | DR5                            | numeric          | YES      | NULL           | NULL                 |
| 50                                  | DRP                            | numeric          | YES      | NULL           | NULL                 |
| 51                                  | DRR                            | numeric          | YES      | NULL           | NULL                 |
| 52                                  | DSA                            | numeric          | YES      | NULL           | NULL                 |
| 53                                  | DSB                            | numeric          | YES      | NULL           | NULL                 |
| 54                                  | DSC                            | numeric          | YES      | NULL           | NULL                 |
| 55                                  | DSJ                            | numeric          | YES      | NULL           | NULL                 |
| 56                                  | DSO                            | numeric          | YES      | NULL           | NULL                 |
| 57                                  | DSR                            | numeric          | YES      | NULL           | NULL                 |
| 58                                  | DST                            | numeric          | YES      | NULL           | NULL                 |
| 59                                  | DTA                            | numeric          | YES      | NULL           | NULL                 |
| 60                                  | DTC                            | numeric          | YES      | NULL           | NULL                 |
| 61                                  | DTL                            | numeric          | YES      | NULL           | NULL                 |
| 62                                  | DTV                            | numeric          | YES      | NULL           | NULL                 |
| 63                                  | DVA                            | numeric          | YES      | NULL           | NULL                 |
| 64                                  | DWR                            | numeric          | YES      | NULL           | NULL                 |
| 65                                  | DWS                            | numeric          | YES      | NULL           | NULL                 |
| 66                                  | DWW                            | numeric          | YES      | NULL           | NULL                 |
| 67                                  | RBA                            | numeric          | YES      | NULL           | NULL                 |
| 68                                  | RBP                            | numeric          | YES      | NULL           | NULL                 |
| 69                                  | RBR                            | numeric          | YES      | NULL           | NULL                 |
| 70                                  | RCI                            | numeric          | YES      | NULL           | NULL                 |
| 71                                  | RCO                            | numeric          | YES      | NULL           | NULL                 |
| 72                                  | RCP                            | numeric          | YES      | NULL           | NULL                 |
| 73                                  | RCT                            | numeric          | YES      | NULL           | NULL                 |
| 74                                  | RDD                            | numeric          | YES      | NULL           | NULL                 |
| 75                                  | RDN                            | numeric          | YES      | NULL           | NULL                 |
| 76                                  | RDP                            | numeric          | YES      | NULL           | NULL                 |
| 77                                  | RDR                            | numeric          | YES      | NULL           | NULL                 |
| 78                                  | RDS                            | numeric          | YES      | NULL           | NULL                 |
| 79                                  | RDT                            | numeric          | YES      | NULL           | NULL                 |
| 80                                  | REF                            | numeric          | YES      | NULL           | NULL                 |
| 81                                  | RHA                            | numeric          | YES      | NULL           | NULL                 |
| 82                                  | RHB                            | numeric          | YES      | NULL           | NULL                 |
| 83                                  | RIT                            | numeric          | YES      | NULL           | NULL                 |
| 84                                  | RML                            | numeric          | YES      | NULL           | NULL                 |
| 85                                  | ROB                            | numeric          | YES      | NULL           | NULL                 |
| 86                                  | RPD                            | numeric          | YES      | NULL           | NULL                 |
| 87                                  | RPO                            | numeric          | YES      | NULL           | NULL                 |
| 88                                  | RPY                            | numeric          | YES      | NULL           | NULL                 |
| 89                                  | RQP                            | numeric          | YES      | NULL           | NULL                 |
| 90                                  | RRC                            | numeric          | YES      | NULL           | NULL                 |
| 91                                  | RRP                            | numeric          | YES      | NULL           | NULL                 |
| 92                                  | RSJ                            | numeric          | YES      | NULL           | NULL                 |
| 93                                  | RSO                            | numeric          | YES      | NULL           | NULL                 |
| 94                                  | RTM                            | numeric          | YES      | NULL           | NULL                 |
| 95                                  | RUC                            | numeric          | YES      | NULL           | NULL                 |
| 96                                  | RWA                            | numeric          | YES      | NULL           | NULL                 |
| 97                                  | WOF                            | numeric          | YES      | NULL           | NULL                 |
| 98                                  | WON                            | numeric          | YES      | NULL           | NULL                 |

### RentGroupSumr
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentGroup                      | varchar          | YES      | NULL           | 3                    |
| 2                                   | YearNo                         | int              | YES      | NULL           | NULL                 |
| 3                                   | PeriodNo                       | int              | YES      | NULL           | NULL                 |
| 4                                   | TotalCharged                   | decimal          | YES      | NULL           | NULL                 |
| 5                                   | TotalPaid                      | decimal          | YES      | NULL           | NULL                 |
| 6                                   | TotalHB                        | decimal          | YES      | NULL           | NULL                 |
|                                     |                                |                  |          |                |                      |

### rtrans2011-rtrans2021
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | YES      | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | rentgroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 5                                   | post_prdno                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 7                                   | trans_type                     | char             | YES      | NULL           | 3                    |
| 8                                   | trans_src                      | char             | YES      | NULL           | 3                    |
| 9                                   | real_value                     | decimal          | YES      | NULL           | NULL                 |
| 10                                  | post_date                      | smalldatetime    | YES      | NULL           | NULL                 |
| 11                                  | trans_ref                      | char             | YES      | NULL           | 12                   |

### SpreadSheetNewPatches
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Lis                            | varchar          | YES      | NULL           | \-1                  |
| 2                                   | Area                           | varchar          | YES      | NULL           | \-1                  |
| 3                                   | Type                           | varchar          | YES      | NULL           | \-1                  |
| 4                                   | Address Line 1                 | varchar          | YES      | NULL           | \-1                  |
| 5                                   | Address Line 2                 | varchar          | YES      | NULL           | \-1                  |
| 6                                   | Address Line 3                 | varchar          | YES      | NULL           | \-1                  |
| 7                                   | Post Code                      | varchar          | YES      | NULL           | \-1                  |
| 8                                   | Patch                          | varchar          | YES      | NULL           | \-1                  |
| 9                                   | Arrears                        | varchar          | YES      | NULL           | \-1                  |
| 10                                  | Balance 5 Sept 21              | varchar          | YES      | NULL           | \-1                  |
| 11                                  | UH Property Ref                | varchar          | YES      | NULL           | \-1                  |
| 12                                  | Old patch                      | varchar          | YES      | NULL           | \-1                  |
| 13                                  | ref                            | varchar          | YES      | NULL           | \-1                  |
| 14                                  | Beds                           | varchar          | YES      | NULL           | \-1                  |
| 15                                  | Block Number                   | varchar          | YES      | NULL           | \-1                  |
| 16                                  | Block Address                  | varchar          | YES      | NULL           | \-1                  |
| 17                                  | Estate Number                  | varchar          | YES      | NULL           | \-1                  |
| 18                                  | Estate Name                    | varchar          | YES      | NULL           | \-1                  |
| 19                                  | Ward                           | varchar          | YES      | NULL           | \-1                  |

### SSCurrentRentPosition
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Tenant                         | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | TenancyStartDate               | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | TenancyType                    | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | DateOfBirth                    | smalldatetime    | YES      | NULL           | NULL                 |
| 9                                   | HomeTel                        | nvarchar         | YES      | NULL           | \-1                  |
| 10                                  | Mobile                         | nvarchar         | YES      | NULL           | \-1                  |
| 11                                  | AddressLine1                   | nvarchar         | YES      | NULL           | \-1                  |
| 12                                  | AddressLine2                   | nvarchar         | YES      | NULL           | \-1                  |
| 13                                  | AddressLine3                   | nvarchar         | YES      | NULL           | \-1                  |
| 14                                  | PostCode                       | nvarchar         | YES      | NULL           | \-1                  |
| 15                                  | UniversalCredit                | bit              | YES      | NULL           | NULL                 |
| 16                                  | HBClaimRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 17                                  | DirectDebitDate                | tinyint          | YES      | NULL           | NULL                 |
| 18                                  | Week53Year20ClosingBalance     | decimal          | YES      | NULL           | NULL                 |
| 19                                  | Week1Balance                   | decimal          | YES      | NULL           | NULL                 |
| 20                                  | Week27Balance                  | decimal          | YES      | NULL           | NULL                 |
| 21                                  | TotalRent                      | decimal          | YES      | NULL           | NULL                 |
| 22                                  | HBwc12Oct20                    | decimal          | YES      | NULL           | NULL                 |
| 23                                  | SubsequentWeeklyHB             | decimal          | YES      | NULL           | NULL                 |
| 24                                  | NetRent                        | decimal          | YES      | NULL           | NULL                 |
| 25                                  | Week28Payment                  | decimal          | YES      | NULL           | NULL                 |
| 26                                  | Week29Payment                  | decimal          | YES      | NULL           | NULL                 |
| 27                                  | Week30Payment                  | decimal          | YES      | NULL           | NULL                 |
| 28                                  | Week31Payment                  | decimal          | YES      | NULL           | NULL                 |
| 29                                  | Week32Payment                  | decimal          | YES      | NULL           | NULL                 |
| 30                                  | Week33Payment                  | decimal          | YES      | NULL           | NULL                 |
| 31                                  | Week34Payment                  | decimal          | YES      | NULL           | NULL                 |
| 32                                  | Week35Payment                  | decimal          | YES      | NULL           | NULL                 |
| 33                                  | Week36Payment                  | decimal          | YES      | NULL           | NULL                 |
| 34                                  | Week37Payment                  | decimal          | YES      | NULL           | NULL                 |
| 35                                  | Week38Payment                  | decimal          | YES      | NULL           | NULL                 |
| 36                                  | Week39Payment                  | decimal          | YES      | NULL           | NULL                 |
| 37                                  | Week40Payment                  | decimal          | YES      | NULL           | NULL                 |
| 38                                  | Week41Payment                  | decimal          | YES      | NULL           | NULL                 |
| 39                                  | Week42Payment                  | decimal          | YES      | NULL           | NULL                 |
| 40                                  | Week43Payment                  | decimal          | YES      | NULL           | NULL                 |
| 41                                  | Week44Payment                  | decimal          | YES      | NULL           | NULL                 |
| 42                                  | Week45Payment                  | decimal          | YES      | NULL           | NULL                 |
| 43                                  | Week46Payment                  | decimal          | YES      | NULL           | NULL                 |
| 44                                  | Week47Payment                  | decimal          | YES      | NULL           | NULL                 |
| 45                                  | Week48Payment                  | decimal          | YES      | NULL           | NULL                 |
| 46                                  | Week49Payment                  | decimal          | YES      | NULL           | NULL                 |
| 47                                  | Week50Payment                  | decimal          | YES      | NULL           | NULL                 |
| 48                                  | Week51Payment                  | decimal          | YES      | NULL           | NULL                 |
| 49                                  | Week52Payment                  | decimal          | YES      | NULL           | NULL                 |
| 50                                  | EstimatedBalance               | decimal          | YES      | NULL           | NULL                 |
| 51                                  | IncreaseArrearsSinceWeek27     | decimal          | YES      | NULL           | NULL                 |
| 52                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### SSMiniSumr
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 3                                   | post_prdno                     | int              | YES      | NULL           | NULL                 |
| 4                                   | b_forward                      | decimal          | YES      | NULL           | NULL                 |
| 5                                   | tot_deb                        | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tot_deb_adj                    | decimal          | YES      | NULL           | NULL                 |
| 7                                   | tot_rec                        | decimal          | YES      | NULL           | NULL                 |
| 8                                   | tot_rec_adj                    | decimal          | YES      | NULL           | NULL                 |

### SSMiniTransaction
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | YES      | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | rentgroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 5                                   | post_prdno                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 7                                   | trans_type                     | char             | YES      | NULL           | 3                    |
| 8                                   | trans_src                      | char             | YES      | NULL           | 3                    |
| 9                                   | real_value                     | decimal          | YES      | NULL           | NULL                 |
| 10                                  | post_date                      | smalldatetime    | YES      | NULL           | NULL                 |
| 11                                  | trans_ref                      | char             | YES      | NULL           | 12                   |
| 12                                  | origin                         | varchar          | YES      | NULL           | \-1                  |
| 13                                  | origin_desc                    | varchar          | YES      | NULL           | \-1                  |

### SSMiniTransactionHist
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | YES      | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | rentgroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 5                                   | post_prdno                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 7                                   | trans_type                     | char             | YES      | NULL           | 3                    |
| 8                                   | trans_src                      | char             | YES      | NULL           | 3                    |
| 9                                   | real_value                     | decimal          | YES      | NULL           | NULL                 |
| 10                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### SSRentBreakdown
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | AreaOffice                     | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Patch                          | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | UPRN                           | nvarchar         | YES      | NULL           | \-1                  |
| 7                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | Comment                        | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | Comment2                       | nvarchar         | YES      | NULL           | \-1                  |
| 10                                  | OccupiedStatus                 | nvarchar         | YES      | NULL           | \-1                  |
| 11                                  | FormulaRent202021              | decimal          | YES      | NULL           | NULL                 |
| 12                                  | ActualRent202021               | decimal          | YES      | NULL           | NULL                 |
| 13                                  | Bedrooms                       | tinyint          | YES      | NULL           | NULL                 |
| 14                                  | Type                           | nvarchar         | YES      | NULL           | \-1                  |
| 15                                  | Tenure                         | nvarchar         | YES      | NULL           | \-1                  |
| 16                                  | Title                          | nvarchar         | YES      | NULL           | \-1                  |
| 17                                  | Forename                       | nvarchar         | YES      | NULL           | \-1                  |
| 18                                  | Surname                        | nvarchar         | YES      | NULL           | \-1                  |
| 19                                  | TenancyStartDate               | smalldatetime    | YES      | NULL           | NULL                 |
| 20                                  | VoidDate                       | smalldatetime    | YES      | NULL           | NULL                 |
| 21                                  | AddressLine1                   | nvarchar         | YES      | NULL           | \-1                  |
| 22                                  | AddressLine2                   | nvarchar         | YES      | NULL           | \-1                  |
| 23                                  | AddressLine3                   | nvarchar         | YES      | NULL           | \-1                  |
| 24                                  | AddressLine4                   | nvarchar         | YES      | NULL           | \-1                  |
| 25                                  | PostCode                       | nvarchar         | YES      | NULL           | \-1                  |
| 26                                  | Formula                        | decimal          | YES      | NULL           | NULL                 |
| 27                                  | TotalRent                      | decimal          | YES      | NULL           | NULL                 |
| 28                                  | Actual                         | decimal          | YES      | NULL           | NULL                 |
| 29                                  | WaterRates                     | decimal          | YES      | NULL           | NULL                 |
| 30                                  | WaterStandingChrg              | decimal          | YES      | NULL           | NULL                 |
| 31                                  | WatersureReduction             | decimal          | YES      | NULL           | NULL                 |
| 32                                  | TenantsLevy                    | decimal          | YES      | NULL           | NULL                 |
| 33                                  | CleaningBlock                  | decimal          | YES      | NULL           | NULL                 |
| 34                                  | CleaningEstate                 | decimal          | YES      | NULL           | NULL                 |
| 35                                  | LandlordLighting               | decimal          | YES      | NULL           | NULL                 |
| 36                                  | GroundsMaintenance             | decimal          | YES      | NULL           | NULL                 |
| 37                                  | CommunalDigitalTV              | decimal          | YES      | NULL           | NULL                 |
| 38                                  | Concierge                      | decimal          | YES      | NULL           | NULL                 |
| 39                                  | Heating                        | decimal          | YES      | NULL           | NULL                 |
| 40                                  | HeatingMaintenance             | decimal          | YES      | NULL           | NULL                 |
| 41                                  | TelevisionLicense              | decimal          | YES      | NULL           | NULL                 |
| 42                                  | ContentsInsurance              | decimal          | YES      | NULL           | NULL                 |
| 43                                  | TravellersCharge               | decimal          | YES      | NULL           | NULL                 |
| 44                                  | GarageAttached                 | decimal          | YES      | NULL           | NULL                 |
| 45                                  | CarPort                        | decimal          | YES      | NULL           | NULL                 |
| 46                                  | GarageVAT                      | decimal          | YES      | NULL           | NULL                 |
| 47                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### SSServiceChargePaymentsReceived
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | ArrearPatch                    | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | TenancyAgreementRef            | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | Tenancy                        | nvarchar         | YES      | NULL           | \-1                  |
| 7                                   | Tenant                         | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | Address                        | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | DirectDebitDate                | nvarchar         | YES      | NULL           | \-1                  |
| 10                                  | MonthlyDebit                   | decimal          | YES      | NULL           | NULL                 |
| 11                                  | Sep20DebitToIncludeActuals     | decimal          | YES      | NULL           | NULL                 |
| 12                                  | AdjustmentsToSCDebits          | decimal          | YES      | NULL           | NULL                 |
| 13                                  | DirectDebits15and23Nov20       | decimal          | YES      | NULL           | NULL                 |
| 14                                  | DirectDebitDec20               | decimal          | YES      | NULL           | NULL                 |
| 15                                  | Balance30Sep20                 | decimal          | YES      | NULL           | NULL                 |
| 16                                  | OctoberMovedToJudgement        | decimal          | YES      | NULL           | NULL                 |
| 17                                  | JanuaryMovedToJudgement        | decimal          | YES      | NULL           | NULL                 |
| 18                                  | FebruaryMovedToJudgement       | decimal          | YES      | NULL           | NULL                 |
| 19                                  | MarchMovedToJudgement          | decimal          | YES      | NULL           | NULL                 |
| 20                                  | OctoberSCandMWTransfers        | decimal          | YES      | NULL           | NULL                 |
| 21                                  | MarchSCandMWTransfers          | decimal          | YES      | NULL           | NULL                 |
| 22                                  | OctoberPayments                | decimal          | YES      | NULL           | NULL                 |
| 23                                  | NovemberPayments               | decimal          | YES      | NULL           | NULL                 |
| 24                                  | DecemberPayments               | decimal          | YES      | NULL           | NULL                 |
| 25                                  | JanuaryPayments                | decimal          | YES      | NULL           | NULL                 |
| 26                                  | FebruaryPayments               | decimal          | YES      | NULL           | NULL                 |
| 27                                  | MarchPayments                  | decimal          | YES      | NULL           | NULL                 |
| 28                                  | DisputedAmount                 | decimal          | YES      | NULL           | NULL                 |
| 29                                  | BalanceIncludingDisputedAmount | decimal          | YES      | NULL           | NULL                 |
| 30                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### SuspenseTransactionAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | RentAccount                    | nvarchar         | NO       | NULL           | \-1                  |
| 2                                   | Type                           | varchar          | YES      | NULL           | 50                   |
| 3                                   | NewRentAccount                 | nvarchar         | NO       | NULL           | \-1                  |
| 4                                   | Amount                         | decimal          | NO       | NULL           | NULL                 |
| 5                                   | IdSuspenseTransaction          | bigint           | NO       | NULL           | NULL                 |
| 6                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 7                                   | Date                           | smalldatetime    | NO       | NULL           | NULL                 |

### tenagree_uh
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | u_saff_rentacc                 | char             | YES      | NULL           | 20                   |
| 3                                   | cot                            | smalldatetime    | YES      | NULL           | NULL                 |
| 4                                   | eot                            | smalldatetime    | YES      | NULL           | NULL                 |

### TenancyAgreementAux
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Title                          | nvarchar         | YES      | NULL           | \-1                  |
| 2                                   | Address                        | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | DateOfBirth                    | smalldatetime    | YES      | NULL           | NULL                 |
| 4                                   | PaymentRef                     | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | PropertyRef                    | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | StartDate                      | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | NumBedrooms                    | int              | YES      | NULL           | NULL                 |
| 8                                   | RentGroup                      | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 10                                  | EndDate                        | smalldatetime    | YES      | NULL           | NULL                 |
| 11                                  | Forename                       | nvarchar         | YES      | NULL           | \-1                  |
| 12                                  | TimeStamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 13                                  | Surname                        | nvarchar         | YES      | NULL           | \-1                  |
| 14                                  | Tenure                         | nvarchar         | YES      | NULL           | \-1                  |
| 15                                  | PostCode                       | nvarchar         | YES      | NULL           | \-1                  |
| 16                                  | ShortAddress                   | nvarchar         | YES      | NULL           | \-1                  |

### UHAraction
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | action_set                     | int              | NO       | NULL           | NULL                 |
| 3                                   | action_no                      | int              | NO       | NULL           | NULL                 |
| 4                                   | action_code                    | char             | YES      | NULL           | 3                    |
| 5                                   | action_date                    | smalldatetime    | YES      | NULL           | NULL                 |
| 6                                   | action_balance                 | numeric          | YES      | NULL           | NULL                 |
| 7                                   | action_comment                 | text             | YES      | NULL           | 2147483647           |
| 8                                   | username                       | varchar          | YES      | NULL           | 40                   |
| 9                                   | comm_only                      | bit              | NO       | NULL           | NULL                 |
| 10                                  | ole_obj                        | image            | YES      | NULL           | 2147483647           |
| 11                                  | araction_sid                   | int              | YES      | NULL           | NULL                 |
| 12                                  | action_deferred                | bit              | YES      | NULL           | NULL                 |
| 13                                  | deferred_until                 | smalldatetime    | YES      | NULL           | NULL                 |
| 14                                  | deferral_reason                | char             | YES      | NULL           | 3                    |
| 15                                  | severity_level                 | int              | YES      | NULL           | NULL                 |
| 16                                  | action_nr_balance              | numeric          | YES      | NULL           | NULL                 |
| 17                                  | action_type                    | char             | YES      | NULL           | 3                    |
| 18                                  | act_status                     | char             | YES      | NULL           | 3                    |
| 19                                  | action_cat                     | char             | YES      | NULL           | 3                    |
| 20                                  | action_subno                   | int              | YES      | NULL           | NULL                 |
| 21                                  | action_subcode                 | char             | YES      | NULL           | 3                    |
| 22                                  | action_process_no              | int              | YES      | NULL           | NULL                 |
| 23                                  | notice_sid                     | int              | YES      | NULL           | NULL                 |
| 24                                  | courtord_sid                   | int              | YES      | NULL           | NULL                 |
| 25                                  | warrant_sid                    | int              | YES      | NULL           | NULL                 |
| 26                                  | action_doc_no                  | int              | YES      | NULL           | NULL                 |
| 27                                  | tstamp                         | timestamp        | NO       | NULL           | NULL                 |
| 28                                  | comp_avail                     | char             | YES      | NULL           | 200                  |
| 29                                  | comp_display                   | char             | YES      | NULL           | 200                  |
| 30                                  | u_saff_araction_ref            | char             | YES      | NULL           | 30                   |

### UHContacts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | con_key                        | int              | YES      | NULL           | NULL                 |
| 2                                   | con_ref                        | char             | YES      | NULL           | 12                   |
| 3                                   | con_name                       | varchar          | YES      | NULL           | 73                   |
| 4                                   | con_address                    | char             | YES      | NULL           | 200                  |
| 5                                   | con_phone1                     | char             | YES      | NULL           | 21                   |
| 6                                   | con_phone2                     | char             | YES      | NULL           | 21                   |
| 7                                   | con_phone3                     | char             | YES      | NULL           | 21                   |
| 8                                   | con_postcode                   | char             | YES      | NULL           | 10                   |
| 9                                   | con_type                       | char             | YES      | NULL           | 1                    |
| 10                                  | tag_ref                        | char             | YES      | NULL           | 11                   |
| 11                                  | prop_ref                       | char             | YES      | NULL           | 12                   |
| 12                                  | email_address                  | char             | YES      | NULL           | 50                   |
| 13                                  | app_ref                        | char             | YES      | NULL           | 10                   |
| 14                                  | contacts_sid                   | int              | YES      | NULL           | NULL                 |
| 15                                  | intreason                      | char             | YES      | NULL           | 3                    |
| 16                                  | vunreason                      | char             | YES      | NULL           | 3                    |
| 17                                  | locreason                      | char             | YES      | NULL           | 3                    |
| 18                                  | intcomment                     | text             | YES      | NULL           | 2147483647           |
| 19                                  | vuncomment                     | text             | YES      | NULL           | 2147483647           |
| 20                                  | loccomment                     | text             | YES      | NULL           | 2147483647           |
| 21                                  | tstamp                         | binary           | YES      | NULL           | 8                    |
| 22                                  | comp_avail                     | char             | YES      | NULL           | 200                  |
| 23                                  | comp_display                   | char             | YES      | NULL           | 200                  |

### UHDebitItem
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | prop_ref                       | nvarchar         | YES      | NULL           | \-1                  |
| 2                                   | tag_ref                        | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | deb_code                       | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | eff_date                       | datetime         | YES      | NULL           | NULL                 |
| 5                                   | term_date                      | datetime         | YES      | NULL           | NULL                 |
| 6                                   | prd_code                       | nvarchar         | YES      | NULL           | \-1                  |
| 7                                   | deb_next_due                   | smalldatetime    | YES      | NULL           | NULL                 |
| 8                                   | deb_last_charge                | smalldatetime    | YES      | NULL           | NULL                 |
| 9                                   | deb_days                       | numeric          | YES      | NULL           | NULL                 |
| 10                                  | deb_active                     | bit              | NO       | NULL           | NULL                 |
| 11                                  | deb_value                      | decimal          | YES      | NULL           | NULL                 |
| 12                                  | prop_deb                       | bit              | NO       | NULL           | NULL                 |
| 13                                  | deb_source                     | char             | YES      | NULL           | 3                    |
| 14                                  | debitem_sid                    | int              | YES      | NULL           | NULL                 |
| 15                                  | debmult                        | int              | YES      | NULL           | NULL                 |
| 16                                  | extdebvalue                    | numeric          | YES      | NULL           | NULL                 |
| 17                                  | debrate                        | numeric          | YES      | NULL           | NULL                 |

### UHDebType
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | deb_code                       | char             | NO       | NULL           | 3                    |
| 2                                   | deb_desc                       | char             | YES      | NULL           | 20                   |
| 3                                   | deb_cat                        | char             | YES      | NULL           | 1                    |
| 4                                   | deb_link                       | char             | YES      | NULL           | 1                    |
| 5                                   | deb_group                      | numeric          | YES      | NULL           | NULL                 |
| 6                                   | vatable                        | bit              | NO       | NULL           | NULL                 |
| 7                                   | apportion                      | bit              | NO       | NULL           | NULL                 |
| 8                                   | freeprd                        | bit              | NO       | NULL           | NULL                 |
| 9                                   | deb_effective                  | char             | YES      | NULL           | 1                    |
| 10                                  | deb_vatrate                    | char             | YES      | NULL           | 1                    |
| 11                                  | debtype_sid                    | int              | YES      | NULL           | NULL                 |
| 12                                  | void_charge                    | bit              | YES      | NULL           | NULL                 |

### UHHousehold
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | house_ref                      | char             | NO       | NULL           | 10                   |
| 2                                   | post_code                      | char             | YES      | NULL           | 10                   |
| 3                                   | telephone                      | char             | YES      | NULL           | 21                   |
| 4                                   | house_size                     | numeric          | YES      | NULL           | NULL                 |
| 5                                   | house_kids                     | numeric          | YES      | NULL           | NULL                 |
| 6                                   | payment_method                 | char             | YES      | NULL           | 3                    |
| 7                                   | house_desc                     | char             | YES      | NULL           | 73                   |
| 8                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 9                                   | email_address                  | varchar          | YES      | NULL           | 50                   |
| 10                                  | househ_sid                     | int              | YES      | NULL           | NULL                 |

### uhlive_dob
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | house_ref                      | char             | NO       | NULL           | 10                   |
| 2                                   | person_no                      | decimal          | NO       | NULL           | NULL                 |
| 3                                   | dob                            | datetime         | NO       | NULL           | NULL                 |

### UHMember
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | house_ref                      | char             | NO       | NULL           | 10                   |
| 2                                   | person_no                      | numeric          | NO       | NULL           | NULL                 |
| 3                                   | gender                         | char             | YES      | NULL           | 1                    |
| 4                                   | title                          | char             | YES      | NULL           | 10                   |
| 5                                   | initials                       | char             | YES      | NULL           | 3                    |
| 6                                   | forename                       | char             | YES      | NULL           | 24                   |
| 7                                   | surname                        | char             | YES      | NULL           | 20                   |
| 8                                   | age                            | numeric          | YES      | NULL           | NULL                 |
| 9                                   | relationship                   | char             | YES      | NULL           | 1                    |
| 10                                  | responsible                    | bit              | NO       | NULL           | NULL                 |
| 11                                  | member_sid                     | int              | NO       | NULL           | NULL                 |
| 12                                  | dob                            | datetime         | YES      | NULL           | NULL                 |

### UHMiniSumr
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 3                                   | post_prdno                     | int              | YES      | NULL           | NULL                 |
| 4                                   | b_forward                      | decimal          | YES      | NULL           | NULL                 |
| 5                                   | tot_deb                        | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tot_deb_adj                    | decimal          | YES      | NULL           | NULL                 |
| 7                                   | tot_rec                        | decimal          | YES      | NULL           | NULL                 |
| 8                                   | tot_rec_adj                    | decimal          | YES      | NULL           | NULL                 |

### UHMiniTransaction
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | YES      | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | rentgroup                      | char             | YES      | NULL           | 3                    |
| 4                                   | post_year                      | int              | YES      | NULL           | NULL                 |
| 5                                   | post_prdno                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 7                                   | trans_type                     | char             | YES      | NULL           | 3                    |
| 8                                   | trans_src                      | char             | YES      | NULL           | 3                    |
| 9                                   | real_value                     | decimal          | YES      | NULL           | NULL                 |
| 10                                  | post_date                      | smalldatetime    | YES      | NULL           | NULL                 |
| 11                                  | trans_ref                      | char             | YES      | NULL           | 12                   |

### UHOccupiedStatus
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | occ_status                     | char             | NO       | NULL           | 3                    |
| 2                                   | occ_desc                       | char             | YES      | NULL           | 16                   |
| 3                                   | occupied                       | bit              | NO       | NULL           | NULL                 |
| 4                                   | occstat_sid                    | int              | YES      | NULL           | NULL                 |

### UHParis
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | PCRTransactionType             | varchar          | YES      | NULL           | 3                    |
| 2                                   | UHTReceiptType                 | varchar          | YES      | NULL           | 3                    |
| 3                                   | Description                    | varchar          | YES      | NULL           | 50                   |

### UHPostCode
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | post_code                      | char             | NO       | NULL           | 10                   |
| 2                                   | address                        | varchar          | YES      | NULL           | 200                  |
| 3                                   | aline1                         | char             | YES      | NULL           | 50                   |
| 4                                   | aline2                         | char             | YES      | NULL           | 50                   |
| 5                                   | aline3                         | char             | YES      | NULL           | 50                   |
| 6                                   | aline4                         | char             | YES      | NULL           | 50                   |
| 7                                   | postcode_sid                   | int              | YES      | NULL           | NULL                 |

### UHProperty
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | prop_ref                       | char             | NO       | NULL           | 12                   |
| 2                                   | major_ref                      | char             | YES      | NULL           | 12                   |
| 3                                   | man_scheme                     | char             | YES      | NULL           | 11                   |
| 4                                   | post_code                      | char             | YES      | NULL           | 10                   |
| 5                                   | short_address                  | char             | YES      | NULL           | 200                  |
| 6                                   | telephone                      | char             | YES      | NULL           | 21                   |
| 7                                   | ownership                      | char             | NO       | NULL           | 10                   |
| 8                                   | agent                          | char             | YES      | NULL           | 3                    |
| 9                                   | area_office                    | char             | YES      | NULL           | 3                    |
| 10                                  | subtyp_code                    | char             | YES      | NULL           | 3                    |
| 11                                  | letable                        | bit              | NO       | NULL           | NULL                 |
| 12                                  | cat_type                       | char             | YES      | NULL           | 3                    |
| 13                                  | house_ref                      | char             | YES      | NULL           | 10                   |
| 14                                  | occ_stat                       | char             | YES      | NULL           | 3                    |
| 15                                  | post_preamble                  | char             | YES      | NULL           | 60                   |
| 16                                  | property_sid                   | int              | YES      | NULL           | NULL                 |
| 17                                  | arr_patch                      | char             | YES      | NULL           | 3                    |
| 18                                  | address1                       | char             | YES      | NULL           | 255                  |
| 19                                  | num_bedrooms                   | int              | YES      | NULL           | NULL                 |
| 20                                  | post_desig                     | char             | YES      | NULL           | 60                   |

### UHPropertyType
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | pt_prop_code                   | char             | YES      | NULL           | 3                    |
| 2                                   | pt_prop_desc                   | char             | YES      | NULL           | 40                   |
| 3                                   | pt_prop_type                   | char             | YES      | NULL           | 3                    |
| 4                                   | proptype_sid                   | int              | NO       | NULL           | NULL                 |

### UHRecType
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | rec_code                       | char             | NO       | NULL           | 3                    |
| 2                                   | rec_desc                       | char             | YES      | NULL           | 20                   |
| 3                                   | rec_group                      | numeric          | YES      | NULL           | NULL                 |
| 4                                   | rectype_sid                    | int              | YES      | NULL           | NULL                 |
| 5                                   | rec_dd                         | bit              | NO       | NULL           | NULL                 |

### UHRent
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | prop_ref                       | char             | NO       | NULL           | 12                   |
| 2                                   | rentgrp_ref                    | char             | YES      | NULL           | 3                    |
| 3                                   | occ_status                     | char             | YES      | NULL           | 3                    |
| 4                                   | occ_stat_date                  | smalldatetime    | YES      | NULL           | NULL                 |
| 5                                   | prop_type                      | char             | YES      | NULL           | 3                    |
| 6                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 7                                   | house_ref                      | char             | YES      | NULL           | 10                   |
| 8                                   | short_address                  | varchar          | YES      | NULL           | 120                  |
| 9                                   | rent                           | numeric          | YES      | NULL           | NULL                 |
| 10                                  | service                        | numeric          | YES      | NULL           | NULL                 |
| 11                                  | other_charge                   | numeric          | YES      | NULL           | NULL                 |
| 12                                  | rent_sid                       | int              | YES      | NULL           | NULL                 |

### UHRentGroup
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | rentgrp_ref                    | char             | NO       | NULL           | 3                    |
| 2                                   | rentgrp_desc                   | char             | YES      | NULL           | 16                   |
| 3                                   | prd_code                       | char             | YES      | NULL           | 2                    |
| 4                                   | rg_period_no                   | int              | YES      | NULL           | NULL                 |
| 5                                   | rg_year                        | int              | YES      | NULL           | NULL                 |
| 6                                   | no_of_periods                  | int              | YES      | NULL           | NULL                 |
| 7                                   | rentgrp_sid                    | int              | YES      | NULL           | NULL                 |
| 8                                   | spreadsheet_tab_name           | nvarchar         | YES      | NULL           | 40                   |

### UHRentSource
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | trans_src                      | char             | YES      | NULL           | 3                    |
| 2                                   | src_desc                       | char             | YES      | NULL           | 30                   |

### UHTenancyAgreement
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | tag_ref                        | char             | NO       | NULL           | 11                   |
| 2                                   | prop_ref                       | char             | YES      | NULL           | 12                   |
| 3                                   | house_ref                      | char             | YES      | NULL           | 10                   |
| 4                                   | tag_desc                       | char             | YES      | NULL           | 200                  |
| 5                                   | cot                            | smalldatetime    | YES      | NULL           | NULL                 |
| 6                                   | eot                            | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | tenure                         | char             | YES      | NULL           | 3                    |
| 8                                   | prd_code                       | char             | YES      | NULL           | 2                    |
| 9                                   | present                        | bit              | NO       | NULL           | NULL                 |
| 10                                  | terminated                     | bit              | NO       | NULL           | NULL                 |
| 11                                  | rentgrp_ref                    | char             | YES      | NULL           | 3                    |
| 12                                  | rent                           | numeric          | YES      | NULL           | NULL                 |
| 13                                  | service                        | numeric          | YES      | NULL           | NULL                 |
| 14                                  | other_charge                   | numeric          | YES      | NULL           | NULL                 |
| 15                                  | tenancy_rent                   | numeric          | YES      | NULL           | NULL                 |
| 16                                  | tenancy_service                | numeric          | YES      | NULL           | NULL                 |
| 17                                  | tenancy_other                  | numeric          | YES      | NULL           | NULL                 |
| 18                                  | cur_bal                        | numeric          | YES      | NULL           | NULL                 |
| 19                                  | cur_nr_bal                     | numeric          | YES      | NULL           | NULL                 |
| 20                                  | occ_status                     | char             | YES      | NULL           | 3                    |
| 21                                  | tenagree_sid                   | int              | YES      | NULL           | NULL                 |
| 22                                  | u_saff_rentacc                 | char             | YES      | NULL           | 20                   |
| 23                                  | high_action                    | char             | YES      | NULL           | 3                    |
| 24                                  | u_notice_served                | smalldatetime    | YES      | NULL           | NULL                 |
| 25                                  | courtdate                      | smalldatetime    | YES      | NULL           | NULL                 |
| 26                                  | u_court_outcome                | char             | YES      | NULL           | 3                    |
| 27                                  | evictdate                      | smalldatetime    | YES      | NULL           | NULL                 |
| 28                                  | agr_type                       | char             | YES      | NULL           | 1                    |
| 29                                  | rech_tag_ref                   | char             | YES      | NULL           | 11                   |
| 30                                  | master_tag_ref                 | char             | YES      | NULL           | 11                   |

### UHTenure
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | ten_type                       | char             | NO       | NULL           | 3                    |
| 2                                   | ten_desc                       | char             | YES      | NULL           | 15                   |
| 3                                   | ten_cat                        | char             | YES      | NULL           | 1                    |
| 4                                   | tenure_sid                     | int              | YES      | NULL           | NULL                 |
| 5                                   | leasehold                      | bit              | YES      | NULL           | NULL                 |

###uhtlive_contacts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | con_key                        | int              | YES      | NULL           | NULL                 |
| 2                                   | con_ref                        | char             | YES      | NULL           | 12                   |
| 3                                   | con_name                       | varchar          | YES      | NULL           | 73                   |
| 4                                   | con_address                    | char             | YES      | NULL           | 200                  |
| 5                                   | con_phone1                     | char             | YES      | NULL           | 21                   |
| 6                                   | con_phone2                     | char             | YES      | NULL           | 21                   |
| 7                                   | con_phone3                     | char             | YES      | NULL           | 21                   |
| 8                                   | con_postcode                   | char             | YES      | NULL           | 10                   |
| 9                                   | con_type                       | char             | YES      | NULL           | 1                    |
| 10                                  | tag_ref                        | char             | YES      | NULL           | 11                   |
| 11                                  | prop_ref                       | char             | YES      | NULL           | 12                   |
| 12                                  | email_address                  | char             | YES      | NULL           | 50                   |
| 13                                  | app_ref                        | char             | YES      | NULL           | 10                   |
| 14                                  | contacts_sid                   | int              | YES      | NULL           | NULL                 |
| 15                                  | intreason                      | char             | YES      | NULL           | 3                    |
| 16                                  | vunreason                      | char             | YES      | NULL           | 3                    |
| 17                                  | locreason                      | char             | YES      | NULL           | 3                    |
| 18                                  | intcomment                     | text             | YES      | NULL           | 2147483647           |
| 19                                  | vuncomment                     | text             | YES      | NULL           | 2147483647           |
| 20                                  | loccomment                     | text             | YES      | NULL           | 2147483647           |
| 21                                  | tstamp                         | binary           | YES      | NULL           | 8                    |
| 22                                  | comp_avail                     | char             | YES      | NULL           | 200                  |
| 23                                  | comp_display                   | char             | YES      | NULL           | 200                  |

### UPCashDump
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | FullText                       | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 4                                   | UPCashDumpFileNameId           | bigint           | NO       | NULL           | NULL                 |
| 5                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### UPCashDumpFileName
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | FileName                       | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | IsSuccess                      | bit              | YES      | NULL           | NULL                 |
| 4                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### UPCashLoad
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | PaymentSource                  | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | MethodOfPayment                | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | AmountPaid                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | DatePaid                       | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | CivicaCode                     | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | UPCashDumpId                   | bigint           | NO       | NULL           | NULL                 |
| 9                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 10                                  | IsRead                         | bit              | YES      | NULL           | NULL                 |

### UPCashLoadSuspenseAccounts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | IsResolved                     | bit              | YES      | NULL           | NULL                 |
| 2                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 3                                   | CivicaCode                     | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | DatePaid                       | smalldatetime    | YES      | NULL           | NULL                 |
| 5                                   | AmountPaid                     | decimal          | YES      | NULL           | NULL                 |
| 6                                   | MethodOfPayment                | nvarchar         | YES      | NULL           | \-1                  |
| 7                                   | PaymentSource                  | nvarchar         | YES      | NULL           | \-1                  |
| 8                                   | NewRentAccount                 | nvarchar         | YES      | NULL           | \-1                  |
| 9                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 10                                  | UPCashDumpId                   | bigint           | NO       | NULL           | NULL                 |
| 11                                  | Id                             | int              | NO       | NULL           | NULL                 |

### UPHousingCashDump
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | FullText                       | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | IsRead                         | bit              | YES      | NULL           | NULL                 |
| 4                                   | UPHousingCashDumpFileNameId    | bigint           | NO       | NULL           | NULL                 |
| 5                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### UPHousingCashDumpFileName
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | FileName                       | nvarchar         | NO       | NULL           | \-1                  |
| 3                                   | IsSuccess                      | bit              | YES      | NULL           | NULL                 |
| 4                                   | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |

### UPHousingCashLoad
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | AcademyClaimRef                | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | column2                        | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | Date                           | smalldatetime    | YES      | NULL           | NULL                 |
| 6                                   | value1                         | decimal          | YES      | NULL           | NULL                 |
| 7                                   | value2                         | decimal          | YES      | NULL           | NULL                 |
| 8                                   | value3                         | decimal          | YES      | NULL           | NULL                 |
| 9                                   | value4                         | decimal          | YES      | NULL           | NULL                 |
| 10                                  | value5                         | decimal          | YES      | NULL           | NULL                 |
| 11                                  | UPHousingCashDumpId            | bigint           | NO       | NULL           | NULL                 |
| 12                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 13                                  | IsRead                         | bit              | YES      | NULL           | NULL                 |

### UPHousingCashLoadSuspenseAccounts
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | Id                             | bigint           | NO       | NULL           | NULL                 |
| 2                                   | AcademyClaimRef                | nvarchar         | YES      | NULL           | \-1                  |
| 3                                   | column2                        | nvarchar         | YES      | NULL           | \-1                  |
| 4                                   | RentAccount                    | nvarchar         | YES      | NULL           | \-1                  |
| 5                                   | NewRentAccount                 | nvarchar         | YES      | NULL           | \-1                  |
| 6                                   | Date                           | smalldatetime    | YES      | NULL           | NULL                 |
| 7                                   | value1                         | decimal          | YES      | NULL           | NULL                 |
| 8                                   | value2                         | decimal          | YES      | NULL           | NULL                 |
| 9                                   | value3                         | decimal          | YES      | NULL           | NULL                 |
| 10                                  | value4                         | decimal          | YES      | NULL           | NULL                 |
| 11                                  | value5                         | decimal          | YES      | NULL           | NULL                 |
| 12                                  | UPHousingCashDumpId            | bigint           | NO       | NULL           | NULL                 |
| 13                                  | Timestamp                      | datetimeoffset   | NO       | (getdate())    | NULL                 |
| 14                                  | IsResolved                     | bit              | YES      | NULL           | NULL                 |

### WeeksByYear
| Ordinal                             | Column Name                    | Data Type        | Nullable | Column Default | Character Max Length |
| ----------------------------------- | ------------------------------ | ---------------- | -------- | -------------- | -------------------- |
| 1                                   | YearNo                         | int              | YES      | NULL           | NULL                 |
| 2                                   | WeekNo                         | int              | YES      | NULL           | NULL                 |
| 3                                   | StartDate                      | datetime         | YES      | NULL           | NULL                 |
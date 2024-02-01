---
id: 'data_dictionary_hfs'
title: 'HFS'
---

import HFSDiagram from '../src/components/HFSDiagram';

| TableName                           | SchemaName | rows      | TotalSpace (KB) | TotalSpace (MB) | UsedSpace (KB) | UsedSpace (MB) | UnusedSpace (KB) | UnusedSpace (MB) |
| ----------------------------------- | ---------- | --------- | --------------- | --------------- | -------------- | -------------- | ---------------- | ---------------- |
| ActionDiaryAux                      | dbo        | 1355      | 2552            | 2.49            | 1264           | 1.23           | 1288             | 1.26             |
| ActionDiaryHistory                  | dbo        | 16785     | 10184           | 9.95            | 10000          | 9.77           | 184              | 0.18             |
| Adjustment                          | dbo        | 490620    | 39320           | 38.4            | 39160          | 38.24          | 160              | 0.16             |
| AdjustmentAux                       | dbo        | 175000    | 45576           | 44.51           | 14248          | 13.91          | 31328            | 30.59            |
| BatchLog                            | dbo        | 14074     | 2224            | 2.17            | 1864           | 1.82           | 360              | 0.35             |
| BatchLogError                       | dbo        | 417771    | 54880           | 53.59           | 54696          | 53.41          | 184              | 0.18             |
| BatchReport                         | dbo        | 616       | 280             | 0.27            | 208            | 0.2            | 72               | 0.07             |
| CalculatedCurrentBalance            | dbo        | 113575    | 20640           | 20.16           | 19736          | 19.27          | 904              | 0.88             |
| CashSuspenseTransactionAux          | dbo        | 0         | 80              | 0.08            | 24             | 0.02           | 56               | 0.05             |
| Charges                             | dbo        | 653079    | 84928           | 82.94           | 84784          | 82.8           | 144              | 0.14             |
| ChargesAux                          | dbo        | 27        | 592             | 0.58            | 200            | 0.2            | 392              | 0.38             |
| ChargesBatchYears                   | dbo        | 1651      | 288             | 0.28            | 192            | 0.19           | 96               | 0.09             |
| ChargesHistory                      | dbo        | 6271908   | 1072840         | 1047.7          | 1062928        | 1038.02        | 9912             | 9.68             |
| ChargesHistoryAdjustments           | dbo        | 1         | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| ChargesHistoryAdjustmentsExclusions | dbo        | 90        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| CurrentBalance                      | dbo        | 113575    | 15000           | 14.65           | 14624          | 14.28          | 376              | 0.37             |
| DirectDebit                         | dbo        | 4570      | 592             | 0.58            | 416            | 0.41           | 176              | 0.17             |
| DirectDebitAux                      | dbo        | 159930    | 56048           | 54.73           | 19928          | 19.46          | 36120            | 35.27            |
| DirectDebitHistory                  | dbo        | 259004    | 29656           | 28.96           | 29328          | 28.64          | 328              | 0.32             |
| DirectDebitSuspenseAccounts         | dbo        | 78        | 144             | 0.14            | 56             | 0.05           | 88               | 0.09             |
| DMTransactionEntity                 | dbo        | 144127    | 26248           | 25.63           | 26216          | 25.6           | 32               | 0.03             |
| ErrorLog                            | dbo        | 267       | 288             | 0.28            | 216            | 0.21           | 72               | 0.07             |
| GoogleFileSetting                   | dbo        | 22        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| MABalanceTransactionDetails         | dbo        | 9729834   | 1017280         | 993.44          | 1016056        | 992.24         | 1224             | 1.2              |
| MAContacts                          | dbo        | 303       | 144             | 0.14            | 96             | 0.09           | 48               | 0.05             |
| MAMember                            | dbo        | 125448    | 13840           | 13.52           | 13664          | 13.34          | 176              | 0.17             |
| MAProperty                          | dbo        | 66580     | 49288           | 48.13           | 48944          | 47.8           | 344              | 0.34             |
| MATenancyAgreement                  | dbo        | 118133    | 82312           | 80.38           | 82200          | 80.27          | 112              | 0.11             |
| MonthsByYear                        | dbo        | 288       | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| OperatingBalance                    | dbo        | 4606      | 10000           | 9.77            | 9296           | 9.08           | 704              | 0.69             |
| RentGroupSumr                       | dbo        | 370       | 72              | 0.07            | 32             | 0.03           | 40               | 0.04             |
| rtrans2011                          | dbo        | 10529855  | 787720          | 769.26          | 787616         | 769.16         | 104              | 0.1              |
| rtrans2012                          | dbo        | 10855484  | 812264          | 793.23          | 811952         | 792.92         | 312              | 0.3              |
| rtrans2013                          | dbo        | 12798839  | 957144          | 934.71          | 956960         | 934.53         | 184              | 0.18             |
| rtrans2014                          | dbo        | 12533191  | 937312          | 915.34          | 937104         | 915.14         | 208              | 0.2              |
| rtrans2015                          | dbo        | 12392432  | 927200          | 905.47          | 926584         | 904.87         | 616              | 0.6              |
| rtrans2016                          | dbo        | 12505935  | 935384          | 913.46          | 935056         | 913.14         | 328              | 0.32             |
| rtrans2017                          | dbo        | 12263239  | 917216          | 895.72          | 916920         | 895.43         | 296              | 0.29             |
| rtrans2018                          | dbo        | 269756    | 20760           | 20.27           | 20480          | 20             | 280              | 0.27             |
| rtrans2019                          | dbo        | 12369185  | 925008          | 903.33          | 924832         | 903.16         | 176              | 0.17             |
| rtrans2020                          | dbo        | 12677366  | 948048          | 925.83          | 947872         | 925.66         | 176              | 0.17             |
| rtrans2021                          | dbo        | 6116981   | 477960          | 466.76          | 458008         | 447.27         | 19952            | 19.48            |
| SpreadSheetNewPatches               | dbo        | 21516     | 4936            | 4.82            | 4880           | 4.77           | 56               | 0.05             |
| SSCurrentRentPosition               | dbo        | 20577     | 13064           | 12.76           | 13016          | 12.71          | 48               | 0.05             |
| SSMiniSumr                          | dbo        | 737574    | 53704           | 52.45           | 53656          | 52.4           | 48               | 0.05             |
| SSMiniTransaction                   | dbo        | 29175735  | 7757648         | 7575.83         | 7706016        | 7525.41        | 51632            | 50.42            |
| SSMiniTransactionHist               | dbo        | 4768994   | 326152          | 318.51          | 326096         | 318.45         | 56               | 0.05             |
| SSRentBreakdown                     | dbo        | 21640     | 12744           | 12.45           | 12696          | 12.4           | 48               | 0.05             |
| SSServiceChargePaymentsReceived     | dbo        | 9474      | 4232            | 4.13            | 4192           | 4.09           | 40               | 0.04             |
| SuspenseTransactionAux              | dbo        | 0         | 288             | 0.28            | 120            | 0.12           | 168              | 0.16             |
| tenagree_uh                         | dbo        | 107372    | 5704            | 5.57            | 5160           | 5.04           | 544              | 0.53             |
| TenancyAgreementAux                 | dbo        | 3         | 520             | 0.51            | 184            | 0.18           | 336              | 0.33             |
| UHAraction                          | dbo        | 7829478   | 6871208         | 6710.16         | 6870240        | 6709.22        | 968              | 0.95             |
| UHContacts                          | dbo        | 139224    | 180816          | 176.58          | 180624         | 176.39         | 192              | 0.19             |
| UHDebitItem                         | dbo        | 4175180   | 796368          | 777.7           | 796160         | 777.5          | 208              | 0.2              |
| UHDebType                           | dbo        | 60        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHHousehold                         | dbo        | 96836     | 15280           | 14.92           | 15040          | 14.69          | 240              | 0.23             |
| uhlive_dob                          | dbo        | 114438    | 3976            | 3.88            | 3688           | 3.6            | 288              | 0.28             |
| UHMember                            | dbo        | 125447    | 13832           | 13.51           | 13656          | 13.34          | 176              | 0.17             |
| UHMiniSumr                          | dbo        | 2240336   | 176456          | 172.32          | 163576         | 159.74         | 12880            | 12.58            |
| UHMiniTransaction                   | dbo        | 127349161 | 32796000        | 32027.34        | 32792424       | 32023.85       | 3576             | 3.49             |
| UHOccupiedStatus                    | dbo        | 12        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHParis                             | dbo        | 17        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHPostCode                          | dbo        | 14980     | 6216            | 6.07            | 6152           | 6.01           | 64               | 0.06             |
| UHProperty                          | dbo        | 66577     | 49152           | 48              | 48920          | 47.77          | 232              | 0.23             |
| UHPropertyType                      | dbo        | 13        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHRecType                           | dbo        | 32        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHRent                              | dbo        | 60411     | 11464           | 11.2            | 10904          | 10.65          | 560              | 0.55             |
| UHRentGroup                         | dbo        | 9         | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHRentSource                        | dbo        | 6         | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| UHTenancyAgreement                  | dbo        | 118133    | 45376           | 44.31           | 45240          | 44.18          | 136              | 0.13             |
| UHTenure                            | dbo        | 31        | 72              | 0.07            | 16             | 0.02           | 56               | 0.05             |
| uhtlive_contacts                    | dbo        | 139224    | 185232          | 180.89          | 181024         | 176.78         | 4208             | 4.11             |
| UPCashDump                          | dbo        | 1341675   | 373792          | 365.03          | 213176         | 208.18         | 160616           | 156.85           |
| UPCashDumpFileName                  | dbo        | 864       | 144             | 0.14            | 96             | 0.09           | 48               | 0.05             |
| UPCashLoad                          | dbo        | 1341675   | 145880          | 142.46          | 145848         | 142.43         | 32               | 0.03             |
| UPCashLoadSuspenseAccounts          | dbo        | 9016      | 1408            | 1.38            | 1272           | 1.24           | 136              | 0.13             |
| UPHousingCashDump                   | dbo        | 1914172   | 442200          | 431.84          | 362800         | 354.3          | 79400            | 77.54            |
| UPHousingCashDumpFileName           | dbo        | 175       | 72              | 0.07            | 40             | 0.04           | 32               | 0.03             |
| UPHousingCashLoad                   | dbo        | 1914172   | 268048          | 261.77          | 267952         | 261.67         | 96               | 0.09             |
| UPHousingCashLoadSuspenseAccounts   | dbo        | 935       | 488             | 0.48            | 224            | 0.22           | 264              | 0.26             |
| WeeklyTransactions                  | dbo        | 0         | 0               | 0               | 0              | 0              | 0                | 0                |
| WeeksByYear                         | dbo        | 1305      | 72              | 0.07            | 48             | 0.05           | 24               | 0.02             |

<HFSDiagram/>
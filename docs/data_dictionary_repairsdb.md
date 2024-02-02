---
id: 'data_dictionary_repairsdb'
title: 'Repairs'
---

import RepairsDiagram from '../src/components/RepairsDiagram.js';
<RepairsDiagram/>

## Tables

### ad_codes
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_description                                              | text         | YES      |
| 4                                    | cost                                                           | float8       | YES      |
| 5                                    | smv                                                            | int4         | YES      |

### appointment
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | date                                                           | timestamp    | YES      |
| 4                                    | time_of_day_earliest_arrival_time                              | timestamp    | YES      |
| 5                                    | time_of_day_latest_arrival_time                                | timestamp    | YES      |
| 6                                    | time_of_day_latest_completion_time                             | timestamp    | YES      |
| 7                                    | time_of_day_name                                               | text         | YES      |

### appointments
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | day_id                                                         | int4         | YES      |
| 2                                    | work_order_id                                                  | int4         | NO       |
| 3                                    | date                                                           | timestamp    | NO       |
| 4                                    | id                                                             | int4         | NO       |
| 5                                    | end_time                                                       | timestamp    | NO       |
| 6                                    | start_time                                                     | timestamp    | NO       |
| 7                                    | appointment_reason                                             | text         | YES      |
| 8                                    | appointment_note                                               | text         | YES      |
| 9                                    | availability_group_id                                          | int4         | YES      |
| 10                                   | sor_code_trade_code                                            | text         | YES      |
| 11                                   | assigned_start_time                                            | timestamp    | YES      |
| 12                                   | assigned_end_time                                              | timestamp    | YES      |

### available_appointment_days
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | available_appointment_id                                       | int4         | NO       |
| 3                                    | day                                                            | int4         | NO       |
| 4                                    | available_count                                                | int4         | NO       |
| 5                                    | availability_group_id                                          | int4         | YES      |
| 6                                    | availability_group_id1                                         | int4         | YES      |
| 7                                    | availability_group_trade_code                                  | text         | YES      |
| 8                                    | sor_code_trade_code                                            | text         | YES      |

### available_appointment_days
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | available_appointment_id                                       | int4         | NO       |
| 3                                    | day                                                            | int4         | NO       |
| 4                                    | available_count                                                | int4         | NO       |
| 5                                    | availability_group_id                                          | int4         | YES      |
| 6                                    | availability_group_id1                                         | int4         | YES      |
| 7                                    | availability_group_trade_code                                  | text         | YES      |
| 8                                    | sor_code_trade_code                                            | text         | YES      |

### available_appointments
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | contractor_reference                                           | text         | YES      |
| 3                                    | description                                                    | text         | YES      |
| 4                                    | start_time                                                     | timestamp    | NO       |
| 5                                    | end_time                                                       | timestamp    | NO       |

### avon_uplifts
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | sor_code                                                       | text         | YES      |
| 2                                    | uplifts                                                        | float8       | YES      |

### axis_FRA
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | contract                                                       | text         | YES      |
| 2                                    | sor                                                            | text         | YES      |
| 3                                    | description                                                    | text         | YES      |
| 4                                    | uplift                                                         | float8       | YES      |

### bk_void
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | SOR                                                            | text         | YES      |
| 2                                    | Trade                                                          | text         | YES      |
| 3                                    | Short Description                                              | text         | YES      |
| 4                                    | Cost                                                           | float8       | YES      |
| 5                                    | SMV                                                            | int4         | YES      |

### bk_void
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | SOR                                                            | text         | YES      |
| 2                                    | Trade                                                          | text         | YES      |
| 3                                    | Short Description                                              | text         | YES      |
| 4                                    | Cost                                                           | float8       | YES      |
| 5                                    | SMV                                                            | int4         | YES      |

### budget_code_contractor
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | budget_codes_id                                                | int4         | NO       |
| 2                                    | contractors_reference                                          | text         | NO       |

### budget_codes
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | external_cost_code                                             | text         | YES      |
| 3                                    | cost_code                                                      | text         | YES      |
| 4                                    | corporate_subjective_code                                      | text         | YES      |
| 5                                    | description_of_works                                           | text         | YES      |

### company
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | co_code                                                        | varchar(10)  | NO       |
| 2                                    | description                                                    | varchar(100) | YES      |
| 3                                    | name                                                           | varchar(50)  | YES      |
| 4                                    | comp_avail                                                     | varchar(200) | YES      |

### contractor_availability_group_trades
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | trade_code                                                     | text         | NO       |
| 2                                    | availability_group_id                                          | int4         | NO       |

### contractor_availability_groups
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | name                                                           | text         | YES      |
| 3                                    | contractor_reference                                           | text         | YES      |

### contractors
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | reference                                                      | text         | NO       |
| 2                                    | name                                                           | text         | YES      |
| 3                                    | use_external_schedule_manager                                  | bool         | NO       |
| 4                                    | contract_manager_email                                         | text         | YES      |
| 5                                    | can_assign_operative                                           | bool         | NO       |
| 6                                    | per_trade_availability                                         | bool         | NO       |

### contracts
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | contract_reference                                             | text         | NO       |
| 2                                    | termination_date                                               | timestamp    | NO       |
| 3                                    | effective_date                                                 | timestamp    | NO       |
| 4                                    | contractor_reference                                           | text         | NO       |

### cp_code
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_description                                              | text         | YES      |
| 4                                    | cost                                                           | float8       | YES      |
| 5                                    | smv                                                            | int4         | YES      |

### damp_and_mould_reports
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | property_reference                                             | text         | NO       |
| 3                                    | damp_and_mould_presence_confirmed                              | bool         | NO       |
| 4                                    | previously_reported                                            | bool         | YES      |
| 5                                    | previous_report_resolved                                       | bool         | YES      |
| 6                                    | comments                                                       | text         | YES      |
| 7                                    | reported_at                                                    | timestamp    | NO       |
| 8                                    | address                                                        | text         | NO       |

### glaze_code
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_descriptiion                                             | text         | YES      |
| 4                                    | cost                                                           | float8       | YES      |
| 5                                    | smv                                                            | int4         | YES      |

### job_status_updates
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | event_time                                                     | timestamp    | YES      |
| 3                                    | type_code                                                      | int4         | YES      |
| 4                                    | other_type                                                     | text         | YES      |
| 5                                    | refined_appointment_window_id                                  | int4         | YES      |
| 7                                    | customer_communication_channel_attempted_channel_medium        | int4         | YES      |
| 8                                    | comments                                                       | text         | YES      |
| 9                                    | more_specific_sor_code_id                                      | uuid         | YES      |
| 10                                   | customer_communication_channel_attempted_channel_code          | int4         | YES      |
| 11                                   | related_work_order_id                                          | int4         | YES      |
| 12                                   | work_order_complete_id                                         | int4         | YES      |
| 13                                   | additional_work_additional_work_order_id                       | int4         | YES      |
| 14                                   | additional_work_reason_required                                | text         | YES      |
| 15                                   | customer_communication_channel_attempted_value                 | text         | YES      |
| 16                                   | customer_communication_channel_attempted_description           | text         | YES      |
| 17                                   | customer_communication_channel_attempted_not_available         | bool         | YES      |
| 18                                   | author_name                                                    | text         | YES      |
| 19                                   | author_email                                                   | text         | YES      |
| 20                                   | is_split                                                       | bool         | YES      |
| 21                                   | is_overtime                                                    | bool         | YES      |
| 22                                   | payment_type                                                   | int4         | YES      |

### operative_sor_code_trade
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | operatives_id                                                  | int4         | NO       |
| 2                                    | trades_code                                                    | text         | NO       |

### operatives
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 4                                    | payroll_number                                                 | text         | YES      |
| 5                                    | is_archived                                                    | bool         | NO       |
| 6                                    | name                                                           | text         | YES      |
| 7                                    | resource_id                                                    | text         | NO       |
| 8                                    | email                                                          | text         | YES      |
| 9                                    | is_onejobatatime                                               | bool         | YES      |

### organization
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | name                                                           | text         | YES      |
| 3                                    | doing_business_as_name                                         | text         | YES      |

### party
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | name                                                           | text         | YES      |
| 3                                    | role                                                           | text         | YES      |
| 4                                    | organization_id                                                | int4         | YES      |
| 5                                    | person_id                                                      | int4         | YES      |
| 6                                    | contractor_reference                                           | text         | YES      |

### person
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 4                                    | job_status_update_id                                           | int4         | YES      |
| 5                                    | identification_number                                          | text         | YES      |
| 6                                    | identification_type                                            | text         | YES      |
| 7                                    | name_full                                                      | text         | YES      |
| 8                                    | name_family                                                    | text         | YES      |
| 9                                    | name_family_prefix                                             | text         | YES      |
| 10                                   | name_given                                                     | text         | YES      |
| 11                                   | name_initials                                                  | text         | YES      |
| 12                                   | name_middle                                                    | text         | YES      |
| 13                                   | name_title                                                     | text         | YES      |
| 14                                   | calculated_bonus                                               | float8       | YES      |

### person_alias_names
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | person_id                                                      | int4         | NO       |
| 2                                    | id                                                             | int4         | NO       |
| 3                                    | full                                                           | text         | YES      |
| 4                                    | given                                                          | text         | YES      |
| 5                                    | family                                                         | text         | YES      |
| 6                                    | family_prefix                                                  | text         | YES      |
| 7                                    | initials                                                       | text         | YES      |
| 8                                    | title                                                          | text         | YES      |
| 9                                    | middle                                                         | text         | YES      |

### person_communication
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | person_id                                                      | int4         | NO       |
| 2                                    | id                                                             | int4         | NO       |
| 3                                    | channel_medium                                                 | int4         | YES      |
| 4                                    | channel_code                                                   | int4         | YES      |
| 5                                    | value                                                          | text         | NO       |
| 6                                    | description                                                    | text         | YES      |
| 7                                    | not_available                                                  | bool         | YES      |

### property_address
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | country                                                        | int4         | YES      |
| 3                                    | address_line                                                   | text         | YES      |
| 4                                    | building_name                                                  | text         | YES      |
| 5                                    | building_number                                                | text         | YES      |
| 6                                    | city_name                                                      | text         | YES      |
| 7                                    | complex_name                                                   | text         | YES      |
| 9                                    | department                                                     | text         | YES      |
| 10                                   | floor                                                          | text         | YES      |
| 11                                   | plot                                                           | text         | YES      |
| 12                                   | postal_code                                                    | text         | YES      |
| 13                                   | postbox                                                        | text         | YES      |
| 14                                   | room                                                           | text         | YES      |
| 15                                   | street_name                                                    | text         | YES      |
| 16                                   | type                                                           | text         | YES      |

### property_class
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | site_id                                                        | int4         | YES      |
| 3                                    | address_id                                                     | int4         | YES      |
| 5                                    | master_key_system                                              | text         | YES      |
| 6                                    | property_reference                                             | text         | YES      |

### property_contracts
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | prop_ref                                                       | text         | NO       |
| 2                                    | contract_reference                                             | text         | NO       |

### rate_schedule_item
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | uuid         | NO       |
| 2                                    | custom_code                                                    | text         | YES      |
| 3                                    | custom_name                                                    | text         | YES      |
| 6                                    | quantity_amount                                                | float8       | YES      |
| 8                                    | work_element_id                                                | uuid         | YES      |
| 9                                    | quantity_unit_of_measurement_code                              | int4         | YES      |
| 10                                   | m3nhfsor_code                                                  | text         | YES      |
| 11                                   | work_order_complete_id                                         | int4         | YES      |
| 12                                   | code_cost                                                      | float8       | YES      |
| 13                                   | date_created                                                   | timestamp    | YES      |
| 14                                   | original                                                       | bool         | NO       |
| 15                                   | original_quantity                                              | float8       | YES      |
| 16                                   | original_id                                                    | uuid         | NO       |
| 17                                   | date_updated                                                   | timestamp    | YES      |

### reactive_purdy
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | sor                                                            | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_desc                                                     | text         | YES      |
| 4                                    | long_desc                                                      | text         | YES      |
| 5                                    | uplift                                                         | float8       | YES      |

### related_trades
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | primary_trade_id                                               | text         | NO       |
| 2                                    | secondary_trade_id                                             | text         | NO       |

### rf_codes
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_description                                              | text         | YES      |
| 4                                    | cost                                                           | float8       | YES      |
| 5                                    | smv                                                            | float8       | YES      |
| 6                                    | long_description                                               | text         | YES      |

### roofing_csv
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade                                                          | text         | YES      |
| 3                                    | short_description                                              | text         | YES      |
| 4                                    | cost                                                           | float8       | YES      |
| 5                                    | smv                                                            | int4         | YES      |

### security_groups
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | group_name                                                     | text         | NO       |
| 2                                    | user_type                                                      | text         | YES      |
| 3                                    | contractor_reference                                           | text         | YES      |
| 4                                    | raise_limit                                                    | float8       | YES      |
| 5                                    | vary_limit                                                     | float8       | YES      |
| 6                                    | id                                                             | int4         | NO       |

### site
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 3                                    | name                                                           | text         | YES      |

### sor_codes
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | NO       |
| 2                                    | short_description                                              | text         | YES      |
| 3                                    | priority_id                                                    | int4         | YES      |
| 5                                    | cost                                                           | float8       | YES      |
| 6                                    | trade_code                                                     | text         | NO       |
| 7                                    | enabled                                                        | bool         | NO       |
| 8                                    | long_description                                               | text         | YES      |
| 9                                    | standard_minute_value                                          | int4         | NO       |
| 10                                   | is_raisable                                                    | bool         | NO       |
| 11                                   | is_outofhours                                                  | bool         | NO       |
| 12                                   | operative_cost                                                 | float8       | NO       |
| 13                                   | income                                                         | float8       | NO       |
| 14                                   | display_priority                                               | int4         | NO       |

### sor_codes_tcp
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | YES      |
| 2                                    | trade_code                                                     | text         | YES      |
| 3                                    | priority_id                                                    | int4         | YES      |

### sor_contracts
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | sor_code_code                                                  | text         | NO       |
| 2                                    | contract_reference                                             | text         | NO       |
| 3                                    | cost                                                           | float8       | YES      |

### sor_priorities
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | priority_code                                                  | int4         | NO       |
| 2                                    | description                                                    | text         | YES      |
| 3                                    | days_to_complete                                               | int4         | YES      |
| 4                                    | enabled                                                        | bool         | NO       |
| 5                                    | priority_character                                             | text         | YES      |
| 6                                    | display_order                                                  | int4         | NO       |

### trade
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | code                                                           | int4         | YES      |
| 3                                    | custom_code                                                    | text         | YES      |
| 4                                    | custom_name                                                    | text         | YES      |
| 5                                    | work_element_id                                                | uuid         | YES      |

### trades
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | code                                                           | text         | NO       |
| 2                                    | name                                                           | text         | YES      |

### unit
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | address_id                                                     | int4         | YES      |
| 3                                    | key_safe_location                                              | text         | YES      |
| 4                                    | key_safe_code                                                  | text         | YES      |
| 5                                    | property_class_id                                              | int4         | YES      |

### work_elements
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | uuid         | NO       |
| 4                                    | contains_capital_work                                          | bool         | YES      |
| 5                                    | service_charge_subject                                         | int4         | YES      |
| 6                                    | work_order_id                                                  | int4         | YES      |
| 7                                    | job_status_update_id                                           | int4         | YES      |
| 9                                    | work_order_complete_id                                         | int4         | YES      |

### work_order_completes
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 3                                    | closed_time                                                    | timestamp    | YES      |

### work_order_operatives
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | work_order_id                                                  | int4         | NO       |
| 2                                    | operative_id                                                   | int4         | NO       |
| 3                                    | assignment_type                                                | int4         | NO       |
| 4                                    | job_percentage                                                 | float8       | YES      |

### work_orders
| Ordinal                              | Column Name                                                    | Data Type    | Nullable |
| ------------------------------------ | -------------------------------------------------------------- | ------------ | -------- |
| 1                                    | id                                                             | int4         | NO       |
| 2                                    | description_of_work                                            | text         | YES      |
| 3                                    | estimated_labor_hours                                          | float8       | YES      |
| 4                                    | work_type                                                      | int4         | YES      |
| 5                                    | parking_arrangements                                           | text         | YES      |
| 6                                    | location_of_repair                                             | text         | YES      |
| 7                                    | date_reported                                                  | timestamp    | YES      |
| 8                                    | work_priority_priority_code                                    | int4         | YES      |
| 10                                   | site_id                                                        | int4         | YES      |
| 11                                   | work_class_work_class_code                                     | int4         | YES      |
| 12                                   | work_order_complete_id                                         | int4         | YES      |
| 13                                   | access_information_description                                 | text         | YES      |
| 14                                   | access_information_keysafe_code                                | text         | YES      |
| 15                                   | access_information_keysafe_location                            | text         | YES      |
| 16                                   | work_class_work_class_description                              | text         | YES      |
| 17                                   | work_class_work_class_sub_type_work_class_sub_type_description | text         | YES      |
| 18                                   | work_class_work_class_sub_type_work_class_sub_type_name        | text         | YES      |
| 19                                   | work_priority_comments                                         | text         | YES      |
| 20                                   | work_priority_number_of_days                                   | float8       | YES      |
| 21                                   | work_priority_priority_description                             | text         | YES      |
| 22                                   | work_priority_required_completion_date_time                    | timestamp    | YES      |
| 23                                   | date_raised                                                    | timestamp    | YES      |
| 24                                   | assigned_to_primary_id                                         | int4         | YES      |
| 25                                   | customer_id                                                    | int4         | YES      |
| 26                                   | instructed_by_id                                               | int4         | YES      |
| 27                                   | agent_name                                                     | text         | YES      |
| 28                                   | status_code                                                    | int4         | NO       |
| 30                                   | reason                                                         | int4         | NO       |
| 31                                   | agent_email                                                    | text         | YES      |
| 32                                   | external_scheduler_reference                                   | text         | YES      |
| 33                                   | prop_ref_test                                                  | text         | YES      |
| 34                                   | prop_addr_test                                                 | text         | YES      |
| 35                                   | closed_date                                                    | timestamp    | YES      |
| 36                                   | planner_comments                                               | text         | YES      |
| 37                                   | is_split                                                       | bool         | NO       |
| 38                                   | is_overtime                                                    | bool         | NO       |
| 39                                   | last_drs_sync                                                  | timestamp    | YES      |
| 40                                   | payment_type                                                   | int4         | YES      |
| 41                                   | budget_code_id                                                 | int4         | YES      |
| 42                                   | multi_trade_work_order                                         | bool         | NO       |
| 43                                   | start_time                                                     | timestamp    | YES      |
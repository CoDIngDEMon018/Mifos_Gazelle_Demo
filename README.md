# OpenCRVS-Mifos Integration Demo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenCRVS](https://img.shields.io/badge/Integrated-OpenCRVS-blue)](https://www.opencrvs.org/)
[![Mifos](https://img.shields.io/badge/Powered%20by-Mifos-green)](https://mifos.org/)

**Bridging Civil Registration with Financial Inclusion**  
*Automated creation of Mifos financial accounts following OpenCRVS birth registration*

![Workflow Diagram](https://github.com/CoDIngDEMon018/Mifos_Gazelle_Demo/blob/main/image/Architecture.jpg)  
*Adapted from proposal architecture diagram*

## 📖 Overview

This solution demonstrates automated integration between:
- **OpenCRVS** (Open Source Civil Registration System)
- **Mifos** (Financial Inclusion Platform)

**Key Innovation:**  
`Birth Registration → Automatic Client Profile + Savings Account Creation`

[📄 Full Project Proposal](https://docs.google.com/document/d/1q8Ohcs8xF96og9L3uirGhQu9kcYM6VcBfwdsSKp0f3s/edit)

## ✨ Features

- **Seamless Integration**
  - Real-time API communication between systems
  - Data mapping between civil registry and financial schemas
  
- **Automated Workflows**
  ```mermaid
  graph TD
    A[Birth Registration] --> B(OpenCRVS API)
    B --> C{Mifos API}
    C --> D[Create Client]
    C --> E[Create Savings Account]

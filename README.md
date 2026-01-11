# Custom Product Image — Salesforce LWC

This repository contains a custom Lightning Web Component (LWC) named `cutomProductImage` that enhances the Product Detail experience by displaying and managing custom product images with interactive behavior.

---

## Demo

![Component Demo]
[▶ Watch demo video on LinkedIn] (https://www.linkedin.com/feed/update/urn:li:activity:7415970936874610689/)

---

## Project Structure

unpackaged/
├── lwc/
│ └── cutomProductImage/
│ ├── cutomProductImage.js
│ ├── cutomProductImage.html
│ ├── cutomProductImage.css
│ ├── cutomProductImage.svg
│ └── cutomProductImage.js-meta.xml
└── package.xml


---

## Component

- Name: `cutomProductImage`
- Type: Lightning Web Component
- Scope: Lightning App Builder / Product Pages

---

## Deployment

```bash
sfdx auth:web:login -d -a myOrg
sfdx force:source:deploy -p unpackaged

Usage

1 - Deploy the component to your Salesforce org.
2 - Open Lightning App Builder.
3 - Edit the Product or Record page.
4 - Drag cutomProductImage onto the page.
5 - Save and activate.


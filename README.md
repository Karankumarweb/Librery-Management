# Athenaeum — Enterprise Library Management System (Frontend-Only)

**Athenaeum** is an academic-grade, comprehensive Library Management System frontend built using modern **HTML5, CSS3, and Vanilla JavaScript**. Designed to emulate real-world systems utilized by university and collegiate research libraries, it provides complete circulation workflows, inventory tracking, reservation queues, and fine accounting without external backend dependencies.

---

## 1. Project Overview

- **Architecture:** Multi-page application (MPA) with modular vanilla JavaScript controllers and centralized state persistence.
- **Visual Design:** Modern SaaS admin experience adhering strictly to WCAG AA accessibility, 60-30-10 color harmony, tabular figures for all numerical values, and dark mode optical compensation.
- **Persistence:** High-reliability client-side state machine powered by `window.localStorage` with JSON validation guards and full factory seed restoration.
- **Labeling:** Explicitly labeled as a frontend-only application using simulated persistent transactions.

---

## 2. Key Modules & Functional Architecture

| Module | Features & Business Rules |
| :--- | :--- |
| **Authentication (`auth.js`)** | Multi-role simulation (Administrator, Librarian, Patron/Member), email/password validation, show/hide password toggle, session persistence, and protected page redirects. |
| **Dashboard (`dashboard.js`)** | Dynamic KPI cards (Total titles, copy ratios, active loans, overdue accounts, outstanding fines), Chart.js circulation trend lines and category distribution doughnut, recent circulation feed, and popular volumes. |
| **Books Catalog (`books.js`)** | Grid & table views, real-time live search, discipline filter, availability filter, sorting, pagination, ISBN uniqueness check, and automated copy-stock constraint validation. |
| **Book Details (`book-details.html`)** | Poster showcase, shelf stack allocations, copy availability indicators, circulation checkout trigger, hold reserve trigger, and item loan history. |
| **Category Management (`categories.js`)** | Department CRUD, dynamic title counters, and deletion prevention for categories with cataloged holdings. |
| **Author Directory (`authors.js`)** | Author profiles, country/affiliations, scholarly biographies, and cataloged bibliography links. |
| **Member Management (`members.js`)** | Patron directory, role limits (Faculty: 10, Student: 5), activation/suspension toggles, and profile inspection. |
| **Member Details (`member-details.html`)** | Visual borrowing limit quota track, active loans list, and lifetime circulation history. |
| **Circulation Issue (`issue-book.js`)** | Borrower status check, quota enforcement, live copy decrement, and printable loan receipt. |
| **Circulation Return (`return-book.js`)** | Transaction search, automatic copy restock, overdue fine calculation ($0.50/day), hold queue promotion, and return acknowledgement. |
| **Hold Reservations (`reservations.js`)** | Queue ordering, status tracking (`Pending`, `Ready`, `Fulfilled`, `Cancelled`), duplicate hold prevention, and checkout fulfillment. |
| **Fine Management (`fines.js`)** | Overdue penalty ledger, unpaid vs paid summary metrics, simulated fine settlements, and printable payment receipts. |
| **Supplier Directory (`suppliers.js`)** | Vendor management, publisher representatives, procurement subjects, and contract counters. |
| **Reports & Analytics (`reports.js`)** | 5 dynamic report views (Inventory, Overdue, Member Utilization, Fine Collection, Categories), CSV data export, and `@media print` clean printouts. |
| **Notification Center (`notifications.js`)** | System alerts, overdue notices, stock warnings, hold readiness alerts, unread counters, and persistence. |
| **Profile & Settings (`profile.js`, `settings.js`)** | Profile editing, simulated password change, configurable loan durations, fine rates, and 1-click factory demo reset. |
| **Public Landing Page (`index.html`)** | Campus hero section, live catalog search bar, featured books showcase, department directory, hours of operation, and card registration. |

---

## 3. Project Directory Structure

```
library-management-system/
├── index.html                  # Public library portal
├── login.html                  # Multi-role authentication
├── register.html               # Patron library card self-registration
├── dashboard.html              # Central operations dashboard
├── books.html                  # Catalog grid & table management
├── book-details.html           # Dedicated book detail view
├── categories.html             # Academic departments & classifications
├── authors.html                # Author directory & bibliographies
├── members.html                # Patron directory & card management
├── member-details.html         # Individual patron account details
├── issue-book.html             # Circulation checkout desk
├── return-book.html            # Circulation check-in & return
├── reservations.html           # Patron hold queue management
├── fines.html                  # Overdue fine ledger & payments
├── suppliers.html              # Book vendors & publisher contracts
├── reports.html                # Real-time analytics, CSV export, & print view
├── notifications.html          # Alerts & overdue notices center
├── profile.html                # User profile & personal borrowing records
├── settings.html               # Institutional policies & demo data reset
├── 404.html                    # Friendly 404 missing resource page
│
├── assets/
│   ├── images/
│   │   ├── logo.svg            # Athenaeum crest & mark
│   │   ├── library-hero.svg    # Grand library architectural backdrop
│   │   ├── book-covers/        # 10 custom stylized academic cover SVGs
│   │   │   ├── cover-1.svg     # Computer Science
│   │   │   ├── cover-2.svg     # Classic Literature
│   │   │   ├── cover-3.svg     # Physical Sciences
│   │   │   ├── cover-4.svg     # Economics & Finance
│   │   │   ├── cover-5.svg     # World History
│   │   │   ├── cover-6.svg     # Medical Sciences
│   │   │   ├── cover-7.svg     # Artificial Intelligence
│   │   │   ├── cover-8.svg     # Philosophy & Ethics
│   │   │   ├── cover-9.svg     # Law & Jurisprudence
│   │   │   └── cover-10.svg    # Behavioral Sciences
│   │   └── avatars/            # 5 diverse personnel & patron avatar SVGs
│   │       ├── avatar-1.svg    # Eleanor Vance (Administrator)
│   │       ├── avatar-2.svg    # Marcus Chen (Librarian)
│   │       ├── avatar-3.svg    # Sarah Jenkins (Student)
│   │       ├── avatar-4.svg    # David Ross (Scholar)
│   │       └── avatar-5.svg    # Priya Patel (Researcher)
│
├── css/
│   ├── variables.css           # Design tokens, color palette, & typography
│   ├── reset.css               # Modern CSS reset & baseline
│   ├── layout.css              # App shell, collapsible sidebar, & sticky topbar
│   ├── components.css         # Buttons, cards, modals, toasts, tabs, & badges
│   ├── forms.css               # Inputs, validation error states, & filter bars
│   ├── tables.css              # High-density data tables & tabular figures
│   ├── dashboard.css           # KPI cards, metrics, & chart containers
│   ├── books.css               # Catalog grid cards & detail posters
│   ├── members.css             # Patron profile summaries & limit progress bars
│   ├── reports.css             # Report cards & `@media print` layout
│   ├── auth.css                # Split-panel branding & login/register forms
│   ├── responsive.css          # Breakpoints for tablet and mobile devices
│   └── themes.css              # Dark mode overrides & transitions
│
├── js/
│   ├── storage.js              # Centralized localStorage manager & seed data
│   ├── utils.js                # ID generators, dates, toasts, modals, CSV export
│   ├── validation.js           # ISBN, email, phone, & copy numbers validator
│   ├── auth.js                 # Authentication, RBAC, & route guarding
│   ├── navigation.js           # Sidebar toggle, drawer, theme, & global search
│   ├── app.js                  # Global application lifecycle & session sync
│   ├── dashboard.js            # KPI computations & Chart.js instances
│   ├── books.js                # Catalog CRUD, filtering, sorting, & pagination
│   ├── categories.js           # Category CRUD & book assignment check
│   ├── authors.js              # Author directory & bibliography rendering
│   ├── members.js              # Member directory & status toggles
│   ├── issue-book.js           # Loan authorization & stock decrement
│   ├── return-book.js          # Check-in, inventory increment, & fine calculation
│   ├── reservations.js         # Hold queueing & order management
│   ├── fines.js                # Overdue penalty collection & receipts
│   ├── suppliers.js            # Vendor contracts & procurement directory
│   ├── reports.js              # Real-time report generation & CSV export
│   ├── notifications.js        # Notification center & unread badges
│   ├── profile.js              # Profile editor & personal loan records
│   └── settings.js             # Circulation policy configuration
│
└── README.md                   # Complete architectural documentation
```

---

## 4. Technologies Used

- **HTML5:** Semantic document structure, accessible ARIA attributes, native input elements.
- **CSS3:** Native CSS variables (custom properties), CSS Grid, Flexbox, smooth transitions, print stylesheets (`@media print`).
- **Vanilla JavaScript (ES6+):** Pure DOM manipulation, modular architecture, Event Delegation, LocalStorage API, Blob URL generation for CSV export.
- **Chart.js:** Real-time data visualization for circulation trends and category distributions.
- **Lucide Icons:** Clean, professional iconography.

---

## 5. Setup & Local Execution Instructions

### Running via VS Code Live Server
1. Clone or extract the `library-management-system` folder.
2. Open the directory in **Visual Studio Code**.
3. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
4. Right-click on `index.html` and choose **"Open with Live Server"**.
5. The application will launch in your browser at `http://127.0.0.1:5500/index.html`.

### Running in Vite / Node Environment
```bash
npm install
npm run dev
```
Open `http://localhost:3000` to access the application.

---

## 6. Pre-Configured Demo Credentials

Click any role pill on the **Login Page (`login.html`)** to instantly autofill credentials:

| Role | Email | Password | Permissions & View |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@athenaeum.edu` | `admin123` | Full access to all catalog, circulation, reports, and settings. |
| **Librarian** | `librarian@athenaeum.edu` | `lib123` | Operational access to catalog, issues, returns, and patron records. |
| **Member / Patron** | `member@student.athenaeum.edu` | `member123` | Patron view: personal loans, hold requests, and public catalog. |

---

## 7. Explanation of LocalStorage Data Storage

The application uses `window.localStorage` through `StorageManager` in `js/storage.js`:
- **Safe Parsing:** All retrieval operations are wrapped in `try...catch` blocks with fallbacks.
- **Normalized Entities:** Separate keys exist for `lms_books_v1`, `lms_members_v1`, `lms_loans_v1`, `lms_reservations_v1`, `lms_fines_v1`, `lms_categories_v1`, `lms_authors_v1`, `lms_suppliers_v1`, `lms_notifications_v1`, and `lms_settings_v1`.
- **Factory Reset:** Navigating to **Settings** and selecting **"Reset All Demo Data"** clears custom entries and repopulates the 32+ original academic books, 16 members, 10 authors, and initial loan transactions.

---

## 8. Frontend-Only Limitations

- **Simulated Security:** Passwords and sessions are held in browser storage and are intended strictly for prototyping and UI/UX evaluation.
- **Client Boundary:** Transactions are saved locally on the user's current browser and device, without multi-client synchronization.
- **Simulated Payments:** Overdue fine settlements record simulated timestamps without invoking bank or payment gateway APIs.

---

## 9. Suggested Future Backend Architecture

For converting this frontend into an enterprise full-stack system:
- **Backend Framework:** Java 21 with **Spring Boot 3.x** (`spring-boot-starter-web`, `spring-boot-starter-data-jpa`, `spring-boot-starter-security`).
- **Database:** **MySQL 8.0** or **PostgreSQL 16** with normalized relational tables (`books`, `members`, `transactions`, `reservations`, `fines`).
- **Authentication:** Spring Security with stateless **JWT tokens** (JSON Web Tokens) and bcrypt password hashing.
- **RESTful Endpoints:**
  - `POST /api/v1/circulation/issue`
  - `POST /api/v1/circulation/return`
  - `GET /api/v1/books?search=...&category=...`
  - `POST /api/v1/reservations`
  - `POST /api/v1/fines/{id}/pay`
- **Barcode & RFID:** Hardware scanner integration via WebHID / USB keyboard emulation for automatic ISBN and patron card scanning.

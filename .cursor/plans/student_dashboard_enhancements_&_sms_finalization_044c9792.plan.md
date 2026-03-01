---
name: Student Dashboard Enhancements & SMS Finalization
overview: Enhance the student management section with detailed history, direct messaging capabilities, and automated admin notifications. Fix existing bugs and finalize the SMS delivery pipeline.
todos:
  - id: fix-student-query-ui
    content: Fix syntax error in enrollment-tab.tsx and improve table UI
    status: completed
  - id: student-profile-sheet
    content: Implement StudentProfileSheet with response history and sentiment display
    status: completed
  - id: clicksend-utility-refactor
    content: Install official ClickSend SDK and create lib/clicksend.ts utility for shared messaging logic
    status: completed
  - id: direct-messaging-impl
    content: Implement direct SMS/Email API and dashboard buttons
    status: completed
  - id: admin-inclusion-setting
    content: Add include_admins_in_surveys setting to courses and implement in cron job
    status: completed
  - id: test-sms-feature
    content: Implement test SMS capabilities for admin and individual students
    status: completed
  - id: final-verification-docs
    content: Final verification and documentation update
    status: completed
isProject: false
---

# Student Dashboard Enhancements & SMS Finalization Plan

This plan aims to transform the basic student list into a powerful management tool for administrators, providing deep insights into student sentiment and enabling direct communication.

## Phase 1: Bug Fixes & UI Refinement

- **Fix Syntax Error**: Correct the malformed query in [`enrollment-tab.tsx`](app/admin/course/[courseId]/enrollment-tab.tsx) that causes the "fetch failed" error.
- **Table Interactivity**: Update the table to be interactive, highlighting rows on hover and making them clickable.
- **Empty State**: Ensure the empty state is polished and helpful.

## Phase 2: Student Profile & Insights

- **Student Profile Sheet**: Create a `StudentProfileSheet` using Shadcn UI's Sheet component.
- **Historical Data**:
  - Fetch responses specifically for the selected student.
  - Display a timeline of responses with ratings and sentiment flags.
  - Implement a simple "Individual Sentiment Score" based on their latest responses.
- **Action Toolbar**:
  - Add "Send Direct SMS" button.
  - Add "Send Direct Email" button.

## Phase 3: Communication Infrastructure

- **ClickSend SDK Integration**:
  - Install the official `clicksend` Node.js SDK (`npm install clicksend`).
- **ClickSend Utility**: Create a centralized utility in `lib/clicksend.ts` using the official SDK to handle:
  - Sending campaigns (refactor existing raw fetch logic).
  - Sending individual SMS messages (e.g., `smsApi.smsSendPost`).
  - Validating phone numbers and managing lists.
- **Direct Messaging API**: Create `app/api/admin/send-message/route.ts` to handle ad-hoc communication requests from the dashboard.

## Phase 4: Admin Notification & Verification

- **Admin Inclusion Toggle**:
  - Add `include_admins_in_surveys` boolean column to `courses` table.
  - Add a toggle in the UI (Course Dashboard) for this setting.
- **Cron Update**: Modify [`send-surveys/route.ts`](app/api/cron/send-surveys/route.ts) to:
  - Check the `include_admins_in_surveys` flag.
  - If true, fetch admin enrollments and include them in the ClickSend contact list for the campaign.
- **Test SMS Feature**:
  - Implement "Send Test to Me" (Admin) in Course Settings.
  - Implement "Send Test to Student" in the `StudentProfileSheet`.

## Phase 5: Finalization & Hardening

- **End-to-End Testing**: Verify the full loop: scheduling -> cron trigger -> ClickSend campaign -> admin receipt -> student receipt.
- **Documentation**: Update `docs/ARCHITECTURE.md` to reflect the new messaging flows.

## Mermaid Diagram of New Messaging Flow

```mermaid
flowchart TD
    Admin[Admin Dashboard] -->|Direct Message| MsgAPI[Message API]
    MsgAPI -->|Single SMS| ClickSend[ClickSend API]
    
    Cron[Cron: Send Surveys] -->|Check Setting| DB[(Database)]
    DB -->|Course Config| Cron
    Cron -->|If Toggle On| AddAdmin[Include Admins in List]
    Cron -->|Campaign| ClickSend
    
    ClickSend -->|SMS| Student[Student Phone]
    ClickSend -->|SMS (Copy)| AdminPhone[Admin Phone]
```
# Privacy Policy

**Effective date:** 2026-01-27

Readonly.page is a privacy-first, client-side web app. This policy explains what
data we collect (if any), what we do not collect, and how your content is
handled.

## Summary

- Your documents are fetched **directly by your browser** from the URL you
  provide.
- Readonly.page servers do **not** receive, store, or process your document
  content.
- Saved pages and settings are stored **locally in your browser**.
- If you use the Vault, secrets are stored **encrypted locally**.

---

## 1. What Readonly.page is

Readonly.page is a Single Page Application (SPA). Our server only serves the app
code (HTML, JavaScript, CSS). After the app loads, it runs in your browser.

## 2. Documents you open

When you open a document URL, your browser requests it **directly from the
document host** (for example GitHub, S3, or your own server). Readonly.page does
not proxy these requests.

**We do not collect or store:**

- The content of your documents
- The document URLs you open
- A server-side history of your reading activity

## 3. URL hash and document URL privacy

Readonly.page stores the target document URL in the **URL hash** (the part after
`#`). Browsers do not include the hash in normal HTTP requests, so the
Readonly.page server typically does not receive the document URL as part of page
loads.

## 4. Local storage

Readonly.page stores app state locally in your browser (for example localStorage
and/or IndexedDB). This may include:

- Saved resource entries (name, type, URL/base URL, description)
- UI preferences
- App configuration you choose to keep on the device

This data stays on your device unless you export it or sync it through your own
browser/account features.

## 5. Vault (encrypted secrets stored locally)

If you choose to store access secrets (such as tokens) for protected endpoints,
Readonly.page stores them in a local encrypted vault in your browser storage.

- Secrets are encrypted at rest.
- Secrets are decrypted only after you unlock the vault in your current session.
- Readonly.page does not upload vault contents to our servers.

## 6. What third-party hosts can see

The website hosting your document will receive standard request data when your
browser fetches the document, such as:

- Your IP address
- Request time
- The requested path
- Potentially a `Referer` header (depending on browser policy)

This is similar to visiting that document host directly in your browser.

## 7. Analytics and tracking

Readonly.page does not run advertising trackers.

If we add analytics in the future, we will update this policy and clearly
describe what is collected and how to opt out.

## 8. Changes to this policy

We may update this policy over time. When we do, we will update the “Effective
date” at the top of this page.

## 9. Contact

If you have questions about this policy, contact us via the project's public
repository or listed contact channel.

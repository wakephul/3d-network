# terms-and-conditions

Use this plugin to present your users with a modal containing Terms and Conditions for using your site.

## Installation

Import the `TermsAndConditionsServer` server in your main trpc router inside `app/server/index.tsx`.

```tsx
import { TermsAndConditions } from '@/plugins/terms-and-conditions/server'

Trpc.createRouter({
  ...
  termsAndConditions: TermsAndConditions.trpcRouter
  ...
})
```

## Usage

Then, use the `TermsAndConditions` component on any page inside your app.

`Admins` will be shown a modal with a rich-text editor for updating the Terms and Conditions,
whereas users will just be presented with the text and a CTA to accept them.

```tsx
import { TermsAndConditions } from '@/plugins/terms-and-conditions/client'

return (
  // ...
  <TermsAndConditions />
  // ...
)
```

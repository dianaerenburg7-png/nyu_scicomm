# NYU SciComm owner guide

This site is designed for one owner and can be published without a paid plan.

## Before publishing

1. Replace the contact placeholders in `app/page.tsx` with the club's real email address or form link.
2. Adjust the club name, mission, and topic list if needed.
3. Create a free GitHub account or organization owned by the club, not a departing member.
4. Publish to a free `pages.dev` address. Do not buy a custom domain if the budget must remain $0.

## Adding a publication

1. Put the approved lead image in `public/images/`.
2. Open `lib/publications.ts`.
3. Add a publication object to the `publications` array, following the type at the top of that file.
4. Commit and push the change. The hosted site will rebuild automatically.

The homepage shows “No publications yet” while the array is empty. Once an article is added, that empty state is automatically replaced by the publication grid.

## Editorial checklist

- Confirm the headline, author name, topic, and publication date.
- Obtain permission for every image and write useful alternative text.
- Check all factual claims, sources, and links.
- Read the article on a phone before publishing.
- Keep drafts outside the public repository until they are approved.

## Free hosting

Connect this repository to Cloudflare Pages or deploy through Sites. Use the provider's free subdomain. A custom domain is optional and is the only common cost this setup intentionally avoids.

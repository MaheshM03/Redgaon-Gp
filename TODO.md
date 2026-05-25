<<<<<<< HEAD
# TODO

- [ ] Fix AdminPanel declarations API 404 by improving API_BASE fallback logic.
- [ ] Add production debug log for which API base is being used.
- [ ] Ensure declarations endpoints continue to work with auth header.
- [ ] Test: open AdminPanel -> Declarations tab; verify GET /api/declarations works.
=======
# TODO - Admin Committee replacements

- [x] Update `client/src/components/Sections/AdminCommittee.jsx` `membersData` to replace the current Admin Committee list.
- [ ] Map roles to existing tiers: Sarpanch -> `senior`, Deputy Sarpanch -> `senior` (until a new tier is added), Members -> `member`, Gram Panchayat Officer -> `officer`, Computer Operator -> `staff`.
- [ ] Set exact Marathi spellings for `nameMr` and `roleMr` for each entry.
- [ ] Build/test the client to ensure no runtime errors.
>>>>>>> 3067eef9686c684fa8728dc52d2e1fc0c724ce39


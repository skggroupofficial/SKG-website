**Logo** — the SKG identity mark; use `wordmark` for type-only placement, `lockup`/`monogram` for the gold artwork.

```jsx
<Logo variant="wordmark" size={56} tagline tone="tobacco" />
<Logo variant="lockup" size={64} src="../../assets/logo/skg-logo-gold.png" />
<Logo variant="monogram" size={48} src="../../assets/logo/skg-monogram-gold.png" />
```

- `wordmark` is fully self-contained (renders "SKG" in Playfair) and scales to any size — prefer it for headers/footers.
- `lockup` / `monogram` use a PNG; pass `src` with the path relative to the page that mounts it (`assets/…` from root, `../../assets/…` from a kit).
- The gold artwork reads on both Bone and Tobacco grounds — no reversed version needed.

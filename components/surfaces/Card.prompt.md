**Card** — square content panel. Hairline border on Bone; `dark` for Tobacco sections.

```jsx
<Card>
  <Eyebrow dash>Development</Eyebrow>
  <h3 className="skg-subheading">Riverfront Mixed-Use</h3>
  <p className="skg-body">Land assembled, masterplan approved.</p>
</Card>

<Card href="/projects/riverfront" interactive>…</Card>   {/* lifts on hover */}
<Card variant="dark" pad="lg">…</Card>
```

- Corners stay square by brand (`--radius-card: 0`).
- `raised` swaps the border for a soft warm shadow.

**Button** — primary action control with a DM Mono uppercase label.

```jsx
<Button variant="accent" iconRight={<i className="ph ph-arrow-right" />}>Request the prospectus</Button>
<Button variant="primary">Our approach</Button>
<Button variant="secondary">View projects</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="inverse">Talk to us</Button>  {/* on dark grounds */}
<Button variant="link" iconRight={<i className="ph ph-arrow-up-right" />}>Read the brief</Button>
```

- `accent` (solid brass) is the single highest-emphasis action per view — use sparingly.
- `primary` is solid Tobacco; `inverse` (bone) is its counterpart on dark sections.
- Pass any icon element to `iconLeft` / `iconRight` (e.g. a Phosphor `<i>`).

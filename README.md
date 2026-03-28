# Daedalus UI

Pure Svelte 5 component library. No dependencies, no Tailwind, no bits-ui.

## Install

```bash
npm install git+ssh://git@github.com:GustawJot/daedalus.git#main
```

Requires `svelte ^5.0.0` as a peer dependency.

## Setup

Import the theme CSS once in your root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import 'daedalus/theme';
</script>

<slot />
```

## Usage

```svelte
<script>
  import { Button, Card, CardHeader, CardTitle, CardContent } from 'daedalus';
</script>

<Card>
  <CardHeader>
    <CardTitle>Hello</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

## Dark mode

Add or remove the `dark` class on `<html>`:

```js
document.documentElement.classList.add('dark');    // dark
document.documentElement.classList.remove('dark');  // light
```

If the user's OS prefers dark mode and you want to force light, add the `light` class instead.

## Components

**Primitives** --- Button, Badge, Input, Label, Textarea, Separator, Skeleton, Spinner, Typography, Empty

**Layout** --- Card, Accordion, Collapsible, Tabs, Table

**Form** --- Checkbox, Switch, Slider, RadioGroup, Select, Field, InputGroup, ButtonGroup, Toggle, ToggleGroup

**Overlay** --- Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard, DropdownMenu, ContextMenu

**Complex** --- Avatar, Alert, ScrollArea, Breadcrumb, Pagination, Calendar, DatePicker, Combobox, Command, DataTable, Sidebar, Toaster/toast, Item

## Updating

```bash
npm update daedalus
```

Or pin to a specific commit:

```bash
npm install git+ssh://git@github.com:GustawJot/daedalus.git#<commit-sha>
```

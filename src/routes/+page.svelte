<script lang="ts">
	// Primitives
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Spinner } from '$lib/components/ui/spinner';
	import { Typography } from '$lib/components/ui/typography';
	import { Empty } from '$lib/components/ui/empty';

	// Layout
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '$lib/components/ui/accordion';
	import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '$lib/components/ui/collapsible';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '$lib/components/ui/table';

	// Form
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Switch } from '$lib/components/ui/switch';
	import { Slider } from '$lib/components/ui/slider';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Select, SelectTrigger, SelectContent, SelectItem } from '$lib/components/ui/select';
	import { Field } from '$lib/components/ui/field';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group';

	// Overlay
	import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '$lib/components/ui/dialog';
	import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '$lib/components/ui/alert-dialog';
	import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '$lib/components/ui/sheet';
	import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/ui/popover';
	import { Tooltip } from '$lib/components/ui/tooltip';
	import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '$lib/components/ui/dropdown-menu';

	// Additional Form
	import { InputGroup, InputGroupText } from '$lib/components/ui/input-group';
	import { ButtonGroup } from '$lib/components/ui/button-group';

	// Additional Overlay
	import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuLabel, ContextMenuSeparator } from '$lib/components/ui/context-menu';
	import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from '$lib/components/ui/drawer';
	import { HoverCard, HoverCardTrigger, HoverCardContent } from '$lib/components/ui/hover-card';

	// Additional
	import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '$lib/components/ui/command';
	import { Item } from '$lib/components/ui/item';
	import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem, SidebarTrigger } from '$lib/components/ui/sidebar';

	// Complex
	import { Avatar } from '$lib/components/ui/avatar';
	import { Alert, AlertTitle, AlertDescription as AlertDesc } from '$lib/components/ui/alert';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from '$lib/components/ui/pagination';
	import { Calendar } from '$lib/components/ui/calendar';
	import { DatePicker } from '$lib/components/ui/date-picker';
	import { Combobox } from '$lib/components/ui/combobox';
	import { DataTable } from '$lib/components/ui/data-table';
	import { Toaster } from '$lib/components/ui/sonner';
	import { toast } from '$lib/components/ui/sonner/toast.svelte.js';

	// State
	let darkMode = $state(false);
	let checkboxChecked = $state(false);
	let switchChecked = $state(true);
	let sliderValue = $state(50);
	let radioValue = $state('option1');
	let selectOpen = $state(false);
	let selectValue = $state('');
	let togglePressed = $state(false);
	let toggleGroupValue = $state('center');
	let dialogOpen = $state(false);
	let alertDialogOpen = $state(false);
	let sheetOpen = $state(false);
	let popoverOpen = $state(false);
	let dropdownOpen = $state(false);
	let calendarValue: Date | null = $state(null);
	let calendarMonth = $state(new Date());
	let datePickerValue: Date | null = $state(null);
	let comboboxValue = $state('');
	let paginationPage = $state(1);
	let accordionOpen1 = $state(true);
	let accordionOpen2 = $state(false);
	let accordionOpen3 = $state(false);
	let collapsibleOpen = $state(false);
	let tabValue = $state('tab1');
	let sortKey = $state('name');
	let sortDirection: 'asc' | 'desc' = $state('asc');
	let drawerOpen = $state(false);
	let contextMenuOpen = $state(false);
	let contextMenuX = $state(0);
	let contextMenuY = $state(0);
	let contextMenuCheckbox = $state(true);
	let commandSearch = $state('');
	let sidebarOpen = $state(true);
	let activeItem = $state('item1');

	const comboboxOptions = [
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'react', label: 'React' },
		{ value: 'vue', label: 'Vue' },
		{ value: 'angular', label: 'Angular' },
		{ value: 'solid', label: 'SolidJS' }
	];

	const tableData = [
		{ name: 'Alice', email: 'alice@example.com', role: 'Admin' },
		{ name: 'Bob', email: 'bob@example.com', role: 'User' },
		{ name: 'Charlie', email: 'charlie@example.com', role: 'Editor' },
		{ name: 'Diana', email: 'diana@example.com', role: 'User' }
	];

	const dataTableColumns = [
		{ key: 'name', header: 'Name', sortable: true },
		{ key: 'email', header: 'Email', sortable: true },
		{ key: 'role', header: 'Role', sortable: true }
	];

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
	}
</script>

<Toaster position="bottom-right" />

<div class="demo-page">
	<header class="demo-header">
		<div class="header-content">
			<div>
				<h1 class="demo-title">Daedalus UI</h1>
				<p class="demo-subtitle">Pure Svelte 5 component library — no dependencies, no Tailwind, no bits-ui</p>
			</div>
			<button class="theme-toggle" onclick={toggleDarkMode} aria-label="Toggle dark mode">
				{#if darkMode}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
				{/if}
			</button>
		</div>
	</header>

	<main class="demo-main">

		<!-- ═══════════════════ TYPOGRAPHY ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Typography</h2>
			<div class="demo-grid">
				<Typography variant="h1">Heading 1</Typography>
				<Typography variant="h2">Heading 2</Typography>
				<Typography variant="h3">Heading 3</Typography>
				<Typography variant="h4">Heading 4</Typography>
				<Typography variant="p">This is a paragraph of text demonstrating the base typography styling.</Typography>
				<Typography variant="muted">This is muted text for secondary content.</Typography>
				<Typography variant="code">const x = 42;</Typography>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ BUTTONS ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Button</h2>
			<div class="demo-row">
				<Button>Filled</Button>
				<Button variant="tonal">Tonal</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>
			<div class="demo-row">
				<Button tone="critical">Critical</Button>
				<Button tone="success">Success</Button>
				<Button tone="caution">Caution</Button>
				<Button tone="info">Info</Button>
			</div>
			<div class="demo-row">
				<Button variant="outline" tone="critical">Outline Critical</Button>
				<Button variant="tonal" tone="success">Tonal Success</Button>
				<Button variant="ghost" tone="critical">Ghost Critical</Button>
			</div>
			<div class="demo-row">
				<Button size="sm">Small</Button>
				<Button>Medium</Button>
				<Button size="lg">Large</Button>
				<Button disabled>Disabled</Button>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ BADGE ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Badge</h2>
			<div class="demo-row">
				<Badge>Filled</Badge>
				<Badge variant="tonal">Tonal</Badge>
				<Badge tone="critical">Critical</Badge>
				<Badge variant="outline">Outline</Badge>
				<Badge tone="success">Success</Badge>
				<Badge tone="caution">Caution</Badge>
				<Badge tone="info">Info</Badge>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ INPUT / TEXTAREA / LABEL ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Input, Textarea & Label</h2>
			<div class="demo-form">
				<Field>
					<Label for="demo-input">Email</Label>
					<Input id="demo-input" type="email" placeholder="you@example.com" />
				</Field>
				<Field>
					<Label for="demo-textarea">Message</Label>
					<Textarea id="demo-textarea" placeholder="Type your message here..." rows={3} />
				</Field>
				<Field label="With error" labelFor="demo-error" error="This field is required" required>
					<Input id="demo-error" placeholder="Required field" />
				</Field>
				<Field label="With description" labelFor="demo-desc" description="This field has a helpful description.">
					<Input id="demo-desc" placeholder="Described field" />
				</Field>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ CHECKBOX / SWITCH / SLIDER ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Checkbox, Switch & Slider</h2>
			<div class="demo-form">
				<div class="demo-row-inline">
					<Checkbox bind:checked={checkboxChecked} id="terms" />
					<Label for="terms">Accept terms and conditions</Label>
					<span class="state-text">({checkboxChecked ? 'checked' : 'unchecked'})</span>
				</div>
				<div class="demo-row-inline">
					<Switch bind:checked={switchChecked} id="airplane" />
					<Label for="airplane">Airplane Mode</Label>
					<span class="state-text">({switchChecked ? 'on' : 'off'})</span>
				</div>
				<div>
					<Label for="volume">Volume: {sliderValue}</Label>
					<Slider bind:value={sliderValue} id="volume" min={0} max={100} step={1} />
				</div>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ RADIO GROUP ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Radio Group</h2>
			{#snippet radioChildren({ value: currentValue, set }: { value: string; set: (v: string) => void })}
				<div class="demo-radio-list">
					<div class="demo-row-inline">
						<RadioGroupItem value="option1" checked={currentValue === 'option1'} name="demo-radio" onchange={() => set('option1')} />
						<Label>Option 1</Label>
					</div>
					<div class="demo-row-inline">
						<RadioGroupItem value="option2" checked={currentValue === 'option2'} name="demo-radio" onchange={() => set('option2')} />
						<Label>Option 2</Label>
					</div>
					<div class="demo-row-inline">
						<RadioGroupItem value="option3" checked={currentValue === 'option3'} name="demo-radio" onchange={() => set('option3')} />
						<Label>Option 3</Label>
					</div>
				</div>
			{/snippet}
			<RadioGroup bind:value={radioValue} name="demo-radio" children={radioChildren} />
			<p class="state-text">Selected: {radioValue}</p>
		</section>

		<Separator />

		<!-- ═══════════════════ SELECT ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Select</h2>
			<div class="select-demo">
				<Select bind:value={selectValue} bind:open={selectOpen}>
					<SelectTrigger placeholder="Choose a framework..." value={selectValue || ''} onclick={() => selectOpen = !selectOpen} />
					<SelectContent open={selectOpen}>
						<SelectItem value="svelte" selected={selectValue === 'svelte'} onclick={() => { selectValue = 'svelte'; selectOpen = false; }}>Svelte</SelectItem>
						<SelectItem value="react" selected={selectValue === 'react'} onclick={() => { selectValue = 'react'; selectOpen = false; }}>React</SelectItem>
						<SelectItem value="vue" selected={selectValue === 'vue'} onclick={() => { selectValue = 'vue'; selectOpen = false; }}>Vue</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ TOGGLE ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Toggle & Toggle Group</h2>
			<div class="demo-row">
				<Toggle bind:pressed={togglePressed}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
				</Toggle>
				<span class="state-text">{togglePressed ? 'Pressed' : 'Not pressed'}</span>
			</div>
			<div class="demo-row">
				{#snippet toggleGroupChildren({ value: val, toggle }: { value: string | string[]; toggle: (v: string) => void })}
					<ToggleGroupItem value="left" pressed={val === 'left'} onclick={() => toggle('left')}>Left</ToggleGroupItem>
					<ToggleGroupItem value="center" pressed={val === 'center'} onclick={() => toggle('center')}>Center</ToggleGroupItem>
					<ToggleGroupItem value="right" pressed={val === 'right'} onclick={() => toggle('right')}>Right</ToggleGroupItem>
				{/snippet}
				<ToggleGroup type="single" bind:value={toggleGroupValue} children={toggleGroupChildren} />
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ CARD ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Card</h2>
			<div class="demo-cards">
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>This is a card description for context.</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card content goes here. This demonstrates the standard card layout with header, content, and footer.</p>
					</CardContent>
					<CardFooter>
						<Button variant="outline">Cancel</Button>
						<Button>Submit</Button>
					</CardFooter>
				</Card>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ ACCORDION ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Accordion</h2>
			<div class="demo-medium">
				<Accordion>
					<AccordionItem bind:open={accordionOpen1}>
						<AccordionTrigger open={accordionOpen1} onclick={() => { accordionOpen1 = !accordionOpen1; accordionOpen2 = false; accordionOpen3 = false; }}>
							What is Daedalus UI?
						</AccordionTrigger>
						<AccordionContent open={accordionOpen1}>
							Daedalus UI is a pure Svelte 5 component library that recreates the ShadCN design system without any dependencies.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem bind:open={accordionOpen2}>
						<AccordionTrigger open={accordionOpen2} onclick={() => { accordionOpen2 = !accordionOpen2; accordionOpen1 = false; accordionOpen3 = false; }}>
							Why not use bits-ui?
						</AccordionTrigger>
						<AccordionContent open={accordionOpen2}>
							bits-ui calls setContext() during component initialization, which fails inside SvelteKit's page rendering due to its branch() effects system.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem bind:open={accordionOpen3}>
						<AccordionTrigger open={accordionOpen3} onclick={() => { accordionOpen3 = !accordionOpen3; accordionOpen1 = false; accordionOpen2 = false; }}>
							Is it production-ready?
						</AccordionTrigger>
						<AccordionContent open={accordionOpen3}>
							It's designed as a copy-paste component library — take what you need, customize the CSS variables, and make it your own.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ COLLAPSIBLE ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Collapsible</h2>
			<div class="demo-medium">
				<Collapsible bind:open={collapsibleOpen}>
					<div class="demo-row-inline">
						<Typography variant="h4">Starred repositories</Typography>
						<CollapsibleTrigger onclick={() => collapsibleOpen = !collapsibleOpen}>
							{collapsibleOpen ? 'Hide' : 'Show'}
						</CollapsibleTrigger>
					</div>
					<div class="collapsible-item">@daedalus/ui</div>
					<CollapsibleContent open={collapsibleOpen}>
						<div class="collapsible-item">@daedalus/icons</div>
						<div class="collapsible-item">@daedalus/utils</div>
					</CollapsibleContent>
				</Collapsible>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ TABS ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Tabs</h2>
			<div class="demo-medium">
				{#snippet tabsChildren({ value: val, set }: { value: string; set: (v: string) => void })}
					<TabsList>
						<TabsTrigger value="tab1" active={val === 'tab1'} onclick={() => set('tab1')}>Account</TabsTrigger>
						<TabsTrigger value="tab2" active={val === 'tab2'} onclick={() => set('tab2')}>Password</TabsTrigger>
						<TabsTrigger value="tab3" active={val === 'tab3'} onclick={() => set('tab3')}>Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1" activeValue={val}>
						<p>Manage your account settings and preferences here.</p>
					</TabsContent>
					<TabsContent value="tab2" activeValue={val}>
						<p>Change your password and set up two-factor authentication.</p>
					</TabsContent>
					<TabsContent value="tab3" activeValue={val}>
						<p>Configure application settings and notifications.</p>
					</TabsContent>
				{/snippet}
				<Tabs bind:value={tabValue} children={tabsChildren} />
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ TABLE ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Table</h2>
			<Table>
				<TableCaption>A list of team members.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Role</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each tableData as row}
						<TableRow>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell><Badge variant="outline" tone="neutral">{row.role}</Badge></TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</section>

		<Separator />

		<!-- ═══════════════════ AVATAR ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Avatar</h2>
			<div class="demo-row">
				<Avatar fallback="CN" size="sm" />
				<Avatar fallback="AB" />
				<Avatar fallback="JD" size="lg" />
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ ALERT ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Alert</h2>
			<div class="demo-stack">
				<Alert>
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDesc>You can add components to your app using the CLI.</AlertDesc>
				</Alert>
				<Alert tone="critical">
					<AlertTitle>Error</AlertTitle>
					<AlertDesc>Your session has expired. Please log in again.</AlertDesc>
				</Alert>
				<Alert tone="success">
					<AlertTitle>Success</AlertTitle>
					<AlertDesc>Your changes have been saved successfully.</AlertDesc>
				</Alert>
				<Alert tone="caution">
					<AlertTitle>Warning</AlertTitle>
					<AlertDesc>Your trial period expires in 3 days.</AlertDesc>
				</Alert>
				<Alert tone="info">
					<AlertTitle>Info</AlertTitle>
					<AlertDesc>A new version of the application is available.</AlertDesc>
				</Alert>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ BREADCRUMB ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Breadcrumb</h2>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Components</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</section>

		<Separator />

		<!-- ═══════════════════ PAGINATION ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Pagination</h2>
			{#snippet paginationChildren({ pages, page: pg, setPage, canPrev, canNext }: { pages: (number | 'ellipsis')[]; page: number; setPage: (p: number) => void; canPrev: boolean; canNext: boolean })}
				<PaginationContent>
					<PaginationPrevious disabled={!canPrev} onclick={() => setPage(pg - 1)} />
					{#each pages as item}
						{#if item === 'ellipsis'}
							<PaginationEllipsis />
						{:else}
							<PaginationItem page={item} active={item === pg} onclick={() => setPage(item)} />
						{/if}
					{/each}
					<PaginationNext disabled={!canNext} onclick={() => setPage(pg + 1)} />
				</PaginationContent>
			{/snippet}
			<Pagination bind:page={paginationPage} totalPages={10} children={paginationChildren} />
		</section>

		<Separator />

		<!-- ═══════════════════ SKELETON / SPINNER ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Skeleton & Spinner</h2>
			<div class="demo-row">
				<div class="skeleton-demo">
					<Skeleton class="skeleton-circle" />
					<div>
						<Skeleton class="skeleton-line" />
						<Skeleton class="skeleton-line-short" />
					</div>
				</div>
				<Spinner size="sm" />
				<Spinner />
				<Spinner size="lg" />
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ CALENDAR ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Calendar & Date Picker</h2>
			<div class="demo-row-wrap">
				<Calendar bind:value={calendarValue} bind:month={calendarMonth} />
				<div>
					<Label>Date Picker</Label>
					<DatePicker bind:value={datePickerValue} />
					{#if datePickerValue}
						<p class="state-text">Selected: {datePickerValue.toLocaleDateString()}</p>
					{/if}
				</div>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ COMBOBOX ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Combobox</h2>
			<Combobox options={comboboxOptions} bind:value={comboboxValue} placeholder="Select a framework..." />
			{#if comboboxValue}
				<p class="state-text">Selected: {comboboxValue}</p>
			{/if}
		</section>

		<Separator />

		<!-- ═══════════════════ DATA TABLE ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Data Table (sortable)</h2>
			<DataTable columns={dataTableColumns} data={tableData} bind:sortKey bind:sortDirection />
		</section>

		<Separator />

		<!-- ═══════════════════ DIALOG ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Dialog & Alert Dialog</h2>
			<div class="demo-row">
				<Button onclick={() => dialogOpen = true}>Open Dialog</Button>
				<Button tone="critical" onclick={() => alertDialogOpen = true}>Open Alert Dialog</Button>
			</div>

			<Dialog bind:open={dialogOpen}>
				<DialogContent open={dialogOpen} onclose={() => dialogOpen = false}>
					<DialogHeader>
						<DialogTitle>Edit Profile</DialogTitle>
						<DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
					</DialogHeader>
					<div class="dialog-form">
						<Field>
							<Label for="name">Name</Label>
							<Input id="name" value="John Doe" />
						</Field>
						<Field>
							<Label for="username">Username</Label>
							<Input id="username" value="@johndoe" />
						</Field>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => dialogOpen = false}>Cancel</Button>
						<Button onclick={() => { dialogOpen = false; toast.success('Profile saved!'); }}>Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<AlertDialog bind:open={alertDialogOpen}>
				<AlertDialogContent open={alertDialogOpen} onclose={() => alertDialogOpen = false}>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>This action cannot be undone. This will permanently delete your account.</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onclick={() => alertDialogOpen = false}>Cancel</AlertDialogCancel>
						<AlertDialogAction tone="critical" onclick={() => { alertDialogOpen = false; toast.error('Account deleted'); }}>Delete Account</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</section>

		<Separator />

		<!-- ═══════════════════ SHEET ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Sheet</h2>
			<Button variant="outline" onclick={() => sheetOpen = true}>Open Sheet</Button>
			<Sheet bind:open={sheetOpen}>
				<SheetContent side="right" open={sheetOpen} onclose={() => sheetOpen = false}>
					<SheetHeader>
						<SheetTitle>Sheet Title</SheetTitle>
						<SheetDescription>This is a side sheet panel. It slides in from the right.</SheetDescription>
					</SheetHeader>
					<div class="sheet-body">
						<p>Sheet content goes here. You can put any content inside.</p>
						<Button onclick={() => sheetOpen = false}>Close</Button>
					</div>
				</SheetContent>
			</Sheet>
		</section>

		<Separator />

		<!-- ═══════════════════ POPOVER ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Popover & Tooltip</h2>
			<div class="demo-row">
				{#snippet popoverChildren({ open: isOpen, close, toggle }: { open: boolean; close: () => void; toggle: () => void })}
					<PopoverTrigger onclick={toggle}>
						<Button variant="outline">Open Popover</Button>
					</PopoverTrigger>
					<PopoverContent open={isOpen} onclose={close}>
						<div class="popover-body">
							<Typography variant="h4">Dimensions</Typography>
							<Typography variant="muted">Set the dimensions for the layer.</Typography>
						</div>
					</PopoverContent>
				{/snippet}
				<Popover bind:open={popoverOpen} children={popoverChildren} />
				<Tooltip content="This is a tooltip" side="top">
					<Button variant="outline">Hover me</Button>
				</Tooltip>
				<Tooltip content="Bottom tooltip" side="bottom">
					<Button variant="ghost">Bottom</Button>
				</Tooltip>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ DROPDOWN MENU ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Dropdown Menu</h2>
			{#snippet dropdownChildren({ open: isOpen, close, toggle }: { open: boolean; close: () => void; toggle: () => void })}
				<DropdownMenuTrigger onclick={toggle}>
					<Button variant="outline">Open Menu</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent open={isOpen} onclose={close}>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onclick={() => toast('Profile clicked')}>Profile</DropdownMenuItem>
					<DropdownMenuItem onclick={() => toast('Settings clicked')}>Settings</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onclick={() => toast.error('Logged out')} tone="critical">Log out</DropdownMenuItem>
				</DropdownMenuContent>
			{/snippet}
			<DropdownMenu bind:open={dropdownOpen} children={dropdownChildren} />
		</section>

		<Separator />

		<!-- ═══════════════════ SCROLL AREA ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Scroll Area</h2>
			<ScrollArea class="scroll-demo">
				{#each Array(20) as _, i}
					<div class="scroll-item">Item {i + 1}</div>
				{/each}
			</ScrollArea>
		</section>

		<Separator />

		<!-- ═══════════════════ EMPTY ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Empty State</h2>
			<Empty title="No results found" description="Try adjusting your search or filter to find what you're looking for." />
		</section>

		<Separator />

		<!-- ═══════════════════ INPUT GROUP & BUTTON GROUP ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Input Group & Button Group</h2>
			<div class="demo-form">
				<InputGroup>
					<InputGroupText>https://</InputGroupText>
					<Input placeholder="example.com" />
				</InputGroup>
				<InputGroup>
					<InputGroupText>@</InputGroupText>
					<Input placeholder="username" />
					<InputGroupText>.com</InputGroupText>
				</InputGroup>
			</div>
			<div class="demo-row" style="margin-top: 1rem;">
				<ButtonGroup>
					<Button variant="outline">Left</Button>
					<Button variant="outline">Center</Button>
					<Button variant="outline">Right</Button>
				</ButtonGroup>
				<ButtonGroup orientation="vertical">
					<Button variant="outline" size="sm">Top</Button>
					<Button variant="outline" size="sm">Mid</Button>
					<Button variant="outline" size="sm">Bottom</Button>
				</ButtonGroup>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ ITEM ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Item</h2>
			<div class="demo-item-list">
				<Item active={activeItem === 'item1'} onclick={() => activeItem = 'item1'}>Dashboard</Item>
				<Item active={activeItem === 'item2'} onclick={() => activeItem = 'item2'}>Settings</Item>
				<Item active={activeItem === 'item3'} onclick={() => activeItem = 'item3'}>Analytics</Item>
				<Item disabled>Disabled Item</Item>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ HOVER CARD ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Hover Card</h2>
			<div class="demo-row">
				{#snippet hoverCardChildren({ open: isOpen, show, hide }: { open: boolean; show: () => void; hide: () => void })}
					<HoverCardTrigger onmouseenter={show} onmouseleave={hide}>
						<Button variant="link">@daedalus</Button>
					</HoverCardTrigger>
					<HoverCardContent open={isOpen} onmouseenter={show} onmouseleave={hide}>
						<div class="hovercard-body">
							<Avatar fallback="DU" size="sm" />
							<div>
								<Typography variant="h4">Daedalus UI</Typography>
								<Typography variant="muted">Pure Svelte 5 component library — no dependencies.</Typography>
							</div>
						</div>
					</HoverCardContent>
				{/snippet}
				<HoverCard children={hoverCardChildren} />
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ CONTEXT MENU ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Context Menu</h2>
			{#snippet contextMenuChildren({ open: isOpen, close, x, y }: { open: boolean; close: () => void; x: number; y: number })}
				<ContextMenuTrigger oncontextmenu={(e) => { contextMenuX = e.clientX; contextMenuY = e.clientY; contextMenuOpen = true; }}>
					<div class="context-menu-area">
						Right-click here
					</div>
				</ContextMenuTrigger>
				<ContextMenuContent open={isOpen} x={x} y={y} onclose={close}>
					<ContextMenuLabel>Actions</ContextMenuLabel>
					<ContextMenuSeparator />
					<ContextMenuItem onclick={close}>Copy</ContextMenuItem>
					<ContextMenuItem onclick={close}>Paste</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuCheckboxItem bind:checked={contextMenuCheckbox}>Show Hidden</ContextMenuCheckboxItem>
					<ContextMenuSeparator />
					<ContextMenuItem tone="critical" onclick={close}>Delete</ContextMenuItem>
				</ContextMenuContent>
			{/snippet}
			<ContextMenu bind:open={contextMenuOpen} bind:x={contextMenuX} bind:y={contextMenuY} children={contextMenuChildren} />
		</section>

		<Separator />

		<!-- ═══════════════════ DRAWER ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Drawer</h2>
			<Button variant="outline" onclick={() => drawerOpen = true}>Open Drawer</Button>
			<Drawer bind:open={drawerOpen}>
				{#snippet children({ close }: { close: () => void })}
					<DrawerContent open={drawerOpen} onclose={close}>
						<DrawerHeader>
							<DrawerTitle>Edit Settings</DrawerTitle>
							<DrawerDescription>Adjust your preferences below. Changes are saved automatically.</DrawerDescription>
						</DrawerHeader>
						<div class="drawer-body">
							<Field>
								<Label for="drawer-name">Display Name</Label>
								<Input id="drawer-name" placeholder="Enter your name" />
							</Field>
							<Field>
								<Label for="drawer-bio">Bio</Label>
								<Textarea id="drawer-bio" placeholder="Tell us about yourself..." rows={3} />
							</Field>
						</div>
						<DrawerFooter>
							<Button onclick={close}>Save</Button>
							<Button variant="outline" onclick={close}>Cancel</Button>
						</DrawerFooter>
					</DrawerContent>
				{/snippet}
			</Drawer>
		</section>

		<Separator />

		<!-- ═══════════════════ COMMAND ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Command</h2>
			<div class="demo-medium">
				<Command>
					<CommandInput bind:value={commandSearch} placeholder="Search commands..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem value="calendar" onselect={() => toast('Calendar selected')}>Calendar</CommandItem>
							<CommandItem value="search" onselect={() => toast('Search selected')}>Search</CommandItem>
							<CommandItem value="settings" onselect={() => toast('Settings selected')}>Settings</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem value="profile" onselect={() => toast('Profile selected')}>Profile</CommandItem>
							<CommandItem value="billing" onselect={() => toast('Billing selected')}>Billing</CommandItem>
							<CommandItem value="keyboard" onselect={() => toast('Keyboard selected')}>Keyboard Shortcuts</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ SIDEBAR ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Sidebar</h2>
			<div class="sidebar-demo">
				<Sidebar bind:open={sidebarOpen}>
					<SidebarHeader>
						<SidebarTrigger onclick={() => sidebarOpen = !sidebarOpen} />
						{#if sidebarOpen}
							<Typography variant="h4">App</Typography>
						{/if}
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Navigation</SidebarGroupLabel>
							<SidebarItem href="/" active>Dashboard</SidebarItem>
							<SidebarItem>Projects</SidebarItem>
							<SidebarItem>Analytics</SidebarItem>
						</SidebarGroup>
						<SidebarGroup>
							<SidebarGroupLabel>Settings</SidebarGroupLabel>
							<SidebarItem>Profile</SidebarItem>
							<SidebarItem>Preferences</SidebarItem>
							<SidebarItem disabled>Billing</SidebarItem>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter>
						{#if sidebarOpen}
							<Typography variant="muted">v1.0.0</Typography>
						{/if}
					</SidebarFooter>
				</Sidebar>
			</div>
		</section>

		<Separator />

		<!-- ═══════════════════ TOAST ═══════════════════ -->
		<section class="demo-section">
			<h2 class="section-title">Toast (Sonner)</h2>
			<div class="demo-row">
				<Button onclick={() => toast('This is a default toast')}>Default</Button>
				<Button tone="success" onclick={() => toast.success('Operation successful!')}>Success</Button>
				<Button tone="critical" onclick={() => toast.error('Something went wrong')}>Error</Button>
				<Button variant="outline" onclick={() => toast.info('Here is some information')}>Info</Button>
			</div>
		</section>
	</main>

	<footer class="demo-footer">
		<Separator />
		<p>Daedalus UI — 47 components, 0 dependencies, pure Svelte 5</p>
	</footer>
</div>

<style>
	.demo-page {
		max-width: 64rem;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		color: var(--foreground);
	}

	.demo-header {
		margin-bottom: 3rem;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.demo-title {
		font-size: var(--text-4xl);
		font-weight: var(--font-semibold);
		letter-spacing: -0.025em;
		margin-bottom: 0.5rem;
	}

	.demo-subtitle {
		color: var(--muted-foreground);
		font-size: var(--text-lg);
	}

	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: transparent;
		color: var(--foreground);
		cursor: pointer;
		transition: background-color var(--transition-fast);
	}

	.theme-toggle:hover {
		background-color: var(--accent);
	}

	.demo-main {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.demo-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.section-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-semibold);
		letter-spacing: -0.025em;
	}

	.demo-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
	}

	.demo-row-wrap {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 2rem;
	}

	.demo-row-inline {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.demo-grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.demo-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 24rem;
	}

	.demo-stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 32rem;
	}

	.demo-medium {
		max-width: 32rem;
	}

	.demo-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
	}

	.demo-radio-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.state-text {
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}

	.select-demo {
		position: relative;
		max-width: 16rem;
	}

	.dialog-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0;
	}

	.sheet-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
	}

	.popover-body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}

	.collapsible-item {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		font-size: var(--text-sm);
		margin-top: 0.5rem;
	}

	.skeleton-demo {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	:global(.skeleton-circle) {
		width: 3rem;
		height: 3rem;
		border-radius: var(--radius-full);
	}

	:global(.skeleton-line) {
		width: 10rem;
		height: 1rem;
		margin-bottom: 0.5rem;
		border-radius: var(--radius);
	}

	:global(.skeleton-line-short) {
		width: 7rem;
		height: 1rem;
		border-radius: var(--radius);
	}

	:global(.scroll-demo) {
		height: 12rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		max-width: 20rem;
	}

	.scroll-item {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--border);
		font-size: var(--text-sm);
	}

	.demo-item-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		max-width: 16rem;
	}

	.hovercard-body {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.context-menu-area {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 8rem;
		border: 2px dashed var(--border);
		border-radius: var(--radius);
		color: var(--muted-foreground);
		font-size: var(--text-sm);
		user-select: none;
		max-width: 24rem;
	}

	.drawer-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 1.5rem;
	}

	.sidebar-demo {
		border: 1px solid var(--border);
		border-radius: var(--radius);
		height: 20rem;
		overflow: hidden;
	}

	.demo-footer {
		margin-top: 3rem;
		text-align: center;
		color: var(--muted-foreground);
		font-size: var(--text-sm);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

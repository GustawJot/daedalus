import { test, expect } from '@playwright/test';

// Force light color scheme so OS dark mode doesn't interfere with theme tests
test.use({ colorScheme: 'light' });

// ---------------------------------------------------------------------------
// Page load & structure
// ---------------------------------------------------------------------------
test.describe('Page load & structure', () => {
	test('page loads with title and subtitle', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('.demo-title')).toHaveText('Daedalus UI');
		await expect(page.locator('.demo-subtitle')).toContainText('Pure Svelte 5 component library');
	});

	test('all major section headings are visible', async ({ page }) => {
		await page.goto('/');
		const expectedSections = [
			'Typography',
			'Button',
			'Badge',
			'Input, Textarea & Label',
			'Checkbox, Switch & Slider',
			'Radio Group',
			'Select',
			'Toggle & Toggle Group',
			'Card',
			'Accordion',
			'Collapsible',
			'Tabs',
			'Table',
			'Avatar',
			'Alert',
			'Breadcrumb',
			'Pagination',
			'Skeleton & Spinner',
			'Calendar & Date Picker',
			'Combobox',
			'Data Table (sortable)',
			'Dialog & Alert Dialog',
			'Sheet',
			'Popover & Tooltip',
			'Dropdown Menu',
			'Scroll Area',
			'Empty State',
			'Toast (Sonner)'
		];
		for (const heading of expectedSections) {
			await expect(page.locator('.section-title', { hasText: new RegExp(`^${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`) })).toBeVisible();
		}
	});

	test('footer is visible', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('.demo-footer')).toContainText('47 components, 0 dependencies');
	});
});

// ---------------------------------------------------------------------------
// Theme toggle  (catches light-mode bug)
// ---------------------------------------------------------------------------
test.describe('Theme toggle', () => {
	test('clicking toggle adds and removes .dark class on <html>', async ({ page }) => {
		await page.goto('/');

		const html = page.locator('html');

		// Initially no .dark class (color-scheme forced to light)
		await expect(html).not.toHaveClass(/\bdark\b/);

		// Click to enable dark mode
		await page.locator('.theme-toggle').click();
		await expect(html).toHaveClass(/\bdark\b/);

		// Click again to disable dark mode
		await page.locator('.theme-toggle').click();
		await expect(html).not.toHaveClass(/\bdark\b/);
	});

	test('background color changes between light and dark mode', async ({ page }) => {
		await page.goto('/');

		const body = page.locator('body');
		const lightBg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);

		// Enable dark mode
		await page.locator('.theme-toggle').click();
		await page.waitForTimeout(200); // wait for CSS transition
		const darkBg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);

		expect(lightBg).not.toBe(darkBg);
	});
});

// ---------------------------------------------------------------------------
// Buttons
// ---------------------------------------------------------------------------
test.describe('Button', () => {
	test('all 5 variants are rendered', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Button' }) });
		const firstRow = section.locator('.demo-row').first();

		for (const label of ['Filled', 'Tonal', 'Outline', 'Ghost', 'Link']) {
			await expect(firstRow.getByRole('button', { name: label })).toBeVisible();
		}
	});

	test('disabled button has disabled attribute', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('button', { name: 'Disabled' })).toBeDisabled();
	});
});

// ---------------------------------------------------------------------------
// Badge
// ---------------------------------------------------------------------------
test.describe('Badge', () => {
	test('all badge variants and tones are rendered', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: /^Badge$/ }) });

		for (const label of ['Filled', 'Tonal', 'Critical', 'Outline', 'Success', 'Caution', 'Info']) {
			await expect(section.getByText(label)).toBeVisible();
		}
	});
});

// ---------------------------------------------------------------------------
// Checkbox / Switch / Slider
// ---------------------------------------------------------------------------
test.describe('Checkbox, Switch & Slider', () => {
	test('clicking checkbox toggles state text', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Checkbox' }) });

		await expect(section.locator('.state-text').first()).toContainText('unchecked');
		await section.locator('#terms').click();
		await expect(section.locator('.state-text').first()).toContainText('checked');
	});

	test('clicking switch toggles state text', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Checkbox' }) });
		const switchRow = section.locator('.demo-row-inline').nth(1);

		// Switch starts as "on" (switchChecked = true)
		await expect(switchRow.locator('.state-text')).toContainText('on');
		await switchRow.locator('#airplane').click();
		await expect(switchRow.locator('.state-text')).toContainText('off');
	});
});

// ---------------------------------------------------------------------------
// Accordion
// ---------------------------------------------------------------------------
test.describe('Accordion', () => {
	test('first item is open by default', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Daedalus UI is a pure Svelte 5 component library')).toBeVisible();
	});

	test('clicking second item opens it and closes first', async ({ page }) => {
		await page.goto('/');

		// Click second trigger
		await page.getByText('Why not use bits-ui?').click();

		// Second content is visible
		await expect(page.getByText('bits-ui calls setContext()')).toBeVisible();

		// First content is hidden
		await expect(page.getByText('Daedalus UI is a pure Svelte 5 component library')).not.toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Collapsible
// ---------------------------------------------------------------------------
test.describe('Collapsible', () => {
	test('show/hide collapsible content', async ({ page }) => {
		await page.goto('/');

		// Initially collapsed
		await expect(page.getByText('@daedalus/icons')).not.toBeVisible();

		// Click "Show" button
		await page.getByRole('button', { name: 'Show' }).click();

		// Content is visible
		await expect(page.getByText('@daedalus/icons')).toBeVisible();
		await expect(page.getByText('@daedalus/utils')).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------
test.describe('Tabs', () => {
	test('Account tab content is visible by default', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Manage your account settings')).toBeVisible();
	});

	test('clicking Password tab switches content', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Password' }).click();
		await expect(page.getByText('Change your password')).toBeVisible();
		await expect(page.getByText('Manage your account settings')).not.toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------
test.describe('Table', () => {
	test('table renders with correct data', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: /^Table$/ }) });
		const table = section.locator('table');

		await expect(table.getByText('Alice')).toBeVisible();
		await expect(table.getByText('bob@example.com')).toBeVisible();
		await expect(table.getByText('Editor')).toBeVisible();
		await expect(table.getByText('Diana')).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Dialog
// ---------------------------------------------------------------------------
test.describe('Dialog', () => {
	test('opens with form fields and can be closed', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Dialog' }).click();

		// Dialog is visible
		const dialog = page.locator('[role="dialog"]').first();
		await expect(dialog).toBeVisible();

		// Title and form fields present
		await expect(dialog.getByText('Edit Profile')).toBeVisible();
		await expect(dialog.locator('#name')).toBeVisible();
		await expect(dialog.locator('#username')).toBeVisible();

		// Form fields inside dialog are interactable (not hidden behind overlay)
		await dialog.locator('#name').click();
		await dialog.locator('#name').fill('Test User');
		await expect(dialog.locator('#name')).toHaveValue('Test User');

		// Close via Cancel button
		await dialog.getByRole('button', { name: 'Cancel' }).click();
		await expect(dialog).not.toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Alert Dialog
// ---------------------------------------------------------------------------
test.describe('Alert Dialog', () => {
	test('opens and closes via Cancel', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Alert Dialog' }).click();

		const dialog = page.locator('[role="alertdialog"]');
		await expect(dialog).toBeVisible();
		await expect(dialog.getByText('Are you absolutely sure?')).toBeVisible();

		await dialog.getByRole('button', { name: 'Cancel' }).click();
		await expect(dialog).not.toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Sheet  (catches z-index / overlay bug)
// ---------------------------------------------------------------------------
test.describe('Sheet', () => {
	test('sheet content is visible and interactable when opened', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Sheet' }).click();

		const sheet = page.locator('.sheet-content');
		await expect(sheet).toBeVisible();
		await expect(sheet.getByText('Sheet Title')).toBeVisible();

		// The sheet must be interactable — not hidden behind the overlay.
		// Clicking the Close button inside the sheet should work.
		await sheet.getByRole('button', { name: 'Close', exact: true }).click();
		await expect(sheet).not.toBeVisible();
	});

	test('sheet content is positioned above the overlay', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Sheet' }).click();

		const sheet = page.locator('.sheet-content');
		await expect(sheet).toBeVisible();

		// Verify the sheet content is actually on top by checking we can interact with
		// an element inside it. If z-index is wrong, click would hit the overlay instead.
		const closeBtn = sheet.getByRole('button', { name: 'Close', exact: true });
		await expect(closeBtn).toBeVisible();

		// Use elementFromPoint to verify the sheet is the topmost element
		const sheetBox = await sheet.boundingBox();
		expect(sheetBox).not.toBeNull();
		const hitElement = await page.evaluate(
			({ x, y }) => {
				const el = document.elementFromPoint(x, y);
				return el?.closest('.sheet-content') !== null;
			},
			{ x: sheetBox!.x + sheetBox!.width / 2, y: sheetBox!.y + sheetBox!.height / 2 }
		);
		expect(hitElement).toBe(true);
	});
});

// ---------------------------------------------------------------------------
// Popover  (catches z-index / positioning bug)
// ---------------------------------------------------------------------------
test.describe('Popover', () => {
	test('popover content is visible when opened', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Popover' }).click();

		const popover = page.locator('.popover-content');
		await expect(popover).toBeVisible();
		await expect(popover.getByText('Dimensions')).toBeVisible();
	});

	test('popover is positioned near its trigger, not at viewport edge', async ({ page }) => {
		await page.goto('/');
		const trigger = page.getByRole('button', { name: 'Open Popover' });
		await trigger.click();

		const popover = page.locator('.popover-content');
		await expect(popover).toBeVisible();

		const triggerBox = await trigger.boundingBox();
		const popoverBox = await popover.boundingBox();
		expect(triggerBox).not.toBeNull();
		expect(popoverBox).not.toBeNull();

		// Popover should be horizontally close to the trigger (within 200px)
		const triggerCenterX = triggerBox!.x + triggerBox!.width / 2;
		const popoverCenterX = popoverBox!.x + popoverBox!.width / 2;
		expect(Math.abs(triggerCenterX - popoverCenterX)).toBeLessThan(200);
	});
});

// ---------------------------------------------------------------------------
// Dropdown Menu  (catches positioning bug)
// ---------------------------------------------------------------------------
test.describe('Dropdown Menu', () => {
	test('dropdown content is visible when opened', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Open Menu' }).click();

		const menu = page.locator('[role="menu"]');
		await expect(menu).toBeVisible();
		await expect(menu.getByText('My Account')).toBeVisible();
		await expect(menu.getByText('Profile')).toBeVisible();
		await expect(menu.getByText('Settings')).toBeVisible();
		await expect(menu.getByText('Log out')).toBeVisible();
	});

	test('dropdown is positioned near the trigger button, not at viewport left edge', async ({ page }) => {
		await page.goto('/');
		const trigger = page.getByRole('button', { name: 'Open Menu' });
		await trigger.click();

		const menu = page.locator('[role="menu"]');
		await expect(menu).toBeVisible();

		const triggerBox = await trigger.boundingBox();
		const menuBox = await menu.boundingBox();
		expect(triggerBox).not.toBeNull();
		expect(menuBox).not.toBeNull();

		// The dropdown left edge should be near the trigger's left edge.
		// If the dropdown is anchored to viewport x=0, this test will fail.
		expect(Math.abs(menuBox!.x - triggerBox!.x)).toBeLessThan(100);
	});
});

// ---------------------------------------------------------------------------
// Scroll Area  (catches scroll bug)
// ---------------------------------------------------------------------------
test.describe('Scroll Area', () => {
	test('scroll area has scrollable content', async ({ page }) => {
		await page.goto('/');
		const scrollArea = page.locator('.scroll-demo');
		await expect(scrollArea).toBeVisible();

		// scrollHeight must be greater than clientHeight for the area to be scrollable
		const isScrollable = await scrollArea.evaluate((el) => {
			const scrollEl = el.querySelector('.scroll-area') ?? el;
			return scrollEl.scrollHeight > scrollEl.clientHeight;
		});
		expect(isScrollable).toBe(true);
	});

	test('scroll area contains the expected items', async ({ page }) => {
		await page.goto('/');
		const scrollArea = page.locator('.scroll-demo');

		// First and last items should exist
		await expect(scrollArea.getByText('Item 1')).toBeVisible();
		// Item 20 may be scrolled out of view but should exist in the DOM
		await expect(scrollArea.getByText('Item 20')).toBeAttached();
	});
});

// ---------------------------------------------------------------------------
// Select
// ---------------------------------------------------------------------------
test.describe('Select', () => {
	test('opens dropdown and selects an option', async ({ page }) => {
		await page.goto('/');
		const trigger = page.locator('.select-trigger');
		await trigger.click();

		const listbox = page.locator('.select-content[role="listbox"]');
		await expect(listbox).toBeVisible();

		await listbox.getByText('Svelte').click();
		await expect(trigger).toContainText('Svelte');
	});
});

// ---------------------------------------------------------------------------
// Radio Group
// ---------------------------------------------------------------------------
test.describe('Radio Group', () => {
	test('selecting a radio updates state text', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Radio Group' }) });

		await expect(section.locator('.state-text')).toContainText('option1');
		await section.locator('input[value="option2"]').click();
		await expect(section.locator('.state-text')).toContainText('option2');
	});
});

// ---------------------------------------------------------------------------
// Calendar
// ---------------------------------------------------------------------------
test.describe('Calendar', () => {
	test('calendar renders with month navigation', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Calendar' }) });

		// Calendar should have prev/next month buttons
		const prevBtn = section.locator('[aria-label="Previous month"]');
		const nextBtn = section.locator('[aria-label="Next month"]');
		await expect(prevBtn).toBeVisible();
		await expect(nextBtn).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Combobox
// ---------------------------------------------------------------------------
test.describe('Combobox', () => {
	test('opens, filters, and selects an option', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Combobox' }) });

		// Open combobox
		await section.locator('.combobox-trigger').click();
		const dropdown = section.locator('.combobox-dropdown');
		await expect(dropdown).toBeVisible();

		// Type to filter
		const searchInput = dropdown.locator('input[role="combobox"]');
		await searchInput.fill('vue');
		await expect(dropdown.getByText('Vue')).toBeVisible();

		// Select Vue
		await dropdown.getByText('Vue').click();
		await expect(section.locator('.state-text')).toContainText('vue');
	});
});

// ---------------------------------------------------------------------------
// Data Table
// ---------------------------------------------------------------------------
test.describe('Data Table', () => {
	test('renders table data', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Data Table' }) });
		const table = section.locator('table');

		await expect(table.getByText('Alice')).toBeVisible();
		await expect(table.getByText('Bob')).toBeVisible();
	});

	test('clicking column header sorts data', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Data Table' }) });

		// Get initial first row name
		const firstCellBefore = await section.locator('tbody tr').first().locator('td').first().textContent();

		// Click the Name column header to toggle sort
		await section.getByRole('button', { name: /Name/ }).click();

		// After sorting in desc, first row should change
		const firstCellAfter = await section.locator('tbody tr').first().locator('td').first().textContent();
		expect(firstCellAfter).not.toBe(firstCellBefore);
	});
});

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------
test.describe('Pagination', () => {
	test('page 1 is active by default', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Pagination' }) });

		// Page 1 button should have the active styling
		const page1Btn = section.getByRole('button', { name: '1' });
		await expect(page1Btn).toHaveAttribute('aria-current', 'page');
	});

	test('clicking next page updates active page', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Pagination' }) });

		await section.getByRole('button', { name: '2' }).click();
		const page2Btn = section.getByRole('button', { name: '2' });
		await expect(page2Btn).toHaveAttribute('aria-current', 'page');
	});
});

// ---------------------------------------------------------------------------
// Toast
// ---------------------------------------------------------------------------
test.describe('Toast', () => {
	test('clicking Default toast button shows a toast', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Toast' }) });

		await section.getByRole('button', { name: 'Default' }).click();

		// Sonner toasts render in a [data-sonner-toaster] container
		const toaster = page.locator('[data-sonner-toaster]');
		await expect(toaster.getByText('This is a default toast')).toBeVisible({ timeout: 5000 });
	});
});

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------
test.describe('Avatar', () => {
	test('avatar fallback initials are rendered', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Avatar' }) });

		await expect(section.getByText('CN')).toBeVisible();
		await expect(section.getByText('AB')).toBeVisible();
		await expect(section.getByText('JD')).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Alert
// ---------------------------------------------------------------------------
test.describe('Alert', () => {
	test('all alert tones are visible', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Heads up!')).toBeVisible();
		await expect(page.getByText('Your session has expired')).toBeVisible();
		await expect(page.getByText('Your changes have been saved')).toBeVisible();
		await expect(page.getByText('Your trial period expires')).toBeVisible();
		await expect(page.getByText('A new version of the application')).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------
test.describe('Breadcrumb', () => {
	test('breadcrumb trail renders correctly', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Breadcrumb' }) });
		await expect(section.getByText('Home')).toBeVisible();
		await expect(section.getByText('Components')).toBeVisible();
		await expect(section.getByText('Breadcrumb', { exact: false })).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Skeleton & Spinner
// ---------------------------------------------------------------------------
test.describe('Skeleton & Spinner', () => {
	test('skeleton placeholders and spinners are rendered', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Skeleton' }) });

		// Skeleton elements exist
		await expect(section.locator('.skeleton-circle')).toBeVisible();
		await expect(section.locator('.skeleton-line')).toBeVisible();

		// At least one spinner is visible
		await expect(section.locator('.spinner').first()).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Toggle
// ---------------------------------------------------------------------------
test.describe('Toggle', () => {
	test('toggle button updates state text', async ({ page }) => {
		await page.goto('/');
		const section = page.locator('.demo-section', { has: page.locator('.section-title', { hasText: 'Toggle' }) });

		await expect(section.locator('.state-text').first()).toContainText('Not pressed');
		await section.locator('.toggle').first().click();
		await expect(section.locator('.state-text').first()).toContainText('Pressed');
	});
});

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------
test.describe('Empty State', () => {
	test('empty state is rendered with title and description', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('No results found')).toBeVisible();
		await expect(page.getByText('Try adjusting your search')).toBeVisible();
	});
});

// ---------------------------------------------------------------------------
// Input with error state
// ---------------------------------------------------------------------------
test.describe('Form Field Error', () => {
	test('error message is displayed on field with error', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('This field is required')).toBeVisible();
	});
});

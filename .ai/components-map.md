# Components Map

## Extracted UI Sections

### 1. Navbar (`src/components/Navbar.tsx`)
- **Purpose**: Main navigation header for the site.
- **Props**: None (or standard layout props).
- **Reusability Level**: High (Global).
- **Dependencies**: `react-router-dom` (Link/NavLink), `NavLink.tsx`.

### 2. Footer (`src/components/Footer.tsx`)
- **Purpose**: Global footer containing copyright, social links, and secondary navigation.
- **Props**: None.
- **Reusability Level**: High (Global).
- **Dependencies**: UI components, Social icons.

### 3. Hero Section (`src/pages/Index.tsx` & `src/pages/mobilehero.tsx`)
- **Purpose**: The primary landing section with introductory text and call-to-actions.
- **Props**: None.
- **Reusability Level**: Low (Specific to Index page, but responsive variations exist).
- **Dependencies**: Global design tokens.

### 4. About Section (`src/pages/About.tsx`)
- **Purpose**: Details about Dionne's background, journey, and mission.
- **Props**: None.
- **Reusability Level**: Low.
- **Dependencies**: Standard layout components.

### 5. Services / Speaking Section (`src/pages/Speaking.tsx`)
- **Purpose**: Information regarding Dionne's speaking engagements and services offered.
- **Props**: None.
- **Reusability Level**: Medium.
- **Dependencies**: Buttons, Cards.

### 6. Portfolio / Books / Projects Section (`src/pages/Books.tsx`)
- **Purpose**: Showcases Dionne's authored books with links to external platforms (Amazon, Kindle, etc.).
- **Props**: None.
- **Reusability Level**: Medium.
- **Dependencies**: Product cards, Buttons.

### 7. Blogs / Resources (`src/pages/Blogs.tsx`, `src/pages/Resources.tsx`)
- **Purpose**: Articles, media, and other valuable resources.
- **Props**: None.
- **Reusability Level**: Medium.
- **Dependencies**: External linking components.

### 8. Contact / Newsletter (`src/components/Newsletter.tsx`)
- **Purpose**: Email subscription capture form and contact area.
- **Props**: None.
- **Reusability Level**: Medium (Can be placed on multiple pages).
- **Dependencies**: Input fields, Buttons.

### 9. Role Tabs (`src/components/RoleTabs.tsx`)
- **Purpose**: Interactive tabs to switch between different life roles (e.g., Speaker, Author).
- **Props**: Handlers for role selection.
- **Reusability Level**: High.
- **Dependencies**: State management.

### 10. Loader (`src/components/Loader.tsx`)
- **Purpose**: Loading screen animation.
- **Props**: None.
- **Reusability Level**: High (Global).
- **Dependencies**: Global CSS, Keyframe animations.

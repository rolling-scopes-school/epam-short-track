# Search Component

## Overview
Render Search component in Header component for the main route only.

### Template Path
`src/components/Header/components/Search.tsx`

### Functional requirements
- Search block is rendered on route **/**
- Search block is positioned below the header or integrated within the header area
- Search block contains:
  - **"FIND YOUR MOVIE"** heading/text
  - **Search input field**:
    - Placeholder text: **"What do you want to watch?"**
  - **SEARCH** button:
    - Button text: **"SEARCH"**
- Search functionality:
  - On **SEARCH button click**:
    - Reads value from search input field
    - Filters movies by title and/or description containing the search query
    - Updates URL with search query parameter: `?search=query_text`
    - Example: `http://localhost:5173/?search=star`
    - Updates movies list to show filtered results
  - On **Enter key press** (while focus is on search input):
    - Same behavior as SEARCH button click
    - Triggers search functionality
  - **Empty search field behavior**:
    - If search field is empty and user clicks SEARCH or presses Enter:
      - Shows all available movies (removes search filter)
      - Removes search query parameter from URL
- Search query should work together with genre filter:
  - Search filters movies first, then genre filter applies to search results
- Search is case-insensitive (searches both uppercase and lowercase)
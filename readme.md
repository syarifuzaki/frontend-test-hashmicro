# HashMicro Frontend Developer Test - CRUD System

This is a simple frontend-only CRUD (Create, Read, Update, Delete) system created for HashMicro's Frontend Developer test. It follows Material UI design principles and incorporates HashMicro's corporate colors.

## Features

- **Employee Management System**: A clean, modern interface for managing employee records
- **HashMicro Corporate Colors**: Red, Navy and Orange throughout the UI
- **Material Design**: Following Material UI aesthetic with cards, shadows, and clean typography
- **Responsive Layout**: Works on both desktop and mobile devices
- **Animations & Transitions**: Smooth animations for enhanced user experience
- **Non-functional CRUD**: All UI elements for CRUD operations, without backend functionality
- **Modal Dialogs**: For create, edit, view, and delete operations

## Technologies Used

- **Vue.js 3**: Using the Composition API via CDN
- **Tailwind CSS**: For utility-first styling
- **PrimeVue**: UI component library for Vue
- **Pure HTML/CSS/JavaScript**: No build tools required

## Project Structure

- `index.html` - Main HTML file with embedded Vue.js application
- `styles.css` - Additional custom styles
- `app.js` - Additional JavaScript functionality

## How to Use

1. Extract the zip file
2. Open `index.html` in any modern web browser
3. Explore the CRUD interface:
   - View the list of employees
   - Click "Add Employee" to create a new employee
   - Use the view, edit, and delete buttons for each employee
   - Try the search and filter functionality

## UI Features

- **Data Table**: Sortable columns, pagination, and row hover effects
- **Form Validation**: Required fields and data validation
- **Responsive Design**: Works on different screen sizes
- **Toast Notifications**: For success/error messages
- **Confirmation Dialogs**: For delete operations
- **Animations**: Throughout the interface for better user experience
- **Color-coded Status**: Visual indicators for employee status

## Custom Styling

The application uses HashMicro's corporate colors:

- **Red** (#E31937): For important actions, delete buttons, and highlights
- **Navy** (#1A2B5F): For primary elements, header, and buttons
- **Orange** (#FF6600): For accents, hover states, and secondary elements

## Development Notes

This application is designed as a frontend-only system with no backend functionality. All actions (create, edit, delete) are simulated within the browser's memory and will reset when the page is refreshed.

The interface incorporates animations and Material Design principles to enhance usability and aesthetic appeal while maintaining HashMicro's brand identity.
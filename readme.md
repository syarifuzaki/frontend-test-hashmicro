# HashMicro Frontend Developer Test - CRUD System

This is a simple frontend-only CRUD (Create, Read, Update, Delete) system created for HashMicro's Frontend Developer test. It follows Material UI design principles and incorporates HashMicro's corporate colors.

## Features

- **Comprehensive Dashboard**: Overview of key metrics with visual charts and cards
- **Employee Management**: Full CRUD interface for managing employee records with pagination
- **Project Tracking**: Visual cards showing project progress and team members
- **Task Management**: Task list with filtering, status toggling, and priority indicators
- **HashMicro Corporate Colors**: Red (#e21c21), Navy (#172b4d), and Orange (#ff8f00) throughout the UI
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Animated UI Elements**: Smooth transitions and animations for enhanced user experience
- **Modal Dialogs**: Animated modals for create, edit, view, and delete operations
- **Interactive Data Visualization**: Charts and graphs powered by Chart.js

## Technologies Used

- **Vue.js 3**: Using the Composition API via CDN
- **Tailwind CSS**: For utility-first styling with custom configuration
- **Font Awesome**: For icons and visual elements
- **Chart.js**: For interactive data visualization on the dashboard
- **Toastify-js**: For toast notifications
- **Pure HTML/CSS/JavaScript**: No build tools required

## Project Structure

The application consists of these main files:

- `index.html` - Contains all HTML structure and imports
- `app.js` - Vue application logic and component definitions
- `style.css` - Custom CSS styles beyond Tailwind

## How to Use

1. Extract the zip file
2. Open `index.html` in any modern web browser
3. Explore the CRUD interface:
   - Navigate between Dashboard, Employees, Projects, and Tasks views
   - Click add buttons to create new records
   - Use the view, edit, and delete buttons for each record
   - Try the responsive sidebar (collapses on mobile)
   - Test the modal dialogs and animations
   - Explore interactive charts on the dashboard

## UI Features

- **Responsive Sidebar**: Collapses on mobile with smooth animations
- **Dashboard Charts**: Visual representation of project statuses, department distribution, task priorities, and project progress
- **Data Tables**: Clean, organized presentation of employee data with search and filtering
- **Project Cards**: Visual representation of project status and progress
- **Task List**: Interactive task list with status toggling
- **Form Validation**: Form fields with proper labeling and structure
- **Confirmation Dialogs**: For delete operations with clear warnings
- **Toast Notifications**: For action confirmations
- **Animations**: Throughout the interface including:
  - Bounce-in animation for modals
  - Fade-in transitions between views
  - Slide animations for sidebar
  - Transform animations on hover

## Chart Components

The dashboard includes several chart components powered by Chart.js:
- **Doughnut Charts**: For project status and task priority distribution
- **Bar Charts**: For department staff distribution
- **Horizontal Bar Charts**: For project progress visualization

These components are registered in the Vue application using:
```javascript
// Register components globally
app.component('doughnut-chart', DoughnutChart);
app.component('bar-chart', BarChart);
app.component('horizontal-bar-chart', HorizontalBarChart);
```

## Custom Styling

The application uses HashMicro's corporate colors:

- **Red** (#e21c21): For primary action buttons, alerts, and key UI elements
- **Navy** (#172b4d): For navigation, headers, and accent elements
- **Orange** (#ff8f00): For progress indicators, secondary elements, and highlights

## Development Notes

This application is designed as a frontend-only system with no backend functionality. All actions (create, edit, delete) are simulated within the browser's memory and will reset when the page is refreshed.
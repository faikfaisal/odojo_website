# O+Dojo - AI and DevOps Excellence

This project is a React-based website for O+Dojo, showcasing AI development and DevOps services.

## Project Structure

The project is organized as follows:

- `src/components/`: Contains reusable React components
  - `layout/`: Layout components like Navigation and Footer
  - `sections/`: Main page sections (Hero, Services, Expertise, Team, Contact)
  - `ui/`: Reusable UI components
- `src/utils/`: Utility functions, including form validation

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Main Components

- `App.js`: The main application component that renders all sections
- `Navigation.jsx`: The top navigation bar
- `Hero.jsx`: The hero section with the main call-to-action
- `Services.jsx`: Displays the services offered by O+Dojo
- `Expertise.jsx`: Highlights the areas of expertise
- `Team.jsx`: Introduces the team members
- `Contact.jsx`: Provides contact information and a contact form
- `Footer.jsx`: The footer component with additional information and links

## Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
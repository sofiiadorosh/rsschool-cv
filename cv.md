# CV

**Sofiia Anenko**

Phone: +380 63 361 0565  
E-mail: anenko.sofiia@gmail.com  
LinkedIn: https://www.linkedin.com/in/sofiia-anenko/

## About me

From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. But software development has never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the time goes by.

## Hard skills

- JavaScript
- TypeScript
- React.js
- Node.js
- GIT
- HTML5
- CSS3 & preprocessor SCSS
- Responsive and Adaptive Design
- Redux & Redux Toolkit
- Webpack

## Soft skills

- Ability to work efficiently both individually and in a team
- Growth-mindset
- Googling
- Communicative skills

## Sample of code

    import React from 'react';
    import { Navigate } from 'react-router-dom';

    import { useAuth } from '@hooks';

    type PrivateRouteProps = {
      component: JSX.Element;
      redirectTo: string;
    };

    export const PrivateRoute = ({
      component: Component,
      redirectTo = '/',
    }: PrivateRouteProps): JSX.Element => {
      const { isAuthorized } = useAuth();
      const shouldRedirect = !isAuthorized;
      return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
    };

    <Route
      path={Pathname.TODOS}
      element={
        <PrivateRoute
          redirectTo={Pathname.AUTH}
          component={<TodosPage />}
        />
      }
    />

## Project Experience

### [Todo App](https://todo-app-frontend-9gwb.onrender.com/), [Link](https://github.com/anenkosofi/scaling-enigma)

**[TypeScript, React.js, Node.js, Redux Toolkit, Axios, SCSS, Webpack]**  
A simple and easy to use todo management tool that lets you store all your tasks under a single umbrella.
Accomplishments:

- Integrated ReactJS components to enhance the user interface of a web-based app, improving responsiveness and usability
- Created a design and added cross-platform compatibility
- Created customizable user authentication to provide log in & log out functionality
- Built effective navigation components utilizing React Router to enable page-to-page navigation, facilitating access
- Implemented server-side todo application

### [Freshnesecom](https://anenkosofi.github.io/literate-octo-robot/), [Link](https://github.com/anenkosofi/literate-octo-robot)

**[TypeScript, React.js, Redux Toolkit, Axios, SCSS, Webpack]**  
Mobile friendly mediator between customers and sellers. The platform lets them order different products.
Accomplishments:

- Implemented Google authentication
- Developed and implemented a software solution for swiper-slider
- Performed code review, worked closely with a mentor to ensure consistency to code standards
- Identified and resolved bugs, proposed instructions to prevent bug's replicating

## Education

- GoIT School | 2022-2023  
  _Full Stack Developer_

- Bogomolets National Medical University | 2015-2021  
  _Master's degree in General Medicine_

## Languages

- **Ukrainian** - native
- **English** - upper-intermediate

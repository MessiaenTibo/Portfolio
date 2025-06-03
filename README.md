# Portfolio

## Link to the website

https://tibomessiaen.netlify.app

## What is this?

I am Messian Tibo, and this is my portfolio. This website is created to show all my created websites, games and desktop applications.
To show the different things a learned as a programmer, in my free time and studying as a Next Web Developer at Howest kortrijk MCT (Multimedia and Creatif Technologies) https://mct.be.

## What did I use?

I used **React** to create this website. I used React because I wanted to learn more about it and I wanted to use it in my portfolio.
I wrote all the code in **TypeScript**, the more strict version of JavaScript. I wrote the code in a **component based** way.
**React router dom** is also used to navigate between the different pages.
For styling I used **Tailwindcss**. I used Tailwindcss because its easy to use and it has a lot of different classes to use.
And for Icons I used **Lucid Icons**.

## How to run this project?

If you just downloaded this repository.

1. Open the terminal
2. Go into the map Portfolio
   ```shell
   cd .\Portfolio
   ```
3. Install npm packages
   ```shell
   npm install
   ```
4. And run the project
   ```shell
   npm run dev
   ```

## What some features of this project?

- A **responsive** design, so it looks good on all devices.
- A **dark mode** toggle, so you can switch between light and dark mode.
- Some **animations** to make the website more interactive.
- **lighthouse** score of **100** for performance, accessibility, best practices and SEO.
- It is a **PWA** (Progressive Web App) so you can install it on your device as a desktop application.
- Made use of **event delegation** to handle events in a more efficient way.
- **Claudinary** is used to store the images, so they are loaded faster and are optimized for the web and adapted to any screen size.

## Testing

### Cypress (e2e testing)

To run the e2e tests, you need to have Cypress installed. You can install it by running the following command in the terminal:

```shell
npm install cypress --save-dev
```

After installing Cypress, you can run the tests by running the following command in the terminal:

```shell
npx cypress open
```

This will open the Cypress test runner, where you can run the tests in the `cypress/e2e` folder.

or

```shell
npm cypress run
```

This will open the runner in headless mode, which is useful for CI/CD pipelines.

# Netflix clone

This is a simple clone of the Netflix's browser page. In the future an implementation it might have a login page.

Initially it will only be front-end, there will not be backend, and the images will all come from the public folder.

### Stack

I will use React + Typescript, and styled components for the styling.

### Components

The page will have the following components:

- Navbar
- Front image / video
- carrousel with movies/series
- infinite scroll
- more info about the movie (only a modal)

### Project Structure

[Source](https://dev.to/chrisachard/tips-for-organizing-react-projects-191)

- **Capitalize files that default export a React component**
- **Use absolute imports** [documentation for ts](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)

1. src: components
2. public: static assets
   Images that you're going to import inside of components should be in src, not public
3. src/components or shared: shared components, group by function
4. src/images and src/styles
5. src/helpers: generalized helper code centralized
6. src/pages: entire route endpoints
7. src/action or reducers

### Bitacora

09 - 27:

- Installing styled components:

  - [Source](https://developer.okta.com/blog/2020/03/16/react-styled-components)

- [Using global style](https://scalablecss.com/styled-components-global-styles/)

- Using fonts:

        Using Netflix Sans

  - [Useful post](https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni?signin=true)
  - [Useful comment](https://dev.to/anteronunes/comment/171a3)

09-28:

- Adding src as baseurl (in the tsconfig.ts file) to allow implicit imports of the style:

  ```ts
  import Card from "/components/Card";
  /*Intead of import Card from '../../../components/Card'*/
  ```

- Creating Card component. Find out that the netflix page doesn't use animation on hover each card, but have a modal in the bottom left corner that moves above the right card to show more information

09-30:

- Starting with the Carousel (It is now responsive and have arrows to move the cards around)
  - The infinite behavior needs to be implemented
- Adding font awesome

10-x:

- At some point in the following week I finished the carousel and stop working on the project because the last three month of the year were exam period at college.

2022
1-8 to 1-10:

- I started working on the banner/hero

- Create the banner, with the video, buttons, animations and the navbar (without avatar and the other icons). I don't have a clear idea of when did I did each thing because 1 I've been doing it when I wasn't working and 2 I have covid, and still have fever.

## TODO:

- [ x ] Slides infinite loop

- [ x ] Hero video

- [ x ] Hero

- [ ] Navbar

- [ ] top10 numbers with svg

- [ ] Footer

- [ ] More info on hover

- [ ] Video on hover

- [ ] Slide title hover

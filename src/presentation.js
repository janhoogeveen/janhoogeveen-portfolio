// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#303036",
    tertiary: "#fc5130",
    quartenary: "#30bced"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Oh hey!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            My name is Jan. I'm a Front-End Developer.
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            This is my portfolio, sort of.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Professional experience.
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Right now I work at{" "}
            <a href="https://www.cleverfranke.com/">CLEVER°FRANKE</a> as the
            Lead Front-End Developer.
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit>
            That means I do cool stuff for a cool company, but if you want the
            full description you can find that at{" "}
            <a href="https://www.linkedin.com/in/janhoogeveen/">LinkedIn</a>.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            I'm sort of social
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            I'm on Twitter as{" "}
            <a href="https://twitter.com/janhoogeveen">@janhoogeveen</a>, but I
            mostly follow some people I find interesting and rarely tweet
            myself. I don't really do Instagram and all that jazz. Or make my
            email address public.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            I still scrobble
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            I really like music. I think I have good taste in music. You really
            should listen to what I listen.{" "}
            <a href="https://www.last.fm/user/jan_hoogeveen">
              Check out my jams!
            </a>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Things I like
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            in no particular order
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            React
          </Heading>
          <Heading size={1} textColor="secondary">
            JavaScript
          </Heading>
          <Heading size={2} textColor="secondary">
            GraphQL
          </Heading>
          <Heading size={4} textColor="secondary">
            Gifs with a hard g
          </Heading>
          <Heading size={5} textColor="secondary">
            Playing guitar even though I still suck at it after ~15 years of
            experience but it brings me joy so whatevs
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why I made this website the way I did
          </Heading>
          <List>
            <ListItem>It's better than a 404 page</ListItem>
            <ListItem>It took me like 45 mins to make this one</ListItem>
            <ListItem>It'll be super easy to update later</ListItem>
            <ListItem>
              Maybe in the future I can add some gifs to it or like interactive
              code examples idk
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

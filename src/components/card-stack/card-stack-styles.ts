import {
  avenirBold,
  createStyles,
  smAndUp,
  mdAndUp,
  lgAndUp,
  proximaRegular
} from "../../styles/styles";

export const cardStackStyles = createStyles({
  paddingZero: {
    padding: 0
  },

  cardStack: {
    margin: 0,
    width: "100%",
    padding: 0
  },
  cardStack__gridItem: {
    border: "1px solid blue"
  },
  cardStack__header: {
    ...avenirBold,
    color: "#222",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    lineHeight: "1.4",
    fontSize: "20px",
    padding: 4,
    [smAndUp()]: {
      fontSize: 22,
      padding: 6
    },
    [mdAndUp()]: {
      fontSize: 24,
      padding: 8
    },
    [lgAndUp()]: {
      fontSize: 26,
      padding: 10
    },
    display: "inline-block",
    margin: "8px auto 0px"
  },
  cardStack__card: {
    width: "100%",
    padding: "0",
    display: "flex",
    border: "1px, solid, grey",
    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "border-radius": "4px"
  },
  cardStack__img: {
    padding: "0 !important",
    "border-radius": "4px"
  },
  cardStack__cardHeading: {
    "text-align": "left",
    margin: "0",
    "padding-bottom": "inherit"
  },
  cardStack__description: {
    "text-align": "left",
    margin: "0"
  },
  cardStack__button: {
      ...proximaRegular ,
    padding: "inherit",
    border: "2px solid #3EB8FE",
    "border-radius": "4px",
    "background-color": "#FFF",
    "min-width" : "80px" 
  },
  cardStack__imgStyles: {
    width: "100%"
  }
});
export type CardStackClassKey = keyof typeof cardStackStyles;
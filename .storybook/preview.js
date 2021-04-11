import DarkWrap from "../src/components/decorator/DarkWrap/DarkWrap"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => <DarkWrap>{Story()}</DarkWrap>
]
import { Container, Button, useColorMode } from "@chakra-ui/react"

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "ダークモード" : "ライトモード"}
      </Button>
      {children}
    </Container>
  )
}
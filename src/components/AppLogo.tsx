import { Link } from "@chakra-ui/next-js"
import { Text } from "@chakra-ui/react"

function AppLogo() {
  return (
    <Link
      _hover={{ textDecor: "none" }}
      href="/"
      color="gray.800"
      fontWeight="bold">
      FASHION{" "}
      <Text as="span" color="brand.primary">
        WARDROBE
      </Text>
    </Link>
  )
}

export default AppLogo

import { Anchor, HStack, VStack, Text } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { getSetting, me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  const currentYear = new Date().getFullYear()
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1">
        <Text className="line1">
          {t(`© `)} {currentYear} {t(` `)} {getSetting("site_title")}
        </Text>
      </HStack>
      <HStack spacing="$1">
        <Text className="line1">{t("home.footer.powered_by")}</Text>
        <span> |</span>
        <AnchorWithBase
          as={Link}
          href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
        >
          {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
        </AnchorWithBase>
        {getSetting("site_beian") && (
          <Anchor href="https://beian.miit.gov.cn" external>
            {getSetting("site_beian")}
          </Anchor>
        )}
      </HStack>
    </VStack>
  )
}

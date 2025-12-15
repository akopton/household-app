import { LoginButton } from "@/features/auth"
import { RegisterButton } from "@/features/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home")

  const appFunctionalities = t.raw("appFunctionalities") as string[]

  const cardContent = {
    title: t("cardContent.title"),
    list: t.raw("cardContent.list") as string[],
  }

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-between p-5">
      <div className="w-full flex items-center justify-between">
        <div>LOGO PLACEHOLDER</div>

        <div className="flex gap-5 items-center justiy-center">
          <LoginButton>{t("login.navigation")}</LoginButton>
          <RegisterButton>{t("register.navigation")}</RegisterButton>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-15">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl">{t("title")}</h1>
          <h2 className="text-2xl">{t("subtitle")}</h2>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col items-center justify-center gap-5 text-xl">
            <RegisterButton className="text-xl px-6 py-5">
              {t("register.content")}
            </RegisterButton>

            <ul className="flex  flex-col gap-2">
              {appFunctionalities
                .slice(0, appFunctionalities.length / 2)
                .map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 text-xl">
            <LoginButton className="text-xl px-6 py-5">
              {t("login.content")}
            </LoginButton>

            <ul className="flex flex-col gap-2">
              {appFunctionalities
                .slice(appFunctionalities.length / 2)
                .map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          </div>
        </div>

        <Card className="px-10">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl">
              {cardContent.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center text-xl">
            <ul className="flex flex-col gap-2">
              {cardContent.list.map((item, idx) => (
                <li key={idx}>
                  {(idx + 1).toString()}. {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="w-full flex items-center justify-center">
        © 2025 Household App
      </div>
    </main>
  )
}

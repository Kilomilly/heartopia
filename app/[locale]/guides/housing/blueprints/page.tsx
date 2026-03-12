import { redirect } from "next/navigation"

export default async function BlueprintsRedirect({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    // 301 Permanent Redirect to the main housing page with blueprints anchor
    redirect(`/${locale}/guides/housing#blueprints`)
}

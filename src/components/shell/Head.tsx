/**
 * SEO metadata helper used by legacy React pages.
 * Uses static site metadata so it works in both Gatsby and Astro migration flows.
 */
import React from "react"
import { SITE_METADATA } from "../../compat/siteMetadata"

type CoreHeadProps = {
    pageContext?: { title?: string }
    data?: { page?: { description?: string } }
}

export default function Head(
    props: CoreHeadProps & {
        description?: string
        image?: string
        title?: string
        meta?: { name: string; content: string }[]
    }
) {
    const { pageContext, data, description, image, title, meta = [] } = props
    let metaTitle = title || pageContext?.title || SITE_METADATA.title
    if (!/^(Jacdac|DeviceScript)/i.test(metaTitle))
        metaTitle = `Jacdac - ${metaTitle}`
    const metaDescription =
        description ||
        data?.page?.description ||
        SITE_METADATA.description
    return (
        <>
            <title key="title">{metaTitle}</title>
            {[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: "og:image",
                    content: image,
                },
                {
                    name: `og:title`,
                    content: metaTitle,
                },
                {
                    name: `og:description`,
                    content: metaDescription,
                },
                {
                    name: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: SITE_METADATA.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                ...meta,
            ]
                .filter(({ content }) => !!content)
                .map(({ name, content }) => (
                    <meta key={name} name={name} content={content} />
                ))}
            <link
                key="fontsgoogle"
                rel="preconnect"
                href="https://fonts.googleapis.com"
                crossOrigin="anonymous"
            />
            <link
                key="gitusercontent"
                rel="preconnect"
                href="https://raw.githubusercontent.com"
                crossOrigin="anonymous"
            />
            <meta
                key="viewport"
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
        </>
    )
}

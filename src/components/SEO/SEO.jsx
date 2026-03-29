// components/SEO/SEO.jsx
import { useEffect } from 'react'

const SEO = ({
  title = "Custom Ecommerce & Food Delivery App Development | SoftStore Solutions",
  description = "Ecommerce App Development Company in India – Build Your Amazon Clone, Build your own Amazon, Swiggy, or Blinkit like platform. Complete white-label solutions with source code. Start your digital business today.",
  keywords = "ecommerce app development, food delivery app, quick commerce platform, white-label solution, app development company",
  image = "/images/softstore-og-image.png"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = keywords

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' }
    ]

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', tag.property)
        document.head.appendChild(metaTag)
      }
      metaTag.content = tag.content
    })

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SoftStore Solutions",
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "SoftStore Solutions"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "App Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ecommerce Platform Development",
              "description": "Build Amazon/Flipkart like marketplace"
            }
          }
        ]
      }
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

  }, [title, description, keywords, image])

  return null
}

export default SEO
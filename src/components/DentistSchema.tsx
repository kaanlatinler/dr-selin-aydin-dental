// src/components/DentistSchema.tsx
import React from "react";

export function DentistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://dtselinaydin.com/#dentist",
    name: "Dt. Selin Aydın — Estetik & Restoratif Diş Hekimliği",
    description:
      "Minimal invaziv yaklaşımlar, mikroskobik endodonti ve 3D dijital gülüş tasarımı alanında kişiselleştirilmiş diş hekimliği hizmeti.",
    url: "https://dtselinaydin.com",
    telephone: "+90-212-555-0192",
    priceRange: "$$$",
    medicalSpecialty: [
      "Cosmetic Dentistry",
      "Prosthodontics",
      "Endodontics",
      "Implantology",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Teşvikiye Mah. Vali Konağı Cad. No: 42 Kat: 3",
      addressLocality: "Şişli",
      addressRegion: "İstanbul",
      postalCode: "34365",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0491,
      longitude: 28.9934,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Dijital Gülüş Tasarımı ve Porselen Lamina",
        procedureType: "Cosmetic",
      },
      {
        "@type": "MedicalProcedure",
        name: "Navigasyonlu İmplant Cerrahisi",
        procedureType: "Surgical",
      },
      {
        "@type": "MedicalProcedure",
        name: "Şeffaf Plak Ortodontik Tedavisi",
        procedureType: "Therapeutic",
      },
      {
        "@type": "MedicalProcedure",
        name: "Mikroskobik Kanal Tedavisi",
        procedureType: "Therapeutic",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
